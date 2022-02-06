import React, {ReactComponentElement, useEffect, useState} from 'react';
import {Button, Pressable, TextInput} from 'react-native';

import {AppButton, AppButton2, Text, View} from '../components/Themed';
import {RootStackParamList, RootStackScreenProps} from '../types';
import styles from '../styles';
import AppLogo from '../components/AppLogo';
import {hocUserState} from '../hoc/hocUserState';
import Field from '../components/Field';

interface RegisterScreenProps<route extends keyof RootStackParamList> extends RootStackScreenProps<route> {
	userRegister: ( data: {} ) => Promise<any>
	user: any,
};

function RegisterScreen( {navigation, user, userRegister}: RegisterScreenProps<'Register'> ) {

	const [fieldValues, setFieldValues] = useState( {
		name: '',
		username: '',
		password: '',
		passwordConfirm: '',
	} );

	const {name, username, password, passwordConfirm} = fieldValues;

	useEffect( () => {
		if ( user ) {
			navigation.replace( 'Home' );
		}
	}, [user] )

	return (
		<View style={[styles.wrapper, styles.hvCenter]}>

			<AppLogo style={{width: '50%',}}/>

			<Field label='Full name' inputProps={{
				value: name,
				onChangeText: ( input: string ) => setFieldValues( {...fieldValues, name: input} ),
			}} />

			<Field label='Username' inputProps={{
				value: username,
				onChangeText: ( input: string ) => setFieldValues( {...fieldValues, username: input} ),
			}} />

			<Field label='Password' inputProps={{
				secureTextEntry: true,
				value: password,
				onChangeText: ( input: string ) => setFieldValues( {...fieldValues, password: input} ),
			}}/>

			<Field label='Confirm password' inputProps={{
				secureTextEntry: true,
				value: passwordConfirm,
				onChangeText: ( input: string ) => setFieldValues( {...fieldValues, passwordConfirm: input} ),
			}}/>

			<Field>
				<AppButton title='Register' onPress={e => userRegister( {
					name, username, password, passwordConfirm
				} )} />
			</Field>

			<Field>
				<AppButton2 title='Register' onPress={e => navigation.navigate( 'Register' )} />
			</Field>

		</View>
	);
}

export default hocUserState( RegisterScreen );