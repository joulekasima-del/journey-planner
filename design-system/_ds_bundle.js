/* @ds-bundle: {"format":4,"namespace":"JPProductFoundationJourneyPlannerDesignSystem_e30f18","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"ActionCard","sourcePath":"components/feedback/ActionCard.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"b901ca91826f","components/core/Button.jsx":"d0c063705bf1","components/core/Card.jsx":"0f56e15465ea","components/core/Icon.jsx":"0f0c23aa7dcd","components/core/IconButton.jsx":"0eecbdcde832","components/core/Tag.jsx":"f6b3ea38ba81","components/feedback/ActionCard.jsx":"48546a177060","components/feedback/Dialog.jsx":"7b696ed3fe08","components/feedback/Toast.jsx":"61e514ab5dbe","components/feedback/Tooltip.jsx":"c9375465a5bf","components/forms/Checkbox.jsx":"adca92f184c6","components/forms/Input.jsx":"71c4ee85747f","components/forms/Radio.jsx":"591be3798d2e","components/forms/Select.jsx":"3aa373545e4c","components/forms/Switch.jsx":"0cba60e49dcb","components/navigation/Tabs.jsx":"5c3883a2d4cc","doc-page.js":"371bab66f42d","ui_kits/explorer/DiscoveryLanding.jsx":"cafd865191bf","ui_kits/explorer/ExperienceDetail.jsx":"49c5d6219076","ui_kits/explorer/JourneyCompass.jsx":"b006af9cbb1a","ui_kits/explorer/JourneyDay.jsx":"ca0fc9dabf86","ui_kits/explorer/JourneysList.jsx":"283ed3a3d4df","ui_kits/explorer/PhoneFrame.jsx":"081a25f783ba"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.JPProductFoundationJourneyPlannerDesignSystem_e30f18 = window.JPProductFoundationJourneyPlannerDesignSystem_e30f18 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
const sizes = {
  sm: {
    padding: "8px 14px",
    font: "var(--text-label)"
  },
  md: {
    padding: "11px 20px",
    font: "var(--text-body-md)"
  },
  lg: {
    padding: "14px 26px",
    font: "var(--text-heading-sm)"
  }
};
const variants = {
  primary: {
    background: "var(--brand-primary)",
    color: "var(--text-on-brand)",
    border: "1px solid transparent"
  },
  secondary: {
    background: "transparent",
    color: "var(--brand-primary-active)",
    border: "1.5px solid var(--brand-primary)"
  },
  ghost: {
    background: "transparent",
    color: "var(--text-primary)",
    border: "1px solid transparent"
  },
  danger: {
    background: "var(--status-danger)",
    color: "var(--text-on-brand)",
    border: "1px solid transparent"
  }
};
function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  children,
  onClick,
  style
}) {
  const v = variants[variant] || variants.primary;
  const s = sizes[size] || sizes.md;
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const bg = disabled ? "var(--surface-sunken)" : active ? variant === "primary" ? "var(--brand-primary-active)" : v.background : hover ? variant === "primary" ? "var(--brand-primary-hover)" : "var(--bg-canopy)" : v.background;
  return /*#__PURE__*/React.createElement("button", {
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      fontFamily: "var(--font-body)",
      font: s.font,
      padding: s.padding,
      borderRadius: "var(--radius-pill)",
      cursor: disabled ? "not-allowed" : "pointer",
      color: disabled ? "var(--text-tertiary)" : v.color,
      background: bg,
      border: v.border,
      opacity: disabled ? 0.6 : 1,
      transform: active && !disabled ? "scale(0.97)" : "scale(1)",
      transition: "background var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)",
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  children,
  padding = "20px",
  onClick,
  style,
  variant = "solid"
}) {
  const [hover, setHover] = React.useState(false);
  const isFeatured = variant === "featured";
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => onClick && setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: "relative",
      overflow: "hidden",
      background: isFeatured ? "var(--canopy-green)" : "var(--surface-card)",
      borderRadius: "var(--radius-lg)",
      padding,
      boxShadow: isFeatured ? `0 1px 0 color-mix(in oklch, var(--mist-white) 25%, transparent) inset, ${hover ? "0 8px 20px" : "0 6px 16px"} color-mix(in oklch, var(--forest-shade) 22%, transparent)` : hover ? "var(--shadow-md)" : "var(--shadow-sm)",
      border: isFeatured ? "none" : "1px solid var(--border-hairline)",
      color: isFeatured ? "var(--text-inverse)" : undefined,
      cursor: onClick ? "pointer" : "default",
      transition: "box-shadow var(--duration-base) var(--ease-standard)",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
const paths = {
  verified: /*#__PURE__*/React.createElement("path", {
    d: "M4 12.5l5 5L20 6"
  }),
  synced: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M7 18a4.5 4.5 0 0 1-.5-8.98A6 6 0 0 1 18 8.5a4 4 0 0 1-1 7.5H7z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 14.5L12 17l2.5-2.5M12 11v6"
  })),
  syncing: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M5 12a7 7 0 0 1 11.5-5.3M6.5 5v3.2H9.7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 12a7 7 0 0 1-11.5 5.3M17.5 19v-3.2h-3.2"
  })),
  connected: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4 8.5a12 12 0 0 1 16 0M7 11.8a7.5 7.5 0 0 1 10 0M10 15a3.2 3.2 0 0 1 4 0"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "18.3",
    r: "1",
    fill: "currentColor",
    stroke: "none"
  })),
  offline: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M7 11.8a7.5 7.5 0 0 1 10 0M10 15a3.2 3.2 0 0 1 4 0M4.5 4.5l15 15"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "18.3",
    r: "1",
    fill: "currentColor",
    stroke: "none"
  })),
  route: /*#__PURE__*/React.createElement("path", {
    d: "M5 19c3-6 5-6.5 6-11 .6-2.8 4-2.8 4.5 0 .5 3-2 5-5 6.5M15.5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
  }),
  ready: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M6 4v16M6 4.5c3-1.4 4.5.9 7 0s3.5.8 5 0v8.5c-1.5.8-2.5-1-5 0s-4-1.4-7 0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.3 9l1.6 1.7 2.6-3"
  })),
  attention: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 4.5L20.5 19h-17z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 10.3v3.6"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "16.6",
    r: "0.9",
    fill: "currentColor",
    stroke: "none"
  })),
  selected: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "7.2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "2.4",
    fill: "currentColor",
    stroke: "none"
  })),
  current: /*#__PURE__*/React.createElement("path", {
    d: "M12 4l1.7 4.9L19 10l-4 3.4L16 19l-4-2.8L8 19l1-5.6L5 10l5.3-1.1z"
  })
};
function Icon({
  name,
  size = 20,
  color = "currentColor"
}) {
  const p = paths[name];
  if (!p) return null;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    focusable: "false"
  }, p);
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const tones = {
  neutral: {
    bg: "var(--status-neutral-bg)",
    fg: "var(--status-neutral-text)",
    dot: "var(--status-neutral)"
  },
  success: {
    bg: "var(--status-success-bg)",
    fg: "var(--status-success-text)",
    dot: "var(--status-success)",
    icon: "ready"
  },
  info: {
    bg: "var(--status-info-bg)",
    fg: "var(--status-info-text)",
    dot: "var(--status-info)"
  },
  attention: {
    bg: "var(--status-attention-bg)",
    fg: "var(--status-attention-text)",
    dot: "var(--status-attention)",
    icon: "attention"
  },
  danger: {
    bg: "var(--status-danger-bg)",
    fg: "var(--status-danger-text)",
    dot: "var(--status-danger)"
  }
};
function Badge({
  tone = "neutral",
  children,
  dot = true
}) {
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      padding: "5px 12px",
      borderRadius: "var(--radius-pill)",
      background: t.bg,
      color: t.fg,
      font: "var(--text-label)",
      fontFamily: "var(--font-body)",
      letterSpacing: "var(--tracking-label)"
    }
  }, dot && (t.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 14,
    color: t.dot
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: "50%",
      background: t.dot,
      flexShrink: 0
    }
  })), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function IconButton({
  icon,
  label,
  size = 40,
  active = false,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    "aria-label": label,
    title: label,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: size,
      height: size,
      borderRadius: "var(--radius-pill)",
      border: active ? "1.5px solid var(--brand-primary)" : "1px solid var(--border-hairline)",
      background: active ? "var(--bg-canopy)" : hover ? "var(--surface-sunken)" : "var(--surface-card)",
      color: active ? "var(--brand-primary-active)" : "var(--text-primary)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      transition: "background var(--duration-fast) var(--ease-standard)",
      fontSize: size * 0.45,
      lineHeight: 1
    }
  }, icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  onRemove,
  tone = "quiet"
}) {
  const bg = tone === "quiet" ? "var(--surface-sunken)" : "var(--bg-canopy)";
  const fg = tone === "quiet" ? "var(--text-secondary)" : "var(--brand-primary-active)";
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      padding: "4px 10px",
      borderRadius: "var(--radius-sm)",
      background: bg,
      color: fg,
      font: "var(--text-body-sm)",
      fontFamily: "var(--font-body)"
    }
  }, children, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: onRemove,
    "aria-label": "Remove",
    style: {
      border: "none",
      background: "none",
      cursor: "pointer",
      color: "inherit",
      opacity: 0.6,
      padding: 0,
      font: "inherit"
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ActionCard.jsx
try { (() => {
const iconByTone = {
  attention: "attention",
  success: "ready"
};
function ActionCard({
  what,
  why,
  whatToDo,
  status,
  tone = "attention",
  actionLabel,
  onAction
}) {
  const tones = {
    attention: {
      bg: "var(--status-attention-bg)",
      accent: "var(--status-attention)",
      text: "var(--status-attention-text)"
    },
    danger: {
      bg: "var(--status-danger-bg)",
      accent: "var(--status-danger)",
      text: "var(--status-danger-text)"
    },
    info: {
      bg: "var(--status-info-bg)",
      accent: "var(--status-info)",
      text: "var(--status-info-text)"
    },
    success: {
      bg: "var(--status-success-bg)",
      accent: "var(--status-success)",
      text: "var(--status-success-text)"
    }
  };
  const t = tones[tone] || tones.attention;
  const iconName = iconByTone[tone];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      borderRadius: "var(--radius-md)",
      border: `1px solid ${t.accent}`,
      borderLeft: `4px solid ${t.accent}`,
      padding: "16px 18px",
      fontFamily: "var(--font-body)",
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      maxWidth: 380
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-heading-sm)",
      color: "var(--text-primary)",
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, iconName && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconName,
    size: 18,
    color: t.accent
  }), what), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-body-sm)",
      color: "var(--text-secondary)"
    }
  }, why), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 4
    }
  }, status && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-caption)",
      color: "var(--text-tertiary)"
    }
  }, status), actionLabel && /*#__PURE__*/React.createElement("button", {
    onClick: onAction,
    style: {
      border: "none",
      background: t.bg,
      color: t.text,
      borderRadius: "var(--radius-pill)",
      padding: "7px 16px",
      font: "var(--text-label)",
      cursor: "pointer"
    }
  }, actionLabel)));
}
Object.assign(__ds_scope, { ActionCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ActionCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  title,
  children,
  onClose,
  actions
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "color-mix(in oklch, var(--forest-shade) 55%, transparent)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 100
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: "var(--surface-card)",
      borderRadius: "var(--radius-lg)",
      padding: "24px",
      width: 380,
      maxWidth: "90vw",
      boxShadow: "var(--shadow-lg)",
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-heading-md)",
      color: "var(--text-primary)",
      marginBottom: 10
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-body-md)",
      color: "var(--text-secondary)",
      marginBottom: 20
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: 10
    }
  }, actions)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  message,
  tone = "neutral",
  onClose
}) {
  const tones = {
    neutral: {
      bg: "var(--forest-shade)",
      fg: "var(--mist-white)"
    },
    success: {
      bg: "var(--status-success-text)",
      fg: "var(--mist-white)",
      icon: "verified"
    },
    danger: {
      bg: "var(--status-danger-text)",
      fg: "var(--mist-white)"
    }
  };
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: t.bg,
      color: t.fg,
      borderRadius: "var(--radius-md)",
      padding: "14px 18px",
      display: "flex",
      alignItems: "center",
      gap: "14px",
      boxShadow: "var(--shadow-lg)",
      fontFamily: "var(--font-body)",
      font: "var(--text-body-sm)",
      maxWidth: 360
    }
  }, t.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 18,
    color: t.fg
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, message), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Dismiss",
    style: {
      background: "none",
      border: "none",
      color: "inherit",
      opacity: 0.7,
      cursor: "pointer",
      fontSize: 16
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  children
}) {
  const [show, setShow] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex"
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      bottom: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)",
      background: "var(--forest-shade)",
      color: "var(--mist-white)",
      padding: "6px 10px",
      borderRadius: "var(--radius-sm)",
      font: "var(--text-caption)",
      whiteSpace: "nowrap",
      fontFamily: "var(--font-body)",
      boxShadow: "var(--shadow-md)",
      zIndex: 10
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  onChange
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      fontFamily: "var(--font-body)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => onChange && onChange(!checked),
    style: {
      width: 20,
      height: 20,
      borderRadius: "6px",
      border: checked ? "1.5px solid var(--brand-primary)" : "1.5px solid var(--border-hairline-strong)",
      background: checked ? "var(--brand-primary)" : "var(--surface-card)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--text-on-brand)",
      fontSize: 13,
      flexShrink: 0,
      transition: "background var(--duration-fast) var(--ease-standard)"
    }
  }, checked ? "✓" : ""), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-body-md)",
      color: "var(--text-primary)"
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  value,
  onChange,
  hint,
  error,
  type = "text"
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      fontFamily: "var(--font-body)"
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-label)",
      color: "var(--text-secondary)"
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    type: type,
    value: value,
    placeholder: placeholder,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      font: "var(--text-body-md)",
      fontFamily: "var(--font-body)",
      padding: "12px 16px",
      borderRadius: "var(--radius-sm)",
      border: error ? "1.5px solid var(--status-danger)" : focus ? "1.5px solid var(--brand-primary)" : "1px solid var(--border-hairline-strong)",
      outline: "none",
      background: "var(--surface-card)",
      color: "var(--text-primary)",
      boxShadow: focus ? "var(--shadow-focus)" : "none",
      transition: "box-shadow var(--duration-fast) var(--ease-standard), border var(--duration-fast) var(--ease-standard)"
    }
  }), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-caption)",
      color: error ? "var(--status-danger)" : "var(--text-tertiary)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  checked,
  onChange,
  name
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      fontFamily: "var(--font-body)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => onChange && onChange(),
    role: "radio",
    "aria-checked": checked,
    style: {
      width: 20,
      height: 20,
      borderRadius: "50%",
      border: checked ? "1.5px solid var(--brand-primary)" : "1.5px solid var(--border-hairline-strong)",
      background: "var(--surface-card)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: "50%",
      background: "var(--brand-primary)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-body-md)",
      color: "var(--text-primary)"
    }
  }, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      fontFamily: "var(--font-body)"
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-label)",
      color: "var(--text-secondary)"
    }
  }, label), /*#__PURE__*/React.createElement("select", {
    value: value,
    onChange: onChange,
    style: {
      font: "var(--text-body-md)",
      fontFamily: "var(--font-body)",
      padding: "12px 16px",
      borderRadius: "var(--radius-sm)",
      border: "1px solid var(--border-hairline-strong)",
      background: "var(--surface-card)",
      color: "var(--text-primary)",
      outline: "none"
    }
  }, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked,
  onChange,
  label
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      fontFamily: "var(--font-body)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => onChange && onChange(!checked),
    style: {
      width: 40,
      height: 24,
      borderRadius: "var(--radius-pill)",
      background: checked ? "var(--brand-primary)" : "var(--path-stone)",
      position: "relative",
      transition: "background var(--duration-base) var(--ease-standard)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 3,
      left: checked ? 19 : 3,
      width: 18,
      height: 18,
      borderRadius: "50%",
      background: "var(--white)",
      boxShadow: "var(--shadow-sm)",
      transition: "left var(--duration-base) var(--ease-standard)"
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-body-md)",
      color: "var(--text-primary)"
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "4px",
      background: "var(--surface-sunken)",
      borderRadius: "var(--radius-pill)",
      padding: "4px",
      width: "fit-content",
      fontFamily: "var(--font-body)"
    }
  }, tabs.map(t => {
    const active = t.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: t.value,
      onClick: () => onChange && onChange(t.value),
      style: {
        border: "none",
        cursor: "pointer",
        padding: "8px 18px",
        borderRadius: "var(--radius-pill)",
        background: active ? "var(--surface-card)" : "transparent",
        color: active ? "var(--brand-primary-active)" : "var(--text-secondary)",
        font: active ? "600 13px var(--font-body)" : "var(--text-label)",
        boxShadow: active ? "var(--shadow-sm)" : "none",
        transition: "all var(--duration-fast) var(--ease-standard)"
      }
    }, t.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// doc-page.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <doc-page> — paged-document shell for printable HTML.
 *
 * FIRST, decide how the document paginates — up front, before building:
 *
 * - FLOWING document (the default): write the whole document as one
 *   normal HTML flow inside <doc-page>; the browser's print engine
 *   splits it onto pages at export. Use for long-form documents with a
 *   single text flow: reports, memos, letters, essays.
 * - EXPLICIT pagination: a fixed set of pre-paginated pages, one
 *   <section class="page"> child per page. Use when the user asks for a
 *   specific page count, or the design implies one: a one-page resume, a
 *   two-sided flier, a poster, a certificate, a brochure — any richly
 *   laid-out document without a single text flow.
 * - If in doubt, ask the user as part of the build.
 *
 * PAGE SIZING — paper differs by country (letter vs A4), so the printed
 * sheet is not one fixed truth:
 * - FLOWING documents pin NO paper size: the print engine paginates
 *   onto the user's real paper, and the content reflows to it.
 * - EXPLICITLY PAGINATED documents print each page at a FIXED page box
 *   with overflow hidden — letter by default, size="a4" for a clearly
 *   metric user, the user's chosen paper when they export. Design each
 *   page to FILL that box, fitting letter and A4 alike without overlap.
 * - width/height pin an explicit fixed size, ONLY when the user gives
 *   one.
 * Never write your own @page rule or hard-code paper dimensions in the
 * content.
 *
 * Sizing modes (attributes):
 *   (none)                      — portrait: flowing docs use the user's
 *           paper; explicitly paginated pages use the named size box
 *           (letter unless size="a4")
 *   orientation="landscape"     — the same, landscape
 *   width / height              — explicit fixed size, ONLY when the user
 *           gives one (e.g. width="22in" height="30in" for a 22×30
 *           poster): the page IS the design's size, printed at true
 *           dimensions (or scaled onto the user's paper at print time).
 *           Any absolute CSS length: px/in/mm/cm/pt/pc.
 * The component announces the chosen mode to the host app at runtime (a
 * meta tag it injects), so the print path can inject the user's true
 * paper size.
 *
 * On screen the document renders on a desk background: a flowing
 * document as one tall scrolling sheet (Google Docs' pageless view);
 * explicitly paginated documents as one card per page.
 *
 * EXPLICIT pagination usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page>
 *     <section class="page" id="p1">…one page's design…</section>
 *     <section class="page" id="p2">…</section>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * How the page box works, concretely: each .page prints as ONE full-bleed
 * sheet at a FIXED physical size — letter by default (set size="a4" for
 * a clearly metric user), the user's chosen paper when they export —
 * with overflow hidden. Nothing scrolls and nothing reflows onto a next
 * sheet: content that misses the box is CLIPPED. Design each page to
 * FILL that page box, and to fit it — letter and A4 alike — without
 * overlap. Each page is a size container; don't size anything in
 * viewport units (they track the window, not the page), and never set
 * width or height on the .page section itself (the component sizes the
 * page box; an authored height like 100% is meaningless at print and is
 * overridden). The component owns the page box, the screen card chrome,
 * and the page breaks (never add your own break-before/after). Don't mix
 * .page sections with flowing content or header/footer slots in the same
 * document.
 *
 * FLOWING usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page margin="0.75in">
 *     <h1>Title</h1>
 *     <p>…body…</p>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * There is no manual page-splitting — the browser's print engine
 * paginates at export. Standard break-hygiene rules (`break-inside:
 * avoid` on figures, code blocks, images and table rows; `orphans/
 * widows: 3`) are applied so paragraphs and groups split cleanly. On
 * screen and at print, headings default to `text-wrap: balance` and
 * body text to `text-wrap: pretty`; the defaults have zero specificity,
 * so any text-wrap you declare wins.
 *
 * Other attributes:
 *   size    — letter | a4 | legal (default letter). Flowing documents:
 *           preview proportion only — it does NOT pin their printed
 *           paper (the print dialog's paper governs); leave it alone
 *           there. Explicitly paginated documents: it sets the page box
 *           the cards and the pinned @page share (the export dialog's
 *           choice overrides both at print) — set size="a4" for a
 *           clearly metric user. Scaled-fit: names the sheet the fit is
 *           computed against, same a4-for-metric-users advice.
 *   content-width / content-height — the design's own fixed dimensions
 *           (CSS lengths), for scaling a fixed-size design ONTO the
 *           named sheet: content lays out at exactly this size, and the
 *           component scales it to fit that sheet's printable area
 *           (centered horizontally, top-aligned; the export dialog
 *           re-fits to the user's actual paper choice where available).
 *           Both must be set; they do not change the page box. For pages
 *           WITHOUT running header/footer slots.
 *   margin  — printable inset on every page of a FLOWING document
 *           (default 0.75in); margin="0" makes pages full-bleed.
 *           Explicitly paginated pages are always full-bleed.
 *
 * Running header/footer (flowing documents only): give an element
 * `slot="header"` or `slot="footer"` and it repeats on every printed
 * page via `position: fixed`. To keep body text from sliding under it,
 * the component prints inside a single-cell table whose <thead>/<tfoot>
 * are spacers sized to the header/footer height — browsers repeat
 * thead/tfoot on every page, so each sheet's content starts below the
 * header and ends above the footer. On screen the header/footer render
 * once at the top/bottom of the sheet.
 *
 * At print the component injects `@page { margin: 0 }` (which leaves
 * Chrome no margin box to draw its date/URL/page-count header in) and
 * moves the visual margin onto the sheet's own padding. It also marks
 * the document as owning its print CSS (a
 * `meta[name="omelette-owns-print"]` it injects at runtime), so the
 * PDF export never injects page-geometry CSS of its own on top.
 *
 * Print best practices for the content you author:
 * - Multi-column text: use CSS columns (`column-count` +
 *   `column-gap`), never side-by-side flex/grid columns — only real
 *   CSS columns flow and break across pages. `column-span: all` lets
 *   a heading span the columns; `hyphens: auto` (needs `lang` on
 *   the html element) keeps narrow columns readable.
 * - Page breaks in flowing documents: `break-before: page` on an
 *   element that must start a new page (a chapter, an appendix). Add
 *   your own kept-together blocks (callouts, stat tiles, cards) to a
 *   `break-inside: avoid` rule, and keep each one shorter than a page.
 * - Extend `orphans: 3; widows: 3` to any custom text blocks you add
 *   (p and li are covered by default).
 * - Give long tables a <thead> — browsers repeat it on every printed
 *   page.
 * - No `position: fixed`/`sticky` and no viewport units in content:
 *   fixed elements stamp every printed page (running headers/footers go
 *   in the component's slots) and `100vh` mis-sizes at print.
 *
 * Author content as static HTML so the user can click-to-edit any text
 * directly. Do not set width/padding/background on the document body —
 * the component owns the sheet box.
 */
/* END USAGE */

(() => {
  const PAPER = {
    letter: ['8.5in', '11in'],
    a4: ['210mm', '297mm'],
    legal: ['8.5in', '14in']
  };
  const CSS_LENGTH = /^\d+(\.\d+)?(px|in|mm|cm|pt|pc)$/;
  // Unitless "0" is a valid CSS length and the natural way to write
  // margin="0"; normalise it to 0px so max()/calc() (which reject a bare
  // number) keep working.
  const safeLen = (v, fb) => {
    v = (v || '').trim();
    return v === '0' ? '0px' : CSS_LENGTH.test(v) ? v : fb;
  };
  // WebKit (Safari and every iOS browser shell) never repeats a table's
  // thead/tfoot on printed pages (WebKit bug 17205), so the spacer-borne
  // vertical margins of a FLOWING document reach only the first page
  // there. Engine check, not browser check: vendor is 'Apple Computer,
  // Inc.' exactly for WebKit and 'Google Inc.' for Blink.
  const WK_PRINT = /apple/i.test(navigator.vendor || '');
  // CSS length → px number (CSS absolute units are exact: 1in = 96px).
  // Returns NaN for anything safeLen would reject — callers gate on it.
  const PX_PER = {
    px: 1,
    in: 96,
    mm: 96 / 25.4,
    cm: 96 / 2.54,
    pt: 96 / 72,
    pc: 16
  };
  const toPx = v => {
    const m = /^(\d+(?:\.\d+)?)(px|in|mm|cm|pt|pc)$/.exec((v || '').trim());
    return m ? parseFloat(m[1]) * PX_PER[m[2]] : NaN;
  };
  const stylesheet = `
    :host {
      position: relative;
      display: block;
      /* When the viewport is narrower than the page, grow to wrap the
       * sheet (plus this padding) instead of staying viewport-width, so
       * the desk background and right margin reach the sheet's far edge
       * in the horizontal scroll. */
      min-width: max-content;
      min-height: 100vh;
      background: #f5f5f4;
      padding: 48px 24px;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
      --doc-page-w: 8.5in;
      --doc-page-h: 11in;
      --doc-page-margin: 0.75in;
      --doc-hdr-h: 0px;
      --doc-ftr-h: 0px;
      --doc-hdr-pad: 0px;
      --doc-ftr-pad: 0px;
    }
    .sheet {
      width: var(--doc-page-w);
      margin: 0 auto;
      background: #fff;
      box-shadow: 0 2px 10px rgba(20, 20, 19, 0.12);
      border-radius: 7px;
      box-sizing: border-box;
      padding: var(--doc-page-margin);
    }
    .frame { width: 100%; border-collapse: collapse; }
    /* Scaled-fit mode (content-width/content-height): the inner .fit box
     * lays the content out at its authored fixed size and scales it onto
     * the printable area; .fit-box reserves the scaled footprint in flow
     * (transforms don't affect layout) and centers it. Without the mode,
     * both divs are unstyled block pass-throughs. */
    /* Explicit pagination: direct .page children are the pages. The sheet
     * becomes a transparent stack and each page carries the card look on
     * screen; at print each page is exactly one full-bleed sheet. The
     * ::slotted defaults are deliberately weak (document CSS wins), so
     * authored page styling can override any of this. */
    .sheet.paginated {
      background: transparent;
      box-shadow: none;
      border-radius: 0;
      padding: 0;
    }
    .paginated ::slotted(.page) {
      position: relative;
      display: block;
      width: 100%;
      aspect-ratio: var(--doc-page-ar);
      container-type: size;
      overflow: hidden;
      box-sizing: border-box;
      background: #fff;
      border-radius: 7px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
      print-color-adjust: exact;
      -webkit-print-color-adjust: exact;
      break-inside: avoid;
    }
    .paginated ::slotted(.page:not(:first-child)) { margin-top: 1rem; }
    @media print {
      .sheet.paginated { padding: 0; }
      /* The flowing-document vertical inset lives on the repeating
       * thead/tfoot spacers, not the sheet padding — they must go too,
       * or each full-sheet .page is pushed ~margin down and spills onto
       * a second sheet. Paginated pages are full-bleed by definition
       * (content owns its insets). */
      .sheet.paginated .hdr-space,
      .sheet.paginated .ftr-space { height: 0; }
      .paginated ::slotted(.page) {
        border-radius: 0 !important;
        box-shadow: none !important;
        margin: 0 !important;
        /* Physical page-box sizing, no viewport units: Safari resolves
         * 100vh against the window, not the page box, so a vh-sized card
         * paginates wrong there. --doc-page-w/h are the named size by
         * default and are overridden to the user's chosen paper by the
         * export path, so every card is exactly one sheet either way.
         * Width + height (same source values as @page size) rather than
         * width + aspect-ratio: the ratio is a 6-decimal rounding of the
         * same division, and a few millionths of overflow would spill a
         * blank sheet after every page. The screen-only aspect-ratio
         * (preview proportions) must not leak into print. cqh typography
         * tracks the same box.
         *
         * Every declaration is !important: per CSS Scoping, unimportant
         * shadow ::slotted rules LOSE to the document context, so a page
         * section's authored inline style would silently beat this print
         * geometry. A model-authored height:100% did exactly that — the
         * percentage resolves as auto in the all-auto print ancestry, the
         * base rule's size containment turns auto into ZERO, and
         * overflow:hidden then paints nothing: a blank PDF with perfect
         * page boxes. At print the component's geometry is the design's
         * whole contract, so it must win over any authored sizing. */
        aspect-ratio: auto !important;
        width: var(--doc-page-w) !important;
        height: var(--doc-page-h) !important;
        overflow: hidden !important;
      }
      .paginated ::slotted(.page:not(:first-child)) {
        break-before: page !important;
        margin-top: 0 !important;
      }
    }
    .fit-mode .fit-box {
      width: calc(var(--doc-fit-w) * var(--doc-fit-scale));
      height: calc(var(--doc-fit-h) * var(--doc-fit-scale));
      margin: 0 auto;
      break-inside: avoid;
    }
    .fit-mode .fit {
      width: var(--doc-fit-w);
      height: var(--doc-fit-h);
      transform: scale(var(--doc-fit-scale));
      transform-origin: top left;
    }
    .frame td, .frame th { padding: 0; text-align: left; font-weight: inherit; }
    .hdr-space { height: var(--doc-hdr-h); }
    .ftr-space { height: var(--doc-ftr-h); }
    ::slotted([slot="header"]),
    ::slotted([slot="footer"]) { display: block; box-sizing: border-box; }
    @media print {
      :host { background: none; padding: 0; min-width: 0; min-height: 0; }
      .sheet {
        width: auto; margin: 0; box-shadow: none; border-radius: 0;
        padding: 0 var(--doc-page-margin);
      }
      /* The thead/tfoot spacers repeat on every page, so they carry the
       * vertical page margin (which the sheet's own padding cannot, since
       * that padding is consumed once on the first/last page). The running
       * header/footer are fixed inside that band. */
      /* The 0.35in is breathing room between a running header/footer and
       * the body; without one the spacer is exactly the page margin, so a
       * margin="0" full-bleed document gets truly full-bleed pages. */
      .hdr-space { height: max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))); }
      .ftr-space { height: max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))); }
      /* WebKit flowing documents: @page carries the vertical margin (see
       * _syncPrintPageRule), so the spacers keep only whatever a running
       * header/footer needs BEYOND it — page 1 would otherwise double its
       * top inset. Paginated sheets already zero their spacers above. */
      .sheet.wk-print:not(.paginated) .hdr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))) - var(--doc-page-margin))); }
      .sheet.wk-print:not(.paginated) .ftr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))) - var(--doc-page-margin))); }
      ::slotted([slot="header"]) {
        position: fixed; top: 0; left: 0; right: 0; margin: 0;
        padding: calc(var(--doc-page-margin) * 0.45) var(--doc-page-margin) 0;
      }
      ::slotted([slot="footer"]) {
        position: fixed; bottom: 0; left: 0; right: 0; margin: 0;
        padding: 0 var(--doc-page-margin) calc(var(--doc-page-margin) * 0.45);
      }
    }
  `;
  class DocPage extends HTMLElement {
    static get observedAttributes() {
      return ['size', 'width', 'height', 'margin', 'orientation', 'content-width', 'content-height'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._mo = typeof MutationObserver === 'function' ? new MutationObserver(() => this._scheduleMeasure()) : null;
    }

    /** The named paper's [w, h], swapped when orientation="landscape".
     *  Only the named size swaps — explicit width/height are exact values
     *  the author already oriented. */
    _paperSize() {
      const named = PAPER[(this.getAttribute('size') || '').toLowerCase()] || PAPER.letter;
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? [named[1], named[0]] : named;
    }
    get pageWidth() {
      return safeLen(this.getAttribute('width'), this._paperSize()[0]);
    }
    get pageHeight() {
      return safeLen(this.getAttribute('height'), this._paperSize()[1]);
    }
    get pageMargin() {
      return safeLen(this.getAttribute('margin'), '0.75in');
    }

    /** Scaled-fit mode's content box [w, h] as CSS lengths, or null when
     *  the mode is off (either attribute missing/invalid/zero — a partial
     *  declaration falls back to normal flow rather than guessing). */
    _contentFit() {
      const w = safeLen(this.getAttribute('content-width'), null);
      const h = safeLen(this.getAttribute('content-height'), null);
      if (!w || !h) return null;
      const wPx = toPx(w),
        hPx = toPx(h);
      return wPx > 0 && hPx > 0 ? [w, h, wPx, hPx] : null;
    }
    connectedCallback() {
      if (!this._sheet) this._render();
      this._syncSize();
      this._syncPrintPageRule();
      this._ensureTextWrapDefaults();
      this._ensureOwnsPrintMeta();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      if (this._mo) this._mo.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      this._onResize = () => this._scheduleMeasure();
      window.addEventListener('resize', this._onResize);
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => this._scheduleMeasure());
      }
      this._scheduleMeasure();
    }
    disconnectedCallback() {
      window.removeEventListener('resize', this._onResize);
      if (this._mo) this._mo.disconnect();
      if (this._raf) {
        cancelAnimationFrame(this._raf);
        this._raf = null;
      }
      // Drop the head rules when the last doc-page leaves, so a deleted
      // document's @page geometry and text-wrap defaults can't apply to
      // whatever replaces it.
      const survivor = document.querySelector('doc-page');
      if (!survivor) {
        ['doc-page-print', 'doc-page-text-wrap', 'doc-page-owns-print', 'doc-page-fixed-size', 'doc-page-print-sizing'].forEach(id => {
          const tag = document.getElementById(id);
          if (tag) tag.remove();
        });
        // A live deck-stage deferred its own print-sizing meta to ours —
        // hand the page-global meta over so the deck isn't left unmarked.
        const deck = document.querySelector('deck-stage');
        if (deck && typeof deck._ensurePrintSizingMeta === 'function') {
          deck._ensurePrintSizingMeta();
        }
      } else {
        // A departed owner hands each page-global meta to whatever
        // doc-page remains (or it's removed).
        if (typeof survivor._syncFixedSizeMeta === 'function') {
          survivor._syncFixedSizeMeta();
        }
        if (typeof survivor._syncPrintSizingMeta === 'function') {
          survivor._syncPrintSizingMeta();
        }
      }
    }
    attributeChangedCallback() {
      if (!this._sheet) return;
      this._syncSize();
      this._syncPrintPageRule();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      this._scheduleMeasure();
    }
    _render() {
      this._root.innerHTML = `
        <style>${stylesheet}</style>
        <style id="vars"></style>
        <div class="sheet" data-screen-label="Document">
          <table class="frame" role="presentation">
            <thead><tr><th><div class="hdr-space"><slot name="header"></slot></div></th></tr></thead>
            <tbody><tr><td class="body"><div class="fit-box"><div class="fit"><slot></slot></div></div></td></tr></tbody>
            <tfoot><tr><td><div class="ftr-space"><slot name="footer"></slot></div></td></tr></tfoot>
          </table>
        </div>`;
      this._sheet = this._root.querySelector('.sheet');
      this._vars = this._root.getElementById('vars');
    }

    /** Runtime sizing lives in a shadow <style> :host rule, never on the
     *  light-DOM host element, so serialize-persist can't write it back. */
    _syncSize(hdrH, ftrH) {
      // Scaled-fit mode: content at its authored size, scaled onto the
      // printable area (page minus margins on both axes). The factor is a
      // plain number var so calc(length * number) stays valid; 4 decimals
      // keeps the shadow style stable across re-measures. Upscaling is
      // allowed — print transforms are vector, so text and CSS stay crisp
      // (raster images soften, which the catalog bullet warns about).
      const fit = this._contentFit();
      let fitVars = '';
      if (fit) {
        const marginPx = toPx(this.pageMargin) || 0;
        const availW = toPx(this.pageWidth) - 2 * marginPx;
        const availH = toPx(this.pageHeight) - 2 * marginPx;
        const scale = Math.min(availW / fit[2], availH / fit[3]);
        if (scale > 0 && Number.isFinite(scale)) {
          fitVars = '--doc-fit-w:' + fit[0] + ';' + '--doc-fit-h:' + fit[1] + ';' + '--doc-fit-scale:' + scale.toFixed(4) + ';';
        }
      }
      this._sheet.classList.toggle('fit-mode', !!fitVars);
      // Numeric w/h ratio for the paginated page cards' aspect-ratio —
      // aspect-ratio takes a number, not a length ratio, so compute it
      // here (CSS length division isn't portable). 6 decimals keeps the
      // shadow style stable across re-syncs.
      const arW = toPx(this.pageWidth);
      const arH = toPx(this.pageHeight);
      const ar = arW > 0 && arH > 0 ? (arW / arH).toFixed(6) : '0.772727';
      this._vars.textContent = ':host{' + fitVars + '--doc-page-ar:' + ar + ';' + '--doc-page-w:' + this.pageWidth + ';' + '--doc-page-h:' + this.pageHeight + ';' + '--doc-page-margin:' + this.pageMargin + ';' + '--doc-hdr-h:' + (hdrH || 0) + 'px;' + '--doc-ftr-h:' + (ftrH || 0) + 'px;' + '--doc-hdr-pad:' + (hdrH ? '0.35in' : '0px') + ';' + '--doc-ftr-pad:' + (ftrH ? '0.35in' : '0px') + '}';
    }

    /** @page is a no-op inside shadow DOM, so the rule lives in <head>.
     *  Re-appended on every sync so it stays last in source order — the
     *  @page cascade is source-order per descriptor, so this rule wins
     *  over any other @page rule in the document.
     *
     *  The @page SIZE is pinned where the page box IS part of the design:
     *  explicit-fixed-size mode (width + height authored), scaled-fit
     *  mode (the named sheet the fit targets), and explicit pagination
     *  (the named size the cards share — so card and sheet agree on
     *  every print path, and the export path's chosen paper overrides
     *  BOTH with one later rule). For FLOWING documents no paper size is
     *  emitted at all — the true size comes from the user's preference,
     *  injected by the export path or chosen in the print dialog — so a
     *  flowing document never fights the paper it lands on.
     *  margin: 0 is emitted in every mode: it leaves Chrome no margin box
     *  to draw its date/URL/page-count header in, and the visual margin
     *  lives on the sheet's own padding. */
    _syncPrintPageRule() {
      const id = 'doc-page-print';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
      }
      document.head.appendChild(tag);
      // Three print-geometry regimes:
      // - true-size: the page IS the design — pin its exact size.
      // - scaled-fit (content-width/height): the fit factor is computed
      //   against the NAMED paper's printable area, so that paper must
      //   stay pinned or the scaled content overflows a smaller sheet
      //   (the export path re-fits and re-pins at print time on top).
      // - default modes: no paper size — but landscape still needs the
      //   paper-agnostic 'size: landscape' keyword, because the size
      //   descriptor is what carries orientation; without it a landscape
      //   document prints portrait whenever nothing injects a size.
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      // Explicit pagination pins the page box to the SAME values that
      // size the cards (the named size by default, the export path's
      // chosen paper when its later rule overrides both) — card and
      // sheet agree on every print path, and a mismatched real paper
      // shrinks-to-fit in the dialog instead of clipping a Letter card
      // on A4. Declared before the paginated read below so both derive
      // from one check.
      const paginatedNow = this.querySelector(':scope > .page') !== null;
      const sizeDescriptor = this._trueSizePx() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : this._contentFit() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : paginatedNow ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : landscape ? 'size: landscape; ' : '';
      // WebKit never repeats the thead/tfoot spacers that carry a flowing
      // document's vertical page margins (see WK_PRINT above), so pages
      // after the first print edge-to-edge there. Carry the VERTICAL
      // margins on @page for WebKit instead, and the shadow print CSS
      // trims the first-page spacers by the same amount (.sheet.wk-print
      // rules). Horizontal inset stays on the sheet's own padding in
      // every engine. Blink keeps margin: 0 (a nonzero margin there
      // re-opens the box Chrome draws its header furniture in). One cost,
      // learned in testing: Safari's own date/URL headers are a USER
      // dialog setting ("Print headers and footers") that renders in the
      // margin area when room exists — margin: 0 only suppressed it by
      // leaving no room, and no CSS controls it. The export dialog's
      // Safari guide teaches turning the setting off for flowing
      // documents. Explicitly paginated and fixed-size documents keep
      // margin: 0 everywhere: their pages ARE the sheet.
      const wkFlowing = WK_PRINT && !paginatedNow && !this._trueSizePx() && !this._contentFit();
      const marginDescriptor = wkFlowing ? 'margin: ' + this.pageMargin + ' 0; ' : 'margin: 0; ';
      // Shadow-internal marker (never serialized), kept in lockstep with
      // the @page decision above: the print CSS trims the first-page
      // spacers ONLY while @page actually carries the margins — a
      // true-size or scaled-fit sheet keeps margin: 0 and must keep its
      // spacers too. Re-synced here so attribute changes and pagination
      // flips move both together.
      if (this._sheet) this._sheet.classList.toggle('wk-print', wkFlowing);
      tag.textContent = '@page { ' + sizeDescriptor + marginDescriptor + '} ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; height: auto !important; overflow: visible !important; } ' + 'h1,h2,h3,h4,h5,h6 { break-after: avoid; } ' + 'figure,pre,blockquote,img,svg,tr { break-inside: avoid; } ' + 'p,li { orphans: 3; widows: 3; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; ' + 'backdrop-filter: none !important; -webkit-backdrop-filter: none !important; } ' + '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }

    /** Typographic defaults for document text: balance headings, avoid
     *  widowed/orphaned words in body copy (browsers without text-wrap
     *  support drop the declarations). Zero-specificity via :where() so
     *  any text-wrap authored on those elements wins; document-level so the
     *  rules reach the slotted (light DOM) content — shadow styles can't.
     *  data-omelette-injected marks the tag for the host editor to strip
     *  at serialize, so it is never written back as authored source. */
    _ensureTextWrapDefaults() {
      if (document.getElementById('doc-page-text-wrap')) return;
      const tag = document.createElement('style');
      tag.id = 'doc-page-text-wrap';
      tag.setAttribute('data-omelette-injected', '');
      tag.textContent = ':where(h1,h2,h3,h4,h5,h6){text-wrap:balance}' + ':where(p,li,blockquote,figcaption){text-wrap:pretty}';
      document.head.appendChild(tag);
    }

    /** Declares that this document owns its print CSS. The instant-PDF
     *  export checks for the meta by NAME PRESENCE alone (content is
     *  ignored) and skips its automatic print-CSS injections, so the
     *  component's @page geometry is never overridden by a heuristic.
     *  data-omelette-injected keeps it out of serialized source. */
    _ensureOwnsPrintMeta() {
      if (document.getElementById('doc-page-owns-print')) return;
      const tag = document.createElement('meta');
      tag.id = 'doc-page-owns-print';
      tag.name = 'omelette-owns-print';
      tag.content = 'true';
      tag.setAttribute('data-omelette-injected', '');
      document.head.appendChild(tag);
    }

    /** This page's valid true-size page box (explicit width AND height)
     *  as [w, h] px ints, or null when the mode is off. */
    _trueSizePx() {
      if (!safeLen(this.getAttribute('width'), null) || !safeLen(this.getAttribute('height'), null)) return null;
      const w = Math.round(toPx(this.pageWidth));
      const h = Math.round(toPx(this.pageHeight));
      return w > 0 && h > 0 ? [w, h] : null;
    }

    /** True-size pages (explicit width AND height) also declare the page
     *  box as the preview size: the in-app preview reads
     *  meta[name="omelette-fixed-size"] (content "W,H" in px ints) and
     *  scales the sheet into view — without it an 18in poster previews at
     *  true size with scrollbars. Never overrides an author-set meta
     *  (only the component's own id is managed). The meta is page-global
     *  while doc-page instances are not, so every sync recomputes the
     *  page-wide owner — the first connected true-size doc-page — and a
     *  non-true-size sibling's sync can never delete the owner's meta.
     *  Removed when no true-size page remains (the owner's disconnect
     *  re-syncs via any survivor) or when an author-set meta exists. */
    _syncFixedSizeMeta() {
      const id = 'doc-page-fixed-size';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-fixed-size"]:not([data-omelette-injected])');
      // The page-wide owner, not this instance: an upgraded true-size page
      // anywhere in the document keeps the meta alive and sized.
      let box = null;
      for (const el of document.querySelectorAll('doc-page')) {
        box = typeof el._trueSizePx === 'function' ? el._trueSizePx() : null;
        if (box) break;
      }
      if (!box || authored) {
        if (own) own.remove();
        return;
      }
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-fixed-size';
      tag.content = box[0] + ',' + box[1];
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }

    /** This page's print-sizing mode: 'fixed' when an explicit width AND
     *  height are authored (the page is the design's own size), else the
     *  default paper in the authored orientation. */
    _printSizingMode() {
      if (this._trueSizePx()) return 'fixed';
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? 'default-landscape' : 'default-portrait';
    }

    /** Announces the print-sizing mode to the host app:
     *  meta[name="omelette-print-sizing"] with content 'default-portrait',
     *  'default-landscape', or 'fixed' (fixed pages also carry the
     *  omelette-fixed-size meta with the page box in px). The export path
     *  probes it to decide what true paper size to inject at print time —
     *  in the default modes the component emits no paper size of its own.
     *  Same page-global ownership rules as the fixed-size meta above:
     *  first connected doc-page owns it, an authored meta is never
     *  overridden, removed when no doc-page remains. */
    _syncPrintSizingMeta() {
      const id = 'doc-page-print-sizing';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-print-sizing"]:not([data-omelette-injected])');
      // A fixed page wins outright (mirroring the fixed-size loop above,
      // so the two metas can never contradict each other in a mixed
      // multi-page document); otherwise the first page's mode holds.
      let mode = null;
      for (const el of document.querySelectorAll('doc-page')) {
        if (typeof el._printSizingMode !== 'function') continue;
        const m = el._printSizingMode();
        if (m === 'fixed') {
          mode = m;
          break;
        }
        if (mode === null) mode = m;
      }
      if (!mode || authored) {
        if (own) own.remove();
        return;
      }
      // A deck-stage that connected first injected its own meta and
      // defers to any existing one — take it over, or the document ends
      // up with two conflicting injected metas (a doc-page page is the
      // document; the deck re-ensures its meta if every doc-page leaves).
      const deckMeta = document.getElementById('deck-stage-print-sizing');
      if (deckMeta) deckMeta.remove();
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-print-sizing';
      tag.content = mode;
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }
    _scheduleMeasure() {
      if (this._raf) return;
      this._raf = requestAnimationFrame(() => {
        this._raf = null;
        this._measure();
      });
    }

    /** Slot heights feed the print spacers (--doc-hdr-h / --doc-ftr-h), so
     *  they re-measure on content mutation, resize, and font load. The
     *  same pass detects explicit pagination (direct .page children) and
     *  toggles the sheet between the flowing-document card and the
     *  page-per-card stack — content edits can add or remove pages at any
     *  time, so this tracks the same mutations the measurement does. */
    _measure() {
      const hdr = this.querySelector(':scope > [slot="header"]');
      const ftr = this.querySelector(':scope > [slot="footer"]');
      const wasPaginated = this._sheet.classList.contains('paginated');
      this._sheet.classList.toggle('paginated', this.querySelector(':scope > .page') !== null);
      // The WebKit @page margin is flowing-only, so a pagination flip
      // must re-emit the rule (content edits can add or remove .page
      // sections at any time).
      if (this._sheet.classList.contains('paginated') !== wasPaginated) {
        this._syncPrintPageRule();
      }
      this._syncSize(hdr ? hdr.offsetHeight : 0, ftr ? ftr.offsetHeight : 0);
    }
  }
  if (!customElements.get('doc-page')) {
    customElements.define('doc-page', DocPage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "doc-page.js", error: String((e && e.message) || e) }); }

// ui_kits/explorer/DiscoveryLanding.jsx
try { (() => {
const {
  Input,
  Tag,
  Button,
  Card
} = window.JPProductFoundationJourneyPlannerDesignSystem_e30f18;
const CATEGORIES = {
  Mood: ["Calm", "Adventurous", "Romantic", "Reflective"],
  Landscape: ["Mountains", "Coastline", "Rainforest", "Rivers"],
  Experience: ["Village visits", "Craft workshops", "Trekking", "Temples"]
};
function DiscoveryLanding({
  onGuided,
  onOpenExperience
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 18px 40px",
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-display-md)",
      fontFamily: "var(--font-display)",
      color: "var(--text-primary)"
    }
  }, "What kind of Thailand do you want to enter?"), /*#__PURE__*/React.createElement(Input, {
    placeholder: "Search a place, village, or experience"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm"
  }, "Near Chiang Mai"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm"
  }, "Change anchor")), /*#__PURE__*/React.createElement(Card, {
    padding: "18px",
    onClick: onGuided,
    style: {
      background: "var(--bg-canopy)",
      border: "1px solid var(--brand-primary)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-heading-sm)",
      color: "var(--brand-primary-active)",
      marginBottom: 4
    }
  }, "Not sure where to start?"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-body-sm)",
      color: "var(--text-secondary)"
    }
  }, "Answer 8 quick questions \u2014 Journey Compass will find places that fit.")), Object.entries(CATEGORIES).map(([group, items]) => /*#__PURE__*/React.createElement("div", {
    key: group
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-label)",
      color: "var(--text-tertiary)",
      marginBottom: 8
    }
  }, group), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, items.map(i => /*#__PURE__*/React.createElement(Tag, {
    key: i
  }, i))))), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-label)",
      color: "var(--text-tertiary)",
      marginTop: 4
    }
  }, "Outside the city, worth the trip"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      overflowX: "auto"
    }
  }, ["Indigo weaving village, Sakon Nakhon", "Doi Inthanon cloud forest trail", "Riverside Scout homestay, Nan"].map(t => /*#__PURE__*/React.createElement(Card, {
    key: t,
    onClick: onOpenExperience,
    style: {
      minWidth: 200,
      flexShrink: 0
    },
    padding: "14px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 90,
      background: "var(--bg-teal)",
      borderRadius: "var(--radius-sm)",
      marginBottom: 10
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-body-sm)",
      color: "var(--text-primary)"
    }
  }, t)))));
}
window.DiscoveryLanding = DiscoveryLanding;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/explorer/DiscoveryLanding.jsx", error: String((e && e.message) || e) }); }

