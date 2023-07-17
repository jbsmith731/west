import Link, { LinkProps } from 'next/link';
import { tv } from 'tailwind-variants';

interface NextLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
}

export const NextLink = ({ children, className, ...rest }: NextLinkProps) => {
  return (
    <Link {...rest} className={styledLink({ className })}>
      {children}
    </Link>
  );
};

const styledLink = tv({
  base: 'relative before:content-[""] before:absolute before:block before:w-full before:h-[1px] before:bottom-[0] before:left-0 before:bg-black before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition-transform',
});
