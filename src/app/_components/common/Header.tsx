import { caps } from '../../_styles/text';
import { NextLink } from './NextLink';

export const Header = () => {
  return (
    <header className="grid grid-cols-2 gap-y-3 md:grid-cols-[260px_1fr_1fr]">
      <h1 className={caps}>
        Westley
        <br />
        Ferguson
      </h1>

      <ul className="max-md:text-right">
        <li>
          <NextLink
            className={caps}
            href="mailto:westleyaaronferguson@gmail.com"
          >
            Email
          </NextLink>
        </li>
        <li>
          <NextLink className={caps} href="tel:321-278-2039">
            321 278 2039
          </NextLink>
        </li>
      </ul>

      <ul className="text-right max-md:col-span-2">
        <li className={headerListItem}>
          <NextLink
            className={caps}
            href="https://westleyferguson.myportfolio.com/"
          >
            Portfolio
          </NextLink>
        </li>
        <li className={headerListItem}>
          <NextLink
            className={caps}
            href="https://www.instagram.com/westleyaaronferguson/"
          >
            Instagram
          </NextLink>
        </li>
      </ul>
    </header>
  );
};

const headerListItem = 'before:content-["-"] before:pr-[0.5ch]';
