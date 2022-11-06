import { useEffect, useRef, useState } from "react";
/**
 * Triggers when the user scrolled to the bottom of the HTML element
 *
 * @param element - the scrollable HTML element
 * @param callback  - called when scrolled to the bottom of the element - WITH delay if provided)
 * @param delay     -[optional] delay in ms.
 * @returns boolean -  true if the user scrolled to the bottom of the element - WITHOUT delay so it can trigger even if the callback does not
 */
export function useBottomReached(
  element: HTMLElement,
  callback?: (e: Event) => void,
  delay?: number,
  enabled: boolean = true
) {
  const [isOnBottom, setIsOnBottom] = useState<boolean>(false);

  let timeoutHandler = useRef<NodeJS.Timeout | undefined>(undefined);

  const isEnabled = useRef<boolean>(enabled);
  const setState = useRef<Function>((state: boolean) => {
    setIsOnBottom(state);
  });

  useEffect(() => {
    if (element) {
      element.addEventListener("scroll", trackScrolling);
      return () => {
        element.removeEventListener("scroll", trackScrolling);
      };
    }
    // eslint-disable-next-line
  }, [element]);

  useEffect(() => {
    isEnabled.current = enabled;
  }, [enabled]);

  const isBottom = (element: HTMLElement) => {
    return element.scrollHeight - element.scrollTop <= element.clientHeight + 1;
  };

  const trackScrolling = (e: Event) => {
    if (isEnabled.current) {
      if (delay) {
        if (isBottom(element)) {
          setState.current(true);

          if (timeoutHandler.current) {
            clearTimeout(timeoutHandler.current);
          }
          timeoutHandler.current = setTimeout(() => {
            if (callback) callback(e);
          }, delay);
        } else {
          setState.current(false);

          if (timeoutHandler.current !== undefined) {
            clearTimeout(timeoutHandler.current);
            timeoutHandler.current = undefined;
          }
        }
      } else {
        if (isBottom(element)) {
          setState.current(true);
          if (callback) callback(e);
        } else {
          setState.current(false);
        }
      }
    }
  };

  return isOnBottom;
}
