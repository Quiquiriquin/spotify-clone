import { Image, StyleSheet, View, Platform, Text, StyleProp, ViewStyle } from "react-native";
import * as WebBrowser from 'expo-web-browser'
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import styles from './index.module.css';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { generalStyles } from "../utils/generalStyles";
import Button from "../components/Button";
import { useEffect } from "react";
// 132e3342ef114844816310c2e6fe2884
// 31b762da947a4dc6afa4ebb292267dbc

WebBrowser.maybeCompleteAuthSession();

const discovery = {
  authorizationEndpoint: 'https://accounts.spotify.com/authorize',
  tokenEndpoint: 'https://accounts.spotify.com/api/token',
};

export default function App() {
  const clientId: string = "132e3342ef114844816310c2e6fe2884";
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId,
      scopes: ['user-read-email', 'playlist-modify-public', 'user-read-playback-position', 'user-top-read', 'user-read-recently-played', 'playlist-modify-private'],
      // To follow the "Authorization Code Flow" to fetch token after authorizationEndpoint
      // this must be set to false
      usePKCE: false,
      // redirectUri: makeRedirectUri({
      //   scheme: 'http://localhost:8081/'
      // }),
      redirectUri: 'http://localhost:8081/success'
    },
    discovery
  );

  useEffect(() => {
    if (response?.type === 'success') {
      const { code } = response.params;
    }
  }, [response]);

  function generateCodeVerifier(length: number) {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

async function generateCodeChallenge(codeVerifier: string) {
    const data = new TextEncoder().encode(codeVerifier);
    const digest = await window.crypto.subtle.digest('SHA-256', data);
    return btoa(String.fromCharCode.apply(null, [...new Uint8Array(digest)]))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
}

  return (
    <GestureHandlerRootView style={styles.container as StyleProp<ViewStyle>}>
      <View>
        <Button onPress={promptAsync} theme="primary" label="Iniciar sesión" />
        <StatusBar style="light" />
      </View>
    </GestureHandlerRootView>
  );
}


