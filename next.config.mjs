/** @type {import('next').NextConfig} */
const config = {
  images: {
    remotePatterns: [
      { hostname: "cdn.sanity.io" },
      { hostname: "munchies.medusajs.app" },
      { hostname: "localhost:9000" },
      { hostname: "localhost:3000" },
      { hostname: "d7vlc8vvjrbkr.cloudfront.net" },
      { hostname: "medusa-s3-file-storage.s3.eu-north-1.amazonaws.com" },
      { hostname: "tinloof-munchies.s3.eu-north-1.amazonaws.com" },
      { hostname: "medusa-public-images.s3.eu-west-1.amazonaws.com" },
    ],
    formats: ["image/avif", "image/webp"],
  },
  eslint: {
    /// Set this to false if you want production builds to abort if there's lint errors
    ignoreDuringBuilds: process.env.VERCEL_ENV === "production",
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  experimental: {
    taint: true,
  },
  rewrites() {
    return [
      {
        source:
          "/:path((?!us|dk|fr|de|es|jp|gb|ca|ar|za|mx|my|au|nz|dz|br|cms|api|images|icons|favicon.ico|sections|favicon-inactive.ico).*)",
        destination: "/us/:path*",
      },
    ];
  },
};

export default config;
