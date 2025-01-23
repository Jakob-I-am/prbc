'use server';

import { gql, request } from 'graphql-request';

import { GalleryImage } from '@/lib/ActionsInterfaces';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!;

type GalleryImages = {
  galleryImages: GalleryImage[];
};

export async function getGalleryImages() {
  const query = gql`
    query getGalleryImages {
      galleryImages(last: 20, orderBy: createdAt_DESC) {
        imageName
        description
        image {
          url
          width
          height
        }
      }
    }
  `;

  const { galleryImages }: GalleryImages = await request(graphqlAPI, query);
  return galleryImages;
}

export async function getRecentImages() {
  const query = gql`
    query getGalleryImages {
      galleryImages(last: 5, orderBy: createdAt_DESC) {
        imageName
        description
        image {
          url
        }
      }
    }
  `;

  const { galleryImages }: GalleryImages = await request(graphqlAPI, query);
  return galleryImages;
}
