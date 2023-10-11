import React from 'react';
import { Helmet } from 'react-helmet';

interface Props {
  title: string;
  description: string;
  keywords: string[];
}

const Head: React.FC<Props> = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content="Hizkia Reppi" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />

      {/* Canonical */}
      <link rel="canonical" href="https://hizkiareppi.vercel.app/" />

      {/* Fonts */}
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
    </Helmet>
  );
};

export default Head;
