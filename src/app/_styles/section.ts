import clsx from 'clsx';
import { caps } from './text';

const sectionRoot = 'grid grid-flow-row gap-y-6 md:grid-cols-[260px_1fr]';

const sectionHeading = clsx(caps, 'md:top-4');

export const section = {
  root: sectionRoot,
  heading: sectionHeading,
};
