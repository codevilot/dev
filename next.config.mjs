/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  basePath: "/dev",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
