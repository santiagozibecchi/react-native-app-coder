import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { NavigatorContainer } from './src/navigation/NavigatorContainer';
import { Provider } from 'react-redux';
import store from './src/store';
import { initSQLiteDB } from './src/persistence';
import { ErrorProvider } from './src/context/ErrorContext';
import { ErrorModal } from './src/components/ui/ErrorModal';

// Creamos la tabla sessions si fuera necesario para el manejo de la sesion de forma persistente
(async () => {
  try {
    const response = await initSQLiteDB()
  } catch (error) {
  }
})()

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <ErrorProvider>
          <NavigatorContainer />
          <ErrorModal />
        </ErrorProvider>
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



