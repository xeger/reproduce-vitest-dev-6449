import { page, userEvent } from '@vitest/browser/context';
import { expect, test } from 'vitest';

test('reproduction', async () => {
  const screen = page.render(<button>hello, world</button>);

  expect(page.getByRole('button')).toBeDefined();
  expect(screen.getByRole('button')).toBeDefined();

  await userEvent.click(page.getByRole('button'));
  await userEvent.click(screen.getByRole('button'));
});
