import { Image, Linking, TouchableOpacity } from "react-native";
import { styles } from "@/src/assets/style/PortofolioStyle";
import ParallaxScrollView from "@/src/components/ParallaxScrollView";
import { ThemedText } from "@/src/components/ThemedText";
import { ThemedView } from "@/src/components/ThemedView";

import data from "@/src/components/data/mydata";

interface ImgPortoType {
  id: number;
  title: string;
  created: string;
  kind: string;
  teck: string;
  source: any;
  link: string;
}

export default function HomeScreen() {
  const findPorto = data.find((item: any) => item.type === "portofolio");
  const imgporto = findPorto?.img;

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#1D3D47", dark: "#1D3D47" }}
      headerImage={
        <ThemedView style={styles.reactlogocontainer}>
          <ThemedView style={styles.reactLogo}>
            <Image
              source={require("@/src/assets/images/icon/portofolio.png")}
              style={styles.reactlogoimg}
            />
          </ThemedView>
          <ThemedText type="title" style={styles.textTittle}>
            PORTOFOLIO
          </ThemedText>
        </ThemedView>
      }
    >
      {imgporto?.map((porto: any) => (
        <ThemedView key={porto.id} style={styles.titleContainer}>
          <ThemedView style={styles.subcontainer}>
            <Image style={styles.imagecustom} source={porto.source} />
            <ThemedText style={styles.subtittlecustom}>
              {porto.title}
            </ThemedText>
            <ThemedText style={styles.timecreate}>{porto.created}</ThemedText>
            <ThemedText style={styles.textkind}>{porto.kind}</ThemedText>
            <ThemedText style={styles.textteck}>{porto.teck}</ThemedText>
          </ThemedView>

          <ThemedView>
            <TouchableOpacity
              style={styles.btngit}
              // title="Go To GitHub"
              onPress={() => {
                Linking.openURL(porto.link);
              }}
            >
              <ThemedText style={styles.btngitText}>Go To Github</ThemedText>
            </TouchableOpacity>
          </ThemedView>
        </ThemedView>
      ))}
    </ParallaxScrollView>
  );
}
