import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 5,
    paddingHorizontal: 10
  },
  text: {
    fontWeight: "400",
    fontSize: 16
  },
  block: { width: "95%" },
  rounded: { borderRadius: 16 },
  fullButton: {
    paddingVertical: 10,
    width: "100%",
    borderRadius: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0
  },
  fullText: { fontSize: 20 },
  disabled: { opacity: 0.65 },
  smallText: { fontSize: 12 },
  smallBtn: {
    paddingVertical: 4,
    paddingHorizontal: 8
  },
  largeText: { fontSize: 26 },
  largeBtn: {
    paddingVertical: 8,
    paddingHorizontal: 16
  },
  icon: { marginRight: 7 }
});

export default styles;
