const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const iconMap = {
  add: (props) => <path d="M12 5v14M5 12h14" {...props} />,
  all_inclusive: (props) => <path d="M7.5 8.5c1.4 0 2.9.7 4.5 2 1.6-1.3 3.1-2 4.5-2 1.9 0 3.5 1.6 3.5 3.5S18.4 15.5 16.5 15.5c-1.4 0-2.9-.7-4.5-2-1.6 1.3-3.1 2-4.5 2C5.6 15.5 4 13.9 4 12s1.6-3.5 3.5-3.5Z" {...props} />,
  arrow_forward: (props) => <path d="M5 12h13m-4-4 4 4-4 4" {...props} />,
  auto_awesome: (props) => (
    <>
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" {...props} />
      <path d="M18 3.5l.8 2.4 2.4.8-2.4.8-.8 2.4-.8-2.4-2.4-.8 2.4-.8.8-2.4Z" {...props} />
    </>
  ),
  biotech: (props) => (
    <>
      <circle cx="12" cy="12" r="2.2" {...props} />
      <path d="M7.5 8.8C9 7.4 10.5 6.7 12 6.7s3 .7 4.5 2.1M7.5 15.2C9 16.6 10.5 17.3 12 17.3s3-.7 4.5-2.1M8.2 6.8c-1 1.1-1.5 2.4-1.5 3.8s.5 2.7 1.5 3.8M15.8 6.8c1 1.1 1.5 2.4 1.5 3.8s-.5 2.7-1.5 3.8" {...props} />
    </>
  ),
  bolt: (props) => <path d="M13.5 2 5 13h5l-1 9 9-11h-5l.5-9Z" {...props} />,
  camera: (props) => (
    <>
      <path d="M4 7h3l2-2h6l2 2h3v12H4V7Z" {...props} />
      <circle cx="12" cy="13" r="3.2" {...props} />
    </>
  ),
  call: (props) => <path d="M7.5 4.5c-1.1 0-2 .9-2 2 0 7.2 5.8 13 13 13 1.1 0 2-.9 2-2v-2.2c0-.8-.6-1.5-1.4-1.6l-3.2-.4c-.7-.1-1.3.2-1.7.8l-.8 1.2a10.8 10.8 0 0 1-4.4-4.4l1.2-.8c.6-.4.9-1 .8-1.7l-.4-3.2c-.1-.8-.8-1.4-1.6-1.4H7.5Z" {...props} />,
  chevron_left: (props) => <path d="M14.5 5.5 9 12l5.5 6.5" {...props} />,
  chevron_right: (props) => <path d="M9.5 5.5 15 12l-5.5 6.5" {...props} />,
  check_circle: (props) => (
    <>
      <circle cx="12" cy="12" r="8.25" {...props} />
      <path d="m8.5 12.5 2.3 2.3 4.7-5.3" {...props} />
    </>
  ),
  close: (props) => <path d="M6 6 18 18M18 6 6 18" {...props} />,
  code: (props) => <path d="M10 7 5 12l5 5M14 7l5 5-5 5" {...props} />,
  dark_mode: (props) => <path d="M16.7 14.7a7 7 0 1 1-7.4-10.9 8.5 8.5 0 0 0 9.8 11.2c-.7 0-1.7-.1-2.4-.3Z" {...props} />,
  east: (props) => <path d="M5 12h14m-4-4 4 4-4 4" {...props} />,
  eco: (props) => <path d="M18 4c-7.7.5-12 4.8-12 10.5A5.5 5.5 0 0 0 11.5 20C17.2 20 21.5 15.7 22 8c-2.3 0-4.3.2-6 1-2.6 1.1-4.8 3.3-6 6 1-4 3.8-6.8 8-11Z" {...props} />,
  expand_more: (props) => <path d="m6 9 6 6 6-6" {...props} />,
  filter_vintage: (props) => (
    <>
      <circle cx="12" cy="12" r="2.2" {...props} />
      <path d="M12 4.5v2.3M12 17.2v2.3M4.5 12h2.3M17.2 12h2.3M6.5 6.5l1.6 1.6M15.9 15.9l1.6 1.6M17.5 6.5l-1.6 1.6M8.1 15.9l-1.6 1.6" {...props} />
    </>
  ),
  local_shipping: (props) => (
    <>
      <path d="M3.5 7.5h10v9h-10z" {...props} />
      <path d="M13.5 10h3l3 3v3h-6v-6Z" {...props} />
      <circle cx="7" cy="17" r="1.6" {...props} />
      <circle cx="17" cy="17" r="1.6" {...props} />
    </>
  ),
  location_on: (props) => <path d="M12 21s6-5.6 6-11a6 6 0 0 0-12 0c0 5.4 6 11 6 11Zm0-8a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" {...props} />,
  mail: (props) => (
    <>
      <path d="M4 7h16v10H4z" {...props} />
      <path d="m4.5 7.5 7.5 6 7.5-6" {...props} />
    </>
  ),
  menu: (props) => <path d="M4 6h16M4 12h16M4 18h16" {...props} />,
  palette: (props) => (
    <>
      <path d="M12 4a8 8 0 1 0 0 16c.9 0 1.5-.4 1.5-1.1 0-.5-.3-.9-.8-1.2-.5-.3-.8-.7-.8-1.2 0-1 .9-1.7 2-1.7h1.7c2.4 0 4.4-1.8 4.4-4.2C20 6.5 16.4 4 12 4Z" {...props} />
      <circle cx="8.2" cy="9.2" r=".9" fill="currentColor" stroke="none" />
      <circle cx="7.3" cy="13.2" r=".9" fill="currentColor" stroke="none" />
      <circle cx="10.1" cy="15.3" r=".9" fill="currentColor" stroke="none" />
    </>
  ),
  pan_tool: (props) => (
    <path d="M8 12.5V8.8a1.1 1.1 0 1 1 2.2 0V12M10.2 12V7.7a1.1 1.1 0 1 1 2.2 0V12M12.4 12V8.8a1.1 1.1 0 1 1 2.2 0V13M14.6 13.5l-.1-5.1a1.1 1.1 0 1 1 2.2 0v5.3c0 2.7-2.2 5-4.9 5H11c-1.7 0-3.1-.8-4-2.2L5 13.5" {...props} />
  ),
  phone: (props) => <path d="M7.5 4.5c-1.1 0-2 .9-2 2 0 7.2 5.8 13 13 13 1.1 0 2-.9 2-2v-2.2c0-.8-.6-1.5-1.4-1.6l-3.2-.4c-.7-.1-1.3.2-1.7.8l-.8 1.2a10.8 10.8 0 0 1-4.4-4.4l1.2-.8c.6-.4.9-1 .8-1.7l-.4-3.2c-.1-.8-.8-1.4-1.6-1.4H7.5Z" {...props} />,
  photo_camera: (props) => (
    <>
      <path d="M6 8h12l1.5 2H20v9H4v-9h.5L6 8Z" {...props} />
      <circle cx="12" cy="13" r="3.2" {...props} />
    </>
  ),
  rocket_launch: (props) => <path d="M13.5 4.5c3 0 5.8 2.8 5.8 5.8 0 3.9-2.7 7.8-8.6 9.7l-1.4-3.2L6 16.5c1.9-5.9 5.8-8.6 9.7-8.6 0-1.2-.2-2.3-.6-3.4-.3-.7-.9-1.1-1.6-1Z" {...props} />,
  schedule: (props) => (
    <>
      <circle cx="12" cy="12" r="8" {...props} />
      <path d="M12 8v4l3 2" {...props} />
    </>
  ),
  search: (props) => (
    <>
      <circle cx="11" cy="11" r="5.5" {...props} />
      <path d="m15 15 4 4" {...props} />
    </>
  ),
  share: (props) => (
    <>
      <circle cx="18" cy="6" r="2" {...props} />
      <circle cx="6" cy="12" r="2" {...props} />
      <circle cx="18" cy="18" r="2" {...props} />
      <path d="M7.8 11.2 16.2 7M7.8 12.8 16.2 17" {...props} />
    </>
  ),
  shopping_cart: (props) => (
    <>
      <path d="M5 5h2l2 9h8l2-6H8" {...props} />
      <circle cx="10" cy="19" r="1.6" {...props} />
      <circle cx="17" cy="19" r="1.6" {...props} />
    </>
  ),
  south: (props) => <path d="M12 4v12m0 0-5-5m5 5 5-5" {...props} />,
  terminal: (props) => (
    <>
      <path d="M4 6h16v12H4z" {...props} />
      <path d="M7 10l3 2-3 2m5 2h4" {...props} />
    </>
  ),
  trending_flat: (props) => <path d="M5 12h14m-4-4 4 4-4 4" {...props} />,
  verified: (props) => (
    <>
      <circle cx="12" cy="12" r="8" {...props} />
      <path d="m8.4 12.4 2.2 2.2 4.9-5.6" {...props} />
    </>
  ),
  visibility: (props) => (
    <>
      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z" {...props} />
      <circle cx="12" cy="12" r="2.4" {...props} />
    </>
  ),
  west: (props) => <path d="M19 12H5m4 4-4-4 4-4" {...props} />,
  workspace_premium: (props) => (
    <>
      <path d="M12 3.5 15.2 5l3.2.5-.8 3 .8 3-3.2.5L12 16.5 8.8 12l-3.2-.5.8-3-.8-3L8.8 5 12 3.5Z" {...props} />
      <path d="M9.5 12.2 11.2 14l3.4-3.8" {...props} />
    </>
  ),
};

export function Icon({ name, className = "", title, strokeWidth = 2 }) {
  const renderIcon = iconMap[name];

  if (!renderIcon) {
    return null;
  }

  const props = {
    ...stroke,
    strokeWidth,
  };

  return (
    <svg
      aria-hidden={title ? undefined : true}
      aria-label={title}
      focusable="false"
      role={title ? "img" : "presentation"}
      viewBox="0 0 24 24"
      className={className}
      style={{ width: "1em", height: "1em", flexShrink: 0 }}
    >
      {renderIcon(props)}
    </svg>
  );
}
