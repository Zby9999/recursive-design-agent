export function AgentIcon({
  src,
  className = ""
}: {
  src: string;
  className?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={`agent-icon ${className}`.trim()}
      src={src}
      alt=""
      aria-hidden="true"
    />
  );
}
