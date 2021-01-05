import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import BusinessView from '../Business/Business';

const CostList = (props) => {
    if (props.businesses == null || props.businesses.length === 0) {
        return null;
    }
    return (
        <View style={styles.block}>
            <Text style={styles.costname}>{props.costname}</Text>
            <FlatList 
                data={props.businesses}
                showsHorizontalScrollIndicator={false}
                keyExtractor={result => result.id}
                horizontal
                renderItem={({item}) => <BusinessView item={item} />}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    block: {
        marginVertical: 20
    },
    costname: {
        marginVertical: 5,
        fontSize: 18,
        marginHorizontal: 10
    }
});

export default CostList;