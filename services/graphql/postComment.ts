import { GraphQLClient, gql } from 'graphql-request';

interface ContactBody {
  body: {
    name: string;
    comment: string;
    slug: string;
  };
}

export default async ({ body }: ContactBody) => {
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
        name
        comment
      }
    }
  `;

  const data = {
    name: body.name,
    comment: body.comment,
    slug: body.slug,
  };

  try {
    await client.request(mutation, data);
    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
};
