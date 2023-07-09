import clsx from 'clsx';
import { tv } from 'tailwind-variants';

export const text = tv(
  {
    base: 'text-black leading-tight',
    variants: {
      font: {
        primary: 'font-primary',
        secondary: 'font-secondary',
      },
      weight: {
        regular: 'font-regular',
        medium: 'font-medium',
        bold: 'font-bold',
      },
      size: {
        xs: 'text-xs',
        regular: 'text-sm',
        lg: 'text-lg',
        xl: 'text-4xl',
      },
    },
    defaultVariants: {
      font: 'primary',
      weight: 'regular',
    },
  },
  {
    responsiveVariants: true,
  },
);

export const caps = clsx(
  'uppercase tracking-wider',
  text({ font: 'secondary', weight: 'medium', size: 'xs' }),
);
