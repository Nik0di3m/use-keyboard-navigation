# use-keyboard-navigation

React hook for keyboard navigation with focus control. WCAG-compliant.

## Installation

```bash
npm install use-keyboard-navigation
```


## Example1

```javascript
import { useKeyboardNavigation } from "use-keyboard-navigation";

const Component = () => {
  const scrollContainerRef = useRef(null);

  useKeyboardNavigation({
    parentRef: containerRef, // Works only if parentRef is focused
    keys: ['ArrowUp', 'ArrowDown', 'Home', 'End'], // Specify the keys you want to use for navigation
    // Callback function to be executed when the key is pressed
    onKeyPress: (key) => { 
      if (!containerRef.current) return;

      const scrollStep = 100;
      const { scrollTop, scrollHeight, clientHeight } = containerRef.current;

      switch (key) {
        case 'ArrowDown':
          containerRef.current.scrollBy({
            top: scrollStep,
            behavior: 'smooth',
          });
          break;
        case 'ArrowUp':
          containerRef.current.scrollBy({
            top: -scrollStep,
            behavior: 'smooth',
          });
          break;
        case 'Home':
          containerRef.current.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
          break;
        case 'End':
          containerRef.current.scrollTo({
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


## Example 2

```javascript
// WCAG/EAA 2.1 compatible keyboard navigation

export default function Navigation() {
  const linksRef = useRef([]);
  useKeyboardNavigation({
    keys: ['1', '2', '3', '4'],
    onKeyPress: (_, index) => {
      linksRef.current[index]?.focus();
    },
  });

  return (
    <nav>
      <ul>
        {Array.from({ length: 4 }, (_, i) => (
          <li key={i} className='py-4 lg:ml-3'>
            <Link href='/' tabIndex={0} aria-label='' ref={(el) => (linksRef.current[0] = el)}>
              Menu link
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
```

 Prop       | Type                                      | Default   | Description                 
------------|-------------------------------------------|-----------|-----------------------------
 keys       | string[]                                  | Required  | Array of keys to listen for 
 onKeyPress | (key: string, index: number) =&gt; void   | Required  | Callback on key press       
 parentRef  | React.RefObject&lt;HTMLElement&gt; | null | null      | Scope to parent element     
 enabled    | boolean                                   | true      | Enable/disable hook         
 eventType  | 'keydown' | 'keyup'                       | 'keydown' | Event type to listen for    
