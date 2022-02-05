import * as React from 'react';
import {Pressable} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {RootTabParamList, RootTabScreenProps} from '../types';
import Colors from '../styles/Colors';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
	name: React.ComponentProps<typeof FontAwesome>['name'];
	color: string;
}) {
	return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const MainTabs = createBottomTabNavigator<RootTabParamList>();

function TabsNavigator() {
	return (
		<MainTabs.Navigator initialRouteName="TabOne"
												screenOptions={{tabBarActiveTintColor: Colors.tint,}}>
			<MainTabs.Screen
				name="TabOne"
				component={TabOneScreen}

				options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
					title: 'Tab One',
					tabBarIcon: ({ color }) => <TabBarIcon name="heart" color={color} />,
					headerLeft: () => {
						return <Pressable
							onPress={() => navigation.navigate( 'Modal' )}
							style={( {pressed} ) => (
								{
									opacity: pressed ? 0.5 : 1,
								}
							)}>
							<FontAwesome
								name="info-circle"
								size={25}
								color={Colors.text}
								style={{marginRight: 15, marginLeft: 15}}
							/>
						</Pressable>
					},
				})}
			/>
			<MainTabs.Screen
				name="TabTwo"
				component={TabTwoScreen}
				options={{
					title: 'Tab Two',
					tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
				}}
			/>
		</MainTabs.Navigator>
	);
}

export default TabsNavigator;