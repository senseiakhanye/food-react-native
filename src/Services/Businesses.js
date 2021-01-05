const customFetch = async (uri) => {
    try {
        const result = await fetch(uri, {
            headers: {
                Authorization: `Bearer ${process.env.REACT_NATIVE_YELP}`
            }
        });
        if (result.status !== 200) {
            throw new Error("Connection error");
        }
        const data = await result.json();
        if (data.error != null) {
            throw new Error("An error occured!");
        }
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const getBusinesses = async (searchTerm) => {
    try {
        let uri = encodeURI(`${process.env.REACT_NATIVE_YELP_URL}/search?limit=40&term=${searchTerm}&location=san jose`);
        const data = await customFetch(uri);
        return data.businesses || [];
    } catch (error) {
        throw new Error(error.message);
    }
}

export const getOneBusiness = async (id) => {
    try {
        let uri = encodeURI(`${process.env.REACT_NATIVE_YELP_URL}/${id}`);
        const data = await customFetch(uri);
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
}

