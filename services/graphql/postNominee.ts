import { GraphQLClient, gql } from 'graphql-request';

interface NomineeBody {
  body: {
    name: string;
    phone: string;
    option: string;
  };
}

export default async ({ body }: NomineeBody) => {
  const client = new GraphQLClient(
    `${process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!}`,
    {
      headers: {
        authorization: `Bearer ${process.env.NEXT_PUBLIC_GRAPHCMS_TOKEN}`,
      },
    }
  );

  const mutation = gql`
    mutation createNominee(
      $name: String!
      $phoneNumber: String!
      $selectOption: String!
    ) {
      createNominee(
        data: {
          name: $name
          phoneNumber: $phoneNumber
          selectOption: $selectOption
        }
      ) {
        name
        phoneNumber
        selectOption
      }
    }
  `;

  const data = {
    name: body.name,
    phoneNumber: body.phone,
    selectOption: body.option,
  };

  try {
    await client.request(mutation, data);
    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
};
