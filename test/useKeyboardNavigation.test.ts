// test/useKeyboardNavigation.test.ts
import { renderHook } from "@testing-library/react-hooks";
import { useKeyboardNavigation } from "../src";

describe("useKeyboardNavigation", () => {
  it("should trigger callback on key press", () => {
    const mockFn = jest.fn();
    renderHook(() =>
      useKeyboardNavigation({
        keys: ["ArrowDown"],
        onKeyPress: mockFn,
      })
    );

    const event = new KeyboardEvent("keydown", { key: "ArrowDown" });
    window.dispatchEvent(event);

    expect(mockFn).toHaveBeenCalled();
  });
});
