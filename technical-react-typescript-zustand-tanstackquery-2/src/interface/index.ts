export interface ImageData{
    id:number;
    text:string;
    imageUrl:string;
}

export interface ImageStore {
    images: ImageData[];
    setImages: (images: ImageData[]) => void;
  }


  export interface ArrowConfig {
    size: number;
    color: string;
    initialRotation: number;
    rotatedDegree: number;
    bounceHeight: number;
  }

  export interface AuroraConfig {
    colors: string[];
    duration: number;
    size: number;
  }

  export interface AutocompleteConfig {
    placeholder: string;
    suggestions: string[];
  }

  export interface Avatar {
    id: number;
    name: string;
    imageUrl: string;
  }

  export interface Beam {
    id: number;
    x: number;
    y: number;
    speedX: number;
    speedY: number;
    color: string;
  }

  export interface Box {
    id: number;
    x: number;
    y: number;
    size: number;
    color: string;
    speedX: number;
    speedY: number;
  }


  export interface BentoItem {
    id: number;
    title: string;
    size: string; // small, medium, large
    bgColor: string;
  }
  
  export interface ImageItem {
    id: number;
    src: string;
    alt: string;
  }

  export interface ImageItem1 {
    id: number;
    src: string;
    alt: string;
  }