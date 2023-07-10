import { caps } from '../../_styles/text';
import { NextLink } from './NextLink';

export const Header = () => {
  return (
    <header>
      <h1 className={caps}>
        Westley
        <br /> Ferguson
      </h1>

      <div>
        <NextLink className={caps} href="mailto:westleyaaronferguson@gmail.com">
          westleyaaronferguson@gmail.com
        </NextLink>
        <br />
        <NextLink className={caps} href="tel:321-278-2039">
          321 278 2039
        </NextLink>
      </div>

      <ul>
        <li className={headerListItem}>
          <NextLink className={caps} href="">
            Portfolio
          </NextLink>
        </li>
        <li className={headerListItem}>
          <NextLink className={caps} href="">
            Instagram
          </NextLink>
        </li>
      </ul>
    </header>
  );
};

const headerListItem = 'before:content-["-"] before:pr-[0.5ch]';
