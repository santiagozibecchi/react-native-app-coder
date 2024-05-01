import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { NavigatorContainer } from './src/navigation/NavigatorContainer';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigatorContainer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: "black",
  },
})



