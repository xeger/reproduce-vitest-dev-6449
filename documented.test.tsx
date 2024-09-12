import { page } from '@vitest/browser/context';
import React from 'react';
import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

function Component({count}: {count: number}) {
  const [state, setState] = React.useState(count);
  return (
    <div>
      <p>Count is {state}</p>
      <button onClick={() => setState(c => c+1)}>Increment</button>
    </div>
  )
}

// Verbatim test from README
test('example from vitest-dev/vitest-browser-react', async () => {
  const screen = render(<Component count={1} />)

  await screen.getByRole('button', { name: 'Increment' }).click()

  await expect.element(screen.getByText('Count is 2')).toBeVisible()
})

// Verbatim test from README
test('modified example', async () => {
  const screen = page.render(<Component count={1} />)

  await expect.element(screen.getByRole('button', { name: 'Increment' })).toBeDefined();

  await screen.getByRole('button', { name: 'Increment' }).click()

  await expect.element(screen.getByText('Count is 2')).toBeVisible()
})
