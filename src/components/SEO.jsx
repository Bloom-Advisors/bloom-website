import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, canonical, type = 'website' }) => {
  const siteUrl = 'https://bloomadvisors.uk';
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const fullTitle = title
    ? `${title} | Bloom Advisors`
    : 'Bloom Advisors | Business Advisory & Growth Consulting UK';
  const defaultDescription =
    'Bloom Advisors provides business advisory, growth strategy, ERP consulting, and professional support for entrepreneurs, startups, and growing organisations in the UK.';
  const desc = description || defaultDescription;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={fullCanonical} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={fullCanonical} />
    </Helmet>
  );
};

export default SEO;
