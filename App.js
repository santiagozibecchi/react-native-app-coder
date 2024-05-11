import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { NavigatorContainer } from './src/navigation/NavigatorContainer';
import { Provider } from 'react-redux';
import store from './src/store';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <NavigatorContainer />
      </Provider>
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



