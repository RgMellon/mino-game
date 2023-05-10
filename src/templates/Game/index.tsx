import {
  Dimensions,
  FlatList,
  Image,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

import { useEffect, useRef, useState } from "react";

import walkMino from "../../assets/img/mino_running.png";
import jumpMino from "../../assets/img/mino_jump.png";
import restMino from "../../assets/img/mino_rest.png";

import scenario from "../../assets/img/scenario.png";

import { styles } from "./styles";

import { ImageMoviment } from "../../components/ImageMoviment";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { TouchableOpacity } from "react-native";
import Enemy from "../../components/Enemy";

const BACKGROUND_REPS = Array.from({ length: 50 });

export function Game() {
  const { width } = useWindowDimensions();
  const transX = useSharedValue(0);
  const transY = useSharedValue(0);

  const opacityJump = useSharedValue(0);
  const opacityWalk = useSharedValue(1);

  const enemy = useSharedValue(width);

  const obstaclesTimerId = useRef<NodeJS.Timer>();
  // const [currentAction, setCurrentAction] = useState("walk");

  const currentAnimation: { [key: string]: JSX.Element } = {
    rest: <ImageMoviment image={restMino} maxTransY={960} />,
    walk: <ImageMoviment image={walkMino} maxTransY={660} />,
    jump: <ImageMoviment image={jumpMino} maxTransY={960} />,
  };

  const animatedImage = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: transX.value,
        },
      ],
    };
  });

  const animatedJump = useAnimatedStyle(() => {
    return {
      opacity: opacityJump.value,
      transform: [
        {
          translateY: transY.value,
        },
      ],
    };
  });

  const animatedWalk = useAnimatedStyle(() => {
    return {
      opacity: opacityWalk.value,
    };
  });

  useEffect(() => {
    setInterval(() => {
      handleMove();
    }, 100);
  }, []);

  const handleMove = () => {
    transX.value = withTiming(transX.value - 20);
  };

  function handleJump() {
    const jumpIntervalId = setInterval(() => {
      opacityWalk.value = withTiming(1);
      opacityJump.value = withTiming(0);

      transY.value = withTiming(0, {
        easing: Easing.bounce,
      });
      clearInterval(jumpIntervalId);
    }, 500);

    transY.value = withTiming(-50, { duration: 500 });
    // setCurrentAction("jump");
    opacityWalk.value = withTiming(0);
    opacityJump.value = withTiming(1);
  }

  return (
    <View style={{ flex: 1, position: "relative", backgroundColor: "#87ceeb" }}>
      <Animated.View style={[styles.wrapperCharacter, animatedWalk]}>
        {currentAnimation["walk"]}
      </Animated.View>

      <Animated.View style={[styles.wrapperCharacter, animatedJump]}>
        {currentAnimation["jump"]}
      </Animated.View>

      <Animated.View
        style={[
          animatedImage,
          {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          },
        ]}
      >
        {BACKGROUND_REPS.map((_, index) => (
          <Image key={index} source={scenario} />
        ))}
      </Animated.View>

      <Enemy currentAction={"walk"} />

      <View style={{ position: "absolute", left: 20, bottom: 60 }}>
        <TouchableOpacity
          onPress={handleJump}
          style={{
            width: 30,
            height: 30,
            position: "absolute",
            backgroundColor: "red",
            borderRadius: 10,
          }}
        />
      </View>
    </View>
  );
}
