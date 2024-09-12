import { page, userEvent } from '@vitest/browser/context';
import { expect, test } from 'vitest';

test('using screen', async () => {
  let clicks = 0;
  const screen = page.render(<button onClick={() => {clicks++}}>hello, world</button>);
  await expect.element(screen.getByRole('button')).toBeDefined();
  await userEvent.click(screen.getByRole('button'));
  await expect.poll(() => clicks === 1).toBe(true);
  await screen.getByRole('button').click();
  await expect.poll(() => clicks === 2).toBe(true);
});

test('using page', async () => {
  let clicks = 0;
  page.render(<button onClick={() => {clicks++}}>hello, world</button>);
  expect.element(page.getByRole('button'));
  await userEvent.click(page.getByRole('button'));
  expect.poll(() => clicks === 1).toBe(true);
  await page.getByRole('button').click();
  await expect.poll(() => clicks === 2).toBe(true);
});
