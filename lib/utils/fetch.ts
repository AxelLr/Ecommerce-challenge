import config from "@/next.config.mjs";

const fetchWrapper = async (url: string, options = {}) => {
  const defaultConfig = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${config.env!.AUTH_TOKEN}`,
    },
  };

  const response = await fetch(config.env!.API_URL! + url, {
    ...defaultConfig,
    ...options,
  });

  return response;
};

export default fetchWrapper;
