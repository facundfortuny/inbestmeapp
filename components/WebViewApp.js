import { WebView } from "react-native-webview";

export const WebViewApp = () => {
  const uri = `https://vue-onfido.vercel.app`;
  return (
    <WebView
      allowsInlineMediaPlayback={true}
      mediaPlaybackRequiresUserAction={false}
      source={{ uri: uri }}
      style={{ flex: 1 }}
    />
  );
};
