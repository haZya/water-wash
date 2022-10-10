/** @type {import('next').NextConfig} */
import withBundleAnalyzer from '@next/bundle-analyzer';

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: [
      new URL(
        process.env.NODE_ENV === 'production'
          ? process.env.NEXT_PUBLIC_BACKEND_URL
          : process.env.NEXT_PUBLIC_BACKEND_LH_URL
      ).hostname,
    ],
  },
};

export default bundleAnalyzer(nextConfig);
