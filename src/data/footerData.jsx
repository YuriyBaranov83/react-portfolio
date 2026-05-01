import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa6";

export const infoLinks = [
  { id: 1, href: "skills", labelKey: "nav.skills" },
  { id: 2, href: "services", labelKey: "nav.services" },
  { id: 3, href: "portfolio", labelKey: "nav.portfolio" },
  { id: 4, href: "contacts", labelKey: "nav.contacts" },
];

export const followLinks = [
  {
    id: 1,
    href: "https://www.facebook.com/yuri.baranov.33",
    label: FaFacebookF,
    ariaLabel: "Open Facebook profile",
  },
  {
    id: 2,
    href: "https://www.instagram.com/yuriy__baranov?igsh=bHk4aWYwbXR1Njlq",
    label: FaInstagram,
    ariaLabel: "Open Instagram profile",
  },
  {
    id: 3,
    href: "https://github.com/YuriyBaranov83",
    label: FaGithub,
    ariaLabel: "Open GitHub profile",
  },
];
