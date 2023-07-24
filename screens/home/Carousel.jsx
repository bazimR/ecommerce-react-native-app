import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";
import img1 from "../../assets/images/fn1.jpg";
import img2 from "../../assets/images/fn2.jpg";
import img3 from "../../assets/images/fn3.jpg";
import { COLORS } from "../../constants";

const Carousel = () => {
  const slide = [img1, img2, img3];
  return (
    <View style={styles.carouselContainer}>
      <SliderBox
        images={slide}
        dotColor={COLORS.primary}
        inactiveDotColor={COLORS.secondary}
        ImageComponentStyle={{ borderRadius: 15, width: "93%", marginTop: 15 }}
        autoplay
        circleLoop
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  corouselContainer: {
    flex: 1,
    alignItems: "center",
  },
});
