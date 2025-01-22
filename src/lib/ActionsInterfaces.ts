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
  comment: Comment[];
  createdAt: Date;
}

export interface Comment {
  id: string;
  name: string;
  email: string;
  comment: string;
  createdAt: Date;
}

export interface PostData {
  post: {
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
  };
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

export interface CommentBody {
  body: {
    name: string;
    comment: string;
    slug: string;
  };
}

export interface ContactBody {
  body: {
    name: string;
    phone: string;
    message: string;
    email: string;
    messageStatus: string;
  };
}

export interface NomineeBody {
  body: {
    name: string;
    phone: string;
    option: string[];
  };
}

export interface GalleryImage {
  imageName: string;
  description: string;
  image: {
    url: string;
  };
}

export interface Image {
  image: {
    url: string;
  };
  description: string;
  imageName: string;
}
