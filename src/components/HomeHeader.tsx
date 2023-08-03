import { View, StyleSheet, Image } from "react-native";

import Logo from "../../assets/Logo.svg";

export function HomeHeader() {
  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.profile}>
        <Image
          style={styles.profile__image}
          source={{ uri: "https://source.unsplash.com/user/wsanter" }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  profile: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#333638",
    borderStyle: "solid",
    backgroundColor: "#ccc",
  },

  profile__image: {
    width: 36,
    height: 36,
    borderRadius: 20,
  },
});
