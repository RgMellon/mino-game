import { StatusBar } from "react-native";
import { StyleSheet } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// import { useMove } from "./src/hooks/use-move";
// import { ImageMoviment } from "./src/components/ImageMoviment";
// import { ImageRest } from "./src/components/ImageRest";
import { Game } from "./src/templates/Game";

export default function App() {
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);

  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
        hidden
      />

      <Game />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