// ui_kits/explorer/ExperienceDetail.jsx
try { (() => {
const {
  Badge,
  Button,
  IconButton
} = window.JPProductFoundationJourneyPlannerDesignSystem_e30f18;
function ExperienceDetail({
  onBack,
  onAdded
}) {
  const [expanded, setExpanded] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 200,
      background: "var(--bg-teal)",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 14,
      left: 14
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "\u2190",
    label: "Back",
    onClick: onBack
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 14,
      right: 14
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "\u2661",
    label: "Save"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px",
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "success"
  }, "Strong Match"), /*#__PURE__*/React.createElement(Badge, {
    tone: "success"
  }, "Verified")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-display-md)",
      fontFamily: "var(--font-display)",
      color: "var(--text-primary)"
    }
  }, "Indigo weaving with the Nong Bua Scouts"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-body-md)",
      color: "var(--text-secondary)"
    }
  }, "A half-day dyeing session with a family who has worked indigo for three generations, in a village 40 minutes outside Sakon Nakhon."), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--bg-ochre)",
      borderRadius: "var(--radius-md)",
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-heading-sm)",
      color: "var(--text-primary)"
    }
  }, "31\xB0C"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-body-sm)",
      color: "var(--text-secondary)"
    }
  }, "Humid by early afternoon \u2014 mornings are best for the dye vats.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: onAdded
  }, "Add to Journey Day"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Compare"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost"
  }, "Ask Guide")), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-hairline)",
      paddingTop: 14
    }
  }, /*#__PURE__*/React.createElement(Row, {
    label: "What you'll do",
    value: "Prepare an indigo vat, dye a length of cotton, learn the family's pattern names."
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Physical demand",
    value: "Low \u2014 mostly seated"
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Comfort & facilities",
    value: "Shared bathroom, no air conditioning"
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Booking",
    value: "Booking required \u2014 host confirms within 24h"
  }), expanded && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Row, {
    label: "Culture & etiquette",
    value: "Remove shoes before entering the dye house. Photos of the family require asking first."
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Evidence & verification",
    value: "Scout-observed, verified 12 days ago"
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Transport & access",
    value: "Reachable by rental car or arranged transfer; no public transport"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => setExpanded(!expanded),
    style: {
      border: "none",
      background: "none",
      color: "var(--text-link)",
      font: "var(--text-label)",
      cursor: "pointer",
      padding: "8px 0"
    }
  }, expanded ? "Show less" : "Show culture, evidence & access details"))));
}
function Row({
  label,
  value
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-label)",
      color: "var(--text-tertiary)",
      marginBottom: 2
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-body-sm)",
      color: "var(--text-primary)"
    }
  }, value));
}
window.ExperienceDetail = ExperienceDetail;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/explorer/ExperienceDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/explorer/JourneyCompass.jsx
try { (() => {
const {
  Button,
  Radio,
  IconButton,
  Tooltip
} = window.JPProductFoundationJourneyPlannerDesignSystem_e30f18;
const QUESTIONS = [{
  q: "What journey mood are you looking for?",
  options: ["Calm & restorative", "Adventurous", "Social & lively", "Reflective & slow"]
}, {
  q: "What landscape or surroundings do you want?",
  options: ["Mountains", "Coastline", "Rainforest", "Rivers & waterfalls"]
}, {
  q: "What do you want to experience or do?",
  options: ["Village visits", "Craft workshops", "Trekking", "Temples & history"]
}, {
  q: "How active should the experience be?",
  options: ["Easy going", "Moderate", "Physically demanding"]
}, {
  q: "What level of comfort suits you?",
  options: ["Basic & local", "Comfortable", "A bit of both"],
  help: "\"Basic\" means simple local guesthouses, shared facilities."
}, {
  q: "How much time do you have?",
  options: ["A day", "A weekend", "5+ days"]
}, {
  q: "How will you travel there?",
  options: ["Public transport", "Rental car", "Arranged transfer"]
}, {
  q: "How far from your selected fixed place should this be?",
  options: ["Within 10 km", "Within 50 km", "Anywhere in the region"]
}];
function JourneyCompass({
  onFinish
}) {
  const [step, setStep] = React.useState(0);
  const [answers, setAnswers] = React.useState({});
  const done = step >= QUESTIONS.length;
  const cur = QUESTIONS[step];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 18px 40px",
      display: "flex",
      flexDirection: "column",
      gap: 18,
      minHeight: 600
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "\u2190",
    label: "Back",
    onClick: () => setStep(s => Math.max(0, s - 1))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 6,
      background: "var(--surface-sunken)",
      borderRadius: "var(--radius-pill)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${Math.min(step, QUESTIONS.length) / QUESTIONS.length * 100}%`,
      height: "100%",
      background: "var(--brand-primary)",
      borderRadius: "var(--radius-pill)",
      transition: "width var(--duration-base) var(--ease-standard)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-caption)",
      color: "var(--text-tertiary)"
    }
  }, Math.min(step + 1, QUESTIONS.length), "/", QUESTIONS.length)), !done ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-heading-lg)",
      color: "var(--text-primary)"
    }
  }, cur.q), cur.help && /*#__PURE__*/React.createElement(Tooltip, {
    label: cur.help
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "\u24D8",
    label: "Explain",
    size: 28
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, cur.options.map(o => /*#__PURE__*/React.createElement(Radio, {
    key: o,
    name: `q${step}`,
    label: o,
    checked: answers[step] === o,
    onChange: () => setAnswers({
      ...answers,
      [step]: o
    })
  }))), /*#__PURE__*/React.createElement(Button, {
    disabled: !answers[step],
    onClick: () => setStep(step + 1),
    style: {
      marginTop: "auto"
    }
  }, "Continue")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-heading-lg)",
      color: "var(--text-primary)"
    }
  }, "Here's what fits"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-body-md)",
      color: "var(--text-secondary)"
    }
  }, "Calm, rainforest, village-focused experiences within 50 km of your anchor. 6 places match."), /*#__PURE__*/React.createElement(Button, {
    onClick: onFinish
  }, "See results"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => setStep(0)
  }, "Revise answers")));
}
window.JourneyCompass = JourneyCompass;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/explorer/JourneyCompass.jsx", error: String((e && e.message) || e) }); }

