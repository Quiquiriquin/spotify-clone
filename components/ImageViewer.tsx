import { StyleSheet, Image } from "react-native";

export const ImageViewer = ({ placeholderImageSource, selectedImage }) => {
  return (
    <Image
      source={selectedImage || placeholderImageSource}
      style={styles.image}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
