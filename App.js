import { SafeAreaView } from "react-native";
import { WebViewApp } from "./components/WebViewApp";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      <WebViewApp />
    </SafeAreaView>
  );
}
