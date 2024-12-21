import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../components/Button';

describe("Button Component", () => {
  const handleClick = jest.fn();

  it("renders the button with the correct title", () => {
    render(
      <Button
        title="Click Me"
        onClick={handleClick}
        disabled={false}
      />
    );

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Click Me');
  });

  it("calls onClick function when clicked", () => {
    render(
      <Button
        title="Click Me"
        onClick={handleClick}
        disabled={false}
      />
    );

    const button = screen.getByRole('button');

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies the correct styles when passed", () => {
    render(
      <Button
        title="Styled Button"
        onClick={handleClick}
        disabled={false}
        styles={{ backgroundColor: 'red' }}
      />
    );

    const button = screen.getByRole('button');
    expect(button).toHaveStyle('background-color: red');
  });

  it("disables the button when 'disabled' prop is true", () => {
    render(
      <Button
        title="Disabled Button"
        onClick={handleClick}
        disabled={true}
      />
    );

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it("applies the correct classes when disabled", () => {
    render(
      <Button
        title="Disabled Button"
        onClick={handleClick}
        disabled={true}
      />
    );

    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-blue-600', 'cursor-not-allowed', 'hover:bg-blue-400', 'dark:bg-blue-500', 'dark:hover:bg-blue-500');
  });

  it("applies the correct classes when enabled", () => {
    render(
      <Button
        title="Enabled Button"
        onClick={handleClick}
        disabled={false}
      />
    );

    const button = screen.getByRole('button');
    expect(button).not.toHaveClass('cursor-not-allowed');
  });
});
