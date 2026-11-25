Primary pill-shaped action button used for the single most important action on a screen or card.

```jsx
<Button variant="primary" onClick={handleAdd}>Add to Journey Day</Button>
<Button variant="secondary" size="sm">Compare</Button>
<Button variant="ghost">Ask Guide</Button>
<Button variant="danger">Cancel booking</Button>
```

Variants: `primary` (filled, one per view), `secondary` (outlined, for the next-most-important action), `ghost` (text-only, tertiary), `danger` (destructive). Sizes: `sm` / `md` / `lg`. `disabled` reduces opacity and blocks pointer events — never remove a future-day action, only disable it when the action is genuinely unavailable right now.
