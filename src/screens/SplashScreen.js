import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Animatable from 'react-native-animatable'
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

import { useTheme} from '@react-navigation/native'

const SplashScreen = ({navigation}) => {
    const {colors} = useTheme();
    return (
       <View style={styles.container}>
            <View style={styles.one}>
                <Animatable.Image
                animation= "bounceIn"
                duration= {1500}
                source={require('../../assets/images/signup_illustration.png')}
                style={styles.logo}
                resizeMode="stretch"/>
            </View>
            <Animatable.View
              animation="fadeInUpBig"
              style={[styles.two, {
                  backgroundColor: colors.background
              }]}
            >
                <Text style={[styles.title, {color: colors.text}]}>Stay Connected With Everyone</Text>
                <Text style={styles.text}>Sign In With Account</Text>
                <View style={styles.button}>
                <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
                    <LinearGradient
                      colors={['#08d4c4', '#01ab9d']}
                      style={styles.signIn}
                    >
                        <Text style={styles.textSign}>Get Started</Text>
                        <MaterialIcon
                          name='navigate-next'
                          color='#fff'
                          size={20}
                         />
                    </LinearGradient>
                </TouchableOpacity>
                </View>

            </Animatable.View>
       </View>
    )
}


export default SplashScreen;
    const {height} = Dimensions.get("screen")
    const height_logo = height * 0.28
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#009387',
        },
        one: {
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center'
        },
        two: {
            flex: 1,
            backgroundColor: '#ffffff',
            borderTopRightRadius:30,
            borderTopLeftRadius: 30,
            paddingVertical: 50,
            paddingHorizontal: 20
          },
        logo: {
            width: height_logo,
            height: height_logo
        },
        title: {
            color: '#05375a',
            fontSize: 30,
            fontWeight: 'bold'
        },
        text: {
            color: 'grey',
            marginTop: 5
        },
        button: {
           alignItems: 'flex-end',
           marginTop: 30
        },
        signIn: {
            width: 150,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
            flexDirection: 'row'
        },
        textSign: {
            color: 'white',
            fontWeight: 'bold'
        }
    })