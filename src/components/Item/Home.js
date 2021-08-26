import React, { useState } from 'react';
import NavBar from '../navBar/navBar';
import ItemListContainer from './ItemListContainer';
import '../estilos.css'
import { useEffect } from 'react';

function Home(){

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return(
        <>
        { loading ? <div>
                        <NavBar />
                        <h3>Loading...</h3>
                    </div> : 
                    <div>
                        <NavBar /> 
                        <ItemListContainer /> 
                    </div> }
        </>
    );
}

export default Home;