---
name: code-standards
description: Enforces TypeScript and React code standards for this project — English identifiers, 60-line limit, verb-based naming, control flow, and type organization. Use when writing, reviewing, or refactoring any TypeScript or React code.
---

# Code Standards

These conventions apply to all TypeScript and React code in this project. For setup, commands, ports, dependencies, and folder layout, see [AGENTS.md](../../AGENTS.md). For React-specific rules, see [react](../react/SKILL.md). For testing, see [test](../test/SKILL.md).

## Language

All code — identifiers, comments, commit messages, and user-facing copy in code — must be written in **English**.

```typescript
// ❌ BAD
const nomeDoJogador = "Pedro";
// retorna o preço do plano

// ✅ GOOD
const playerName = "Pedro";
// Returns the plan price in cents
```

UI copy shown to end users may stay in Portuguese when required by product/design; implementation code stays in English.

## Function and component size

Methods, functions, and components must not exceed **60 lines** (including blank lines). Extract helpers, hooks, or sub-components when logic grows.

```tsx
// ❌ BAD — 120-line component mixing fetch, validation, and render
export function ExperienceTimelineBody() {
  // ... dozens of lines ...
}

// ✅ GOOD — split by responsibility
export function ExperienceCardBody() {
  const carousel = useHighlightCarousel(EXPERIENCE_SLIDES);
  return (
    <InsightCard>
      <InsightHeader title="Experience" icon={BriefcaseIcon} cardId="experience" onViewAll={onViewAll} />
      <InsightSlide slide={carousel.slide} />
      <InsightNav title="Experience" index={carousel.index} total={carousel.total} onGoTo={carousel.goTo} onPrevious={carousel.showPrevious} onNext={carousel.showNext} />
    </InsightCard>
  );
}
```

## Parameter count

Avoid passing more than **3 parameters**. Prefer an options object or a typed config when you need more data.

```typescript
// ❌ BAD
function createOrder(planId: string, email: string, players: Player[], method: string) {}

// ✅ GOOD
interface CreateOrderInput {
  planId: PlanId;
  email: string;
  players: Player[];
  paymentMethod: PaymentMethod;
}

function createOrder(input: CreateOrderInput) {}
```

## Control flow

Do not nest `if/else` blocks. Avoid `switch` statements. Prefer early returns, guard clauses, lookup maps, or small extracted functions.

```typescript
// ❌ BAD — nested if/else
function getStatusLabel(status: OrderStatus) {
  if (status === "pending") {
    if (paymentConfirmed) {
      return "Processing";
    } else {
      return "Awaiting payment";
    }
  } else {
    return "Complete";
  }
}

// ❌ BAD — switch
function getStatusLabel(status: OrderStatus) {
  switch (status) {
    case "pending":
      return "Pending";
    case "paid":
      return "Paid";
    default:
      return "Unknown";
  }
}

// ✅ GOOD — early returns
function getStatusLabel(status: OrderStatus, paymentConfirmed: boolean) {
  if (status === "complete") return "Complete";
  if (status === "pending" && paymentConfirmed) return "Processing";
  if (status === "pending") return "Awaiting payment";
  return "Paid";
}

// ✅ GOOD — lookup map
const STATUS_LABELS: Record<OrderStatus, string> = {
  pending: "Pending",
  paid: "Paid",
  complete: "Complete",
};
```

## Naming functions and methods

Function and method names must start with a **verb** that describes the action.

```typescript
// ❌ BAD
function player(data: PlayerData) {}
function validation(email: string) {}

// ✅ GOOD
function buildPlayerPayload(data: PlayerData) {}
function validateEmail(email: string) {}
function fetchRemotePlans() {}
function renderCheckoutSummary() {}
```

React components use **PascalCase nouns** (e.g. `StepResumo`, `OrderStatusView`); hooks use the `use` prefix with a verb phrase (e.g. `useOrderWizard`, `usePaymentForm`).

## Naming variables

Variable names must be **clear and objective**. Prefer full words over abbreviations. Name by purpose, not by type alone.

```typescript
// ❌ BAD
const d = new Date();
const arr = players.filter((p) => p.ok);
const temp = response.data;

// ✅ GOOD
const createdAt = new Date();
const completePlayers = players.filter(isPlayerComplete);
const order = response.data;
```

Booleans should read as questions: `isValid`, `hasPhotos`, `canSubmit`. Collections use plural nouns: `players`, `plans`. Avoid vague names like `data`, `info`, `item`, or `handleStuff`.

