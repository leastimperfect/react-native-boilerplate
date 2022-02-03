import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';
import styles from '../appStyles';

export default function LoginScreen({ navigation }: RootStackScreenProps<'NotFound'>) {
	return (
		<View style={[styles.wrapper, styles.hvCenter]}>

			<Text style={styles.title}>Login</Text>

			<TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.link}>
				<Text style={styles.linkText}>Go to home screen!</Text>
			</TouchableOpacity>
		</View>
	);
}
