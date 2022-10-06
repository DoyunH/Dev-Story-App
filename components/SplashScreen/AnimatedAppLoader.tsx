import {useEffect, useState} from "react";
import {Asset} from "expo-asset";
import AnimatedSplashScreen from "./AnimatedSplashScreen";

type Props = {
  children: React.ReactNode;
  image: {
    uri: string;
  };
};

function AnimatedAppLoader({children, image}: Props) {
  const [isSplashReady, setSplashReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      await Asset.fromURI(image.uri).downloadAsync();
      // fake wait
      new Promise((resolve) => setTimeout(resolve, 2000)).then(() =>
        setSplashReady(true)
      );
    }

    prepare();
  }, [image]);

  if (!isSplashReady) {
    return null;
  }

  return <AnimatedSplashScreen image={image}>{children}</AnimatedSplashScreen>;
}

export default AnimatedAppLoader;
