import { useState, useEffect, useCallback } from 'react';
import { getBusinesses } from '../Services/Businesses';

export default () => {
    const [ searchOnce, updateSearchOnce ] = useState(false);
    const [ searchData , updateSearch ] = useState({
        search: false,
        searchString: "",
        results: [],
        errorMessage: ""
    });

    const doSearch = async (searchStr) => {
        updateSearchOnce(oldValue => !oldValue);
        updateSearch(() => {
            return {
                search: true,
                searchString: searchStr,
                results: [],
                error: false
            }
        });
    }

    const searchDatabase = useCallback((searchString) => {
        const searchTerm = searchString.length === 0 ? "Food" : searchString;
        const searchQuery = async () => {
            try {
                const correctData = await getBusinesses(searchTerm);
                updateSearch(() => {
                    return {
                        search: false,
                        searchString: "",
                        results: correctData,
                        error: false
                    }
                })
            }
            catch (error) {
                updateSearch(() => {
                    return {
                        search: false,
                        searchString: "",
                        results: [],
                        error: true,
                        errorMessage: error.message
                    }
                })
            }
        }
        searchQuery();
    }, [])

    useEffect(() => {
        searchDatabase(searchData.searchString)   
    }, [searchOnce, searchDatabase])
    
    return { searchData, doSearch };
}