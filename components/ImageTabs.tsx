import React from "react";
import { Tab, Tabs } from "nextra-theme-docs";
import Image, { ImageProps as NextImageProps } from "next/image";
import { isMobile } from "react-device-detect";
import { useAppContext } from "@/_app";

export const ImageTabs: React.FC<ImageTabsProps> = ({
  desktopImage,
  mobileImage,
}) => {
  const { displayedImage, setDisplayedImage } = useAppContext();

  const tabs = (
    [desktopImage ? "Desktop" : null, mobileImage ? "Mobile" : null] as const
  ).filter((device) => !!device);

  const selectedIndex = tabs.findIndex(
    (tab) => tab.toLowerCase() === displayedImage
  );
  const selectIndex = (newIndex: number) =>
    setDisplayedImage(
      tabs.find((_, index) => index === newIndex).toLowerCase() as
        | "desktop"
        | "mobile"
    );

  return (
    <Tabs items={tabs} selectedIndex={selectedIndex} onChange={selectIndex}>
      {!!desktopImage?.src && (
        <Tab>
          <Image {...desktopImage} placeholder="blur" />
        </Tab>
      )}
      {!!mobileImage?.src && (
        <Tab>
          {/* We add a max height only on desktop */}
          <Image
            {...mobileImage}
            height={!isMobile ? 500 : undefined}
            placeholder="blur"
          />
        </Tab>
      )}
    </Tabs>
  );
};

type ImageProps = Pick<NextImageProps, "src" | "alt" | "width" | "height">;

type ImageTabsProps = {
  desktopImage?: ImageProps;
  mobileImage?: ImageProps;
};
