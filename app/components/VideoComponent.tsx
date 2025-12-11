type props = {
  source: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
};
export function VideoComponent(props: props) {
  return (
    <video width="320" height="240" controls preload="none" autoPlay loop muted>
      <source src={props.source} type="video/mp4" {...props} />
      <track
        src="/path/to/captions.vtt"
        kind="subtitles"
        srcLang="en"
        label="English"
      />
      Your browser does not support the video tag.
    </video>
  );
}
