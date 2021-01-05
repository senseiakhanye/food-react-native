import { useCallback, useEffect, useState } from 'react';
import { getOneBusiness } from '../Services/Businesses';

export default (id) => {
    const [ businessData, updateBusiness ] = useState(null);
    const [ error, updateError ] = useState(null);

    const getBusiness = useCallback((businessId) => {
        const getBusinessData = async () => {
            try {
                const businessResponse = await getOneBusiness(businessId);
                updateBusiness(businessResponse);
            } catch (error) {
                updateError(error.message)
            }
        }
        getBusinessData();
    })

    useEffect(() => {
        getBusiness(id)
    }, []);

    return { businessData, error };
}