import React, { Fragment } from 'react';

import PropTypes from 'prop-types';

const PrimeraApp = ( { saludo, subtitulo } ) => {

    // const saludo = {
    //     nombre: 'Andrei',
    //     edad: 20,
    //     pc: 'DELL'
    // }

    return (  
        <>
            {/* <h1>{saludo.nombre} tiene {saludo.edad} años y está en una pc {saludo.pc}</h1>
            <pre>{ JSON.stringify(saludo, null, 3)}</pre> */}
            <h1>{ saludo }</h1>
            <p> {subtitulo} </p>
        </>
    );
}
 
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'El subtitulo'
}

export default PrimeraApp
