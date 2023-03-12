import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';


export const GithubBornOn = () => {
    const data = API.get('githubborn', `/born`);
    console.log(data);

    return(
        <>
        

        <h2>still loading</h2>        
        
        
        
        </>
    )
}