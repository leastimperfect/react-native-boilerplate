import {StatusBar} from 'expo-status-bar';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Text, View} from 'react-native';
import {AppStateManager} from './src/AppStateManager';

import useCachedResources from './src/hooks/useCachedResources';
import Navigation from './src/navigation';

export default function App() {
	const isLoadingComplete = useCachedResources(); // Loads fonts

	if ( !isLoadingComplete ) {
    return <View style={{height: '100%', alignItems: 'center', justifyContent: 'center'}}>
      <Text>Loading</Text>
    </View>;
	} else {
		return (
			<SafeAreaProvider>
				<AppStateManager>
					<Navigation/>
					<StatusBar/>
				</AppStateManager>
			</SafeAreaProvider>
		);
	}
}
