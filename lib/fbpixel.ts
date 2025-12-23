export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

interface FacebookPixel {
  (command: "init", pixelId: string): void;
  (command: "track", event: string, parameters?: Record<string, unknown>): void;
  (
    command: "trackCustom",
    event: string,
    parameters?: Record<string, unknown>
  ): void;
  push: (...args: unknown[]) => void;
}

declare global {
  interface Window {
    fbq: FacebookPixel;
  }
}

export const pageview = () => {
  window.fbq("track", "PageView");
};

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const event = (name: string, options = {}) => {
  window.fbq("track", name, options);
};
