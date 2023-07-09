import { RichText } from '@graphcms/rich-text-react-renderer';
import clsx from 'clsx';
import { serverFetch } from './_graphql/client';
import {
  PageHomeIntroQuery,
  PageHomeIntroQueryVariables,
} from './_graphql/generated/types.generated';
import { GET_HOME_INTRO_QUERY } from './_graphql/queries/getHome';
import { section } from './_styles/section';
import { caps, text } from './_styles/text';

export default async function Home() {
  const introData = serverFetch<
    PageHomeIntroQuery,
    PageHomeIntroQueryVariables
  >(GET_HOME_INTRO_QUERY);

  const data = await introData;

  const { brands, introContent } = data?.pageHome ?? {};

  return (
    <main className="space-y-32">
      <section className={clsx(section.root, 'pt-32')}>
        <h2 className={section.heading}>About</h2>
        <RichText
          content={introContent?.raw}
          renderers={{
            p: ({ children }) => (
              <p
                className={text({
                  size: { initial: 'lg', md: 'xl' },
                  weight: 'bold',
                })}
              >
                {children}
              </p>
            ),
          }}
        />
      </section>

      <section className={section.root}>
        <h2 className={section.heading}>Brands</h2>
        <ul>
          {brands?.map((brand, index) => (
            <li className={caps} key={index}>
              {brand}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
