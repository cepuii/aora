import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-primary text-3xl font-pblack">
        Edit app/index.tsx to edit this screen.
      </Text>
      <StatusBar />
    </View>
  );
}
