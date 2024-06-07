import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
// import image1 from '@/public/1.png';
// import image2 from '@/public/2.png';
// import image3 from '@/public/3.png';
// import image4 from '@/public/4.png';
// import image5 from '@/public/5.png';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// export const nftsCarousel = [image1, image2, image3, image4, image5];