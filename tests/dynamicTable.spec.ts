import { test, expect } from '@playwright/test';
test.describe("Dynamic Table Challenge",()=>{
    test('Get Real Name of Spider-Man', async ({ page }) => {
        await page.goto('https://qaplayground.dev/apps/dynamic-table/');
        // Verify that the table contains SUPERHERO strings.
        await expect(page.locator("text=SUPERHERO")).toBeVisible()
        // Find the row of Spider-Man
        const row = page.locator('text="Spider-Man" >> xpath=../../../..');
        // Find the real name cell in the Spider-Man row.
        const realNameCell = row.locator("td").nth(2);
        // Verify the real name of Spider-Man is Peter Parker.
        await expect(realNameCell).toHaveText("Peter Parker");
    });
})
