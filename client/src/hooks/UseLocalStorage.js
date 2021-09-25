import { useState, useEffect } from 'react';
import { useAppState } from '../contexts/AppStateContext';

export default function useLocalStorage(key, initialValue) {
  const { prefix } = useAppState();
  const prefixedKey = prefix + key;
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(prefixedKey);
    if (stored !== null) return JSON.parse(stored);
    if (typeof initialValue === 'function') {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    if (value) {
      localStorage.setItem(prefixedKey, JSON.stringify(value));
    }
  }, [prefixedKey, value]);

  return [value, setValue];
}
