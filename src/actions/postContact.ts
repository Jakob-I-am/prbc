'use server';

import { GraphQLClient, gql } from 'graphql-request';

import { Contact } from '@/lib/ActionsInterfaces';

export async function postContact({
  firstName,
  lastName,
  phone,
  email,
  enquiry,
  message,
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
      $firstName: String!
      $lastName: String!
      $phoneNumber: String!
      $message: String!
      $email: String!
      $messageStatus: MessageStatus!
      $enquiry: [String!]!
    ) {
      createContact(
        data: {
          firstName: $firstName
          lastName: $lastName
          enquiry: $enquiry
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
      firstName,
      lastName,
      phoneNumber: phone,
      email,
      enquiry,
      message: message,
      messageStatus: messageStatus,
    });
    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
}
