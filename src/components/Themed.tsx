/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import {Pressable, PressableProps, Text as DefaultText, View as DefaultView} from 'react-native';

import Colors from '../styles/Colors';
import styles from '../styles';
import React from 'react';

type ThemeProps = {
	lightColor?: string;
	darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];

export function Text( props: TextProps ) {
	const {style, lightColor, darkColor, ...otherProps} = props;
	const color = darkColor || Colors.text;

	return <DefaultText style={[{color}, style]} {...otherProps} />;
}

export function View( props: ViewProps ) {
	const {style, lightColor, darkColor, ...otherProps} = props;
	const backgroundColor = darkColor || Colors.background;

	return <DefaultView style={[{backgroundColor}, style]} {...otherProps} />;
}

type AppButtonProps = PressableProps & {
	title: string,
};

export function AppButton( props: AppButtonProps ) {
	return <Pressable
		style={( {pressed} ) => [styles.button, pressed && styles.buttonPressed]}
		{...props}>
		<Text>{props.title}</Text>
	</Pressable>
}

export function AppButton2( props: AppButtonProps ) {
	return <Pressable
		style={( {pressed} ) => [styles.button, styles.buttonSecondary, pressed && styles.buttonSecondaryPressed]}
		{...props}>
		<Text>{props.title}</Text>
	</Pressable>
}

export const AppButtonSecondary = AppButton2;