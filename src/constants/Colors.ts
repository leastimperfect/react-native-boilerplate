import {Theme} from '@react-navigation/native/src/types';

//const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

const Colors = {
	text: '#fff',
	inputBackground: '#182b33',
	inputBorder: '#182b33',
	background: '#0f1b20',
	tint: tintColorDark,
	tabIconDefault: '#ccc',
	tabIconSelected: tintColorDark,
};

export default Colors;

export const AppTheme: Theme = {
	dark: true,
	colors: {
		primary: 'rgb(10, 132, 255)',
		background: 'rgb(1, 1, 1)',
		card: 'rgb(18, 18, 18)',
		text: 'rgb(229, 229, 231)',
		border: 'rgb(39, 39, 41)',
		notification: 'rgb(255, 69, 58)',
	},
};
