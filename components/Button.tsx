import { StyleSheet, View, Pressable, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { colors } from "../utils/generalStyles";

export default function Button({ label, theme, onPress }: { theme?: string, onPress?: () => void, label: string }) {
  if (theme === "primary") {
    return (
      <View
        style={styles.buttonContainer}
      >
        <Pressable
          style={[styles.button, { backgroundColor: colors.mainGreen }]}
          onPress={onPress}
        >
          <Text style={[styles.buttonLabel, { color: colors.black }]}>
            {label}
          </Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    maxWidth: 450,
    height: 48,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  button: {
    borderRadius: 24,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 16,
  },
});
