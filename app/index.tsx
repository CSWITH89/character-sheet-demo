import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useAssets } from "expo-asset";
import { Link } from "expo-router";
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";

const Page = () => {
  const [assets] = useAssets([require("@/assets/images/dragon-hero.jpg")]);

  return (
    <View style={styles.container}>
      {assets && (
        <Image
          resizeMode="cover"
          source={{ uri: assets[0].uri }}
          style={styles.heroImage}
        />
      )}
      <View style={styles.ctaBox}>
        <Text style={styles.ctaText}>Begin your adventure today!</Text>
      </View>
      <View style={styles.buttons}>
        <Link
          href="/login"
          style={[defaultStyles.pillButton, styles.loginBtn]}
          asChild
        >
          <TouchableOpacity>
            <Text style={styles.loginTxt}>Login</Text>
          </TouchableOpacity>
        </Link>
        <Link
          href="/login"
          style={[defaultStyles.pillButton, styles.signUpBtn]}
          asChild
        >
          <TouchableOpacity>
            <Text style={styles.signUpTxt}>Sign Up</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  heroImage: {
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  ctaBox: {
    marginTop: 80,
    padding: 20,
  },
  ctaText: {
    fontSize: 36,
    fontWeight: "900",
    textTransform: "uppercase",
    color: "#fff",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginBottom: 60,
    paddingHorizontal: 20,
  },
  loginTxt: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "500",
  },
  loginBtn: {
    flex: 1,
    backgroundColor: Colors.dark,
  },
  signUpTxt: {
    fontSize: 22,
    fontWeight: "500",
  },
  signUpBtn: {
    flex: 1,
    backgroundColor: "white",
  },
});
