import { useEffect, useRef, useState, type ReactNode } from 'react';
import './Reveal.css';

type RevealProps = {
  children: ReactNode;
  className?: string;
};

export default function Reveal({ children, className = '' }: RevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className={`reveal ${isVisible ? 'reveal--visible' : ''} ${className}`.trim()}>
      {children}
    </section>
  );
}
