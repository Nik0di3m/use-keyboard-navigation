# use-keyboard-navigation

React hook for keyboard navigation with focus control. WCAG-compliant.

## Installation

```bash
npm install use-keyboard-navigation
```


## Example

```typescript
import { useKeyboardNavigation } from "use-keyboard-navigation";

const Component = () => {
  const scrollContainerRef = useRef(null);

  useKeyboardNavigation({
    parentRef: containerRef, // Works only if parentRef is focused
    keys: ['ArrowUp', 'ArrowDown', 'Home', 'End'], // Specify the keys you want to use for navigation
    // Callback function to be executed when the key is pressed
    onKeyPress: (key) => { 
      if (!scrollContainerRef.current) return;

      const scrollStep = 100; // Kroki scrollowania w pikselach
      const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;

      switch (key) {
        case 'ArrowDown':
          scrollContainerRef.current.scrollBy({
            top: scrollStep,
            behavior: 'smooth',
          });
          break;
        case 'ArrowUp':
          scrollContainerRef.current.scrollBy({
            top: -scrollStep,
            behavior: 'smooth',
          });
          break;
        case 'Home':
          scrollContainerRef.current.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
          break;
        case 'End':
          scrollContainerRef.current.scrollTo({
            top: scrollHeight - clientHeight,
            behavior: 'smooth',
          });
          break;
      }
    },
  });

  return <div ref={containerRef} tabIndex={0} />;
};



```

 Prop       | Type                                      | Default   | Description                 
------------|-------------------------------------------|-----------|-----------------------------
 keys       | string[]                                  | Required  | Array of keys to listen for 
 onKeyPress | (key: string, index: number) =&gt; void   | Required  | Callback on key press       
 parentRef  | React.RefObject&lt;HTMLElement&gt; | null | null      | Scope to parent element     
 enabled    | boolean                                   | true      | Enable/disable hook         
 eventType  | 'keydown' | 'keyup'                       | 'keydown' | Event type to listen for    
