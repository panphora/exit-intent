# Exit Intent Library

Calls a callback whenever the user intends to exit the page

### How to use

Include script:
```
<script src="https://cdn.jsdelivr.net/gh/panphora/exit-intent@0.5.0/on-exit-intent.js"></script>
```

Use callback:
```
onExitIntent(() => {
  // triggers whenever someone intends to leave a page
});
```

That's it!

### What this library does:
- Remove event listener immediately after it triggers
- If mouse is not at top of page don't trigger exit intent
  - Don't trigger when exiting left, right, or bottom of page
- Only trigger if `(event.relatedTarget === null)`
  - Guarantees mouse has moved off the page
- Only trigger if `(event.target.nodeName.toLowerCase() !== 'select')` and `(event.target.nodeName.toLowerCase() !== 'input')`
  - Fixes a bug with Firefox