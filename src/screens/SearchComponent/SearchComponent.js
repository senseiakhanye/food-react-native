import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'

const SearchComponent = (props) => {
    const [ searchString, updateSearch ] = useState("");
    return (
        <View style={styles.searchDiv}>
            <Feather name="search" size={30} />
            <TextInput 
                style={styles.textInput}
                value={searchString}
                onChangeText={text => updateSearch(text) }
                autoCapitalize="none"
                autoCorrect={false}
                onEndEditing={() => props.search(searchString)}
                placeholder="Search" />
        </View>
    );
};

const styles = StyleSheet.create({
    searchDiv: {
        margin: 10,
        backgroundColor: 'lightgray',
        borderRadius: 7,
        paddingVertical: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textInput: {
        color: 'black',
        flex: 1,
        marginHorizontal: 5,
        padding: 10,
        fontSize: 18
    }
});

export default SearchComponent;

