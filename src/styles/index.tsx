import {StyleSheet} from 'react-native';

import Colors, {AppTheme} from './Colors';

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		padding: 16,
	},
	hvCenter: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},

	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},

	link: {
		marginTop: 15,
		paddingVertical: 15,
	},

	linkText: {
		fontSize: 14,
		color: '#2e78b7',
	},

	input: {
		height: 40,
		backgroundColor: Colors.inputBackground,
		padding: 10,
		color: Colors.text,
		width: '100%',
		marginTop: 8,
	},

	button: {
		height: 40,
		alignItems: 'center',
		backgroundColor: AppTheme.colors.primary,
		padding: 10,
		color: Colors.text,
		width: '100%',
		marginTop: 8,
	},

	buttonPressed: {
		opacity: .8,
	},

	buttonSecondary: {
		backgroundColor: AppTheme.colors.notification,
	},

	buttonSecondaryPressed: {
		opacity: .8,
	},

	field: {
		marginTop: 16,
		alignItems: 'flex-start',
		width: '100%',
	},

	fieldLabel: {
		margin: 4,
	},


});

export default styles;