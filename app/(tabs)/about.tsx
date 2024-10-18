import { Image } from "react-native";
import { ThemedText } from "@/src/components/ThemedText";
import { ThemedView } from "@/src/components/ThemedView";
import { styles } from "@/src/assets/styles/About.Style";
import data from "@/src/api/helpers/mydata";
const AboutPages = () => {
  const getdata = data.find((item) => {
    return item.type === "about";
  });

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.containerHead}>
        <ThemedView style={styles.containerImg}>
          <Image
            style={styles.imgHeader}
            source={require("@/src/assets/images/header.png")}
          ></Image>
        </ThemedView>

        <ThemedText style={styles.tittleabout} type="title">
          About
        </ThemedText>
      </ThemedView>
      <ThemedView>
        <ThemedText style={styles.textabout} type="default">
          {getdata?.explain}
        </ThemedText>
      </ThemedView>
    </ThemedView>
  );
};

export default AboutPages;
