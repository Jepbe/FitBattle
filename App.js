import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={Login} /> 
        <Stack.Screen name="Signup" component={Signup} options={{title: 'Sign up'}} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Login({ navigation }) {

  const [text, onChangeText] = React.useState('');
  const [Psswd, onChangePsswd] = React.useState('');

  return (
    <View style={styles.container}>
      <Image source={require('./assets/FitBattleLogo.jpg')} style={styles.mImage} />
      <TextInput 
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder={"username"}
      />
      <TextInput 
        style={styles.input}
        onChangeText={onChangePsswd}
        value={Psswd}
        placeholder={"password"}
        secureTextEntry={true}
      />

<Pressable style={{
          padding: 10, 
      }} 
      onPress={() => navigation.navigate('Login')}
      >
      <Text style={{
        textAlign: 'center',
        color: '#5A5A5A',
        fontSize: 20,
        fontWeight: '500',
      }}>
        Login.
      </Text>

      </Pressable>

      <StatusBar style="auto" />
    </View>  
  );
}

function Signup({ navigation }) {

  const [text, onChangeText] = React.useState('');
  const [Psswd, onChangePsswd] = React.useState('');

  return (
    <View style={styles.container}>
      <Image source={require('./assets/FitBattleLogo.jpg')} style={styles.mImage} />
      <TextInput 
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder={"username"}
      />
      <TextInput 
        style={styles.input}
        onChangeText={onChangePsswd}
        value={Psswd}
        placeholder={"password"}
        secureTextEntry={true}
      />
      <TextInput 
        style={styles.input}
        onChangeText={onChangePsswd}
        value={Psswd}
        placeholder={"repeat password"}
        secureTextEntry={true}
      />

<Pressable style={{
          padding: 10, 
      }} 
      onPress={() => navigation.navigate('Signup')}
      >
      <Text style={{
        textAlign: 'center',
        color: '#5A5A5A',
        fontSize: 20,
        fontWeight: '500',
      }}>
        Sign up.
      </Text>

      </Pressable>

      <StatusBar style="auto" />
    </View>  
  );
}

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <Image source={require('./assets/FitBattleLogo.jpg')} style={styles.mImage} />
      <Pressable style={{
          padding: 18, 
      }} 
      onPress={() => navigation.navigate('Login')}
      >
      <Text style={{
        textAlign: 'center',
        color: '#5A5A5A',
        fontSize: 20,
        fontWeight: '500',
      }}>
        Login.
      </Text>
      </Pressable>

      <Pressable style={{
          padding: 18, 
      }} 
      onPress={() => navigation.navigate('Signup')}
      >
      <Text style={{
        textAlign: 'center',
        color: '#5A5A5A',
        fontSize: 20,
        fontWeight: '500',
      }}>
        Sign up.
      </Text>
      </Pressable>
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
    alignItems: 'center',
    width: 200,
    height: 200,
    borderRadius: 10,
  },

  headerText: {
    fontSize: 30,
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 200,
  },

});
