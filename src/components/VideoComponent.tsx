import { list } from '@vercel/blob';

export async function VideoComponent({ fileName }: { fileName: string }) {
  const { blobs } = await list({
    prefix: fileName,
    limit: 1,
  });
  const { url } = blobs[0];

  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      preload='none'
      aria-label='Video player'
      width='100%'
    >
      <source
        src={url}
        type='video/mp4'
      />
      Your browser does not support the video tag.
    </video>
  );
}
