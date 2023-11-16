/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/peraknezevic/houseplants-v2/main/public/images/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/articles/genus-alocasia",
        destination: "/genus/alocasia",
        permanent: true,
      },
      {
        source: "/articles/genus-ctenanthe",
        destination: "/genus/ctenanthe",
        permanent: true,
      },
      {
        source: "/articles/genus-pilea",
        destination: "/genus/pilea",
        permanent: true,
      },
      {
        source: "/articles/genus-peperomia",
        destination: "/genus/peperomia",
        permanent: true,
      },
      {
        source: "/articles/genus-maranta",
        destination: "/genus/maranta",
        permanent: true,
      },
      {
        source: "/articles/genus-calathea-goeppertia",
        destination: "/genus/calathea-goeppertia",
        permanent: true,
      },
      {
        source: "/plants/crassula-ovata",
        destination: "/plant-profiles/crassula-ovata",
        permanent: true,
      },
      {
        source: "/plants/rhaphidophora-tetrasperma",
        destination: "/plant-profiles/rhaphidophora-tetrasperma",
        permanent: true,
      },
      {
        source: "/plants/sansevieria-masoniana",
        destination: "/plant-profiles/sansevieria-masoniana",
        permanent: true,
      },
      {
        source: "/plants/chlorophytum-bonnie",
        destination: "/plant-profiles/chlorophytum-bonnie",
        permanent: true,
      },
      {
        source: "/plants/epipremnum-aureum",
        destination: "/plant-profiles/epipremnum-aureum",
        permanent: true,
      },
      {
        source: "/plants/philodendron-birkin",
        destination: "/plant-profiles/philodendron-birkin",
        permanent: true,
      },
      {
        source: "/plants/sedum-hintonii",
        destination: "/plant-profiles/sedum-hintonii",
        permanent: true,
      },
      {
        source: "/plants/calathea-leopardina",
        destination: "/plant-profiles/calathea-leopardina",
        permanent: true,
      },
      {
        source: "/plants/scindapsus-pictus-exotica",
        destination: "/plant-profiles/scindapsus-pictus-exotica",
        permanent: true,
      },
      {
        source: "/plants/asplenium-nidus",
        destination: "/plant-profiles/asplenium-nidus",
        permanent: true,
      },
      {
        source: "/plants/peperomia-piccolo-banda",
        destination: "/plant-profiles/peperomia-piccolo-banda",
        permanent: true,
      },
      {
        source: "/plants/monstera-deliciosa",
        destination: "/plant-profiles/monstera-deliciosa",
        permanent: true,
      },
      {
        source: "/plants/zamioculcas-zamiifolia-raven",
        destination: "/plant-profiles/zamioculcas-zamiifolia-raven",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;


// Injected content via Sentry wizard below

const { withSentryConfig } = require("@sentry/nextjs");

module.exports = withSentryConfig(
  module.exports,
  {
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options

    // Suppresses source map uploading logs during build
    silent: true,
    org: "pera-knezevic",
    project: "houseplants",
  },
  {
    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

    // Transpiles SDK to be compatible with IE11 (increases bundle size)
    transpileClientSDK: true,

    // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
    tunnelRoute: "/monitoring",

    // Hides source maps from generated client bundles
    hideSourceMaps: true,

    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,
  }
);
