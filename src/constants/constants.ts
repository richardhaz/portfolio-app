import {
  AiOutlineFileText,
  AiOutlineFundProjectionScreen,
  AiOutlineHome,
  AiOutlineUser
} from 'react-icons/ai';
import { RiContactsBookLine } from 'react-icons/ri';

export const navLinks = [
  {
    link: '/',
    label: 'Home',
    icon: AiOutlineHome
  },
  {
    link: '/about',
    label: 'About',
    icon: AiOutlineUser
  },
  {
    link: '/resume',
    label: 'Resume',
    icon: AiOutlineFileText
  },
  {
    link: '/projects',
    label: 'Projects',
    icon: AiOutlineFundProjectionScreen
  },
  {
    link: '/contact',
    label: 'Contact',
    icon: RiContactsBookLine
  }
];

export const getUndrawImage = () => ({
  programmingGuy: require('../assets/undraw/productivity.svg'),
  programmingGirl: require('../assets/undraw/fall_girl.svg')
});
