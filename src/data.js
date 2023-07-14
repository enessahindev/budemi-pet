// import hero slider images
import HeroSlideImage1 from "./assets/img/dogs/dog-slide-1.png";
import HeroSlideImage2 from "./assets/img/dogs/dog-slide-2.png";
import HeroSlideImage3 from "./assets/img/dogs/dog-slide-3.png";
// import dog category images
import DogCateg1 from "./assets/img/dogs/dog-categ-1.png";
import DogCateg2 from "./assets/img/dogs/dog-categ-2.png";
import DogCateg3 from "./assets/img/dogs/dog-categ-3.png";
import DogCateg4 from "./assets/img/dogs/dog-categ-4.png";
// import social icons
import {
  AiFillYoutube,
  AiFillInstagram,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";

export const navigation = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "about",
    href: "/",
  },
  {
    name: "prices",
    href: "/",
  },
  {
    name: "features",
    href: "/",
  },
];

export const heroSlider = [
  {
    id: 1,
    title: "We take care of your pet.",
    image: <HeroSlideImage1 />,
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.",
    buttonText: "Get an appointment",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit.",
    image: <HeroSlideImage2 />,
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.",
    buttonText: "Get an appointment",
  },
  {
    id: 3,
    title: "Nunc odio in et, lectus sit.",
    image: <HeroSlideImage3 />,
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.",
    buttonText: "Get an appointment",
  },
];

export const bundleData = [
  {
    id: 1,
    image: <DogCateg1 />,
    name: "small",
    dogCategory: "1 - 9 kg",
    services: [
      {
        name: "smart",
        price: 20,
        list: ["basic game", "nail cut", "feeding", "daily walks"],
      },
      {
        name: "premium",
        price: 40,
        list: [
          "Play and activities",
          "Feeding and special diet",
          "Long walks",
          "Nail Cut",
          "Wash",
        ],
      },
      {
        name: "royal",
        price: 60,
        list: [
          "Special walks, activities",
          "Special nutrition",
          "Luxurious environment",
          "Special care",
          "Special wash",
          "Special Nail cut",
        ],
      },
    ],
  },
  {
    id: 2,
    name: "medium",
    image: <DogCateg2 />,
    dogCategory: "10 - 19 kg",
    services: [
      {
        name: "smart",
        price: 80,
        list: ["basic game", "nail cut", "feeding", "daily walks"],
      },
      {
        name: "premium",
        price: 100,
        list: [
          "Play and activities",
          "Feeding and special diet",
          "Long walks",
          "Nail Cut",
          "Wash",
        ],
      },
      {
        name: "royal",
        price: 120,
        list: [
          "Special walks, activities",
          "Special nutrition",
          "Luxurious environment",
          "Special care",
          "Special wash",
          "Special Nail cut",
        ],
      },
    ],
  },
  {
    id: 3,
    name: "big",
    image: <DogCateg3 />,
    dogCategory: "20 - 29 kg",
    services: [
      {
        name: "smart",
        price: 140,
        list: ["basic game", "nail cut", "feeding", "daily walks"],
      },
      {
        name: "premium",
        price: 160,
        list: [
          "Play and activities",
          "Feeding and special diet",
          "Long walks",
          "Nail Cut",
          "Wash",
        ],
      },
      {
        name: "royal",
        price: 180,
        list: [
          "Special walks, activities",
          "Special nutrition",
          "Luxurious environment",
          "Special care",
          "Special wash",
          "Special Nail cut",
        ],
      },
    ],
  },
  {
    id: 4,
    name: "super",
    image: <DogCateg4 />,
    dogCategory: "30 - 39 kg",
    services: [
      {
        name: "smart",
        price: 200,
        list: ["basic game", "nail cut", "feeding", "daily walks"],
      },
      {
        name: "premium",
        price: 210,
        list: [
          "Play and activities",
          "Feeding and special diet",
          "Long walks",
          "Nail Cut",
          "Wash",
        ],
      },
      {
        name: "royal",
        price: 220,
        list: [
          "Special walks, activities",
          "Special nutrition",
          "Luxurious environment",
          "Special care",
          "Special wash",
          "Special Nail cut",
        ],
      },
    ],
  },
];

export const social = [
  {
    icon: <AiFillYoutube />,
    href: "https://www.youtube.com/channel/UCrblCiU8Yc1PMQRchgVUDsQ",
  },
  {
    icon: <AiFillInstagram />,
    href: "https://instagram.com/enessahinyazilim/",
  },
  {
    icon: <AiFillGithub />,
    href: "https://github.com/enessahindev",
  },
  {
    icon: <AiFillLinkedin />,
    href: "https://www.linkedin.com/in/enessahin312/",
  },
];

export const footerData = [
  {
    copyrightText: {
      copyText: "&copy; Copyright 2023. All rights reserved",
    },
  },
];
