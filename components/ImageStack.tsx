import React from 'react';
import { ResponsiveStack, ResponsiveStackType } from './ResponsiveStack';
import Image from 'next/image';

export const ImageStack: React.FC<ImageStackProps> = ({
  images,
  breakpoint
                                                      }) => {

  return (
    <ResponsiveStack gap={10} breakpoint={breakpoint}>
      {images?.map(image => (
        <div>
          <Image
            {...image}
            objectFit="contain"
          />
        </div>
      ))}
    </ResponsiveStack>
  )
}

type ImageProps = {
  src: string,
  width: number,
  height: number,
  alt: string,
};

type ImageStackProps = {
  images: ImageProps[],
  breakpoint?: number,
  gap?: number,
} & Omit<ResponsiveStackType, 'children' | 'gap'>;