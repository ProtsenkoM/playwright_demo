import { test, expect } from '@playwright/test';

test('blog url and title', async ({ page }) => {
  await page.goto('https://ilarionhalushka.github.io/');
  await expect.soft(page).toHaveURL(/ilarionhalushka/);
  await expect.soft(page).toHaveTitle(/IT Blog by Ilarion Halushka/);

});

test('navigation to about author page', async ({ page }) => {
  await page.goto('https://ilarionhalushka.github.io/');
  await page.getByRole("button", {name:"About me"}).click();
  await expect(page).toHaveURL(/about/);
  await expect(page).toHaveTitle("About author | IT Blog by Ilarion Halushka");
  await expect(page.locator('.back-to-articles-btn')).toHaveText('<- Back to the list of articles');

});


test('navigation to Home page from About author page', async ({ page }) => {
  await page.goto('https://ilarionhalushka.github.io/');
  await page.getByRole("button", {name:"About me"}).click();
  await page.getByRole("button", {name:"Home"}).click();
  await expect(page).not.toHaveURL(/about/);
  await expect(page).not.toHaveTitle("About author | IT Blog by Ilarion Halushka");
  await expect(page).toHaveURL(/ilarionhalushka/);
  await expect(page).toHaveTitle(/IT Blog by Ilarion Halushka/);
});



test('check the search input is visible and editable, enabled', async ({ page }) => {
  await page.goto('https://ilarionhalushka.github.io/');
  await expect(page.locator('[aria-label="search..."]')).toBeVisible();
  await expect(page.locator('[aria-label="search..."]')).toBeEnabled();
  await expect(page.locator('[aria-label="search..."]')).toBeEditable();
  

});

