import {
  StyleSheet,
  Text,
  Button,
  Linking,
  View,
  ActivityIndicator,
} from "react-native";
import { ThemeViewCustom } from "@/components/ThemeViewCustom";
import { ThemedView } from "@/components/ThemedView";
import { useFonts } from "expo-font";

import { HomeStyles } from "@/style/HomeStyle";
import { HelloWave } from "@/components/HelloWave";

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    jetBrains: require("@/assets/fonts/JetBrainsMono-Bold.ttf"),
  });

  const handlerPress = async () => {
    const supported = await Linking.canOpenURL(
      "https://drive.google.com/file/d/1QyXqoZEhXcrfEvsD5Ksk5nWhOnK2BKGN/view?usp=sharing"
    );
    if (supported) {
      Linking.openURL(
        "https://drive.google.com/file/d/1QyXqoZEhXcrfEvsD5Ksk5nWhOnK2BKGN/view?usp=sharing"
      );
    } else {
      console.error(
        "Don't know how to open URI: " +
          "https://drive.google.com/file/d/1QyXqoZEhXcrfEvsD5Ksk5nWhOnK2BKGN/view?usp=sharing"
      );
    }
  };

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <ThemeViewCustom
      backgroundCustom={require("@/assets/images/background.webp")}
      style={HomeStyles.container}
    >
      <ThemedView style={HomeStyles.containerTittle}>
        <Text style={HomeStyles.tittle}> Hello I'M </Text>
        <Text style={HomeStyles.tittleName}> LA ODE RAHIMSYAH</Text>
      </ThemedView>
      <ThemedView style={HomeStyles.buttonmodel}>
        <Button title="Download CV" onPress={handlerPress} />
      </ThemedView>
    </ThemeViewCustom>
  );
}
