import { render, screen, fireEvent } from '@testing-library/react';
import Checkbox from '../components/Checkbox';

describe('Checkbox', () => {
  it('renders with the correct checked state based on the value prop', () => {
    render(
      <Checkbox
        description="Accept terms"
        handleChange={() => { }}
        controlId="terms"
        value={true}
      />
    );

    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toBeChecked();
  });

  it('calls handleChange when checkbox is clicked', () => {
    const handleChange = jest.fn();

    render(
      <Checkbox
        description="Accept terms"
        handleChange={handleChange}
        controlId="terms"
        value={false}
      />
    );

    const checkbox = screen.getByRole('checkbox');

    fireEvent.click(checkbox);

    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
