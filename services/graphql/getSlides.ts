import { gql, request } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!;

const getSlides = async () => {
  const query = gql`
    query getPosts {
      posts(orderBy: createdAt_DESC, last: 3) {
        title
        excerpt
        slug
        featuredImg {
          url
        }
      }
    }
  `;

  const result: any = await request(graphqlAPI, query);
  return result.posts;
};

export default getSlides;
