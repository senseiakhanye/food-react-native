import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchComponent from './SearchComponent/SearchComponent';

const SearchScreen = () => {
    const [ searchText, updateSearch ] = useState("Placeholder");
    return (
        <View>
            <SearchComponent search={updateSearch} />
            <Text>{searchText}</Text>
        </View>
    );
}

const styles = StyleSheet.create({

});

export default SearchScreen;