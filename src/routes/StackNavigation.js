import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';

const StackNavigation = () => {
  const Stack = createStackNavigator();
  return (

      <Stack.Navigator headerMode='none'>
        <Stack.Screen name="SplashScreen" component={SplashScreen}/>
        <Stack.Screen name="SignInScreen" component={SignInScreen}/>
        <Stack.Screen name="SignUpScreen" component={SignUpScreen}/>
        {/* <Stack.Screen
          name="Home"
          component={Homepage}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#ff65df',
            },
            headerTitleAlign: 'center',
          }}
        /> */}
      </Stack.Navigator>

  );
};
export default StackNavigation;
