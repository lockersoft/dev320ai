const { test, expect } = require('@playwright/test');
const { AxeBuilder } = require('@axe-core/playwright');

test.describe('Accessibility Audit', () => {
  test('should not have WCAG 2.2 violations', async ({ page }) => {
    await page.goto('http://localhost:8080'); // Update with your test URL
    const results = await new AxeBuilder({ page })
      .withTags(['wcag22aa'])
      .analyze();
    
    expect(results.violations).toEqual([]);
    
    if (results.violations.length > 0) {
      console.log(JSON.stringify(results.violations, null, 2));
    }
  });
});
