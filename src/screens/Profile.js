import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rowone}>
        <Image style={styles.img} source={require('../images/banner.jpg')} />
        <View>
          <Text>100</Text>
          <Text>posts</Text>
        </View>
        <View>
          <Text>100</Text>
          <Text>follower</Text>
        </View>
        <View>
          <Text>100</Text>
          <Text>following</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  rowone: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#0f6',
    justifyContent: 'space-between',
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginHorizontal: 30,
    paddingVertical: 30,
  },
});

export default Profile;
