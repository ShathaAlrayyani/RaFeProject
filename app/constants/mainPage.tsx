
import { AboutUsSection, IntroductionSection, KeyServicesSection, MissionVisionSection, TeamCompanySection } from '../components'
import ActionIcon from '../assets/actionIcon.svg'
import CameraIcon from '../assets/cameraIcon.svg'
import FilmIcon from '../assets/filmWithPlay.svg'
import PicIcon from '../assets/tvWithPeople.svg'
import PicturesIcon from '../assets/picturesIcon.svg'
import ServiceIcon from '../assets/servicesIcon.svg'


export const keyServices = [
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

export const sectionsElements = [
  {
    Component: <IntroductionSection />,
  },
  {
    Component: <AboutUsSection />,
  },
  {
    Component: <MissionVisionSection />,
  },
  {
    Component: <KeyServicesSection />,
  },
  {
    Component: <TeamCompanySection />,
  },
];
