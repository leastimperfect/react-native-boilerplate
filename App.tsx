import React from 'react';
import {StatusBar} from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import {FontAwesome} from '@expo/vector-icons';
import {SafeAreaProvider} from 'react-native-safe-area-context';


import {AppProvider} from './src/AppStateManager';

import Navigation from './src/navigation';

export default class App extends React.Component<any, any> {
	state: any = {
		user: null,
		resourcesLoaded: false,
	};

	constructor( props: {} ) {
		super( props );
		this.loadCachedResources(); // Loads fonts
	}

	private loadCachedResources() {
		SplashScreen.preventAutoHideAsync();

		// Load fonts
		Font
			.loadAsync( {
				...FontAwesome.font,
				'space-mono': require( './src/assets/fonts/SpaceMono-Regular.ttf' ),
			} )
			.then( () => {
				SplashScreen.hideAsync();
				this.setState( {resourcesLoaded: true} );
			} )
			.catch( e =>
				console.warn( e )
			);
	}

	provideState() {
		return {
			...this.state,
			setState: ( newState: {} ) => this.setState( newState )
		};
	}

	render() {
		return (
			<SafeAreaProvider>
				<AppProvider value={this.provideState()}>
					<Navigation/>
					<StatusBar/>
				</AppProvider>
			</SafeAreaProvider>
		);
	}
}
