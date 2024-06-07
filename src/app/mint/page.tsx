'use client';

import { useRef, useState } from "react";
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import image1 from './1.png';
import image2 from './2.png';
import image3 from './3.png';
import image4 from './4.png';
import image5 from './5.png';

export default function Mint() {
  const nftsCarousel = [image1, image2, image3, image4, image5];

  const [mintNb, setMintNb] = useState(1);

  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <div className="sm:w-full lg:w-1/2 my-10">
      <Card>
        <CardHeader className="mb-6">
          <CardTitle>RTekk&apos;s NFT</CardTitle>
          <CardDescription>Get your exploration pass and jump in a unique journey with me.</CardDescription>
        </CardHeader>
        <CardContent className="p-0 mb-6">
          <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-xs m-auto"
          >
            <CarouselContent>
              {nftsCarousel.map((img, index) => (
                <CarouselItem key={index}>
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <Image src={img} alt="NFT" priority />
                      </CardContent>
                    </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </CardContent>
        <CardFooter className="flex flex-col">
          <div className="flex mb-4 gap-5 justify-center">
            <Button
              variant="secondary"
              onClick={() => {
                if (mintNb <= 0)
                  return;
                setMintNb(mintNb - 1);
              }}
            >
              -
            </Button>
            <Input
              type="number"
              className="w-1/3"
              min={0}
              value={mintNb}
              onChange={(e) => setMintNb(parseInt(e.target.value))}
            />
            <Button
              variant="secondary"
              onClick={() => setMintNb(mintNb + 1)}
            >
              +
            </Button>
          </div>
          <Button
            className="w-full"
            onClick={() => alert(`Mint ${mintNb} NFT`)} // eslint-disable-line no-alert
          >
            ✨ Mint
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

