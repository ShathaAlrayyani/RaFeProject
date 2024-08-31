import ActionIcon from "../assets/actionIcon.svg";
import CameraIcon from "../assets/cameraIcon.svg";
import FilmIcon from "../assets/filmWithPlay.svg";
import PicIcon from "../assets/tvWithPeople.svg";
import PicturesIcon from "../assets/picturesIcon.svg";
import ServiceIcon from "../assets/servicesIcon.svg";

import AbuHatemImg from "../assets/brandsWorkedWith/Jordan/abuHatem.png";
import AbuOdehImg from "../assets/brandsWorkedWith/Jordan/abuOdeh.png";
import AlryadiImg from "../assets/brandsWorkedWith/Jordan/alryadi.png";
import BaazImg from "../assets/brandsWorkedWith/Jordan/baaz.png";
import DarwazehImg from "../assets/brandsWorkedWith/Jordan/darwazeh.png";
import DewanImg from "../assets/brandsWorkedWith/Jordan/dewan.png";
import DurrahImg from "../assets/brandsWorkedWith/Jordan/durrah.png";
import GrandAmmanImg from "../assets/brandsWorkedWith/Jordan/grandAmman.png";
import JamednaImg from "../assets/brandsWorkedWith/Jordan/jamedna.png";
import JordanTvImg from "../assets/brandsWorkedWith/Jordan/jordanTv.png";
import KitcoImg from "../assets/brandsWorkedWith/Jordan/kitco.png";
import MandiImg from "../assets/brandsWorkedWith/Jordan/mandi.png";
import MaroufImg from "../assets/brandsWorkedWith/Jordan/marouf.png";
import NafesaImg from "../assets/brandsWorkedWith/Jordan/nafesa.png";
import ReboundImg from "../assets/brandsWorkedWith/Jordan/rebound.png";
import RomeroImg from "../assets/brandsWorkedWith/Jordan/romero.png";
import RoyaImg from "../assets/brandsWorkedWith/Jordan/roya.png";
import UnknownBrandImg from "../assets/brandsWorkedWith/Jordan/someLogo.png";
import StixImg from "../assets/brandsWorkedWith/Jordan/stix.png";

import { StaticImageData } from "next/image";
export interface OurClientBrand {
  brandImgSrc: StaticImageData;
  brandName: string;
}

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

export const ourUaeClients: OurClientBrand[] = [
  {
    brandImgSrc: AbuHatemImg,
    brandName: "",
  },
];

export const ourJorClients: OurClientBrand[] = [
  {
    brandImgSrc: AbuHatemImg,
    brandName: "Abu Hatem",
  },
  {
    brandImgSrc: AbuOdehImg,
    brandName: "Abu Odeh",
  },
  {
    brandImgSrc: AlryadiImg,
    brandName: "Al Ryadi",
  },
  {
    brandImgSrc: BaazImg,
    brandName: "Baaz",
  },
  {
    brandImgSrc: DarwazehImg,
    brandName: "Darwazeh",
  },
  {
    brandImgSrc: DewanImg,
    brandName: "Dewan",
  },
  {
    brandImgSrc: DurrahImg,
    brandName: "Durrah",
  },
  {
    brandImgSrc: GrandAmmanImg,
    brandName: "Grand Amman",
  },
  {
    brandImgSrc: JamednaImg,
    brandName: "Jamedna",
  },
  {
    brandImgSrc: JordanTvImg,
    brandName: "Jordan Tv",
  },
  {
    brandImgSrc: KitcoImg,
    brandName: "Kitco",
  },
  {
    brandImgSrc: MandiImg,
    brandName: "Mandi",
  },
  {
    brandImgSrc: MaroufImg,
    brandName: "Marouf",
  },
  {
    brandImgSrc: NafesaImg,
    brandName: "Nafesa",
  },
  {
    brandImgSrc: ReboundImg,
    brandName: "Rebound",
  },
  {
    brandImgSrc: RomeroImg,
    brandName: "Romero",
  },
  {
    brandImgSrc: RoyaImg,
    brandName: "Roya",
  },
  {
    brandImgSrc: UnknownBrandImg,
    brandName: "UnknownBrand",
  },
  {
    brandImgSrc: StixImg,
    brandName: "Stix",
  },
];

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
