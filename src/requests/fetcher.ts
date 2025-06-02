const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface IFetcherArgs {
  endpoint: string;
  options?: RequestInit;
  params?: Record<string, string | string[]>;
}

export const fetcher = async <TData>({
  endpoint,
  options = {},
  params = {},
}: IFetcherArgs): Promise<TData> => {
  if (!API_URL) {
    throw new Error("API_URL is not defined");
  }

  const urlParams = new URLSearchParams(params).toString();

  const endpointWithParams = urlParams
    ? `${API_URL}/api${endpoint}?${urlParams}`
    : `${API_URL}/api${endpoint}`;

  const res = await fetch(endpointWithParams, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  });

  if (!res.ok) {
    const errorBody = await res.text();
    throw new Error(`HTTP error ${res.status}: ${errorBody}`);
  }

  return res.json();
};
