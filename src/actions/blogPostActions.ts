'use server';

import { request, gql } from 'graphql-request';

import { Post, PostData } from '@/lib/ActionsInterfaces';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!;

type Posts = {
  posts: Post[];
};

export async function getPosts() {
  const query = gql`
    query getPosts {
      posts(orderBy: createdAt_DESC) {
        id
        title
        excerpt
        content {
          json
        }
        slug
        featuredImg {
          url
        }
        createdAt
        postType
      }
    }
  `;

  const { posts }: Posts = await request(graphqlAPI, query);
  return posts;
}

export async function getPostSlides() {
  const query = gql`
    query getPosts {
      posts(orderBy: createdAt_DESC, last: 9) {
        title
        slug
        createdAt
        excerpt
        featuredImg {
          url
        }
      }
    }
  `;

  const { posts }: Posts = await request(graphqlAPI, query);
  return posts;
}

export async function getRecentPosts() {
  const query = gql`
    query getPosts {
      posts(last: 3, orderBy: createdAt_DESC) {
        id
        title
        excerpt
        content {
          raw
        }
        slug
        featuredImg {
          url
        }
        createdAt
        postType
      }
    }
  `;

  const { posts }: Posts = await request(graphqlAPI, query);
  return posts;
}

export async function getPostDetails(slug: string) {
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
        createdBy {
          name
        }
        featuredImg {
          url
          width
          height
        }
        images {
          url
          width
          height
        }
        content {
          json
        }
      }
      comments(where: { post: { slug: $slug } }) {
        id
        name
        createdAt
        comment
      }
    }
  `;

  const { post, comments }: PostData = await request(graphqlAPI, query, {
    slug,
  });
  return { post, comments };
}

export async function getBowlsPosts() {
  const query = gql`
    query getBowlsPosts {
      posts(orderBy: createdAt_DESC, where: { postType_contains_some: Bowls }) {
        id
        title
        excerpt
        content {
          json
        }
        slug
        featuredImg {
          url
        }
        createdAt
      }
    }
  `;

  const { posts }: Posts = await request(graphqlAPI, query);
  return posts;
}

export async function getEventPosts() {
  const query = gql`
    query getBowlsPosts {
      posts(
        orderBy: createdAt_DESC
        where: { postType_contains_some: Events }
      ) {
        id
        title
        excerpt
        content {
          json
        }
        slug
        featuredImg {
          url
        }
        createdAt
      }
    }
  `;

  const { posts }: Posts = await request(graphqlAPI, query);
  return posts;
}
