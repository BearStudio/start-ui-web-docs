import React, { useEffect, useRef, useState } from 'react';
import { Tab, Tabs } from 'nextra-theme-docs'
import Image from "next/image";

export const ImageTabs: React.FC<ImageTabsProps> = ({
                                                      desktopImage,
                                                      mobileImage,
                                                    }) => {

  const tabs = [
    desktopImage ? 'Desktop' : null,
    mobileImage ? 'Mobile' : null
  ].filter(device => !!device);

  return (
    <Tabs items={tabs}>
      {!!desktopImage?.src && (
        <Tab>
          <Image {...desktopImage} />
        </Tab>
      )}
      {!!mobileImage?.src && (
        <Tab>
          <Image {...mobileImage} />
        </Tab>
      )}
    </Tabs>
  )
}

type ImageProps = {
  src: string,
  alt: string,
  width?: number,
  height?: number,
};

type ImageTabsProps = {
  desktopImage?: ImageProps,
  mobileImage?: ImageProps,
};