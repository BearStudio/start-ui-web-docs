import { AppProps } from "next/app";
import { createContext, useContext, useMemo, useState } from "react";
import { isMobile } from "react-device-detect";

export type DisplayedImage = "desktop" | "mobile";

type AppContextValue = {
  displayedImage: DisplayedImage;
  setDisplayedImage(displayedImage: DisplayedImage): void;
};

const AppContext = createContext<AppContextValue>(null);

export const useAppContext = () => useContext(AppContext);

const App = ({ Component, pageProps }: AppProps) => {
  const [displayedImage, setDisplayedImage] = useState<DisplayedImage>(
    isMobile ? "mobile" : "desktop"
  );

  const contextValue = useMemo(
    () => ({
      displayedImage,
      setDisplayedImage,
    }),
    [displayedImage, setDisplayedImage]
  );

  return (
    <AppContext.Provider value={contextValue}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
};
export default App;
