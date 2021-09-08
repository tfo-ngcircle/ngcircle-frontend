import useSWR from "swr";

export function getStrapiUrl(path = "") {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`;
}

export async function fetchApi(path) {
  const requestUrl = getStrapiUrl(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}

export async function postApi(path, data) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  const requestUrl = getStrapiUrl(path);
  const response = await fetch("http://localhost:1337" + path, requestOptions);
  return await response.json();
}

export function useFetchApiSWR(path) {
  const requestUrl = getStrapiUrl(path);
  const fetcher = (url) => fetch(url).then((r) => r.json());
  return useSWR(requestUrl, fetcher);
}
