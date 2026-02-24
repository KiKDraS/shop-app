import { BadgePosition } from "./types";

export const POSITION_STYLES: Record<BadgePosition, object> = {
  "top-right": { top: -6, right: -6 },
  "top-left": { top: -6, left: -6 },
  "bottom-right": { bottom: -6, right: -6 },
  "bottom-left": { bottom: -6, left: -6 },
  center: {
    left: 8,
  },
};
