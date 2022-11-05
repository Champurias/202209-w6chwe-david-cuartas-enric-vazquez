import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it's rendered with text 'Click me'", () => {
    test("Then it should show a button with text 'Click me' on it", () => {
      const expectedText = "Click me";

      render(<Button text={expectedText} action={() => {}} />);
      const button = screen.queryByRole("button", { name: expectedText });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When it's rendered with an action", () => {
    test("Then it should call the action function", async () => {
      const action = jest.fn();
      const buttonText = "button";
      render(<Button text={buttonText} action={action} />);
      const button = screen.queryByRole("button", {
        name: buttonText,
      }) as HTMLButtonElement;

      await userEvent.click(button);

      expect(action).toHaveBeenCalled();
    });
  });
});
