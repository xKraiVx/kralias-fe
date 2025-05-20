const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetcher = async <TData>(
  endpoint: string,
  options: RequestInit = {}
): Promise<TData> => {
  if (!API_URL) {
    throw new Error("API_URL is not defined");
  }

  const res = await fetch(`${API_URL}/api${endpoint}`, {
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
