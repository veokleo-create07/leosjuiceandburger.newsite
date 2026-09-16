import type { AnchorHTMLAttributes, ReactNode } from 'react';

import { cn } from '@/lib/utils';

type SiteButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'compact' | 'default' | 'large';
};

export function SiteButtonLink({
  children,
  className,
  variant = 'primary',
  size = 'default',
  ...props
}: SiteButtonLinkProps) {
  return (
    <a
      className={cn('site-button', `site-button--${variant}`, `site-button--${size}`, className)}
      {...props}
    >
      {children}
    </a>
  );
}
