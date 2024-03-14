import React, { useState,Link} from 'react'
import { Outlet ,Navigate} from 'react-router-dom'


const Private = () => {
    let loggedIn=false;
    if(loggedIn){
        return<Outlet/>
    }else{
        return (<>
        <Navigate to='/login' ></Navigate>
        {/* <p>you are not login</p> */}
        </>)
    }
 
}
export default Private;