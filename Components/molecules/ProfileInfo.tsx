import React, { memo } from 'react';

// Create a JSON to create a dynamic form to get the profile details
export const ProfileInfo:React.FC<any> = memo( ({ info }) => {
    return (
        <>
            <h2>Profile details</h2>
            <ul>
                {Object.entries(info).map(([key, value]) => {
                    if(typeof value !== 'object'){
                        return <li>{`${key} : ${value}`}</li>
                    }
                })}
            </ul>
        </>
    )
});
