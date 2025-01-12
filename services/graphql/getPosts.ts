import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!;

export interface Post {
  postType: string[];
  id: string;
  title: string;
  featuredImg: {
    url: string;
  };
  excerpt: string;
  content: any;
  featuredPost: boolean;
  slug: string;
  images?: any;
  contentEditor: ContentEditor;
  categories: Category[];
  comments: Comment[];
  createdAt: Date;
}

interface Posts {
  posts: Post[];
}

export interface ContentEditor {
  fullName: string;
  image: string;
  bio: string;
  posts: Post[];
}

export interface Category {
  name: string;
  slug: string;
  posts: Post[];
}

export default async () => {
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

  const results: Posts = await request(graphqlAPI, query);
  return results.posts;
};
