import type { ReactNode, SVGProps } from "react";

/**
 * Lightweight inline-SVG icon registry. Stroke-based, 24×24, inherit `currentColor`
 * so colour is controlled by the parent (matching the design's orange accents).
 */

export type IconName =
  | "arrow"
  | "arrowUpRight"
  | "spark"
  | "beam"
  | "gear"
  | "bolt"
  | "blueprint"
  | "shield"
  | "layers"
  | "truck"
  | "factory"
  | "crane"
  | "warehouse"
  | "food"
  | "building"
  | "keys"
  | "transport"
  | "bridge"
  | "plant"
  | "check"
  | "award"
  | "helmet"
  | "document"
  | "phone"
  | "mail"
  | "mapPin"
  | "upload"
  | "weld";

const paths: Record<IconName, ReactNode> = {
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  arrowUpRight: <path d="M7 17 17 7M8 7h9v9" />,
  spark: (
    <>
      <path d="M12 2v6M12 16v6M2 12h6M16 12h6" />
      <path d="m5 5 3.5 3.5M15.5 15.5 19 19M19 5l-3.5 3.5M8.5 15.5 5 19" />
    </>
  ),
  beam: (
    <>
      <path d="M3 5h18M3 19h18" />
      <path d="M6 5v14M18 5v14M6 12h12" />
    </>
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
    </>
  ),
  bolt: <path d="M13 2 4 14h6l-1 8 9-12h-6z" />,
  blueprint: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="1" />
      <path d="M3 9h18M9 9v11M14 13h4M14 16h4" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5c0 4 3 7 7 8 4-1 7-4 7-8V6z" />
      <path d="m9.5 12 2 2 3.5-4" />
    </>
  ),
  layers: <path d="m12 3 9 5-9 5-9-5zM3 13l9 5 9-5M3 16.5l9 5 9-5" />,
  truck: (
    <>
      <path d="M2 6h11v9H2zM13 9h4l3 3v3h-7z" />
      <circle cx="6" cy="18" r="1.6" />
      <circle cx="17" cy="18" r="1.6" />
    </>
  ),
  factory: (
    <>
      <path d="M3 21V9l5 3V9l5 3V6l5 3v12z" />
      <path d="M3 21h18" />
    </>
  ),
  crane: (
    <>
      <path d="M5 21V4l13 2M5 4l14 4M11 8v4" />
      <path d="M9 21h4M11 12v4l-2 2M3 21h18" />
    </>
  ),
  warehouse: (
    <>
      <path d="M3 21V8l9-4 9 4v13z" />
      <path d="M7 21v-7h10v7M7 17h10" />
    </>
  ),
  food: (
    <>
      <path d="M5 3v8a3 3 0 0 0 6 0V3M8 3v18" />
      <path d="M17 3c-1.5 1-2 3-2 5s.5 4 2 4v9" />
    </>
  ),
  building: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="1" />
      <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" />
    </>
  ),
  keys: (
    <>
      <circle cx="8" cy="8" r="4" />
      <path d="M11 11l8 8M16 16l2-2M18 18l2-2" />
    </>
  ),
  transport: (
    <>
      <rect x="4" y="4" width="16" height="12" rx="1.5" />
      <path d="M4 11h16" />
      <circle cx="8" cy="19" r="1.4" />
      <circle cx="16" cy="19" r="1.4" />
    </>
  ),
  bridge: (
    <>
      <path d="M2 8c4 4 16 4 20 0M2 8v10M22 8v10" />
      <path d="M7 11v7M12 12v6M17 11v7M2 18h20" />
    </>
  ),
  plant: (
    <>
      <path d="M4 21V10l4-2v3l4-2v3l4-2v11" />
      <path d="M4 21h16M16 21V6h4v15" />
    </>
  ),
  check: <path d="m4 12 5 5L20 6" />,
  award: (
    <>
      <circle cx="12" cy="9" r="6" />
      <path d="m9 14-1.5 7L12 18l4.5 3L15 14" />
    </>
  ),
  helmet: (
    <>
      <path d="M4 15a8 8 0 0 1 16 0" />
      <path d="M9 7V4h6v3M2 15h20v3H2z" />
    </>
  ),
  document: (
    <>
      <path d="M6 2h8l4 4v16H6z" />
      <path d="M14 2v4h4M9 12h6M9 16h6" />
    </>
  ),
  phone: (
    <path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 5 5L20 11l1 4v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  mapPin: (
    <>
      <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </>
  ),
  upload: <path d="M12 16V4m0 0L7 9m5-5 5 5M4 20h16" />,
  weld: <path d="M2 12c3 0 3-6 6-6s3 12 6 12 3-6 6-6" />,
};

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
};

export function Icon({ name, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
