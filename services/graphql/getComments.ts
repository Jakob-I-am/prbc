import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!;

interface Comment {
  name: string;
  comment: string;
}

interface Comments {
  comments: Comment[];
}

export default async (slug: string) => {
  const query = gql`
    query GetComments($slug: String!) {
      comments(where: { post: { slug: $slug } }) {
        name
        comment
        createdAt
      }
    }
  `;

  const result: Comments = await request(graphqlAPI, query, { slug });

  return result.comments;
};
