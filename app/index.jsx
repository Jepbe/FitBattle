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
      <Text style={{ fontSize: 28 }}>Main Page!</Text>
      <Link href="/login">Login Page!</Link>
    </View>

  );
}

function Navbar() {
  return (
    <View style={[styles.navbar]}> 
      <Pressable>
        <Text style={{fontSize: 40,}}>🏠</Text>
      </Pressable>
    </View>
  );
}

export default function Page() {
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