import { getStrapiUrl } from "./api";

export function getStrapiMedia(media) {
  if (typeof media !== undefined) {
    if (media == null) return "";
  }
  const imageUrl = media.url.startsWith("/")
    ? getStrapiUrl(media.url)
    : media.url;
  return imageUrl;
}
