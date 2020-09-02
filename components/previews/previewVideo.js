import { default as YouTubePlayer } from "react-player/youtube";
import { default as GifPlayer } from "react-player/lazy";

export const PreviewVideo = ({ url }) => {
  return (
    <div className="w-full h-56 sm:h-80 md:h-full">
      <YouTubePlayer
        className="object-cover"
        url={url}
        width="100%"
        height="100%"
        controls={true}
      />
    </div>
  );
};

export const PreviewGif = ({ url }) => {
  return (
    <div className="w-full h-full">
      <GifPlayer
        url={url}
        controls={true}
        loop={true}
        width="100%"
        height="100%"
      />
    </div>
  );
};
