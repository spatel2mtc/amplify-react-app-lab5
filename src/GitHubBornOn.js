import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';


export const GithubBornOn = () => {
    const [profile, updateProfile] = useState([]);


    const getProfile = async() =>{
       const data = await API.get('githubborn', `/born`);
    
      
    }
    

    return(
        <>      
        
        
        </>
    )
}