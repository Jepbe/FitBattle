import 'expo-router/entry';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';


export default function Login() {
    return (
        <View>
            <Text>This is the Login Page!</Text>
            <Link href="/">Go to the Home Page!</Link>
        </View>
    );
}