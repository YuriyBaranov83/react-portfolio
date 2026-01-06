import { FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";

export const contactData = [
  {
    id: 1,
    icon: FaPhone,
    titleKey: "contact.items.phone.title",
    valueKey: "contact.items.phone.value",
    link: "tel:+380689777710",
  },
  {
    id: 2,
    icon: FaEnvelope,
    titleKey: "contact.items.email.title",
    valueKey: "contact.items.email.value",
    link: "mailto:yuri.baranov83@gmail.com",
  },
  {
    id: 3,
    icon: FaLocationDot,
    titleKey: "contact.items.address.title",
    valueKey: "contact.items.address.value",
    link: "#",
  },
];
