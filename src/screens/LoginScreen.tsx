import React, {ReactComponentElement, useEffect, useState} from 'react';
import {Button, Pressable, TextInput} from 'react-native';

import {AppButton, AppButton2, Text, View} from '../components/Themed';
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
				<AppButton title='Login' onPress={e => userLogin( fieldValues.username, fieldValues.password )} />
			</Field>

		</View>
	);
}

export default hocUserState( LoginScreen );