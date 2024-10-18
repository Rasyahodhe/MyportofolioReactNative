import React, { useState } from "react";
import { ContactStyle } from "@/src/assets/styles/Contact.Style";
import {
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  Linking,
  TextInput,
  Platform,
} from "react-native";
import { ThemedView } from "@/src/components/ThemedView";
import data from "@/src/api/helpers/mydata";
import { ThemedText } from "@/src/components/ThemedText";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const findSocial = data.find((item) => item.type === "contact");
  const imgSocial = findSocial?.img;

  return (
    <KeyboardAvoidingView
      style={ContactStyle.containerContact}
      behavior={Platform.OS === "ios" ? "padding" : "height"} // Hanya "height" untuk Android
      keyboardVerticalOffset={Platform.OS === "android" ? 20 : 0} // Offset untuk Android
    >
      <ThemedView>
        <ThemedView>
          <ThemedText type="title" style={ContactStyle.tittleCustom}>
            Contact Me
          </ThemedText>
        </ThemedView>
        <ThemedView>
          <ThemedText type="subtitle">Get in touch with me</ThemedText>
        </ThemedView>
      </ThemedView>

      <ThemedView style={ContactStyle.containerInput}>
        <TextInput
          style={ContactStyle.valueInput}
          placeholder="Masukkan Nama Anda"
          value={name}
          onChangeText={setName}
          placeholderTextColor="lightgray"
        />
        <TextInput
          style={ContactStyle.valueInput}
          placeholder="Masukkan Email Anda"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="lightgray"
        />
        <TextInput
          style={ContactStyle.textArea}
          placeholder="Masukkan Pesan Anda"
          value={message}
          onChangeText={setMessage}
          placeholderTextColor="lightgray"
          multiline
          numberOfLines={4}
        />
      </ThemedView>
      <ThemedView>
        <TouchableOpacity
          style={ContactStyle.btnsendme}
          onPress={() => {
            console.log(name, email, message);
          }}
        >
          <ThemedText style={ContactStyle.btnsendmeText}>Send Me</ThemedText>
        </TouchableOpacity>
      </ThemedView>
      <ThemedView style={ContactStyle.containerSocial}>
        {imgSocial?.map((item: any) => (
          <TouchableOpacity
            key={item.sc}
            onPress={() => {
              Linking.openURL(item.link);
            }}
          >
            <Image style={ContactStyle.btnSocial} source={item.source} />
          </TouchableOpacity>
        ))}
      </ThemedView>
    </KeyboardAvoidingView>
  );
}
