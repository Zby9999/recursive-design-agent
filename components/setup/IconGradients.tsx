export const activeIconGradients = {
  download: "url(#download-active-icon-gradient)",
  folder: "url(#folder-active-icon-gradient)",
  robot: "url(#robot-active-icon-gradient)"
};

export function IconGradients() {
  return (
    <svg
      aria-hidden="true"
      className="icon-gradients"
      focusable="false"
      height="0"
      width="0"
    >
      <defs>
        <linearGradient id="download-active-icon-gradient" x1="0" x2="0" y1="0" y2="1">
          <stop stopColor="white" />
          <stop offset="1" stopColor="#FBC8E0" />
        </linearGradient>
        <linearGradient id="folder-active-icon-gradient" x1="0" x2="0" y1="0" y2="1">
          <stop stopColor="white" />
          <stop offset="1" stopColor="#B4D5FF" />
        </linearGradient>
        <linearGradient id="robot-active-icon-gradient" x1="0" x2="0" y1="0" y2="1">
          <stop stopColor="white" />
          <stop offset="1" stopColor="#C9C5F7" />
        </linearGradient>
      </defs>
    </svg>
  );
}
