import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [textValue, setTextValue] = useState("");
  const handleChange = (value) => {
    setTextValue(value);
  };
  const clearTextField = () => {
    setTextValue("");
  };
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const randomHex = () => {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`;
  };
  return (
    <View
      style={[
        styles.container,
        isEnabled ? styles.darkMode : { backgroundColor: randomHex() },
      ]}
    >
      <Text style={[isEnabled && styles.textOnDarkMode]}>Register Student</Text>
      <TextInput
        style={[isEnabled && styles.textOnDarkMode]}
        placeholder="Enter Student Name"
        onChangeText={(text) => {
          handleChange(text);
        }}
        value={textValue}
      ></TextInput>
      <Text style={[isEnabled && styles.textOnDarkMode]}>Result:</Text>
      <Text style={[isEnabled && styles.textOnDarkMode]}> {textValue}</Text>
      <Button
        style={styles.btnClear}
        title="Clear"
        onPress={clearTextField}
      ></Button>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  darkMode: {
    backgroundColor: "#000",
  },
  textOnDarkMode: {
    color: "#fff",
  },
});
