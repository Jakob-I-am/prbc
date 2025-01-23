import { RichTextContent } from '@graphcms/rich-text-types';

export interface Post {
  postType: string[];
  id: string;
  title: string;
  featuredImg: {
    url: string;
  };
  createdBy: {
    name: string;
  };
  excerpt: string;
  content: {
    json: RichTextContent;
  };
  featuredPost: boolean;
  slug: string;
  images?: string[];
  contentEditor: ContentEditor;
  categories: Category[];
  createdAt: Date;
}

export interface PostComment {
  id: string;
  name: string;
  comment: string;
  slug: string;
  createdAt: Date;
}

export interface Comment {
  name: string;
  comment: string;
  slug: string;
}

export interface PostData {
  post: {
    postType: string[];
    id: string;
    title: string;
    featuredImg: {
      url: string;
    };
    createdBy: {
      name: string;
    };
    excerpt: string;
    content: {
      json: RichTextContent;
    };
    featuredPost: boolean;
    slug: string;
    images?: string[];
    contentEditor: ContentEditor;
    categories: Category[];
    createdAt: Date;
  };
  comments: PostComment[];
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

export interface PostSlide {
  title: string;
  slug: string;
  excerpt: string;
  featuredImg: {
    url: string;
  };
  createdAt: Date;
}

export interface Contact {
  firstName: string;
  lastName: string;
  phone: string;
  message: string;
  email: string;
  messageStatus: string;
  enquiry: string[];
}

export interface Nominee {
  name: string;
  phone: string;
  option: string[];
}

export interface GalleryImage {
  imageName: string;
  description: string;
  image: {
    url: string;
    width: number;
    height: number;
  };
}

export interface Image {
  image: {
    url: string;
  };
  description: string;
  imageName: string;
}
