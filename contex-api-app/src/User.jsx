import React from 'react';
import { useParams } from 'react-router-dom';
const User=(props)=>{

    const {fname,lname}=useParams();
return <h1>user {fname} {lname} page</h1>
}
export default User;