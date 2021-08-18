import { IntervalRef } from './../models/models';
import { useCallback, useEffect, useRef } from 'react';

export const useInterval = (
  callback: Function,
  delay: number,
  duration: number
) => {
  const durationIntervalRef: IntervalRef = useRef(null);

  const durationRef = useRef(duration);

  const handler = useCallback(() => {
    callback(durationRef);
  }, [callback, durationRef]);

  useEffect(() => {
    const durationInterval: ReturnType<typeof setInterval> = setInterval(
      handler,
      delay
    );
    durationIntervalRef.current = durationInterval;
    return () => {
      clearInterval(durationInterval);
    };
  }, [delay, handler]);

  return [durationIntervalRef, durationRef];
};
