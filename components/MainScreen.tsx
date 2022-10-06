import React, {useEffect, useRef} from "react";
import {Animated, View, StyleSheet, PanResponder, Text} from "react-native";

const MainScreen = () => {
  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: () => {
        Animated.spring(pan, {
          toValue: {x: 0, y: 0},
          useNativeDriver: false,
        }).start();
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          transform: [{translateX: pan.x}, {translateY: pan.y}],
        }}
        {...panResponder.panHandlers}
      >
        <View style={styles.box}>
          <Text style={styles.boxText}>Dev Story</Text>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "bold",
  },
  box: {
    width: 160,
    backgroundColor: "#f7d586",
    borderColor: "#000",
    borderWidth: 4,
    borderRadius: 10,
  },
  boxText: {
    color: "#000",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 150,
  },
});

export default MainScreen;
