import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';


export default function App() {
  const [text, onChangeText] = React.useState('');
  const [Psswd, onChangePsswd] = React.useState('');
  
  return (
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
          backgroundColor: '#AD40AF', 
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
