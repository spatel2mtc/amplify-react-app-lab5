import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';


export const GithubBornOn = () => {
    const [profile, updateProfile] = useState([]);



    const getProfile = async() =>{
       const data = await API.get('githubborn', `/born`);
        updateProfile(data.born);
        console.log(data.born);
   
      
    }
    
    useEffect(() => {
        getProfile()
      
      }, []);

    return(
        <>
        <h2>
The Github user {profile.login} was born on {profile.created_at}
        
        </h2>
        </>
    )
}