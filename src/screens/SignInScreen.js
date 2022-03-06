import React, { useState, useContext } from 'react'
import {  Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, StatusBar, Alert} from 'react-native';
import * as Animatable from 'react-native-animatable'
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'

import { useTheme} from '@react-navigation/native'

import {AuthContext} from '../components/Context'
import Users from '../model/users'


const SplashScreen = ({navigation}) => {
    const [data, setData] = useState({
        userName: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true
    })

    const {signIn} = useContext(AuthContext)
    const {colors} = useTheme();

    const textInputChange = (val) => {
        if(val.trim().length >= 4) {
              setData({
                  ...data,
                  userName: val,
                  check_textInputChange: true,
                  isValidUser: true
              })
        }else{
            setData({
                ...data,
                userName: val,
                check_textInputChange: false,
                isValidUser: false
            })
        }
    }
    const handlePasswordChange = (val) => {
        if(val.trim().length >= 8) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            })
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            })
        }
    }
    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }

    const handleValidUser = (val) => {
        if(val.trim().length >= 4){
            setData({
                ...data,
                isValidUser: true
            })

        } else {
            setData({
                ...data,
                isValidUser: false
            })
        }

    }

    const loginHandle = (userName, password) => {

        const foundUser = Users.filter(item => {
            return userName == item.username && password == item.password;
        });

        if(data.userName == 0 || data.password == 0 ){
            Alert.alert('Wrong input!', 'username or password field cannot be empty', [
                {text: 'Okay'}
            ])
            return;
        }
        if(foundUser.length == 0 ){
            Alert.alert('Invalid user!', 'username or password is incorrect', [
                {text: 'Okay'}
            ])
            return;
        }
        signIn(foundUser)
    }
    return (
       <View style={styles.container}>
           <StatusBar backgroundColor='#009387' barStyle='light-content'/>
           <View style={styles.header}>
                <Text style={styles.text_header}>Welcome</Text>
           </View>
           <Animatable.View
              animation="fadeInUpBig"
              style={[styles.footer, {
                  backgroundColor: colors.background
              }]}
            >
                <Text style={[styles.text_footer, {color: colors.text}]}>Username</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name='user-o'
                        color={colors.text}
                        size={20}
                    />
                    <TextInput
                        placeholder='username'
                        style={[styles.textInput, {
                            color: colors.text
                        }]}
                        autoCapitalize='none'
                        onChangeText={(val) => textInputChange(val)}
                        onEndEditing={(e) => handleValidUser(e.nativeEvent.text) }
                    />
                    { data.check_textInputChange ?
                    <Animatable.View
                       animation='bounceIn'
                    >
                        <Feather
                            name='check-circle'
                            color='green'
                            size={20}
                        />
                    </Animatable.View>
                      : null
                    }
                </View>
                {data.isValidUser ? null
                 :
                    <Animatable.View animation='fadeInLeft' duration={500}>
                        <Text style={styles.errorMsg}>usernmae must be 4 characters long.</Text>
                    </Animatable.View>
                }

                <Text style={styles.text_footer, { color: colors.text, marginTop: 35}}>Password</Text>
                <View style={styles.action}>
                    <Feather
                        name='lock'
                        color={colors.text}
                        size={20}
                    />
                    <TextInput
                        placeholder='Password'
                        style={[styles.textInput, {
                            color: colors.text
                        }]}
                        secureTextEntry={data.secureTextEntry ? true : false}
                        autoCapitalize='none'
                        onChangeText={(val) => handlePasswordChange(val)}
                    />
                    <TouchableOpacity
                       onPress={updateSecureTextEntry}
                    >
                   {data.secureTextEntry ?

                   <Feather
                       name='eye-off'
                       color='grey'
                       size={20}
                   />
                   :
                   <Feather
                     name="eye"
                     color="grey"
                     size={20}
                   />
                   }
                    </TouchableOpacity>
                </View>
                 {data.isValidPassword ? null
                  :
                    <Animatable.View animation='fadeInLeft' duration={500}>
                        <Text style={styles.errorMsg}>password must be 8 characters long.</Text>
                    </Animatable.View>
                }

                <TouchableOpacity>
                      <Text style={{color: '#009367', marginTop: 15}}>forgot password?</Text>
                </TouchableOpacity>
                <View style={styles.button}>
                    <TouchableOpacity
                        onPress={() => {loginHandle(data.userName, data.password)}}
                        style={styles.signIn}
                    >

                     <LinearGradient
                       colors={['#08d4c4', '#01ab9d']}
                       style={styles.signIn}
                     >
                         <Text style={styles.textSign, {color: '#fff'}}>Sign In</Text>
                     </LinearGradient>
                    </TouchableOpacity>
                     <TouchableOpacity
                        onPress={() => navigation.navigate('SignUpScreen') }
                        style={[styles.signIn, {
                                borderWidth: 1,
                                borderColor: '#009387',
                                marginTop: 15
                            }]}
                     >
                         <Text style={styles.textSign, {color: '#009387'}}>Sign Up</Text>
                     </TouchableOpacity>
                </View>

           </Animatable.View>
       </View>
    )
}


export default SplashScreen;
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#009387'

        },
        header: {
            flex: 1,
            justifyContent: 'flex-end',
            paddingHorizontal: 20,
            paddingBottom: 50
        },
        footer: {
            flex: 3,
            backgroundColor: '#fff',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            paddingHorizontal: 20,
            paddingVertical: 30
        },
        text_header: {
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 30
        },
        text_footer: {
            color: '#05375a',
            fontSize: 18
        },
        action: {
            flexDirection: 'row',
            marginTop: 10,
            borderBottomWidth: 1,
            borderBottomColor: '#f2f2f2',
            paddingBottom: 5
        },
        textInput: {
            flex: 1,
            marginTop: Platform.OS === 'ios' ? 0 : -12,
            paddingLeft: 10,
            color: '#05375a'
        },
        button: {
            alignItems: 'center',
            marginTop: 50,

        },
        signIn: {
            width: '100%',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10
        },
        textSign: {
            fontSize: 18,
            fontWeight: 'bold'
        },
        errorMsg: {
            color: 'red',
            fontSize: 14
        }
    })