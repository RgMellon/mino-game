import { StyleSheet } from "react-native";

import { Platform } from "react-native";

export const styles = StyleSheet.create({
  wrapperCharacter: {
    height: 60,
    position: "absolute",
    top: 240,
    left: 40,
    overflow: "hidden",
    zIndex: 999,
  },

  // wrapperEnemyCharacter: {
  //   height: 60,
  //   width: 60,
  //   position: "absolute",
  //   top: 240,
  //   right: 40,
  //   overflow: "hidden",
  //   zIndex: 999,
  //   backgroundColor: "blue",
  // },

  grass: {
    position: "absolute",
    left: 0,
    bottom: 50,
    width: "100%",
    height: 50,
    backgroundColor: "green",
    overflow: "hidden",
    flexDirection: "row",
    // opacity: 0.9,
  },

  buildingArea: {
    position: "absolute",
    flexDirection: "row",
    left: 0,
    bottom: 120,
    zIndex: 3,
    height: 150,
    // backgroundColor: "brown",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },

  groundBuildArea: {
    position: "absolute",
    flexDirection: "row",
    left: -20,
    bottom: 90,
    overflow: "hidden",
    height: 80,
  },

  mountain: {
    right: 0,
    bottom: 133,
    left: 0,
    opacity: 0.6,
    width: "100%",
  },

  roadDetail: {
    overflow: "hidden",
    flexDirection: "row",
    bottom: 100,
    position: "absolute",
  },

  roadDetailBottom: {
    overflow: "hidden",
    flexDirection: "row",
    bottom: 40,
    position: "absolute",
  },

  road: {
    position: "absolute",
    zIndex: -1,
    left: 0,
    bottom: 0,
    width: "100%",
    height: 70,
    // backgroundColor: "brown",
    overflow: "hidden",
    flexDirection: "row",
    // opacity: 0.9,
  },
});
