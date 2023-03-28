import { StyleSheet, Text } from "react-native";
import React from "react";
import Animated, {
  SlideInDown,
  SlideOutDown, 
} from "react-native-reanimated";

const BottomSheet = () => {
 
  return (
    <Animated.View
      style={styles.container}
      entering={SlideInDown}
      exiting={SlideOutDown}
    >
      <Text style={styles.text}>
        This is the dummy text which is used for displaying the bottom sheet in
        react native. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>
    </Animated.View>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  container: {
    zIndex: 100,
    position: "absolute",
    bottom: 0,
    backgroundColor: "#fff",
    paddingVertical: 18,
    paddingHorizontal: 18,
    width: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 14,
    },
    shadowOpacity: 0.6,
    shadowRadius: 15,
    elevation: 20,
  },
  text: {
    textAlign: "justify",
    fontSize: 14,
  },
});
