import Constants from "expo-constants";
import * as SplashScreen from "expo-splash-screen";
import AnimatedAppLoader from "./components/SplashScreen/AnimatedAppLoader";
import MainScreen from "./components/MainScreen";

// Instruct SplashScreen not to hide yet, we want to do this manually
SplashScreen.preventAutoHideAsync().catch(() => {
  /* reloading the app might trigger some race conditions, ignore them */
});

export default function App() {
  return (
    <AnimatedAppLoader image={{uri: Constants.manifest?.splash?.imageUrl}}>
      <MainScreen />
    </AnimatedAppLoader>
  );
}
