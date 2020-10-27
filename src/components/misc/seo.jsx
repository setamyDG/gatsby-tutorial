import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import CoverImage from '../../assets/images/gatsby-logo.png';

const SEO = ({
  description,
  lang,
  meta,
  title,
  url,
  image = CoverImage,
  type,
  keywords,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title || site.siteMetadata.title}
      titleTemplate={
        title ? `%s | ${site.siteMetadata.title}` : `${site.siteMetadata.title}`
      }
      meta={[
        {
          name: 'keywords',
          content: keywords || site.siteMetadata.keywords,
        },
        {
          name: 'description',
          content: description || site.siteMetadata.description,
        },
        {
          property: 'og:title',
          content: title
            ? `${title} | ${site.siteMetadata.title}`
            : site.siteMetadata.title,
        },
        {
          property: 'og:description',
          content: description || site.siteMetadata.description,
        },
        {
          property: 'og:site_name',
          content: site.siteMetadata.title,
        },
        {
          property: 'og:type',
          content: type || 'website',
        },
        {
          property: 'og:image',
          content:
            image && image.startsWith('http')
              ? image
              : `${site.siteMetadata.siteUrl}${image}`,
        },
        {
          property: 'og:url',
          content: url
            ? `${site.siteMetadata.siteUrl}/${url}`
            : site.siteMetadata.siteUrl,
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.author,
        },
        {
          name: 'twitter:title',
          content: title || site.siteMetadata.title,
        },
        {
          name: 'twitter:description',
          content: description || site.siteMetadata.description,
        },
      ].concat(meta)}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Gruppo&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Hammersmith+One&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
};

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  description: '',
  title: undefined,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
};

export default SEO;
