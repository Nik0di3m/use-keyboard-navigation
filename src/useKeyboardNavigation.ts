import { useEffect } from "react";

export interface UseKeyboardNavigationOptions {
  parentRef?: React.RefObject<HTMLElement> | null;
  keys: string[];
  onKeyPress: (key: string, index: number) => void;
  enabled?: boolean;
  eventType?: "keydown" | "keyup";
}

export const useKeyboardNavigation = ({
  parentRef = null,
  keys,
  onKeyPress,
  enabled = true,
  eventType = "keydown",
}: UseKeyboardNavigationOptions) => {
  useEffect(() => {
    if (!enabled) return;

    const handleKeyEvent = (e: KeyboardEvent) => {
      const keyIndex = keys.indexOf(e.key);
      if (keyIndex === -1) return;

      const isActive = parentRef
        ? parentRef.current?.contains(document.activeElement)
        : true;

      if (!isActive) return;

      e.preventDefault();
      onKeyPress(e.key, keyIndex);
    };

    window.addEventListener(eventType, handleKeyEvent);
    return () => window.removeEventListener(eventType, handleKeyEvent);
  }, [keys, onKeyPress, parentRef, enabled, eventType]);
};
