/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName} from 'react-native';

import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList} from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import TabsNavigator from './TabsNavigator';

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const MainStack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer linking={LinkingConfiguration} theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <MainStack.Navigator>

        {/* region Top level routes */}
        <MainStack.Screen name="Root" component={TabsNavigator} options={{ headerShown: false }} />
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
