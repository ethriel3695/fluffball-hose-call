module.exports = {
  plugins: [
    {
      resolve: 'gatsby-theme-contentful',
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `FluffBall House Call`,
        icon: `content/assets/logo/logo.jpg`,
        short_name: `FluffBall House Call`,
        start_url: `/`,
        background_color: `#008080`,
        theme_color: `#008080`,
        display: `standalone`,
        scope: '/',
        crossOrigin: `use-credentials`,
        // theme_color_in_head: false
      },
    },
  ],
  siteMetadata: {
    title: `FluffBall House Call`,
    author: `Reuben Ellis`,
    description: `I love grooming dogs and what better way then to come to your home where your pet is comfortable and close to family!`,
    greeting: ``,
    copyright: `Copyright © 2020 Reuben Ellis LLC`,
    loginDesc: '',
    newsletterTitle: '',
    isAuthApp: false,
    social: {
      facebook: 'https://www.facebook.com/ball.housecall',
      twitter: '',
      instagram: '',
      github: '',
      email: '',
    },
    externalLinks: [{ label: '', link: '' }],
    hasNotifications: false,
  },
};
