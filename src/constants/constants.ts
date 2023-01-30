export const navLinks = [
  {
    link: '/',
    label: 'Home',
    icon: 'AiOutlineHome'
  },
  {
    link: '/about',
    label: 'About',
    icon: 'AiOutlineUser'
  },
  {
    link: '/resume',
    label: 'Resume',
    icon: 'AiOutlineFileText'
  },
  {
    link: '/projects',
    label: 'Projects',
    icon: 'AiOutlineFundProjectionScreen'
  },
  {
    link: '/contact',
    label: 'Contact',
    icon: 'RiContactsBookLine'
  }
];

export const getSvgIcon = () => ({
  react: require('../assets/svg/react.svg'),
  node: require('../assets/svg/nodejs.svg'),
  typescript: require('../assets/svg/typescript.svg'),
  next: require('../assets/svg/nextjs.svg'),
  nextLight: require('../assets/svg/nextjs-light.svg'),
  nest: require('../assets/svg/nestjs.svg'),
  tailwindcss: require('../assets/svg/tailwindcss.svg'),
  reactQuery: require('../assets/svg/react-query.svg'),
  mongoDb: require('../assets/svg/mongodb.svg'),
  reduxToolkit: require('../assets/svg/redux-toolkit.svg'),
  git: require('../assets/svg/git.svg')
});

export const getSvgCompany = () => ({
  fairdent: require('../assets/svg/companies/fairdent/fairdent-logo.svg'),
  fairdentLight: require('../assets/svg/companies/fairdent/fairdent-logo-white.svg'),
  stomarx: require('../assets/svg/companies/stomarx/stomarx-logo.svg'),
  stomarxLight: require('../assets/svg/companies/stomarx/stomarx-logo-white.svg')
});
