export async function VideoComponent({ fileName }: { fileName: string }) {
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
        src={fileName}
        type='video/mp4'
      />
      Your browser does not support the video tag.
    </video>
  );
}
