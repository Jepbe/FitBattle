import 'expo-router/entry';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
    return (
        <View>
            <Text>Main Page!</Text>
            <Link href="/login">Login Page!</Link>
        </View>
    );
}