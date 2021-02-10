import React from 'react'

const authConstext = React.createContext({

    authenticated: false,
    login: () => { }

});

export default authConstext;