import React, { useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import useOneBusiness from '../../Hooks/useOneBusiness';

const BusinessScreen = ({navigation}) => {
    const id = navigation.getParam('id');
    const { businessData, error } = useOneBusiness(id);   

    const showOneBusiness = () => {
        return (
            <View>
                <Text key={id}>{businessData.name}</Text>
                <FlatList 
                    data={businessData.photos}
                    keyExtractor={photo => photo}
                    renderItem={({item}) => {
                        return <Image source={{ uri: item }} style={styles.image} />
                    }}/>
            </View>
        )
    }

    let showView = <Text>Loading...</Text>;
    if (businessData != null || error != null) {
        if (error != null) {
            showView = <Text>{error}</Text>;
        } else if (businessData != null) {
            showView = showOneBusiness();
        }
    }

    return (
        <>
            {showView}
        </>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 150
    }
});

export default BusinessScreen;