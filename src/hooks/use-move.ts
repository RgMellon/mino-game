import { useState } from "react";
import { useSharedValue } from "react-native-reanimated";

export const useMove = () => {
  const transY = useSharedValue(0);

  //   const [u, setU] = useState(0);

  const handleMove = () => {
    // setV(old => [...old, ])
    // console.log("i");
    const gameId = setInterval(() => {
      //   console.log(u, "oi");
      if (transY.value == -660) {
        transY.value = 0;
        // setU(0);
        return;
      }
      transY.value = transY.value - 60;
      //   setU((old) => old - 60);
    }, 2060);
  };

  return {
    handleMove,
    transY: transY.value,

    // u,
  };
};
