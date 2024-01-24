import { useState, useEffect } from 'react';

// Custom hook for syncing state with URL query parameters
export function useQueryParam(key: string, defaultValue: string = ''): [string, (newValue: string) => void] {
  // Get the initial value for the state from the URL search params
  const [value, setValue] = useState<string>(() => {
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.get(key) ?? defaultValue;
  });

  // Update the URL when the state changes
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    if (value) {
      searchParams.set(key, value);
    } else {
      searchParams.delete(key);
    }

    const newRelativePathQuery = `${window.location.pathname}?${searchParams.toString()}`;
    window.history.replaceState({}, '', newRelativePathQuery);
  }, [key, value]);

  return [value, setValue];
}
