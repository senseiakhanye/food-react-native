import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchComponent from './SearchComponent/SearchComponent';
import useSearch from '../Hooks/useSearch';
import CostList from './CostList/CostList';

const SearchScreen = (props) => {
    const { searchData, doSearch } = useSearch();

    const sortBusinessByPrice = (price) => {
        return searchData.results.filter(business => (business.price != null && business.price === price))
    }

    let business = searchData.results.length > 0 ?
        (
            <View>
                <CostList costname="Cost Effective" businesses={sortBusinessByPrice("$")} />
                <CostList costname="Normal Budget" businesses={sortBusinessByPrice("$$")} />
                <CostList costname="Bit Pricier" businesses={sortBusinessByPrice("$$$")} />
                <CostList costname="Big Spender" businesses={sortBusinessByPrice("$$$$")} />
            </View>
        ) : null;
    business = (searchData.error) ? <Text>{searchData.errorMessage}</Text> : business;

    return (
        <>
            <SearchComponent search={doSearch} />
            <ScrollView>
                {business}
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    oneItem: {
        marginVertical: 10,
        marginHorizontal: 10
    },
    main: {
        flex: 1
    }
});

export default SearchScreen;