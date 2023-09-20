import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <stack.Screen name="Login" component={Login} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

function HomeScreen() {
  const [text, onChangeText] = React.useState('');
  const [Psswd, onChangePsswd] = React.useState('');
  
  return (
    <NavigationContainer>{
    <View style={styles.container}>
      <Image source={require('./assets/FitBattleLogo.jpg')} style={styles.mImage} />
      <Text style={styles.headerText}>Login</Text>
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

      <TouchableOpacity 
        onPress={() =>{}} 
        style={{
          backgroundColor: '#005A9C', 
          padding: 18, 
          borderRadius: 10, 
          marginBottom: 30,
          width: 150, 
          }}>
        <Text 
          style={{
            textAlign: 'center',
            fontWeight: '700',
            fontSize: 16,
            color: '#fff',
          }}>
            Login
          </Text>
      </TouchableOpacity>


      <StatusBar style="auto" />
    </View>
    }</NavigationContainer>
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
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
