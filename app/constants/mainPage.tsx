
import ActionIcon from '../assets/actionIcon.svg'
import CameraIcon from '../assets/cameraIcon.svg'
import FilmIcon from '../assets/filmWithPlay.svg'
import PicIcon from '../assets/tvWithPeople.svg'
import PicturesIcon from '../assets/picturesIcon.svg'
import ServiceIcon from '../assets/servicesIcon.svg'

import AbuHatemImg from '../assets/brandsWorkedWith/Jordan/abuHatem.png'
import AbuOdehImg from '../assets/brandsWorkedWith/Jordan/abuOdeh.png'
import AlryadiImg from '../assets/brandsWorkedWith/Jordan/alryadi.png'
import BaazImg from '../assets/brandsWorkedWith/Jordan/baaz.png'
import DarwazehImg from '../assets/brandsWorkedWith/Jordan/darwazeh.png'
import DewanImg from '../assets/brandsWorkedWith/Jordan/dewan.png'
import DurrahImg from '../assets/brandsWorkedWith/Jordan/durrah.png'
import GrandAmmanImg from '../assets/brandsWorkedWith/Jordan/grandAmman.png'
import JamednaImg from '../assets/brandsWorkedWith/Jordan/jamedna.png'
import JordanTvImg from '../assets/brandsWorkedWith/Jordan/jordanTv.png'
import KitcoImg from '../assets/brandsWorkedWith/Jordan/kitco.png'
import MandiImg from '../assets/brandsWorkedWith/Jordan/mandi.png'
import MaroufImg from '../assets/brandsWorkedWith/Jordan/marouf.png'
import NafesaImg from '../assets/brandsWorkedWith/Jordan/nafesa.png'
import ReboundImg from '../assets/brandsWorkedWith/Jordan/rebound.png'
import RomeroImg from '../assets/brandsWorkedWith/Jordan/romero.png'
import RoyaImg from '../assets/brandsWorkedWith/Jordan/roya.png'
import UnknownBrandImg from '../assets/brandsWorkedWith/Jordan/someLogo.png'
import StixImg from '../assets/brandsWorkedWith/Jordan/stix.png'

import { StaticImageData } from 'next/image'
export interface OurClientBrand {
  brandImgSrc : StaticImageData
  brandName : string
}

export interface KeyService {
  content: string
  icon: any 
  title: string
}

export const keyServices : KeyService[] = [
  {
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    icon: FilmIcon,
    title: "Cinematography",
  },
  {
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    icon: ActionIcon,
    title: "Production",
  },
  {
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    icon: ServiceIcon,
    title: "Post Production",
  },
  {
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    icon: CameraIcon,
    title: "Podcast Production",
  },
  {
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    icon: PicIcon,
    title: "Renting",
  },
  {
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    icon: PicturesIcon,
    title: "Motion Graphics",
  },
];

export const ourUaeClients: OurClientBrand[] =[
  {
    brandImgSrc: AbuHatemImg,
    brandName:'',
  },
]

export const ourJorClients: OurClientBrand[] =[
  {
    brandImgSrc: AbuHatemImg ,
    brandName:'Abu Hatem',
  },
  {
    brandImgSrc: AbuOdehImg ,
    brandName:'Abu Odeh',
  },
  {
    brandImgSrc: AlryadiImg ,
    brandName:'Al Ryadi',
  },
  {
    brandImgSrc: BaazImg ,
    brandName:'Baaz',
  },
  {
    brandImgSrc: DarwazehImg ,
    brandName:'Darwazeh',
  },
  {
    brandImgSrc: DewanImg ,
    brandName:'Dewan',
  },
  {
    brandImgSrc: DurrahImg ,
    brandName:'Durrah',
  },
  {
    brandImgSrc: GrandAmmanImg ,
    brandName:'Grand Amman',
  },
  {
    brandImgSrc: JamednaImg ,
    brandName:'Jamedna',
  },
  {
    brandImgSrc: JordanTvImg ,
    brandName:'Jordan Tv',
  },
  {
    brandImgSrc: KitcoImg ,
    brandName:'Kitco',
  },
  {
    brandImgSrc: MandiImg ,
    brandName:'Mandi',
  },
  {
    brandImgSrc: MaroufImg ,
    brandName:'Marouf',
  },
  {
    brandImgSrc: NafesaImg ,
    brandName:'Nafesa',
  },
  {
    brandImgSrc: ReboundImg ,
    brandName:'Rebound',
  },
  {
    brandImgSrc: RomeroImg ,
    brandName:'Romero',
  },
  {
    brandImgSrc: RoyaImg ,
    brandName:'Roya',
  },
  {
    brandImgSrc: UnknownBrandImg ,
    brandName:'UnknownBrand',
  },
  {
    brandImgSrc: StixImg ,
    brandName:'Stix',
  },
]