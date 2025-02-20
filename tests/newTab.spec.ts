import { test, expect } from '@playwright/test';
test.describe("New Tab",()=>{
    test('Open new tab and get text', async ({ page }) => {
        await page.goto('https://qaplayground.dev/apps/new-tab/');
        //new tab will be open as a popup event after click
        const newTabPromise = page.waitForEvent('popup');
        await page.getByRole('link', { name: 'Open New Tab' }).click();
        const newPage = await newTabPromise;
        //get text on new page
        await expect(newPage.getByRole('heading', { name: 'Welcome to the new page!' })).toBeVisible()
    });
})
