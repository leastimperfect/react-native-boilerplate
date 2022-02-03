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
import {RootStackParamList} from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import TabsNavigator from './TabsNavigator';
import {AppConsumer} from '../AppStateManager';
import {AppTheme} from '../constants/Colors';

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const MainStack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
	return (
		<AppConsumer>
			{( { user } ) => (
				<NavigationContainer linking={LinkingConfiguration} theme={AppTheme}>
					<MainStack.Navigator>
						{ user ?
							<>
								{/* region Top level routes */}
								<MainStack.Screen name="Root" component={TabsNavigator} options={{headerShown: false}}/>
								<MainStack.Screen name="NotFound" component={NotFoundScreen} options={{title: 'Oops!'}}/>
								{/* endregion Top level routes */}

								<MainStack.Group screenOptions={{presentation: 'modal'}}>

									{/* region Modals */}
									<MainStack.Screen name="Modal" component={ModalScreen} />
									<MainStack.Screen name="Login" component={LoginScreen} />
									{/* endregion Modals */}

								</MainStack.Group>
							</>
							:
							<>
								<MainStack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
							</>
						}

					</MainStack.Navigator>
				</NavigationContainer>
			)
			}
		</AppConsumer>
	);
}
