import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TextArea } from "../components/TextArea";
import '@testing-library/jest-dom';

describe("TextArea Component", () => {
  const handleChange = jest.fn();

  it("renders without crashing", () => {
    render(
      <TextArea
        handleChange={handleChange}
        value=""
        placeholder="Test placeholder"
      />
    );

    const textArea = screen.getByPlaceholderText(/Test placeholder/i);
    expect(textArea).toBeInTheDocument();
  });

  it("displays the label when provided", () => {
    render(
      <TextArea
        handleChange={handleChange}
        value=""
        placeholder="Test placeholder"
        label="Test Label"
      />
    );

    const label = screen.getByText(/Test Label/i);
    expect(label).toBeInTheDocument();
  });

  it("does not display the label when not provided", () => {
    render(
      <TextArea
        handleChange={handleChange}
        value=""
        placeholder="Test placeholder"
      />
    );

    const label = screen.queryByText(/Test Label/i);
    expect(label).not.toBeInTheDocument();
  });

  it("calls handleChange when typing in the textarea", async () => {
    render(
      <TextArea
        handleChange={handleChange}
        value=""
        placeholder="Test placeholder"
      />
    );

    const textArea = screen.getByPlaceholderText(/Test placeholder/i);

    await userEvent.type(textArea, "Hello, World!");

    expect(handleChange).toHaveBeenCalledTimes(13);
  });

  it("renders the placeholder text correctly", () => {
    render(
      <TextArea
        handleChange={handleChange}
        value=""
        placeholder="Enter text here"
      />
    );

    const textArea = screen.getByPlaceholderText(/Enter text here/i);
    expect(textArea).toBeInTheDocument();
  });

  it("applies the custom styles to the textarea", () => {
    render(
      <TextArea
        handleChange={handleChange}
        value=""
        placeholder="Test placeholder"
        styles="text-blue-500"
      />
    );

    const textArea = screen.getByPlaceholderText(/Test placeholder/i);
    expect(textArea).toHaveClass("text-blue-500");
  });
});
