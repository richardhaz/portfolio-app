import { useEffect } from 'react';

interface UseClickOutsideProps {
  ref: any;
  fn: Function;
}

export const useClickOutside = ({ ref, fn }: UseClickOutsideProps): void => {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        fn();
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);
};
