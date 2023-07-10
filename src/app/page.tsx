import { RichText } from '@graphcms/rich-text-react-renderer';
import clsx from 'clsx';
import { Suspense } from 'react';
import { HomeContent } from './_components/home/HomeContent';
import { serverFetch } from './_graphql/client';
import {
  PageHomeContentQuery,
  PageHomeIntroQuery,
  PageHomeIntroQueryVariables,
} from './_graphql/generated/types.generated';
import {
  GET_HOME_CONTENT_QUERY,
  GET_HOME_INTRO_QUERY,
} from './_graphql/queries/getHome';
import { section } from './_styles/section';
import { caps, text } from './_styles/text';

export default async function Home() {
  const introData = serverFetch<
    PageHomeIntroQuery,
    PageHomeIntroQueryVariables
  >(GET_HOME_INTRO_QUERY);

  const contentPromise = serverFetch<
    PageHomeContentQuery,
    PageHomeIntroQueryVariables
  >(GET_HOME_CONTENT_QUERY);

  const data = await introData;
  const { brands, introContent } = data?.pageHome ?? {};

  return (
    <main className="space-y-20 md:space-y-32">
      <section className={clsx(section.root, 'pt-20 md:pt-32')}>
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

      {brands ? (
        <section className={section.root}>
          <h2 className={section.heading}>Brands</h2>
          <ul>
            {brands.map((brand, index) => (
              <li className={caps} key={index}>
                {brand}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <Suspense fallback={<div>Loading</div>}>
        <HomeContent promise={contentPromise} />
      </Suspense>
    </main>
  );
}
