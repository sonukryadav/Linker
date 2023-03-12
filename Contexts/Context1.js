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
    const [location, setLocation] = useState(myLocation);
    return (
        <MyContext1.Provider value={{ location, setLocation }}>
            { children }
        </MyContext1.Provider>
    );
}

export default Context1;
export { MyContext1 } ;

