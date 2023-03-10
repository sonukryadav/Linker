import React, { createContext, useState, useContext } from 'react';

const defaultState = {
    myLocation: {
        latitude: 0,
        longitude: 0,
    }
}
const MyContext1 = createContext(defaultState);



const Context1 = ({ children }) => {
    const { myLocation } = useContext(MyContext1);
    const [initialState, setInitialState] = useState(myLocation);
    return (
        <MyContext1.Provider value={{ initialState, setInitialState }}>
            { children }
        </MyContext1.Provider>
    );
}

export default Context1;
export { MyContext1 } ;

