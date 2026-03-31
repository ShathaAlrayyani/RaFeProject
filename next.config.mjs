/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Add SVGR loader for SVG files
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  // turbopack: {},
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.DIGITAL_OCEAN_URL,
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
