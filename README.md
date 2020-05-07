# Exit Intent Library

Calls a callback whenever the user intends to exit the page

### How to use

```
onExitIntent(() => {
  // triggers whenever someone intends to leave a page
});
```

### Specifcation
- Remove event listener immediately after it triggers
- If mouse is not at top of page don't trigger exit intent
  - Don't trigger when exiting left, right, or bottom of page
- Only trigger if `(event.relatedTarget === null)`
  - Guarantees mouse has moved off the page
- Only trigger if `(event.target.nodeName.toLowerCase() !== 'select')` and `(event.target.nodeName.toLowerCase() !== 'input')`
  - Fixes a bug with Firefox