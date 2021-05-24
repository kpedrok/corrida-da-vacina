export const GA_TRACKING_ID = "G-XBJFETXKRK";

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageView = (url: URL) => {
  console.log("pageView");
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

type GTagEvent = {
  action: string;
  category: string;
  label: string;
  value: number;
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: GTagEvent) => {
  console.log("event");
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
