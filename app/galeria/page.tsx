import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const IMAGES = [
  {
    path: "/photo-1.jpg",
    alt: "galeria",
    width: 1280,
    height: 960,
  },
  {
    path: "/photo-2.jpg",
    alt: "galeria",
    width: 1280,
    height: 960,
  },
  {
    path: "/photo-3.jpg",
    alt: "galeria",
    width: 960,
    height: 1280,
  },
  {
    path: "/photo-4.jpg",
    alt: "galeria",
    width: 1280,
    height: 960,
  },
];

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-116px)] px-14">
      <Carousel className="w-full max-w-2xl h-full">
        <CarouselContent>
          {IMAGES.map((image) => (
            <CarouselItem key={image.path}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex items-center justify-center">
                    <Image
                      src={image.path}
                      alt={image.alt}
                      height={image.height}
                      width={image.width}
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
