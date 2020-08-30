import { default as YouTubePlayer } from "react-player/youtube";
import { default as GifPlayer } from "react-player/file";

export const PreviewVideo = ({ url }) => {
  return (
    <div className="w-160 h-90">
      <YouTubePlayer
        className="object-cover w-full h-full bg-transparent"
        url={url}
        width="100%"
        height="100%"
      />
    </div>
  );
};

export const PreviewGif = ({ url }) => {
  return <GifPlayer url={url} />;
};
