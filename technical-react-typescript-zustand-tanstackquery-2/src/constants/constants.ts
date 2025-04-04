import { ArrowConfig, AuroraConfig, AutocompleteConfig, Avatar, BentoItem, ImageData, ImageItem, ImageItem1, NavLink } from "../interface";

export const textImageData: ImageData[] = [
    {
      id: 1,
      text: "Nature",
      imageUrl: "https://t3.ftcdn.net/jpg/03/55/64/04/360_F_355640480_FKKv2BQwqY6sMa6jmEGVPnEndX1GPtJU.jpg",
    },
    {
      id: 2,
      text: "City",
      imageUrl: "https://t3.ftcdn.net/jpg/03/55/64/04/360_F_355640480_FKKv2BQwqY6sMa6jmEGVPnEndX1GPtJU.jpg",
    },
    {
      id: 3,
      text: "Technology",
      imageUrl: "https://t3.ftcdn.net/jpg/03/55/64/04/360_F_355640480_FKKv2BQwqY6sMa6jmEGVPnEndX1GPtJU.jpg",
    },
  ];

  export const arrowConfig: ArrowConfig = {
    size: 40,
    color: "#ffffff",
    initialRotation: 0,
    rotatedDegree: 180,
    bounceHeight: 10,
  };

  export const auroraConfig: AuroraConfig = {
    colors: ["#ff0080", "#8000ff", "#0080ff", "#00ff80"],
    duration: 10, // Animation duration in seconds
    size: 400, // Size of aurora blobs
  };

  export const autocompleteConfig: AutocompleteConfig = {
    placeholder: "Search...",
    suggestions: ["React", "TypeScript", "Zustand", "Framer Motion", "Tailwind CSS", "Vite"],
  };

  export const avatars: Avatar[] = [
    { id: 1, name: "Alice", imageUrl: "https://randomuser.me/api/portraits/women/1.jpg" },
    { id: 2, name: "Bob", imageUrl: "https://randomuser.me/api/portraits/men/2.jpg" },
    { id: 3, name: "Charlie", imageUrl: "https://randomuser.me/api/portraits/women/3.jpg" },
    { id: 4, name: "David", imageUrl: "https://randomuser.me/api/portraits/men/4.jpg" },
  ];

  export const beamColors: string[] = ["#ff0080", "#8000ff", "#0080ff", "#00ff80"];
export const beamCount = 8;
export const beamSpeed = 2;

export const boxColors: string[] = ["#ff007f", "#00ff7f", "#007fff", "#ffff00"];
export const boxCount = 10;
export const boxSpeed = 1.5;

export const bentoItems: BentoItem[] = [
  { id: 1, title: "Dashboard", size: "large", bgColor: "#ff007f" },
  { id: 2, title: "Settings", size: "small", bgColor: "#007fff" },
  { id: 3, title: "Profile", size: "medium", bgColor: "#00ff7f" },
  { id: 4, title: "Analytics", size: "large", bgColor: "#ffcc00" },
  { id: 5, title: "Notifications", size: "small", bgColor: "#ff5733" },
  { id: 6, title: "Reports", size: "medium", bgColor: "#8e44ad" },
];

export const images: ImageItem[] = [
  { id: 1, src: "https://randomuser.me/api/portraits/men/1.jpg", alt: "Sample Image 1" },
  { id: 2, src: "https://randomuser.me/api/portraits/men/2.jpg", alt: "Sample Image 2" },
];

export const images1: ImageItem1[] = [
  { id: 1, src: "https://randomuser.me/api/portraits/men/1.jpg", alt: "Blurred Background" },
];

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export const listItems: ListItem[] = [
  { text: 'Item 1' },
  { text: 'Item 2' },
  { text: 'Item 3' },
  { text: 'Item 4' },
];
