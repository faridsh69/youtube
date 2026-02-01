import { expect, test } from '@playwright/test'

test.describe('Accordion', () => {
  test('collapses by default, expands on click, and toggles back', async ({ page }) => {
    await page.goto('/ui')

    const header = page.getByTestId('accordion-header')
    const content = page.getByTestId('accordion-content')

    await expect(content).toHaveCount(0)
    await expect(header).toHaveAttribute('aria-expanded', 'false')

    await header.click()
    await expect(page.getByTestId('accordion-content')).toBeVisible()
    await expect(header).toHaveAttribute('aria-expanded', 'true')

    await header.click()
    await expect(page.getByTestId('accordion-content')).toHaveCount(0)
    await expect(header).toHaveAttribute('aria-expanded', 'false')
  })

  test('icon reflects state (Plus → Mines)', async ({ page }) => {
    await page.goto('/ui')

    const btn = page.getByTestId('accordion-toggle-btn')

    await expect(btn).toHaveAttribute('data-icon', /Plus/i)

    await page.getByTestId('accordion-header').click()
    await expect(btn).toHaveAttribute('data-icon', /Mines/i)
  })
})
