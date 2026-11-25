Modal for confirmations — cancel booking, discard changes, delete Journey Day.

```jsx
<Dialog open={open} title="Cancel this booking?" onClose={close}
  actions={<><Button variant="ghost" onClick={close}>Keep it</Button><Button variant="danger">Cancel booking</Button></>}>
  The host will be notified. This cannot be undone.
</Dialog>
```