// ui_kits/explorer/JourneyDay.jsx
try { (() => {
const {
  Badge,
  ActionCard,
  IconButton,
  Tabs
} = window.JPProductFoundationJourneyPlannerDesignSystem_e30f18;
const DAYS = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6"];
const ITEMS = [{
  time: "8:30",
  title: "Breakfast at Scout homestay",
  place: "Nong Bua village",
  trust: "success",
  trustLabel: "Verified",
  booking: null
}, {
  time: "10:00",
  title: "Indigo weaving workshop",
  place: "Nong Bua village",
  trust: "attention",
  trustLabel: "Needs Verification",
  booking: "Booking required"
}, {
  time: "Flexible",
  title: "Riverside walk",
  place: "Along the Songkhram",
  trust: "success",
  trustLabel: "Verified",
  booking: null
}];
function JourneyDay({
  desktop,
  offline
}) {
  const [day, setDay] = React.useState("Day 4");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: desktop ? "flex" : "block",
      gap: 24,
      padding: desktop ? "32px 48px" : "16px 18px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: desktop ? 2 : undefined
    }
  }, offline && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-inverse)",
      color: "var(--text-inverse)",
      borderRadius: "var(--radius-sm)",
      padding: "8px 14px",
      font: "var(--text-caption)",
      marginBottom: 14
    }
  }, "Offline \u2014 showing saved Journey Day. Route estimates require internet."), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-display-md)",
      fontFamily: "var(--font-display)",
      color: "var(--text-primary)",
      marginBottom: 6
    }
  }, "Northern Thailand Loop"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      overflowX: "auto",
      marginBottom: 16
    }
  }, DAYS.map(d => /*#__PURE__*/React.createElement("button", {
    key: d,
    onClick: () => setDay(d),
    style: {
      border: "none",
      cursor: "pointer",
      padding: "8px 16px",
      borderRadius: "var(--radius-pill)",
      flexShrink: 0,
      background: d === day ? "var(--brand-primary)" : "var(--surface-sunken)",
      color: d === day ? "var(--text-on-brand)" : "var(--text-secondary)",
      font: "var(--text-label)"
    }
  }, d))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--bg-ochre)",
      borderRadius: "var(--radius-md)",
      padding: 14,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-heading-sm)",
      color: "var(--text-primary)"
    }
  }, "32\xB0C"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-body-sm)",
      color: "var(--text-secondary)"
    }
  }, "Sticky by midday \u2014 good for an early waterfall visit, rest after lunch.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 0
    }
  }, ITEMS.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: it.title
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      padding: "14px 0",
      borderBottom: i < ITEMS.length - 1 ? "1px solid var(--border-hairline)" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-mono-sm)",
      color: "var(--text-tertiary)",
      width: 60,
      flexShrink: 0,
      paddingTop: 2
    }
  }, it.time), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-heading-sm)",
      color: "var(--text-primary)"
    }
  }, it.title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-body-sm)",
      color: "var(--text-secondary)",
      marginBottom: 6
    }
  }, it.place), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: it.trust
  }, it.trustLabel), it.booking && /*#__PURE__*/React.createElement(Badge, {
    tone: "attention"
  }, it.booking)))), i < ITEMS.length - 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-caption)",
      color: "var(--text-tertiary)",
      padding: "6px 0 6px 74px"
    }
  }, "\u2193 25 min travel connection \xB7 estimate available")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      padding: "16px",
      border: "1.5px dashed var(--border-hairline-strong)",
      borderRadius: "var(--radius-md)",
      textAlign: "center",
      font: "var(--text-body-sm)",
      color: "var(--text-tertiary)"
    }
  }, "Unscheduled \u2014 add another Itinerary Item")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: desktop ? 1 : undefined,
      marginTop: desktop ? 0 : 20
    }
  }, /*#__PURE__*/React.createElement(ActionCard, {
    what: "Indigo weaving requires booking.",
    why: "Journey Day 4 cannot become Ready until the host confirms.",
    status: "Waiting for provider \u2014 updated 12 minutes ago",
    actionLabel: "Continue booking",
    tone: "attention"
  })));
}
window.JourneyDay = JourneyDay;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/explorer/JourneyDay.jsx", error: String((e && e.message) || e) }); }

