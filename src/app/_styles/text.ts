import clsx from 'clsx';
import { tv } from 'tailwind-variants';

export const text = tv(
  {
    base: 'text-black',
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
        xs: 'text-xs/tight',
        regular: 'text-sm/tight',
        lg: 'text-lg/tight',
        xl: 'text-4xl/tight',
      },
    },
    defaultVariants: {
      font: 'primary',
      weight: 'regular',
      size: 'regular',
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
