const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pagcorcasino.ph',
      },
    ],
  },
};

export default nextConfig;
