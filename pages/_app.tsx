import { ImageTabsContextProvider } from "@/components/ImageTabs";
import { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ImageTabsContextProvider>
        <Component {...pageProps} />
      </ImageTabsContextProvider>
      <Analytics />
    </>
  );
};

export default App;
