import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CustomButton from "@/components/CustomButton";
import { images } from "../constants";

export default function Index() {
  const handlePress = () => {
    router.push("/sign-in");
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full min-h-[85vh] justify-center items-center px-4">
          <Image
            source={images.logo}
            resizeMode="contain"
            style={{
              width: 130,
              height: 84,
            }}
          />
          <Image
            source={images.cards}
            resizeMode="contain"
            style={{
              width: 380,
              height: 300,
            }}
          />

          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless Possibilities with{" "}
              <Text className="text-secondary-200">
                Aora
                <Image
                  source={images.path}
                  resizeMode="contain"
                  style={
                    {
                      width: 136,
                      height: 15,
                      position: "absolute",
                      bottom: "-8px",
                      right: "-32px",
                    } as any
                  }
                />
              </Text>
            </Text>
          </View>

          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Where creativity meets innovation: embark on a journey of limitless
            exploration with Aora
          </Text>
          <CustomButton
            title="Continue with email"
            handlePress={handlePress}
            containerStyle="w-full mt-7"
          ></CustomButton>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
