import { Image as HeroImage } from "@heroui/react";
import React from "react";

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  className?: string;
}

export default function App({ images, className }: { images: ImageProps[], className?: string }) {
  return (
    <div className={`image-container ${className}`}>
      {images.map((image, index) => (
        <HeroImage
          key={index}
          alt={image.alt}
          src={image.src}
          width={image.width || 650}
          className="mb-8"
        />
      ))}
    </div>
  );
}