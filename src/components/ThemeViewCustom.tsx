import { View, ImageBackground, type ViewProps } from "react-native";

export type ThemeViewCustomProps = ViewProps & {
  backgroundCustom?: any;
};

export function ThemeViewCustom({
  style,
  children,
  backgroundCustom,
  ...otherProps
}: ThemeViewCustomProps) {
  return (
    <ImageBackground
      source={backgroundCustom}
      style={[{ flex: 1 }, style]} // Menambahkan flex: 1 agar mengisi ruang
      resizeMode="cover"
      {...otherProps}
    >
      <View style={{ flex: 1 }}>{children}</View>
    </ImageBackground>
  );
}
