/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: process.env.NEXT_PUBLIC_API_URL,
    AUTH_TOKEN: process.env.NEXT_PUBLIC_AUTH_TOKEN,
  },
  images: {
    domains: [process.env.CHALLENGE_BUCKET],
  },
};

export default nextConfig;
