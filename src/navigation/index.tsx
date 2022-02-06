/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';

import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import {RootStackParamList} from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import TabsNavigator from './TabsNavigator';
import {AppConsumer} from '../AppStateManager';
import {AppTheme} from '../styles/Colors';

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const MainStack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
	const userSignScreensStack = <MainStack.Group disableHeader={true}>
		<MainStack.Screen name="Register" component={RegisterScreen} options={{headerShown: false}}/>
		<MainStack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
	</MainStack.Group>;

	return (
		<AppConsumer>
			{( { user } ) => (
				<NavigationContainer linking={LinkingConfiguration} theme={AppTheme}>
					<MainStack.Navigator>
						{ user ?
							<>
								{/* region Top level routes */}
								<MainStack.Screen name="Home" component={TabsNavigator} options={{headerShown: false}}/>
								<MainStack.Screen name="NotFound" component={NotFoundScreen} options={{title: 'Oops!'}}/>
								{userSignScreensStack}
								{/* endregion Top level routes */}

								<MainStack.Group screenOptions={{presentation: 'modal'}}>

									{/* region Modals */}
									<MainStack.Screen name="Modal" component={ModalScreen} />
									{/* endregion Modals */}

								</MainStack.Group>
							</>
							:
							<>
								{/* region User not signed in routes */}
								{userSignScreensStack}
								{/* endregion User not signed in routes */}
							</>
						}

					</MainStack.Navigator>
				</NavigationContainer>
			)
			}
		</AppConsumer>
	);
}
