import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';

const BusinessView = (props) => {
    const {item} = props;
    return (
        <TouchableOpacity onPress={() => props.navigation.navigate('BusinessScreen', { id: item.id })}>
            <View style={styles.box}>
                <Image source={{ uri: item.image_url }} style={styles.image}/>
                <Text style={styles.name}>{item.name}</Text>
                <Text>{item.rating} Stars, {item.review_count} Reviews</Text>
            </View>
        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    box: {
        marginHorizontal: 10
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16
    },
    image: {
        width: 250,
        height: 150,
        borderRadius: 7,
        marginHorizontal: 7
    }
});

export default withNavigation(BusinessView);