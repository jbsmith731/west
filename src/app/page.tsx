import { serverFetch } from './graphql/client';
import {
  PageHomeIntroQuery,
  PageHomeIntroQueryVariables,
} from './graphql/generated/types.generated';
import { GET_HOME_INTRO_QUERY } from './graphql/queries/getHome';

export default async function Home() {
  const data = await serverFetch<
    PageHomeIntroQuery,
    PageHomeIntroQueryVariables
  >(GET_HOME_INTRO_QUERY);

  const { brands } = data?.pageHome ?? {};

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul>
        {brands?.map((brand, index) => (
          <li key={index}>{brand}</li>
        ))}
      </ul>
    </main>
  );
}
