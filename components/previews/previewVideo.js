import { default as YouTubePlayer } from "react-player/youtube";
import { default as GifPlayer } from "react-player/lazy";

export const PreviewVideo = ({ url }) => {
  return (
    <div className="w-160 h-90">
      <YouTubePlayer
        className="object-cover w-full h-full bg-transparent"
        url={url}
        width="100%"
        height="100%"
        controls={true}
      />
    </div>
  );
};

export const PreviewGif = ({ url }) => {
  return <GifPlayer url={url} controls={true} loop={true} />;
};
