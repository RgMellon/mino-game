import { useEffect, useRef, useState } from "react";
import { Image, View, useWindowDimensions } from "react-native";
import { ImageMoviment } from "../ImageMoviment";

type Props = {
  currentAction: string;
};

const FRAME = 60;

import enemyImage from "../../assets/img/enemy/0_Warrior_Run_000.png";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const Enemy = ({ currentAction }: Props) => {
  const { width } = useWindowDimensions();
  // const [enemyMoviment, setEnemyMoviment] = useState(width);
  const obstaclesTimerId = useRef<NodeJS.Timer>();
  const positionOnScreen = useRef(0);
  const enemy = useSharedValue(width);
  const opacity = useSharedValue(1);

  const ImageAnimated = Animated.createAnimatedComponent(Image);

  const animatedEnemy = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: enemy.value,
        },
      ],
      opacity: 1,
    };
  });

  // console.log("width", width);
  // useEffect(() => {
  //   // if (
  //   //   enemyMoviment === positionOnScreen.current &&
  //   //   currentAction !== "jump"
  //   // ) {
  //   //   // alert("morri");
  //   // }

  //   if (enemyMoviment > -FRAME) {
  //     obstaclesTimerId.current = setInterval(() => {
  //       setEnemyMoviment((enemyMoviment) => enemyMoviment - FRAME);
  //       enemy.value = withTiming(enemyMoviment - FRAME);
  //     }, 1000);
  //     return () => {
  //       clearInterval(obstaclesTimerId.current);
  //     };
  //   } else {
  //     positionOnScreen.current = enemyMoviment;
  //     enemy.value = withTiming(width);
  //     setEnemyMoviment(width);
  //   }
  // }, [enemyMoviment]);

  useEffect(() => {
    setInterval(() => {
      if (currentAction !== "jump" && positionOnScreen.current == enemy.value) {
        console.log("morri");
      }

      if (enemy.value > -FRAME) {
        enemy.value = withTiming(enemy.value - FRAME);
      } else {
        positionOnScreen.current = enemy.value;
        enemy.value = width;
      }
    }, 60);
  }, [currentAction]);

  return (
    <Animated.View style={[animatedEnemy, { position: "relative" }]}>
      <ImageAnimated
        source={enemyImage}
        style={{
          width: 60,
          height: 60,
          position: "absolute",
          bottom: 85,
          backgroundColor: "blue",
        }}
      />
    </Animated.View>
  );
};

export default Enemy;
