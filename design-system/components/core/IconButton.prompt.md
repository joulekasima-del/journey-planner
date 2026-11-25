Circular icon-only control for compact toolbars, map controls, and card corner actions.

```jsx
<IconButton icon="←" label="Back" onClick={goBack} />
<IconButton icon="♡" label="Save" active={saved} />
```

`active` shows the selected/current state (Canopy Green ring + tint). Always pass `label` — it is the button's only accessible name.
