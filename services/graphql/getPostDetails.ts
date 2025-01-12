import { request, gql } from 'graphql-request';
import { Post } from './getPosts';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!;

export default async (slug: string) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        createdAt
        slug
        title
        excerpt
        postType
        id
        featuredPost
        featuredImg {
          url
        }
        images {
          url
        }
        content {
          json
        }
        comments(last: 5) {
          comment
          createdAt
          name
        }
      }
    }
  `;

  const result: any = await request(graphqlAPI, query, { slug });
  return result.post;
};
