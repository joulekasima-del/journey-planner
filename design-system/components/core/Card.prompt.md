Base elevated surface. Rounded 24px, hairline border, soft shadow that deepens on hover when clickable.

```jsx
<Card onClick={openJourney}>
  <h3>Northern Thailand Loop</h3>
</Card>
```

`variant="featured"` gives a flat Canopy Green surface with a soft contact shadow (no glass, blur, sheen, or texture). Reserve it for a hero/feature surface (e.g. a featured Journey or a discovery highlight), not ordinary list cards — it's an accent, not the default card look.

```jsx
<Card variant="featured" padding="28px">
  <h3>Featured: Northern Thailand Loop</h3>
</Card>
```
