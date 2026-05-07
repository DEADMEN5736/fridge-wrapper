import * as SplashScreen from "expo-splash-screen";
import * as React from "react";
import { SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";

// Keep the splash visible until the WebView finishes loading.
SplashScreen.preventAutoHideAsync().catch(() => { });

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        overScrollMode="never"
        cacheEnabled
        bounces={false}
        allowsBackForwardNavigationGestures
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        setSupportMultipleWindows={false}
        decelerationRate={0.9}
        onLoadEnd={() => {
          SplashScreen.hideAsync().catch(() => { });
        }}
        onError={() => {
          SplashScreen.hideAsync().catch(() => { });
        }}
        source={{
          uri: "https://fridge-buddy-6f0spwc2n-deadmen5736s-projects.vercel.app/",
        }}
      />
    </SafeAreaView>
  );
}
