'use server';

import { GraphQLClient, gql } from 'graphql-request';

import { NomineeBody } from '@/lib/ActionsInterfaces';

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
      $selectOption: [String!]!
    ) {
      createNominee(
        data: {
          name: $name
          phoneNumber: $phoneNumber
          selectOption: $selectOption
        }
      ) {
        id
      }
    }
  `;

  const { name, phone, option } = body;

  try {
    await client.request(mutation, {
      name,
      phoneNumber: phone,
      selectOption: option,
    });
    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
};
