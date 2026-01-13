import React from 'react';
import { Helmet } from 'react-helmet-async';

type SEOProps = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  keywords?: string;
};

export const SEO = ({
  title = 'daste. - Australian Electronic Music Band',
  description = 'Official website of daste. Stream our music on Spotify and Apple Music, find tour dates across Australia, USA and Europe, buy tickets and merch.',
  image = 'https://daste.world/images/daste-band-social.jpg',
  url = 'https://daste.world',
  type = 'website',
  author = 'daste.',
  keywords = 'daste, electronic music, Australian band, live music, tour dates, concert tickets, electronic band Australia',
}: SEOProps) => {
  const siteUrl = 'https://daste.world';
  const fullUrl = url.startsWith('http') ? url : `${siteUrl}${url}`;
  const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />

      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content="daste." />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:site" content="@dastemusic" />
      <meta name="twitter:creator" content="@dastemusic" />

      <link rel="canonical" href={fullUrl} />

      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
    </Helmet>
  );
};

export default SEO;
