import { useActiveSectionContext } from '@/context/active-section-context';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import type { SectionName } from './types';

interface UseSectionInViewOptions {
  triggerOnce?: boolean;
}

export function useSectionInView(
  sectionName: SectionName,
  threshold = 0.75,
  options: UseSectionInViewOptions = {} // Provide default empty object to avoid undefined errors
) {
  const { triggerOnce = false } = options;
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
    inView,
  };
}
