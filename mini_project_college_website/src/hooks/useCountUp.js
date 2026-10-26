import { useEffect, useState } from 'react';
import useInView from './useInView';

export default function useCountUp(end, { duration = 1400, enabled = true, decimals = 0 } = {}) {
  const [ref, inView] = useInView();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!enabled || !inView || typeof end !== 'number') return undefined;

    let frame;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setValue(Number((eased * end).toFixed(decimals)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [end, duration, enabled, inView, decimals]);

  return [ref, typeof end === 'number' ? value : end, inView];
}
