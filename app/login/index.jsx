import 'expo-router/entry';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';


function HomeScreen() {
  const insets = useSafeAreaInsets();
  return (            
    <View style={{
      flex: 1, 
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
    }}>
      <Text style={{ fontSize: 28 }}>Wellcome to the Login Page!</Text>
      <Link href="/">Go home!</Link>
    </View>

  );
}

function Navbar() {
  return (
    <View style={[styles.navbar]}> 
      <Link href="/">
        <Text style={{fontSize: 40,}}>🏠</Text>
      </Link>
    </View>
  );
}

export default function Login() {
    return (
      <SafeAreaProvider style={{height: '100%'}}>
          <Navbar />
          <HomeScreen />
      </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
  navbar: {
    flex: .08 ,
    height: '30px',
    borderBottomWidth: 1,
  }
})