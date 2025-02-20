import { test, expect } from '@playwright/test';
test.describe("Tags Input Box",()=>{
    const tags = [
        "Cypress",
        "Playwright",
        "Test",
        "Automation",
        "QA",
        "Software",
        "CI/CD",
        "Docker"
    ]
    test('Get title to confirm correct page', async ({ page }) => {
        await page.goto('https://qaplayground.dev/apps/tags-input-box/');
        await expect(page.locator('text="Tags"')).toBeVisible();
    });
    test('Count tags', async ({ page }) => {
        await page.goto('https://qaplayground.dev/apps/tags-input-box/');
        const tagsCount = await page.locator("li").count()
        expect(tagsCount).toEqual(2)
    });
    test('Add new tags', async ({ page }) => {
        await page.goto('https://qaplayground.dev/apps/tags-input-box/');
        var tagsCount = await page.locator("li").count()
        if(tagsCount === 2){
            for(let i = 0; i < tags.length; i++) {
                await page.getByRole('textbox').type(`${tags[i]}`);
                await page.getByRole('textbox').press('Enter');
            }
        }
        // check each tag names inserted
        for(let i = 0; i < tags.length; i++) {
            expect(page.locator('li').filter({ hasText: `${tags[i]}` })).toHaveText(tags[i]);
        }
        // check quantity of tags
        tagsCount = await page.locator("li").count()
        expect(tagsCount).toEqual(10)
        
    });
    test('Remove all tags pressing button', async ({ page }) => {
        await page.goto('https://qaplayground.dev/apps/tags-input-box/');
        await page.getByRole('button', { name: 'Remove All' }).first().click();
        const tagsCount = await page.locator("li").count()
        expect(tagsCount).toEqual(0)
    });
})
