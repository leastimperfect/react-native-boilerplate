import React, {ReactComponentElement, useEffect, useState} from 'react';
import {Pressable, TextInput} from 'react-native';

import {Text, View} from '../components/Themed';
import {RootStackParamList, RootStackScreenProps} from '../types';
import styles from '../styles';
import AppLogo from '../components/AppLogo';
import {hocUserState} from '../hoc/hocUserState';
import Field from '../components/Field';

interface LoginScreenProps<route extends keyof RootStackParamList> extends RootStackScreenProps<route> {
	userLogin: ( user: string, pass: string ) => Promise<any>
	user: any,
};

function LoginScreen( {navigation, user, userLogin}: LoginScreenProps<'Login'> ) {

	console.log( {navigation, user, userLogin} );

	const [fieldValues, setFieldValues] = useState( {
		username: 'JonDoe', // @todo Remove after dev
		password: 'smdflkscvjsdf', // @todo Remove after dev
	} );

	useEffect( () => {
		if ( user ) {
			navigation.navigate( 'Home' );
		}
	}, [user] )

	return (
		<View style={[styles.wrapper, styles.hvCenter]}>

			<AppLogo style={{width: '50%',}}/>

			<Field label='Username' inputProps={{
				value: fieldValues.username,
				onChangeText: ( input: string ) => setFieldValues( {...fieldValues, username: input} ),
			}} />

			<Field label='Password' inputProps={{
				secureTextEntry: true,
				value: fieldValues.password,
				onChangeText: ( input: string ) => setFieldValues( {...fieldValues, password: input} ),
			}}/>

			<Field>
				<Pressable style={[styles.button]} onPress={e => userLogin( fieldValues.username, fieldValues.password )}>
					<Text>Login</Text>
				</Pressable>
			</Field>

		</View>
	);
}

export default hocUserState( LoginScreen );