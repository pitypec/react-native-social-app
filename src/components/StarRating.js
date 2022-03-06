import React from 'react'
import { View, Text, StyleSheet} from 'react-native';

import IonIcons from 'react-native-vector-icons/Ionicons'


const StarRating = (props) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {

        let name = 'ios-star';

        if (i > props.ratings) {
            name = 'ios-star-outline';

        }

        stars.push((<IonIcons name={name} size={15} style={styles.star} key={i}/>));

    }

    return (
            <View style={styles.container}>
                {stars}
                <Text styles={styles.text}>
                    ({props.reviews})
                </Text>
            </View>
    );
};

export default StarRating


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})