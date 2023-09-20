import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text styles={[styles.headerText]}>Seb er fed</Text>
      <Image source={require('./assets/FitBattleLogo.jpg')} style={styles.mImage} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  mImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },

  headerText: {
    fontSize: 30,
  }
});
