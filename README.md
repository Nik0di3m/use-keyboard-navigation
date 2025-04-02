# use-keyboard-navigation

React hook for keyboard navigation with focus control. WCAG-compliant.

## Installation

```bash
npm install use-keyboard-navigation
```

```typescript
import { useKeyboardNavigation } from "use-keyboard-navigation";

const Component = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useKeyboardNavigation({
    parentRef: containerRef,
    keys: ["ArrowUp", "ArrowDown"],
    onKeyPress: (key) => {
      console.log(`Pressed ${key}`);
    },
  });

  return <div ref={containerRef} tabIndex={0} />;
};
```

| Prop       | Type                                    | Default  | Description                 |
| ---------- | --------------------------------------- | -------- | --------------------------- | ------------------------ |
| keys       | string[]                                | Required | Array of keys to listen for |
| onKeyPress | (key: string, index: number) =&gt; void | Required | Callback on key press       |
| parentRef  | React.RefObject&lt;HTMLElement&gt;      | null     | null                        | Scope to parent element  |
| enabled    | boolean                                 | true     | Enable/disable hook         |
| eventType  | 'keydown'                               | 'keyup'  | 'keydown'                   | Event type to listen for |
