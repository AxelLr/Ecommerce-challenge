/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: process.env.NEXT_PUBLIC_API_URL,
    AUTH_TOKEN: process.env.NEXT_PUBLIC_AUTH_TOKEN,
  },
  images: {
    domains: ["bucket-rn-40-dev-test.s3.amazonaws.com"],
  },
};

export default nextConfig;
