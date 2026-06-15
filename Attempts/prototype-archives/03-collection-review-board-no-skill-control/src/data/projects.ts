import type { PortfolioImageProps } from "../components/PortfolioImage";

type SplitProject = {
  variant: "split";
  mediaSide: "left" | "right";
  number: string;
  title: string;
  season: string;
  href: string;
  dataNodeId: string;
  name: string;
  metaDataNodeId: string;
  numberDataNodeId: string;
  titleDataNodeId: string;
  image: Pick<PortfolioImageProps, "src" | "alt" | "crop" | "dataNodeId">;
};

type FeaturedProject = {
  variant: "featured";
  number: string;
  title: string;
  season: string;
  href: string;
  dataNodeId: string;
  name: string;
  metaDataNodeId: string;
  image: Pick<PortfolioImageProps, "src" | "alt" | "dataNodeId">;
};

export type Project = SplitProject | FeaturedProject;

export const projects: Project[] = [
  {
    variant: "split",
    mediaSide: "right",
    number: "01",
    title: "Jacquemus",
    season: "2025 Spring/Summer",
    href: "",
    dataNodeId: "0:86",
    name: "Project item 01",
    metaDataNodeId: "0:87",
    numberDataNodeId: "0:88",
    titleDataNodeId: "0:89",
    image: {
      src: "/assets/project-01.jpg",
      alt: "Woman with sunglasses walking down runway",
      crop: "project01",
      dataNodeId: "0:90",
    },
  },
  {
    variant: "split",
    mediaSide: "left",
    number: "02",
    title: "acne studios",
    season: "2024 autumn/fall",
    href: "",
    dataNodeId: "0:91",
    name: "Project item 02",
    metaDataNodeId: "0:93",
    numberDataNodeId: "0:94",
    titleDataNodeId: "0:95",
    image: {
      src: "/assets/project-02.jpg",
      alt: "Woman in white dress and gold earrings walking down runway",
      dataNodeId: "0:92",
    },
  },
  {
    variant: "featured",
    number: "07",
    title: "burberry",
    season: "2022 fall",
    href: "",
    dataNodeId: "0:117",
    name: "Project item 07",
    metaDataNodeId: "0:119",
    image: {
      src: "/assets/project-07.jpg",
      alt: "Close up of woman in shawl",
      dataNodeId: "0:118",
    },
  },
];
