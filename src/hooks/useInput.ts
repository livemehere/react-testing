import { ChangeEvent, useCallback, useState } from "react";

export default function useInput<T>(initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target) {
      setValue(e.target.value as unknown as T);
    }
  }, []);

  const reset = (resetValue = initialValue) => {
    setValue(resetValue);
  };

  return { value, onChange, reset };
}
