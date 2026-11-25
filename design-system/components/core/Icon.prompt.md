Restrained-line icon set matching the field-guide illustration language — 24×24 grid, 1.75px stroke, round caps/joins, gently rounded corners. Always `aria-hidden` and paired with a visible text label; icons never carry meaning alone, and semantic states differ in silhouette (not just color) so meaning survives grayscale and glance-speed viewing.

Names: `verified`, `synced`, `syncing`, `connected`, `offline`, `route`, `ready`, `attention` (maps to the Needs Attention journey-readiness state), `selected`, `current`.

```jsx
<span style={{ display: "flex", alignItems: "center", gap: 6 }}>
  <Icon name="attention" color="var(--status-attention)" />
  Needs Attention
</span>
```
