'use server';

import { GraphQLClient, gql } from 'graphql-request';

import { Contact } from '@/lib/ActionsInterfaces';

export async function postContact({
  name,
  phone,
  message,
  email,
  messageStatus,
}: Contact) {
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
      $email: String!
      $messageStatus: MessageStatus!
    ) {
      createContact(
        data: {
          name: $name
          phoneNumber: $phoneNumber
          message: $message
          email: $email
          messageStatus: $messageStatus
        }
      ) {
        id
      }
    }
  `;

  try {
    await client.request(mutation, {
      name,
      phoneNumber: phone,
      message: message,
      email,
      messageStatus: messageStatus,
    });
    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
}
