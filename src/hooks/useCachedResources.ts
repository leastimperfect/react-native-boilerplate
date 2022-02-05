import {FontAwesome} from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

export default function loadCachedResources( loadingComplete?: () => any ) {
	SplashScreen.preventAutoHideAsync();

	// Load fonts
	Font
		.loadAsync( {
			...FontAwesome.font,
			'space-mono': require( '../assets/fonts/SpaceMono-Regular.ttf' ),
		} )
		.then( () => {
			SplashScreen.hideAsync();
			loadingComplete && loadingComplete();
		} )
		.catch( e =>
			console.warn( e )
		);

}
