'use server';

import { GraphQLClient, gql } from 'graphql-request';

import { Comment } from '@/lib/ActionsInterfaces';

export async function postComment({ name, comment, slug }: Comment) {
  const client = new GraphQLClient(
    `${process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!}`,
    {
      headers: {
        authorization: `Bearer ${process.env.NEXT_PUBLIC_GRAPHCMS_TOKEN}`,
      },
    }
  );

  const mutation = gql`
    mutation createComment($name: String!, $comment: String!, $slug: String!) {
      createComment(
        data: {
          name: $name
          comment: $comment
          post: { connect: { slug: $slug } }
        }
      ) {
        id
      }
    }
  `;

  try {
    await client.request(mutation, { name, comment, slug });
    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
}
