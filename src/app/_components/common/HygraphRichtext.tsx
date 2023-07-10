import { text } from '@/app/_styles/text';
import { RichText, RichTextProps } from '@graphcms/rich-text-react-renderer';
import { NextLink } from './NextLink';

export const HygraphRichtext = ({
  content,
  renderers = {},
  ...rest
}: RichTextProps) => {
  const options = {
    ...DEFAULT_OPTIONS,
    ...renderers,
  };

  return <RichText {...rest} content={content} renderers={options} />;
};

const DEFAULT_OPTIONS: RichTextProps['renderers'] = {
  p: ({ children }) => <p className={text({ size: 'regular' })}>{children}</p>,
  a: ({ children, href, ...rest }) => {
    if (!href) return <span>{children}</span>;

    return (
      <NextLink {...rest} href={href}>
        {children}
      </NextLink>
    );
  },
};