// ui_kits/explorer/JourneysList.jsx
try { (() => {
const {
  Badge,
  Button,
  Card
} = window.JPProductFoundationJourneyPlannerDesignSystem_e30f18;
const JOURNEYS = [{
  name: "Northern Thailand Loop",
  dates: "12–22 Oct",
  days: 6,
  readiness: "success",
  label: "Ready",
  accommodation: "6/6 nights covered"
}, {
  name: "Isaan Slow Weekend",
  dates: "Undated",
  days: 3,
  readiness: "attention",
  label: "Needs Attention",
  accommodation: "1 night uncovered"
}, {
  name: "First Bangkok visit",
  dates: "Exploring",
  days: 0,
  readiness: "neutral",
  label: "Exploring",
  accommodation: "Not planned yet"
}];
function JourneysList({
  desktop,
  onOpenDay
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: desktop ? "32px 48px" : "16px 18px",
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-display-md)",
      fontFamily: "var(--font-display)",
      color: "var(--text-primary)"
    }
  }, "Your Journeys"), /*#__PURE__*/React.createElement(Button, {
    size: desktop ? "md" : "sm"
  }, "Create Journey")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: desktop ? "grid" : "flex",
      gridTemplateColumns: desktop ? "repeat(3,1fr)" : undefined,
      flexDirection: desktop ? undefined : "column",
      gap: 16
    }
  }, JOURNEYS.map(j => /*#__PURE__*/React.createElement(Card, {
    key: j.name,
    onClick: onOpenDay
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: desktop ? 120 : 90,
      background: "var(--bg-canopy)",
      borderRadius: "var(--radius-sm)",
      marginBottom: 12
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-heading-sm)",
      color: "var(--text-primary)"
    }
  }, j.name), /*#__PURE__*/React.createElement(Badge, {
    tone: j.readiness
  }, j.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-body-sm)",
      color: "var(--text-secondary)"
    }
  }, j.dates, " \xB7 ", j.days > 0 ? `${j.days} Journey Days` : "Not yet structured"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-caption)",
      color: "var(--text-tertiary)",
      marginTop: 4
    }
  }, j.accommodation)))));
}
window.JourneysList = JourneysList;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/explorer/JourneysList.jsx", error: String((e && e.message) || e) }); }

// ui_kits/explorer/PhoneFrame.jsx
try { (() => {
const {
  Badge
} = window.JPProductFoundationJourneyPlannerDesignSystem_e30f18;
function PhoneFrame({
  children,
  offline
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 390,
      borderRadius: 40,
      border: "8px solid var(--forest-shade)",
      overflow: "hidden",
      background: "var(--surface-page)",
      boxShadow: "var(--shadow-lg)",
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 20px 4px",
      font: "var(--text-mono-sm)",
      color: "var(--text-primary)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("span", null, offline ? "Offline" : "Journey Planner")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 700,
      overflowY: "auto"
    }
  }, children));
}
window.PhoneFrame = PhoneFrame;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/explorer/PhoneFrame.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.ActionCard = __ds_scope.ActionCard;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
