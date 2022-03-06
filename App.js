/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect, useMemo, useReducer} from 'react';
import {
  View
} from 'react-native';

import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme

} from '@react-navigation/native';

import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as paperDarkTheme
} from 'react-native-paper';

import {createDrawerNavigator} from '@react-navigation/drawer';
import StackNavigator from './src/routes/StackNavigation';
import {AuthContext} from './src/components/Context';



import LottieView from 'lottie-react-native';
import MainTabScreen from './src/screens/MainTabScreen';
import SupportScreen from './src/screens/SupportScreen'
import BookMarkScreen from './src/screens/BookMarkScreen';
import SettingsScreen from './src/screens/ProfileScreen';

import {DrawerContent} from './src/screens/DrawerContent';

import AsyncStorage from '@react-native-async-storage/async-storage';




const Drawer = createDrawerNavigator();

const App = () => {
  // const [isLoading, setIsLoading] = useState(true)
  // const [userToken, setUserToken] = useState(null)

  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null
  }

  const customDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#ffffff',
      text: '#333333'
    }
  }
  const customDarkTheme = {
    ...NavigationDarkTheme,
    ...paperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...paperDarkTheme.colors,
      background: '#333333',
      text: '#ffffff'
    }
  }

  const theme = isDarkTheme ? customDarkTheme : customDefaultTheme;

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'Retrieve_Token':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false
        }
      case 'Login':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false
        }
      case 'Logout':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false
        }
      case 'Register':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false
        }
    }
  }

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState)

  const authContext = useMemo(() => ({
    signIn: async(foundUser) => {
      //  setUserToken('fghk')
      //  setIsLoading(false)
      const userToken = String(foundUser[0].userToken);
      const userName = foundUser[0].username
        try {
          userToken = 'dfgfgdgf'
          await AsyncStorage.setItem('userToken', userToken)
          console.log(userToken)
        } catch (e) {
          // saving error
          console.log(e);
        }
      dispatch({type: 'Login', id: userName, token: userToken})
    },
    signOut: async() => {
      // setUserToken(null)
      // setIsLoading(false)
      try {
        await AsyncStorage.removeItem('userToken')
      } catch (e) {
        // saving error
      }
      dispatch({type: 'Logout'});
    },
    signUp: () => {
      // setUserToken('fghk')
      // setIsLoading(false)
    },
    toggleTheme: () => {
      setIsDarkTheme(isDarkTheme => !isDarkTheme)
    }
  }), [])

  useEffect(() => {
     setTimeout(async() => {
        // setIsLoading(false)
        let userToken;
        userToken = null;
        try {
          userToken = await AsyncStorage.getItem('userToken')
          console.log(userToken)
        } catch (e) {
          // saving error
          console.log(e);
        }
        dispatch({type: 'Retrieve_Token', token: userToken})
     }, 3500);
  }, [])

  if(loginState.isLoading){
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <LottieView source={require('./assets/loader-animation-03.json')} autoPlay loop />
      </View>
    );
  }
  return (
    <PaperProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
            <NavigationContainer theme={theme}>
              {  loginState.userToken != null ? (
                  <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props}/>} >
                    <Drawer.Screen name='HomeDrawer' component={MainTabScreen}/>
                    <Drawer.Screen name='SupportScreen' component={SupportScreen}/>
                    <Drawer.Screen name='BookMarkScreen' component={BookMarkScreen}/>
                    <Drawer.Screen name='SettingsScreen' component={SettingsScreen}/>
                </Drawer.Navigator>
                )
                :
                  <StackNavigator/>
              }
        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>

  );
};


export default App;
