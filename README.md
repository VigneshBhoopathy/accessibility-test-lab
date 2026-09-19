# Accessibility Test Lab

A small website intentionally containing accessibility defects for practicing:

- Playwright
- @axe-core/playwright
- WCAG accessibility testing
- Keyboard testing
- Accessibility defect fixing

## Files

- `index.html` - webpage
- `styles.css` - styling
- `script.js` - simple interactions

## Run locally

You can open `index.html` directly in a browser.

For a local web server, if you have VS Code, install/use the Live Server extension and open `index.html` with Live Server.

## Suggested Playwright exercise

1. Open the page.
2. Run your axe accessibility test.
3. Record the violations.
4. Fix one defect in the HTML/CSS.
5. Run the test again.
6. Continue until the violations are resolved.

The page intentionally contains defects such as:

- heading-order
- missing form labels
- incorrect label association
- image without alt text
- low color contrast
- empty accessible name
- ambiguous link text
- non-semantic interactive element

Some rules reported by axe can vary with the axe-core version and browser.
