import React, { useState } from 'react'
import {View, StyleSheet} from 'react-native'

import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper'
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import {AuthContext } from '../components/Context'
import { useContext } from 'react'



const DrawerContent = (props) => {

    const paperTheme = useTheme();
    const { signOut, toggleTheme} = useContext(AuthContext)

    return(
       <View style={{flex: 1}}>
           <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection: 'row', marginTop: 15}}>
                            <Avatar.Image
                                 source={{
                                     uri: 'https://cdn.jpegmini.com/user/images/pufffin_blurred.jpg'
                                 }}
                                 size={50}
                            />
                            <View style={{marginLeft: 15, flexDirection: 'column'}}>
                                <Title style={styles.title}>Adewumi Emmanuel Femi</Title>
                                <Caption style={styles.caption}>@adex</Caption>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                <Caption style={styles.caption}>following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                <Caption style={styles.caption}>followers</Caption>
                            </View>
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                            <DrawerItem
                                icon={({color, size}) => (
                                    <Icon
                                        name='home-outline'
                                        color={color}
                                        size={size}
                                        />
                                        )}
                                        label='Home'
                                        onPress={() => { props.navigation.navigate('Home')}}
                            />
                             <DrawerItem
                                icon={({color, size}) => (
                                    <Icon
                                        name='account-outline'
                                        color={color}
                                        size={size}
                                        />
                                        )}
                                        label='Profile'
                                        onPress={() => {props.navigation.navigate('Profile')}}
                            />
                             <DrawerItem
                                icon={({color, size}) => (
                                    <Icon
                                        name='bookmark-outline'
                                        color={color}
                                        size={size}
                                        />
                                        )}
                                        label='Bookmark'
                                        onPress={() => {props.navigation.navigate('BookMarkScreen')}}
                            />
                             <DrawerItem
                                icon={({color, size}) => (
                                    <Icon
                                        name='bookmark-outline'
                                        color={color}
                                        size={size}
                                        />
                                        )}
                                        label='Settings'
                                        onPress={() => {props.navigation.navigate('SettingsScreen')}}
                            />
                             <DrawerItem
                                icon={({color, size}) => (
                                    <Icon
                                        name='account-check-outline'
                                        color={color}
                                        size={size}
                                        />
                                        )}
                                        label='Support'
                                        onPress={() => {props.navigation.navigate('SupportScreen')}}
                            />
                    </Drawer.Section>
                    <Drawer.Section title='Preferences'>
                        <TouchableRipple  onPress={() => toggleTheme()}>
                            <View style={styles.preferences}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents='none'>
                                    <Switch value={ paperTheme.dark }/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
           </DrawerContentScrollView>
           <Drawer.Section style={styles.bottomDrawerSection}>
               <DrawerItem
                  icon={({color, size}) => (
                      <Icon
                         name='exit-to-app'
                         color={color}
                         size={size}
                         />
                         )}
                         label='sign out'
                         onPress={() => {signOut()}}
               />

           </Drawer.Section>
       </View>
    )
}

export {DrawerContent}


const styles = StyleSheet.create({

    drawerContent: {
        flex: 1
    },
    userInfoSection: {
        paddingLeft: 20
    },
    title: {
        fontSize: 15,
        marginTop: 3,
        fontWeight: 'bold'
    },
    caption: {
        fontSize: 14,
        lineHeight: 14
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3
    },
    drawerSection: {
        marginTop: 15
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preferences: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 12,
        paddingHorizontal: 16
    }
})