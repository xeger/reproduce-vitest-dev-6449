import { page, userEvent } from '@vitest/browser/context';
import { beforeEach, expect, test } from 'vitest';

beforeEach(() => {

});

test('using screen', async () => {
  let clicked = false;
  const screen = page.render(<button onClick={() => {clicked = true}}>hello, world</button>);
  await expect.element(screen.getByRole('button')).toBeDefined();
  await userEvent.click(screen.getByRole('button'));
  await expect.poll(() => clicked).toBe(true);
});

test('using page', async () => {
  let clicked = false;
  page.render(<button onClick={() => {clicked = true}}>hello, world</button>);
  expect.element(page.getByRole('button'));
  await userEvent.click(page.getByRole('button'));
  expect.poll(() => clicked).toBe(true);
});
