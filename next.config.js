/** @type {import('next').NextConfig} */
const nextConfig = {
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
