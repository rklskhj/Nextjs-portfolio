/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["s3.us-west-2.amazonaws.com", "image.unsplash.com"],
  },
};

module.exports = nextConfig;
