---
name: test
description: Defines Vitest testing standards for this project — unit and integration tests, AAA structure, stubs, and React component testing. Use when writing tests, setting up Vitest, or reviewing test code.
---

# Testing Standards

Automated tests use **Vitest** when configured. This project does not ship a test runner by default — follow the setup below when adding tests. Scope is **unit** and **integration** tests only — no E2E tests (no Playwright, Cypress, or browser automation).

See also [code-standards](../code-standards/SKILL.md), [react](../react/SKILL.md), and [AGENTS.md](../../AGENTS.md) (folder layout and setup).

## Setup

Install dev dependencies:

```bash
npm install -D vitest @vitest/coverage-v8 jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

Add scripts to `package.json`:

```json
{
  "scripts": {
    "test": "vitest",
    "test:run": "vitest run",
    "test:coverage": "vitest run --coverage"
  }
}
```

Create `vitest.config.ts` at the project root:

```typescript
import path from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: false,
    setupFiles: ["./src/test/setup.ts"],
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
    coverage: {
      provider: "v8",
      include: ["src/**/*.{ts,tsx}"],
      exclude: ["src/**/*.{test,spec}.{ts,tsx}", "src/test/**"],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

Create `src/test/setup.ts`:

```typescript
import "@testing-library/jest-dom/vitest";
```

Run tests:

```bash
npm test          # watch mode
npm run test:run  # single run (CI)
npm run test:coverage
```

## Test types

| Type | Scope | Location | What to test |
|------|-------|----------|--------------|
| **Unit** | Single function, hook, or component in isolation | Next to source or `src/**/__tests__/` | Pure utils, schemas, helpers, small components |
| **Integration** | Multiple modules wired together | `src/**/__tests__/` or `*.integration.test.ts` | Services + stubs, API route handlers, hook + provider |

Do **not** add E2E tests. Do not depend on a running dev server, real backend, or real browser.

## Folder layout

```
src/
├── test/
│   └── setup.ts                 # Global test setup
├── utils/
│   └── search-options.test.ts   # Unit test next to source
├── services/
│   ├── orders.service.ts
│   └── __tests__/
│       └── orders.service.integration.test.ts
└── app/api/orders/
    └── __tests__/
        └── complete.route.integration.test.ts
```

Name files `<module>.test.ts` (unit) or `<module>.integration.test.ts` (integration).

## Structure: Arrange – Act – Assert

Every test follows **AAA**. You may label sections with **Given – When – Then** comments — they map to the same steps.

| AAA | Given – When – Then |
|-----|---------------------|
| **Arrange** | **Given** — inputs, stubs, initial state |
| **Act** | **When** — call the function or trigger the action |
| **Assert** | **Then** — expected outcome |

```typescript
import { describe, expect, it } from "vitest";
import { filterOptions } from "@/utils/search-options";

describe("filterOptions", () => {
  it("returns matching options when query is provided", () => {
    // Given
    const options = ["Brazil", "Portugal", "France"] as const;

    // When
    const result = filterOptions("por", options);

    // Then
    expect(result).toEqual(["Portugal"]);
  });
});
```

Same test with AAA labels:

```typescript
it("returns matching options when query is provided", () => {
  // Arrange
  const options = ["Brazil", "Portugal", "France"] as const;

  // Act
  const result = filterOptions("por", options);

  // Assert
  expect(result).toEqual(["Portugal"]);
});
```

Use one clear **Act** per test. Multiple assertions in **Assert** are fine when they verify the same outcome.

## Test isolation

Tests must **not depend on each other**. Each test runs independently.

```typescript
// ❌ BAD — shared mutable state across tests
let orderId: string;

it("creates an order", async () => {
  orderId = await createOrder(stubInput);
  expect(orderId).toBeDefined();
});

it("fetches the order", async () => {
  const order = await fetchOrder(orderId); // depends on previous test
  expect(order).toBeDefined();
});

// ✅ GOOD — self-contained tests
it("creates an order", async () => {
  const orderId = await createOrder(stubInput);
  expect(orderId).toBe("order-123");
});

it("fetches an order", async () => {
  stubFetchOrder({ id: "order-123", status: "pending" });

  const order = await fetchOrder("order-123");

  expect(order.status).toBe("pending");
});
```

Rules:

- Do not reuse state from another test (`let` at describe scope, execution order).
- Use `beforeEach` only to reset stubs and build **fresh** fixtures per test.
- Prefer factory functions (`buildPlayer()`, `buildOrderDraft()`) over shared objects mutated across tests.
- Run files in parallel safely — Vitest default; do not disable unless required.

## Stubs and fakes

Never call real APIs or rely on the current date/time in tests. Stub external boundaries.

### API / fetch

```typescript
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { fetchRemotePlans } from "@/services/plans.service";

describe("fetchRemotePlans", () => {
  beforeEach(() => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => [{ id: "EXPERIMENTE", priceCents: 990 }],
      }),
    );
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("returns plans from the API", async () => {
    // Arrange — stubbed in beforeEach

    // Act
    const plans = await fetchRemotePlans();

    // Assert
    expect(plans).toHaveLength(1);
    expect(fetch).toHaveBeenCalledWith(expect.stringContaining("/plans"));
  });
});
```

Stub modules when the service imports a config or client:

```typescript
vi.mock("@/services/config", () => ({
  API_BASE_URL: "https://stub.api.test",
}));
```

### Dates and timers

```typescript
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

describe("formatOrderDate", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-06-20T12:00:00.000Z"));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("formats the order date", () => {
    // Given
    const createdAt = new Date();

    // When
    const label = formatOrderDate(createdAt);

    // Then
    expect(label).toBe("20/06/2026");
  });
});
```

### Other boundaries

| Boundary | Stub with |
|----------|-----------|
| `fetch` / HTTP | `vi.stubGlobal("fetch", …)` or `vi.mock` on the service module |
| `Date.now()` / `new Date()` | `vi.useFakeTimers()` + `vi.setSystemTime()` |
| `localStorage` | `vi.stubGlobal("localStorage", mockStorage)` |
| `uuid` | `vi.mock("uuid", () => ({ v4: () => "fixed-id" }))` |
| Next.js `cookies` / `headers` | `vi.mock("next/headers", …)` in route integration tests |

Always clean up in `afterEach`: `vi.restoreAllMocks()`, `vi.unstubAllGlobals()`, `vi.useRealTimers()`.

## Unit test example

```typescript
import { describe, expect, it } from "vitest";
import { isPlayerComplete } from "@/utils/player-utils";

describe("isPlayerComplete", () => {
  it("returns false when required fields are missing", () => {
    // Given
    const player = { fullName: "Ana Silva" };

    // When
    const result = isPlayerComplete(player);

    // Then
    expect(result).toBe(false);
  });
});
```

## Integration test example

Integration tests verify that modules work together. Still stub external I/O.

```typescript
import { afterEach, describe, expect, it, vi } from "vitest";
import { POST } from "@/app/api/orders/complete/route";

describe("POST /api/orders/complete", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("returns checkout data when order completes", async () => {
    // Given
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: true, json: async () => ({ id: "1" }) }));
    const request = new Request("http://localhost/api/orders/complete", {
      method: "POST",
      body: JSON.stringify(stubPayload),
    });

    // When
    const response = await POST(request);

    // Then
    expect(response.status).toBe(200);
  });
});
```

## React component tests

Use `@testing-library/react`. Render with explicit props per [react](../react/SKILL.md) — no prop spread in test helpers.

```tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button } from "@/components/ui/Button";

describe("Button", () => {
  it("renders the label", () => {
    // Given / When
    render(<Button href="/plans">Choose plan</Button>);

    // Then
    expect(screen.getByRole("link", { name: "Choose plan" })).toBeInTheDocument();
  });
});
```

Query by role and accessible name — not by class name or implementation detail.

## What not to test (for now)

- E2E or full user flows in a browser
- Real network calls to `api.inverteojogo.com.br`
- Snapshot-heavy tests that break on unrelated markup changes
- Implementation details (internal state, private functions)

## Quick checklist

Before opening a PR with tests, confirm:

- [ ] Test uses Vitest (`describe`, `it`, `expect`, `vi`)
- [ ] Structure follows Arrange – Act – Assert (Given – When – Then)
- [ ] Test is self-contained — no dependency on other tests
- [ ] APIs, dates, and non-deterministic I/O are stubbed
- [ ] Test is unit or integration — not E2E
- [ ] File name and location follow this guide
- [ ] [Code standards](../code-standards/SKILL.md) apply (English names, verb-based helpers)
