import React from 'react'

import {createStackNavigator} from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import HomeScreen from './HomeScreen'
import NotificationScreen from './NotificationScreen'



import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';
import { TouchableOpacity, View } from 'react-native';
import { Avatar, useTheme } from 'react-native-paper';
import EditProfileScreen from './EditProfileScreen';




const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const NotificationStack = createStackNavigator();
const ProfileStack = createStackNavigator();



const MainTabScreen = () => {

    return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#e91e63"
      style={{ backgroundColor: 'tomato' }}
    >
        <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
            tabBarLabel: 'Home',
            tabBarColor: '#009387',
            tabBarIcon: ({ color }) => (
                <Icon name="ios-home" color={color} size={26} />
            ),
            }}
        />
        <Tab.Screen
            name="Notifications"
            component={NotificationStackScreen}
            options={{
            tabBarLabel: 'Updates',
            tabBarColor: '#1f65ff',
            tabBarIcon: ({ color }) => (
                <Icon name="ios-notifications" color={color} size={26} />
            ),
            }}
        />
        <Tab.Screen
            name="Profile"
            component={ProfileStackScreen}
            options={{
            tabBarLabel: 'Profile',
            tabBarColor: '#694fad',
            tabBarIcon: ({ color }) => (
                <Icon name="ios-person" color={color} size={26} />
            ),
            }}
        />
        <Tab.Screen
            name="explore"
            component={ExploreScreen}
            options={{
            tabBarLabel: 'explore',
            tabBarColor: '#d02860',
            tabBarIcon: ({ color }) => (
                <Icon name="ios-aperture" color={color} size={26} />
            ),
            }}
        />
    </Tab.Navigator>
    )
}

export default MainTabScreen


const HomeStackScreen = ({navigation}) => {
    const {colors} = useTheme()

    return (
        <HomeStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.background,
                    shadowColor: colors.background,
                    elevation: 0
                },
                headerTintColor: colors.text,
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }}
        >
            <HomeStack.Screen name='Home' component={HomeScreen} options={{
                title: 'Foodfinder',
                headerLeft: () => (
                    <View style={{marginLeft: 10}}>
                        <Icon.Button
                            name='ios-menu'
                            size={25}
                            color= {colors.text}
                            backgroundColor={colors.background}
                            onPress={() => navigation.openDrawer()}
                        />
                    </View>
                ),
                headerRight: () => (
                    <View style={{flexDirection: 'row', marginRight: 10}}>
                        <Icon.Button
                                name='ios-search'
                                size={25}
                                color={colors.text}
                                backgroundColor={colors.background}
                                onPress={() => {}}
                        />
                        <TouchableOpacity style={{paddingHorizontal: 15, marginTop: 5}} onPress={() => {navigation.navigate('Profile')}}>

                            <Avatar.Image
                            source = {{
                                uri: 'https://cdn.jpegmini.com/user/images/pufffin_blurred.jpg'
                            }}
                            size={30}
                            />
                        </TouchableOpacity>
                    </View>
                )
            }}/>
        </HomeStack.Navigator>
    )
}

const NotificationStackScreen = ({navigation}) => (
  <NotificationStack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: '#1f65ff',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>
      <NotificationStack.Screen
          name='detail'
          component={NotificationScreen}
          options={{
              headerLeft: () => (
                  <Icon.Button
                     name='ios-menu'
                     size={25}
                     backgroundColor='#1f65ff'
                     onPress={() => navigation.openDrawer()}
                    />
              )
          }}
      />
  </NotificationStack.Navigator>
)
const ProfileStackScreen = ({navigation}) => {
    const {colors} = useTheme()

return(
  <ProfileStack.Navigator
    screenOptions={{
        headerStyle: {
            backgroundColor: colors.background,
            shadowColor: colors.background,
            elevation: 0

        },
        headerTintColor: '#000',

    }}
  >
      <ProfileStack.Screen
          name= 'Profile'
          component={ProfileScreen}
          options={{
              title: '',
              headerLeft: () => (
                  <Icon.Button
                      name='ios-menu'
                      size={25}
                      color= {colors.text}
                      backgroundColor={colors.background}
                      onPress={() => navigation.openDrawer()}
                   />
              ),
              headerRight: () => (
                  <MaterialCommunityIcons.Button
                      name='account-check'
                      size={25}
                      color={colors.text}
                      backgroundColor={colors.background}
                      onPress={() => navigation.navigate('EditProfile')}
                   />
              )
          }}
      />
      <ProfileStack.Screen
           name='EditProfile'
           options= {{
               title: 'Edit Profile'
           }}
           component={EditProfileScreen}
      />
  </ProfileStack.Navigator>
)}
