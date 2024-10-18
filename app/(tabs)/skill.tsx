import Ionicons from "@expo/vector-icons/Ionicons";
import { Image } from "react-native";
import { styles } from "@/style/SkillStyle";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

// My data
import data from "@/components/data/mydata";

export default function TabTwoScreen() {
  const findskill = data.find((item) => item.type === "skill");
  const imgskill = findskill?.img;

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <ThemedView style={styles.containerHead}>
          <ThemedView style={styles.containerHeadimg}>
            <Image
              style={styles.imglogo}
              source={require("@/assets/images/icon/skill.png")}
            ></Image>
          </ThemedView>
          <ThemedView>
            <ThemedText style={styles.containerHeadtitle} type="title">
              Skill
            </ThemedText>
          </ThemedView>
        </ThemedView>
      }
    >
      <ThemedView style={styles.containerimgSkiil}>
        {imgskill?.map((item, index: number) => (
          <Image style={styles.imgskill} key={index} source={item.source} />
        ))}
      </ThemedView>
    </ParallaxScrollView>
  );
}
