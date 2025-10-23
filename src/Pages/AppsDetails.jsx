import React from 'react';
import { useParams } from 'react-router';
import useApps from './Hook/useApps';

const AppsDetails = () => {
    const {id} = useParams()
    const {allapps} = useApps()
    const app = allapps.find(a=> String(a.id)=== id)

    console.log(app);
    
    return (
        <div>
            AppDetails
        </div>
    );
};

export default AppsDetails;