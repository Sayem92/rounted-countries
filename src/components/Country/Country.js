import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Country = () => {
    const country = useLoaderData()[0];
    // console.log(country);
    return (
        <div>
            <h1>{country.name.common}</h1>
        </div>
    );
};

export default Country;