import './Button.css';
import type { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary';
  external?: boolean;
};

export default function Button({ children, href, variant = 'primary', external = false }: ButtonProps) {
  const className = `button ${variant === 'primary' ? 'button--primary' : 'button--secondary'}`;

  if (href) {
    return (
      <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined} className={className}>
        {children}
      </a>
    );
  }

  return <button className={className}>{children}</button>;
}
