/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Allow custom flat config; Next will still run lint through the script.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
