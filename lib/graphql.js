export const GET_ALL_CASINOS = `
query GetCasinos {
  casinos(first: 50) {
    nodes {
      title
      slug
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      casinoFields {
        overallRating
        bonusOffer
        affiliateUrl
        recommendation
        compatibility
        establishedYear
        license
        minDeposit
        paymentMethods
        withdrawalTime
        customerSupport
        gameProviders
      }
    }
  }
}
`;

export const GET_CASINO_BY_SLUG = (slug) => `
query {
  casino(id: "${slug}", idType: SLUG) {
    title
    slug
    content
    featuredImage {
      node {
        sourceUrl
        altText
      }
    }
    casinoFields {
      overallRating
      bonusOffer
      affiliateUrl
      recommendation
      compatibility
      establishedYear
      license
      minDeposit
      paymentMethods
      withdrawalTime
      customerSupport
      gameProviders
    }
    seo {
      title
      metaDesc
      focuskw
      opengraphTitle
      opengraphDescription
      opengraphImage {
        sourceUrl
      }
      twitterTitle
      twitterDescription
      canonical
      metaRobotsNoindex
      metaRobotsNofollow
      schema {
        raw
      }
    }
  }
}
`;

export const GET_ALL_POSTS = `
query GetPosts {
  posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
    nodes {
      title
      slug
      date
      excerpt
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      categories {
        nodes {
          name
          slug
        }
      }
    }
  }
}
`;

export const GET_POST_BY_SLUG = (slug) => `
query {
  post(id: "${slug}", idType: SLUG) {
    title
    slug
    date
    content
    excerpt
    featuredImage {
      node {
        sourceUrl
        altText
      }
    }
    categories {
      nodes {
        name
        slug
      }
    }
    author {
      node {
        name
      }
    }
    seo {
      title
      metaDesc
      focuskw
      opengraphTitle
      opengraphDescription
      opengraphImage {
        sourceUrl
      }
      twitterTitle
      twitterDescription
      canonical
      metaRobotsNoindex
      metaRobotsNofollow
      schema {
        raw
      }
    }
  }
}
`;
