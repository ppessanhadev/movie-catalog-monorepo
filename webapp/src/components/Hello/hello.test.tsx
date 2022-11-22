import { Hello } from '.';
import { expect, describe, it, render } from '@utils/test-essentials';

describe('<Hello />', () => {
  it('should render a h1 tag with dynamic message', () => {
    const { container } = render(<Hello message="testing" />);
    const hello = container.querySelector('h1');

    expect(hello).toHaveTextContent('testing');
  });

  it('shouldnt render a h1 if does not have a message', () => {
    const { container } = render(<Hello />);
    const hello = container.querySelector('h1');

    expect(hello).not.toBeInTheDocument();
  });
});
