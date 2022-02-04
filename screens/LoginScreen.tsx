import React, {useState} from 'react';
import {Pressable, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

import {Text, View} from '../components/Themed';
import {RootStackScreenProps} from '../types';
import styles from '../appStyles';

function Field( {children, label = '' } ) {
	return <View style={[styles.field]}>
		{ label ? <Text style={[styles.fieldLabel]}>{label}</Text> : null }
		{children}
	</View>;



}

export default function LoginScreen( {navigation}: RootStackScreenProps<'NotFound'> ) {

	const [fieldValues, setFieldValues] = useState( {
		username: '',
		password: '',
	} );

	return (
		<View style={[styles.wrapper, styles.hvCenter]}>

			<Field label='Username'>
				<TextInput style={[styles.input]} value={fieldValues.username}
									 onChangeText={input => setFieldValues( {...fieldValues, username: input,} )}/>
			</Field>

			<Field label='Password'>
				<TextInput secureTextEntry={true} style={[styles.input]} value={fieldValues.password}
									 onChangeText={input => setFieldValues( {...fieldValues, password: input,} )}/>
			</Field>

			<Field>
				<Pressable style={[styles.button]} onPress={e => { alert( `Logging you in ${fieldValues.username}, your password is ${fieldValues.password}.` ) }}>
					<Text>Login</Text>
				</Pressable>
			</Field>

		</View>
	);
}
