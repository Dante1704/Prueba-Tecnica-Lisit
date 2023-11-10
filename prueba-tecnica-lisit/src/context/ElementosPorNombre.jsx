import React, { createContext, useState } from 'react';

export const ElementosPorNombreContext = createContext(null);

export const ElementosPorNombreProvider = ({ children }) => {

    const [elementosPorNombre, setElementosPorNombre] = useState(null);

    const setResultadoElementosPorNombre = (elementosPorNombreObtenidos) => {
        setElementosPorNombre(elementosPorNombreObtenidos);
    };

    return (
        <ElementosPorNombreContext.Provider
            value={{
                elementosPorNombre,
                setResultadoElementosPorNombre,
            }}>

            {children}

        </ElementosPorNombreContext.Provider>
    );
};