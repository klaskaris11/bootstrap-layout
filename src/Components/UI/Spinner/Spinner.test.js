import { getByText, render, screen } from '@testing-library/react';
import Spinner from './Spinner';

const TEXT = "This is a custom text";

describe('Spinner Test', () => {
  test("To show the correct text", () => {
    const { getByTestId } = render(
      <Spinner
        text={TEXT}
      />
    );
    expect(getByTestId("spinner-text")).toHaveTextContent(TEXT);
  });

  test("To correctly rendered", () => {
    render(<Spinner />);
    const spinnerElement = screen.getByText(/Loading.../i);
    expect(spinnerElement).toBeInTheDocument();
  });
});