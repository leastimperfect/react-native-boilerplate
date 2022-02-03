/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const MainStack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <MainStack.Navigator>

        {/* region Top level routes */}
        <MainStack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
        <MainStack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
        {/* endregion Top level routes */}

        <MainStack.Group screenOptions={{ presentation: 'modal' }}>

          {/* region Modals */}
          <MainStack.Screen name="Modal" component={ModalScreen} />
          {/* endregion Modals */}

        </MainStack.Group>

      </MainStack.Navigator>

    </NavigationContainer>
  );
}

//const doubleNum = function( num ) { return 2 * num; };
const divide = ( { divident, divisor } ) => divident / divisor;


/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const MainTabs = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <MainTabs.Navigator initialRouteName="TabOne"
                        screenOptions={{tabBarActiveTintColor: Colors[colorScheme].tint,}}>
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
                color={Colors[colorScheme].text}
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

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
