export const HERO = {
  heading: (
    <>
      {/* Are you looking for a developer?
      <br /> */}
      Frontend Engineer |
      <br />
      Technical SEO specialist
    </>
  ),
  paragraph: (
    <>
      Based out of San Francisco. I enjoy working with early stage startups and
      small businesses.
      <br />
      <br />
      Aside from general development, I can help you get set up with marketing
      tools, especially with integration and troubleshooting. Have a tracking
      bug you can&apos;t solve? Contact me for a consultation.
    </>
  ),
  cta: {
    label: 'Github',
    href: 'https://github.com/stevenjchang/',
  },
  cta2: {
    label: 'LinkedIn',
    href: 'https://bit.ly/stevenjchang-linkedin',
  },
};

export const SECTION_1 = {
  headingSection: {
    heading: 'Learn more about me',
    paragraph: (
      <>
        <br />
        You will find that I&apos;m a uniquely detailed and communicative
        developer.
        <br />
        <br />I pride myself on my work quality and work ethic. Learn more about
        what makes me unique and valuable to your company.
      </>
    ),
  },
  items: [
    {
      iconCN: 'fas fa-sitemap',
      heading: 'Organized',
      paragraph: '',
    },
    {
      // iconCN: 'fa-drafting-compass',
      iconCN: 'fas fa-wrench',
      heading: 'Thoughtful',
      paragraph: '',
    },
    {
      iconCN: 'fas fa-eye',
      heading: 'An eye for UX',
      paragraph:
        'You can expect a rapid response rate, and regular status updates',
    },
    {
      // iconCN: 'fas fa-file-alt',
      iconCN: 'fas fa-universal-access',
      heading: 'Documentation',
      paragraph: '',
    },
  ],
};

export const SECTION_3 = {
  heading: 'Design System / Design Library',
  paragraph:
    'As a passionate frontend developer, I care a lot about design systems. Are you interested in React component libraries? If so, reach out and we can chat about it',
  tags: ['button', 'input', 'labels', 'menus'],
};

export const SECTION_4 = {
  heading: 'My Tech Stack',
  paragraph: (
    <>
      Tech stack I work with most often
      <br />
      <br />
      contact me for other technologies you wish to use
    </>
  ),
  items: [
    // typescript, graphql, headless cms
    {
      heading: 'HTML',
      iconUrl: 'icons/html.png',
      colorCode: 'bg-orange-600',
      targetLink: '',
    },
    {
      heading: 'CSS',
      iconUrl: 'icons/css.png',
      colorCode: 'bg-blue-700',
      targetLink: '',
    },
    {
      heading: 'JavaScript',
      iconUrl: 'icons/js.png',
      colorCode: 'bg-yellow-500',
      targetLink: '',
    },
    {
      heading: 'React',
      iconUrl: 'img/react.jpg',
      colorCode: 'bg-sky-500',
      targetLink: '',
    },
    {
      heading: 'Vue.js',
      iconUrl: 'img/vue.jpg',
      colorCode: 'bg-emerald-500',
      targetLink: '',
    },

    {
      heading: 'NextJS',
      iconUrl: 'icons/nextjs.jpeg',
      colorCode: 'bg-slate-700',
      targetLink: '',
    },
  ],
  tags: ['button', 'input', 'labels', 'menus'],
};

export const SECTION_5 = {
  heading: 'heading',
  paragraph: 'para',
  items: [
    {
      heading: 'Login Page',
      imgUrl: '/img/login.jpg',
      url: '/auth/login',
    },
    {
      heading: 'Profile page',
      imgUrl: '/img/profile.jpg',
      url: '/profile',
    },
    {
      heading: 'Landing Page',
      imgUrl: '/img/landing.jpg',
      url: '/landing',
    },
  ],
};
