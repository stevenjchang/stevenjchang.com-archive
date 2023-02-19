import {
  Box,
  Button,
  Divider,
  IconButton,
  Sheet,
  Stack,
  Typography,
  List,
  ListItem,
} from '@mui/joy';

export const HERO = {
  heading: (
    <>
      {/* Are you looking for a developer?
      <br /> */}
      Frontend Engineer
    </>
  ),
  paragraph: (
    <>
      I make professional websites that are:
      <br />
      <ul className="list-disc list-inside ml-6">
        <li>Fast and responsive (on all browsers and mobile devices)</li>
        <li>Accessible (WCAG 2.1 compliant)</li>
        <li>Strong technical SEO scores</li>
        <li>Fast load times and first paint</li>
      </ul>
      <br />
      Ask about my other services:
      <ul className="list-disc list-inside ml-6">
        <li>Ad-tech / mar-tech integrations</li>
        <li>A/B testing</li>
        <li>UX audit</li>
      </ul>
    </>
  ),
  cta: {
    label: 'Github',
    href: 'http://bit.ly/stevenjchang-github',
  },
  cta2: {
    label: 'Connect',
    href: 'https://bit.ly/stevenjchang-linkedin',
  },
};

export const SECTION_1 = {
  headingSection: {
    heading: 'Hire The Best!',
    paragraph: (
      <>
        Read testimonials on{' '}
        <a
          href="https://bit.ly/stevenjchang-linkedin"
          // className="text-blue-400"
          style={{
            // textDecoration: 'underline',
            fontWeight: '500',
          }}
        >
          LinkedIn
        </a>
        <br />
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
      heading: 'Responsive web pages',
      paragraph: 'I make sure sites work across various browsers and dimension',
    },
    {
      // iconCN: 'fa-drafting-compass',
      iconCN: 'fas fa-wrench',
      heading: 'Ownership',
      paragraph:
        'I can do my own research, requirement gathering, time-line estimation.',
    },
    {
      iconCN: 'fas fa-eye',
      heading: 'An eye for UX',
      paragraph: 'Always have the purpose and end user in mind.',
    },
    {
      // iconCN: 'fas fa-file-alt',
      iconCN: 'fas fa-universal-access',
      heading: 'Good Communication',
      paragraph:
        'You can expect a rapid response rate, and regular status updates.',
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
      This is the technologies I work with most often.
      <br />
      <br />
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
  heading: 'My Portfolio',
  paragraph: "My work that's out in the world",
  items: [
    {
      heading: 'Skupos',
      imgUrl: '/img/projects/skupos.png',
      url: 'https://www.skupos.com/',
    },
    {
      heading: 'Marketing Careers',
      imgUrl: '/img/projects/marketing-careers.png',
      url: 'https://bit.ly/marketing-careers',
    },
    {
      heading: 'Global Trends',
      imgUrl: '/img/projects/global-marketing-trends.png',
      url: 'https://bit.ly/global-marketing-trends',
    },
    {
      heading: 'NFT Art Marketplace',
      imgUrl: '/img/projects/legend-art.png',
      url: 'https://bit.ly/legend-art',
    },
  ],
};
