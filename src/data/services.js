import {
  FaPenRuler,
  FaPhotoFilm,
  FaFileCode,
  FaAlignLeft,
} from "react-icons/fa6";

const services = [
  {
    icon: FaPenRuler,
    titleKey: "services.items.uiux.title",
    subtitleKey: "services.items.uiux.subtitle",
    descriptionKey: "services.items.uiux.description",
    listKey: "services.items.uiux.list",
  },
  {
    icon: FaPhotoFilm,
    titleKey: "services.items.branding.title",
    subtitleKey: "services.items.branding.subtitle",
    descriptionKey: "services.items.branding.description",
    listKey: "services.items.branding.list",
  },
  {
    icon: FaFileCode,
    titleKey: "services.items.webdev.title",
    subtitleKey: "services.items.webdev.subtitle",
    descriptionKey: "services.items.webdev.description",
    listKey: "services.items.webdev.list",
  },
  {
    icon: FaAlignLeft,
    titleKey: "services.items.content.title",
    subtitleKey: "services.items.content.subtitle",
    descriptionKey: "services.items.content.description",
    listKey: "services.items.content.list",
  },
];

export default services;
