/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ]
  },
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        ...config.watchOptions,
        ignored: ["**/.next/**", "**/node_modules/**"],
        poll: 1000,
        aggregateTimeout: 200
      };
    }

    return config;
  }
};

export default nextConfig;