## Type file organization

Each type must live in its **own file** when it is exported and reused outside a single module. Keep related types together only when they always belong to the same domain and change together. See [AGENTS.md](../../AGENTS.md) for folder placement.

### One type per file (required)

Create a dedicated file in `src/types/` when the type is:

| Case | File example | Type example |
|------|--------------|--------------|
| Shared across folders | `src/types/order.ts` | `OrderDraft`, `OrderStatus` |
| A domain entity or DTO | `src/types/player.ts` | `PlayerData` |
| An API contract | `src/types/api.ts` | `RemotePlan`, `ApiErrorBody` |
| Context or store state | `src/types/order-wizard.ts` | `OrderWizardState` |
| Used by both client and server | `src/types/payment.ts` | `PaymentMethod` |

```typescript
// ❌ BAD — unrelated types piled into one file
// src/types/misc.ts
export interface OrderDraft {}
export interface RemotePlan {}
export interface ClubOption {}

// ✅ GOOD — one domain per file
// src/types/order.ts
export interface OrderDraft {}
export type OrderStatus = "pending" | "paid" | "complete";

// src/types/plan.ts
export interface RemotePlan {}
export type PlanId = "experimento" | "mais-escolhido" | "colecionador";
```

Name files after the **domain**, not a single type name: `order.ts`, not `OrderDraft.ts`.

### Same file allowed

Keep types in the same file when they are:

| Case | Location | Example |
|------|----------|---------|
| Props for a single component | Same file as the component, or a sibling `ComponentName.types.ts` | `ButtonProps` in `Button.tsx` |
| A type alias tightly coupled to one function | Next to that function | `CreateOrderInput` in `orders.service.ts` |
| Union members of the same concept | One domain file in `src/types/` | `PlanId`, `Plan`, `StickerType` in `plan.ts` |
| Inferred from a Zod schema | Same file as the schema in `src/schemas/` | `PagamentoStepValues` from `pagamento.schema.ts` |
| Private to one module, never exported | Bottom of the module that uses it | `type SortDirection = "asc" | "desc"` |

```typescript
// ✅ GOOD — props used only by Button stay with Button
// src/components/ui/Button.tsx
interface ButtonProps {
  variant?: "primary" | "secondary";
  href?: string;
}

export function Button({ variant = "primary", href }: ButtonProps) {}
```

```typescript
// ✅ GOOD — related plan types share one domain file
// src/types/plan.ts
export type PlanId = "experimento" | "mais-escolhido" | "colecionador";
export type StickerType = "normal" | "brilhosa";

export interface Plan {
  id: PlanId;
  stickerType: StickerType;
  price: number;
}
```

### When to split into a new file

Extract a type into its own file in `src/types/` when **any** of these is true:

1. The type is imported from more than one folder (`components/`, `services/`, `app/`, etc.).
2. The host file would exceed **60 lines** mainly because of type definitions.
3. The type represents a separate domain concept (do not mix `Order` and `Plan` types).
4. The type is part of the public API of a service or route handler.

```typescript
// ❌ BAD — service file exports types consumed across the app
// src/services/orders.service.ts
export interface OrderDraft {}
export async function createOrder(input: OrderDraft) {}

// ✅ GOOD — types in src/types/, logic in services
// src/types/order.ts
export interface OrderDraft {}

// src/services/orders.service.ts
import type { OrderDraft } from "@/types/order";

export async function createOrder(input: OrderDraft) {}
```

### File naming

| Kind | Pattern | Example |
|------|---------|---------|
| Shared domain types | `src/types/<domain>.ts` | `order.ts`, `payment.ts` |
| Component-only props | `<Component>.types.ts` or inline | `Button.types.ts` |
| Zod schemas + inferred types | `src/schemas/<feature>.schema.ts` | `jogador.schema.ts` |

Do not create a separate file for every single `type` or `interface` alias. Create a separate **file per domain**; split further only when reuse or file size requires it.

## Quick checklist

Before opening a PR, confirm:

- [ ] Code and comments are in English
- [ ] No function, method, or component exceeds 60 lines
- [ ] No function accepts more than 3 positional parameters
- [ ] No nested `if/else` and no `switch`
- [ ] Functions and methods use verb-based names
- [ ] Variables are descriptive and purpose-driven
- [ ] Shared types live in `src/types/<domain>.ts`; component-only props stay local
- [ ] No unrelated types mixed in the same file
