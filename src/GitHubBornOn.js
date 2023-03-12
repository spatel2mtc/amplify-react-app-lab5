import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';


export const GithubBornOn = () => {

    const [loading,UpdateLoading] = useState(true);

    useEffect(() => {
        getUser()
    });

    async function getUser() {
        const data = await API.get('githubborn',`'/born'`);
        console.log(data.born);
        UpdateLoading(false)
    }

    return(
        <>
        {!loading &&

        <h2>still loading</h2>        
        }
        
        
        </>
    )
}