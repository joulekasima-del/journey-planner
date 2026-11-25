import React from "react";

const paths = {
  verified: <path d="M4 12.5l5 5L20 6" />,
  synced: <><path d="M7 18a4.5 4.5 0 0 1-.5-8.98A6 6 0 0 1 18 8.5a4 4 0 0 1-1 7.5H7z" /><path d="M9.5 14.5L12 17l2.5-2.5M12 11v6" /></>,
  syncing: <><path d="M5 12a7 7 0 0 1 11.5-5.3M6.5 5v3.2H9.7" /><path d="M19 12a7 7 0 0 1-11.5 5.3M17.5 19v-3.2h-3.2" /></>,
  connected: <><path d="M4 8.5a12 12 0 0 1 16 0M7 11.8a7.5 7.5 0 0 1 10 0M10 15a3.2 3.2 0 0 1 4 0" /><circle cx="12" cy="18.3" r="1" fill="currentColor" stroke="none" /></>,
  offline: <><path d="M7 11.8a7.5 7.5 0 0 1 10 0M10 15a3.2 3.2 0 0 1 4 0M4.5 4.5l15 15" /><circle cx="12" cy="18.3" r="1" fill="currentColor" stroke="none" /></>,
  route: <path d="M5 19c3-6 5-6.5 6-11 .6-2.8 4-2.8 4.5 0 .5 3-2 5-5 6.5M15.5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />,
  ready: <><path d="M6 4v16M6 4.5c3-1.4 4.5.9 7 0s3.5.8 5 0v8.5c-1.5.8-2.5-1-5 0s-4-1.4-7 0" /><path d="M8.3 9l1.6 1.7 2.6-3" /></>,
  attention: <><path d="M12 4.5L20.5 19h-17z" /><path d="M12 10.3v3.6" /><circle cx="12" cy="16.6" r="0.9" fill="currentColor" stroke="none" /></>,
  selected: <><circle cx="12" cy="12" r="7.2" /><circle cx="12" cy="12" r="2.4" fill="currentColor" stroke="none" /></>,
  current: <path d="M12 4l1.7 4.9L19 10l-4 3.4L16 19l-4-2.8L8 19l1-5.6L5 10l5.3-1.1z" />,
};

export function Icon({ name, size = 20, color = "currentColor" }) {
  const p = paths[name];
  if (!p) return null;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      {p}
    </svg>
  );
}
