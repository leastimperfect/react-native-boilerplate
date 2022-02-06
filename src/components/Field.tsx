import {Text, View} from './Themed';
import styles from '../styles';
import React, {ReactComponentElement} from 'react';
import {TextInput} from 'react-native';

type FieldProps = {
	children?: ReactComponentElement<any>,
	label?: string,
	inputProps?: any,
};

export default function Field( props: FieldProps ) {
	if ( props.inputProps ) {
		props.inputProps.style = props.inputProps.style || [styles.input];
	}


	return <View style={[styles.field]}>
		{props.label ? <Text style={[styles.fieldLabel]}>{props.label}</Text> : null}

		{props.inputProps ? <TextInput {...props.inputProps} /> : null}

		{props.children}
	</View>;
}
