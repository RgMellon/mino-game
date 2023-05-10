import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { Image, ImageSourcePropType, Text } from "react-native";
import { useMove } from "../hooks/use-move";
import { useEffect, useRef } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

type Props = {
  image: ImageSourcePropType;
};

export function ImageRest({ image }: Props) {
  const transY = useSharedValue(0);
  const moveId = useRef<NodeJS.Timer>();

  const handleMove = () => {
    moveId.current = setInterval(() => {
      if (transY.value == -960) {
        transY.value = 0;
        return;
      }
      transY.value = transY.value - 60;
    }, 60);
  };

  useEffect(() => {
    handleMove();

    return () => {
      clearInterval(moveId.current);
    };
  }, []);

  const animatedImage = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: transY.value,
        },
      ],
    };
  });

  const ImageAnimated = Animated.createAnimatedComponent(Image);

  return (
    <>
      <ImageAnimated source={image} style={[{ width: 60 }, animatedImage]} />
    </>
  );
}
