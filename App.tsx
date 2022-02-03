import {StatusBar} from 'expo-status-bar';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Text, View} from 'react-native';
import {AppStateManager} from './AppStateManager';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export default function App() {
	const isLoadingComplete = useCachedResources(); // Loads fonts
	const colorScheme = useColorScheme(); // 'dark' || 'light'

	if ( !isLoadingComplete ) {
    return <View style={{height: '100%', alignItems: 'center', justifyContent: 'center'}}>
      <Text>Loading</Text>
    </View>;
	} else {
		return (
			<SafeAreaProvider>
				<AppStateManager>
					<Navigation colorScheme={colorScheme}/>
					<StatusBar/>
				</AppStateManager>
			</SafeAreaProvider>
		);
	}
}
