---
name: react
description: Applies React component and hook conventions for this project — functional components, folder colocation, explicit props, useMemo, and hook naming. Use when writing or reviewing React components, hooks, or UI code in src/components/.
---

# React Standards

These conventions apply to all React components and hooks in this project. See also [code-standards](../code-standards/SKILL.md) and [AGENTS.md](../../AGENTS.md) (folder layout and setup).

## Functional components only

Use **function declarations** or **arrow function components**. Do not use class components.

```tsx
// ❌ BAD
class Hero extends React.Component {
  render() {
    return <section>...</section>;
  }
}

// ✅ GOOD
export function Hero({ title, onCtaClick }: HeroProps) {
  return <section>...</section>;
}
```

Place components in `src/components/` and keep each file under 60 lines per [code-standards](../code-standards/SKILL.md).

## Component folder colocation

Group every file that belongs to the same feature or component into **one folder**. Do not leave related files scattered across `sections/`, `types/`, or `config/` when they serve a single UI feature.

Use **kebab-case** for folder names. Name files after the component they export (PascalCase).

```
src/components/
├── home-dashboard/
│   ├── about/
│   │   ├── AboutCardBody.tsx
│   │   ├── ModalAbout.tsx
│   │   └── about.constants.ts
│   ├── experience/
│   │   ├── ExperienceCardBody.tsx
│   │   └── experience.mappers.ts
│   └── insight/
│       ├── InsightCard.tsx
│       └── InsightHeader.tsx
└── ui/
    └── Button.tsx
```

```tsx
// ❌ BAD — widget files spread across the tree
// src/components/AboutCardBody.tsx
// src/config/about.ts
// src/types/about.ts

// ✅ GOOD — everything for the about widget lives under one folder
// src/components/home-dashboard/about/AboutCardBody.tsx
import { ABOUT_INTRO } from "@/components/home-dashboard/about/about.constants";
```

### What goes inside the folder

| Include | Example |
|---------|---------|
| Main component | `AboutCardBody.tsx` |
| Sub-components used only by this feature | `ModalAbout.tsx` |
| Feature-specific types | `experience.types.ts` |
| Feature-specific constants or config | `about.constants.ts` |
| Feature-specific helpers (not shared) | `experience.mappers.ts` |
| Colocated tests | `AboutCardBody.test.tsx` |

Keep **shared** types, utils, and hooks in `src/types/`, `src/utils/`, and `src/hooks/` only when reused by more than one feature. When a file is used exclusively by one component group, move it into that component folder.

### Barrel exports

Prefer direct imports over index re-exports. Import from the concrete file:

```tsx
// ✅ GOOD
import { AboutCardBody } from "@/components/home-dashboard/about/AboutCardBody";

// ❌ BAD — hides origin, harder to trace
import { AboutCardBody } from "@/components/home-dashboard/about";
```

### When to create a new folder

Create a folder when the feature has **two or more files** or is expected to grow (sub-components, types, tests). A single generic primitive with no siblings stays in `src/components/ui/`.

## Explicit props (no spread)

Pass props **explicitly**. Do not spread props into child components (`{...props}`, `{...rest}`, `{...payment}`).

```tsx
// ❌ BAD — hides which props the child receives
export function PaymentForm(props: PaymentFormProps) {
  return <FormFields {...props} />;
}

export function WizardSection() {
  const payment = usePaymentForm();
  return <StepPagamento {...payment} />;
}

// ✅ GOOD — every prop is visible at the call site
interface PaymentFormProps {
  email: string;
  method: PaymentMethod;
  onEmailChange: (email: string) => void;
  onSubmit: () => void;
}

export function PaymentForm({
  email,
  method,
  onEmailChange,
  onSubmit,
}: PaymentFormProps) {
  return (
    <form onSubmit={onSubmit}>
      <input value={email} onChange={(event) => onEmailChange(event.target.value)} />
    </form>
  );
}

export function WizardSection() {
  const { email, method, setEmail, submitPayment } = usePaymentForm();

  return (
    <StepPagamento
      email={email}
      method={method}
      onEmailChange={setEmail}
      onSubmit={submitPayment}
    />
  );
}
```

Define a typed `Props` interface for every component. Name it `<ComponentName>Props`.

## Hook naming

Custom hooks must start with **`use`** followed by a verb phrase in camelCase.

```typescript
// ❌ BAD
function orderWizard() {}
function paymentForm() {}
function OrderWizard() {}

// ✅ GOOD
function useOrderWizard() {}
function usePaymentForm() {}
function usePlanSelection() {}
```

Place hooks in `src/hooks/`. Only call hooks at the top level of a component or another hook — never inside conditions or loops.

## Memoization with useMemo

Use **`useMemo`** for derived values, filtered lists, and object/array literals passed as props to avoid unnecessary re-renders of child components.

```tsx
// ❌ BAD — new array/object every render
export function StepJogador({ players, planId }: StepJogadorProps) {
  const completePlayers = players.filter(isPlayerComplete);
  const plan = { ...getPlan(planId), highlight: true };

  return <PlayerList players={completePlayers} plan={plan} />;
}

// ✅ GOOD — stable references when dependencies unchanged
export function StepJogador({ players, planId }: StepJogadorProps) {
  const completePlayers = useMemo(
    () => players.filter(isPlayerComplete),
    [players],
  );

  const plan = useMemo(
    () => ({ ...getPlan(planId), highlight: true }),
    [planId],
  );

  return (
    <PlayerList
      players={completePlayers}
      plan={plan}
    />
  );
}
```

Apply `useMemo` when:

| Case | Example |
|------|---------|
| Derived data from props or state | Filtered/sorted lists, computed totals |
| Object or array passed as a prop | Config objects, option lists |
| Expensive pure calculation | Formatting, mapping large collections |

Do not wrap cheap primitives (strings, numbers, booleans) in `useMemo`. Keep dependency arrays accurate — include every value read inside the memo callback.

```tsx
// ❌ BAD — unnecessary memo for a string
const label = useMemo(() => "Submit", []);

// ✅ GOOD — memo only when reference stability matters
const stickerOptions = useMemo(
  () => STICKER_TYPE_LABELS.map(buildOption),
  [],
);
```

## Quick checklist

Before opening a PR, confirm:

- [ ] Related component files are grouped in one feature folder (e.g. `components/faq/`)
- [ ] Components are functional (no classes)
- [ ] Props are passed explicitly — no spread operator on props
- [ ] Each component has a typed `<Name>Props` interface
- [ ] Custom hooks start with `use` and live in `src/hooks/`
- [ ] Derived values and object/array props use `useMemo` with correct dependencies
- [ ] [Code standards](../code-standards/SKILL.md) are respected (60 lines, English, verb names)
