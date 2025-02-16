import { test, expect } from '@playwright/test';
test.describe("Verify Your Account",()=>{
    test('Get title to confirm correct page', async ({ page }) => {
        await page.goto('https://qaplayground.dev/apps/verify-account/');
        await expect(page.getByText('Verify Your Account')).toBeVisible()
    });

    test('Typing correct number on each input', async ({ page }) => {
        await page.goto('https://qaplayground.dev/apps/verify-account/');
        const inputCount = page.locator(".code").count()
        for(let i = 1; i <= await inputCount; i++) {
            // must be use method type() to make a fake action by keyboard
            await page.locator(`input:nth-child(${i})`).type('9',{ delay: 100 })
            // to get this locator was used codegen
            await expect(page.locator(`input:nth-child(${i})`)).toHaveValue('9')
        }
        await expect(page.getByText('Success')).toBeVisible()
    });

    test('Insert correct number on each input by key up button', async ({ page }) => {
        await page.goto('https://qaplayground.dev/apps/verify-account/');
        const inputCount = page.locator(".code").count()
        for(let i = 1; i <= await inputCount; i++) {
            // must be use method type() to make a fake action by keyboard
            await page.locator(`input:nth-child(${i})`).click()
            for(let j = 1; j <= 9; j++) {
                await page.keyboard.press("ArrowUp", { delay: 100 })
            }
            // to get this locator was used codegen
            await expect(page.locator(`input:nth-child(${i})`)).toHaveValue('9')
        }
        await expect(page.getByText('Success')).toBeVisible()
    });
})
