import React, { createContext, useState } from "react";

export const ErrorContext = createContext();

export const ErrorProvider = ({ children }) => {
    const [error, setError] = useState(null);

    const showError = (message) => {
        setError(message);
        setTimeout(() => {
            setError(null);
        }, 4000);
    };

    return (
        <ErrorContext.Provider
            // Estos son los valores que proveemos al contexto => const { error, setError } = useContext(ErrorContext);
            value={{
                error,

                // Methods
                showError,
            }}>
            {children}
        </ErrorContext.Provider>
    );
};
