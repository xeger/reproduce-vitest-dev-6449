import { page, userEvent } from '@vitest/browser/context';
import { beforeEach, expect, test } from 'vitest';

beforeEach(() => {

});

test('using screen', async () => {
  let clicked = false;
  page.render(<button onClick={() => {clicked = true}}>hello, world</button>);
  expect(page.getByRole('button')).toBeDefined();
  await userEvent.click(page.getByRole('button'));
  expect.poll(() => clicked).toBe(true);
});

test('using page', async () => {
  let clicked = false;
  page.render(<button onClick={() => {clicked = true}}>hello, world</button>);
  expect(page.getByRole('button')).toBeDefined();
  await userEvent.click(page.getByRole('button'));
  expect.poll(() => clicked).toBe(true);
});
