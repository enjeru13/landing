import { Helmet } from "react-helmet-async";

const BASE_URL = "https://pluma8.com";
const DEFAULT_IMAGE = `${BASE_URL}/og-image.png`;

const SEO = ({ title, description, path = "/", image = DEFAULT_IMAGE }) => {
  const fullTitle = title
    ? `${title} | Pluma8`
    : "Pluma8 — Desarrollo Web, Mobile y ERP a Medida";
  const canonical = `${BASE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
