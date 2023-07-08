import { RequestDocument, Variables, request } from 'graphql-request';

export const serverFetch = async <Tdata, Tvars extends Variables>(
  query: RequestDocument,
  variables?: Tvars,
) => {
  try {
    const req = await request<Tdata>(
      `https://api-us-east-1-shared-usea1-02.hygraph.com/v2/${process.env.CMS_SPACE}/${process.env.CMS_ENV}`,
      query,
    );

    return req;
  } catch (err) {
    return null;
  }
};
