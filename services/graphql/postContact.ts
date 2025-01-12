import { GraphQLClient, gql } from 'graphql-request';

interface ContactBody {
  body: {
    name: string;
    phone: string;
    message: string;
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
    mutation createContact(
      $name: String!
      $phoneNumber: String!
      $message: String!
    ) {
      createContact(
        data: { name: $name, phoneNumber: $phoneNumber, message: $message }
      ) {
        name
        phoneNumber
        message
      }
    }
  `;

  const data = {
    name: body.name,
    phoneNumber: body.phone,
    message: body.message,
  };

  try {
    await client.request(mutation, data);
    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
};
