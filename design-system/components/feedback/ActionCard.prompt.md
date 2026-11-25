The Action Card pattern for planning issues that block or affect Journey readiness (booking required, uncovered accommodation, route unavailable, offline limitations).

```jsx
<ActionCard
  what="Indigo weaving requires booking."
  why="Journey Day 4 cannot become Ready until the host confirms."
  status="Waiting for provider — updated 12 minutes ago"
  actionLabel="Continue booking"
  tone="attention"
/>
```

Reserve `tone="danger"` for safety or blocking conflicts; use `attention` for ordinary required actions and `info`/`success` for calmer states. Never stack more than one Action Card as a scary red wall — order by the priority list in the state taxonomy.
