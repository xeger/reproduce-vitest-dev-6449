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

// Verbatim test from README of https://github.com/vitest-dev/vitest-browser-react
test('counter button increments the count', async () => {
  const screen = render(<Component count={1} />)

  await screen.getByRole('button', { name: 'Increment' }).click()

  await expect.element(screen.getByText('Count is 2')).toBeVisible()
})
