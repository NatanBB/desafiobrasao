import { render, screen } from '@testing-library/react';
import { Input } from '../components/Input';

describe('Input', () => {
  it('renders with the correct placeholder and value', () => {
    const handleChange = jest.fn();

    render(
      <Input
        handleChange={handleChange}
        value="test value"
        type="text"
        placeholder="Enter text"
        controlId="input-id"
      />
    );

    const input = screen.getByPlaceholderText('Enter text');

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('value', 'test value');
  });

  it('renders with a label if provided', () => {
    const handleChange = jest.fn();

    render(
      <Input
        handleChange={handleChange}
        value="test value"
        type="text"
        placeholder="Enter text"
        label="Test Label"
        controlId="input-id"
      />
    );

    const label = screen.getByText('Test Label');
    expect(label).toBeInTheDocument();
  });

  it('does not render a label if not provided', () => {
    const handleChange = jest.fn();

    render(
      <Input
        handleChange={handleChange}
        value="test value"
        type="text"
        placeholder="Enter text"
        controlId="input-id"
      />
    );

    const label = screen.queryByText('Test Label');
    expect(label).not.toBeInTheDocument();
  });

  it('correctly applies additional custom styles', () => {
    const handleChange = jest.fn();

    render(
      <Input
        handleChange={handleChange}
        value="test value"
        type="text"
        placeholder="Enter text"
        styles="bg-red-500"
        controlId="input-id"
      />
    );

    const input = screen.getByPlaceholderText('Enter text');

    expect(input).toHaveClass('bg-red-500');
  });
});
