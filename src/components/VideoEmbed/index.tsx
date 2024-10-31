import React, { DetailedHTMLProps, IframeHTMLAttributes } from "react";

interface VideoProps {
  videoUrl: string;
  width?: string;
  height?: string;
}

const VideoEmbed: React.FC<VideoProps> = ({
  videoUrl,
  width = "100%",
  height = "315",
}) => {
  return (
    <div className="relative pb-[56.25%] h-0">
      <iframe
        width={width}
        height={height}
        src={`https://www.youtube.com/embed/${videoUrl}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className="absolute top-0 left-0 w-full h-full"
        frameBorder="0"
      />
    </div>
  );
};

export default VideoEmbed;
