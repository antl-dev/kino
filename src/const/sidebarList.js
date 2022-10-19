import {
  RiAlarmLine,
  RiBarChartBoxLine,
  RiCompass3Line,
  RiHome2Line,
  RiQuestionLine,
  RiSettings2Line,
  RiStarLine,
  RiTimeLine,
  RiUser3Line,
} from "react-icons/ri";

export const menuItems = [
  {
    key: "0",
    name: "menu",
    divider: true,
    group: [
      {
        name: "home",
        icon: <RiHome2Line />,
        href: "/",
      },
      {
        name: "Discovery",
        icon: <RiCompass3Line />,
        href: "/discovery",
      },
      {
        name: "Coming soon",
        icon: <RiAlarmLine />,
        href: "/comingsoon",
      },
    ],
  },
  {
    key: "1",
    name: "library",
    divider: true,
    group: [
      {
        name: "recent",
        icon: <RiTimeLine />,
        href: "/recent",
      },
      {
        name: "top rated",
        icon: <RiStarLine />,
        href: "/top",
      },
      {
        name: "trend",
        icon: <RiBarChartBoxLine />,
        href: "/trend",
      },
    ],
  },
  {
    key: "2",
    name: null,
    divider: false,
    group: [
      {
        name: "setting",
        icon: <RiSettings2Line />,
        href: "/setting",
      },
      {
        name: "help",
        icon: <RiQuestionLine />,
        href: "/help",
      },
      {
        name: "Sign in",
        icon: <RiUser3Line />,
        href: "/login",
      },
    ],
  },
];
