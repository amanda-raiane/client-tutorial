import React from "react";

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
        src={videoUrl}
        frameBorder="0"
        allowFullScreen
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};

export default VideoEmbed;
