import React, { useState } from 'react';
import NavBar from '../navBar/navBar';
import ItemListContainer from './ItemListContainer';
import '../estilos.scss'
import { useEffect } from 'react';
import Footer from '../footer/Footer';

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
                        <Footer />
                    </div> }
        </>
    );
}

export default Home;