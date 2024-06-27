import * as React from 'react';
import { createRoot } from 'react-dom/client';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const root = createRoot(div);
    root.render(<div />);
    root.unmount();
  });
});
