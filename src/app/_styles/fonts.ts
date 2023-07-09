import { IBM_Plex_Mono, Manrope } from 'next/font/google';

export const fontPlexMono = IBM_Plex_Mono({
  display: 'swap',
  weight: '500',
  style: 'normal',
  subsets: ['latin'],
  variable: '--font-plexmono',
});

export const fontManrope = Manrope({
  display: 'swap',
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-manrope',
});
