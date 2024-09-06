import ActionIcon from "../assets/actionIcon.svg";
import CameraIcon from "../assets/cameraIcon.svg";
import FilmIcon from "../assets/filmWithPlay.svg";
import PicIcon from "../assets/tvWithPeople.svg";
import PicturesIcon from "../assets/picturesIcon.svg";
import ServiceIcon from "../assets/servicesIcon.svg";

export interface KeyService {
  content: string;
  icon: any;
  title: string;
}

export const keyServices: KeyService[] = [
  {
    content:
      "Capturing stunning visuals that tell a story through the lens, focusing on lighting, composition, and camera movement to create a captivating cinematic experience.",
    icon: FilmIcon,
    title: "Cinematography",
  },
  {
    content:
      "Managing all aspects of the filmmaking process, from pre-production planning and coordination to overseeing the shoot, ensuring a smooth and efficient workflow.",
    icon: ActionIcon,
    title: "Production",
  },
  {
    content:
      "Transforming raw footage into a polished final product through editing, color correction, sound design, and visual effects, bringing the director’s vision to life.",
    icon: ServiceIcon,
    title: "Post Production",
  },
  {
    content:
      "Crafting high-quality audio content for podcasts, including recording, editing, sound mixing, and distribution, to create engaging and professional episodes.",
    icon: CameraIcon,
    title: "Podcast Production",
  },
  {
    content:
      "Offering a fully equipped studio space with professional lighting, backdrops, and equipment, ideal for photo shoots, video production, and other creative projects.",
    icon: PicIcon,
    title: "Renting Studio",
  },
  {
    content:
      "Creating dynamic visual content through animation and graphic design to enhance storytelling, explain concepts, or add visual flair to videos and presentations.",
    icon: PicturesIcon,
    title: "Motion Graphics",
  },
];

export const sliderBreakPoints = (cardsNumber: number) => ({
  350: {
    slidesPerView: cardsNumber < 1.25 ? cardsNumber : 1.25,
  },
  400: {
    slidesPerView: cardsNumber < 1.50 ? cardsNumber : 1.50,
  },
  540: {
    slidesPerView: cardsNumber < 2 ? cardsNumber : 2,
  },
  640: {
    slidesPerView: cardsNumber < 2.25 ? cardsNumber : 2.25,
  },
  680: {
    slidesPerView: cardsNumber < 2.5 ? cardsNumber : 2.5,
  },
})


export const tvCommercialsData = [
  {
    description: "",
    id: "marouf_commercials",
    imgSrc: "https://ra-project.nyc3.cdn.digitaloceanspaces.com/TVCommercials/MaroufRamadan.png",
    title: "Marouf Commercials",
  },
  {
    description: "",
    id: "nafeeseh_commercials",
    imgSrc: "https://ra-project.nyc3.cdn.digitaloceanspaces.com/TVCommercials/Nafesa.jpg",
    title: "Nafesseh Commercials",
  },
  {
    description: "",
    id: "mandi_commercials",
    imgSrc: "https://ra-project.nyc3.cdn.digitaloceanspaces.com/TVCommercials/MandiRice.png",
    title: "Mandi Rice Commercials",
  }
];

export const documentariesData = [
  {
    description: "",
    id: "irth",
    imgSrc: "https://ra-project.nyc3.cdn.digitaloceanspaces.com/Documentaries/Irth.png",
    title: "Irth Documentary",
  }
];

export const productionsData = [
  {
    description: "",
    id: "ra_sketches",
    imgSrc: "https://ra-project.nyc3.cdn.digitaloceanspaces.com/Productions/Rub_Banadora.jpg",
    title: "Ra Sketches",
  },
  {
    description: "",
    id: "bring_it_on",
    imgSrc: "https://ra-project.nyc3.cdn.digitaloceanspaces.com/Productions/BringWhatYouHave.jpg",
    title: "Bring It On",
  },
  {
    description: "",
    id: "vice_versa",
    imgSrc: "https://ra-project.nyc3.cdn.digitaloceanspaces.com/Productions/Al3ks_Sa7e7.jpg",
    title: "Vice Versa",
  },
  {
    description: "",
    id: "the_fear_book",
    imgSrc: "https://ra-project.nyc3.cdn.digitaloceanspaces.com/Productions/BookOfFear.png",
    title: "The Fear Book",
  },
  {
    description: "",
    id: "celebrity_quiz",
    imgSrc: "https://ra-project.nyc3.cdn.digitaloceanspaces.com/Productions/CQ.jpg",
    title: "Celebrity Quiz",
  },
];

export const tabsContent = [
  {
    data: productionsData,
    id:"productions",
    tabName: "Productions",
  },
  {
    data: tvCommercialsData,
    id:"tv_Commercials",
    tabName: "TV Commercials",
  },
  {
    data: documentariesData,
    id:"documentaries",
    tabName: "Documentaries",
  },
  {
    data: [],
    id:"library",
    tabName: "Library",
  },
];
