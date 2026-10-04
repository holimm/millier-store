import { isEmpty } from "lodash";

export const VideoPlayer = ({
  urlVideo,
  extraClass,
}: {
  urlVideo: string;
  extraClass?: string;
}) => {
  return (
    <video
      className={`h-full w-full object-cover ${
        !isEmpty(extraClass) ? extraClass : ""
      }`}
      controls={false}
      muted
      loop
      autoPlay
      playsInline
    >
      <source src={urlVideo} type="video/mp4" />
      Your browser doesn&apos;t support HTML5 video tag.
    </video>
  );
};

/** Local Apple CDN videos for category pages (no YouTube). */
export const CategoryVideoPlayer = ({
  urlVideo,
  sources,
  extraClass,
}: {
  urlVideo?: string;
  sources?: { src: string; type: string }[];
  extraClass?: string;
}) => {
  const resolvedSources =
    sources && sources.length > 0
      ? sources
      : urlVideo
        ? [
            {
              src: urlVideo,
              type: urlVideo.endsWith(".webm") ? "video/webm" : "video/mp4",
            },
          ]
        : [];

  return (
    <div
      className={`overflow-hidden bg-black aspect-video ${
        !isEmpty(extraClass) ? extraClass : ""
      }`}
    >
      <video
        className="h-full w-full object-cover"
        muted
        autoPlay
        loop
        playsInline
        preload="metadata"
      >
        {resolvedSources.map((source) => (
          <source key={source.src} src={source.src} type={source.type} />
        ))}
        Your browser doesn&apos;t support HTML5 video tag.
      </video>
    </div>
  );
};

/** @deprecated Prefer CategoryVideoPlayer with local assets */
export const VideoPlayerYoutube = ({
  urlVideo,
  extraClass,
}: {
  urlVideo: string;
  extraClass?: string;
}) => {
  return (
    <iframe
      className={`aspect-video ${!isEmpty(extraClass) && extraClass}`}
      width="100%"
      height="100%"
      src={urlVideo}
    ></iframe>
  );
};
