import { caps } from '../_styles/text';

export const Header = () => {
  return (
    <header>
      <h1 className={caps}>
        Westley
        <br /> Ferguson
      </h1>

      <div>
        <a className={caps} href="mailto:westleyaaronferguson@gmail.com">
          westleyaaronferguson@gmail.com
        </a>
        <br />
        <a className={caps} href="tel:321-278-2039">
          321 278 2039
        </a>
      </div>

      <ul>
        <li className={listItem}>
          <a className={caps} href="">
            Portfolio
          </a>
        </li>
        <li className={listItem}>
          <a className={caps} href="">
            Instagram
          </a>
        </li>
      </ul>
    </header>
  );
};

const listItem = 'before:content-["-"] before:pr-[0.5ch]';
