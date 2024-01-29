import React from 'react'
import {
    useParams,
    Link
  } from "react-router-dom";
export default function WelcomeComponent() {
    const {username} = useParams();
    // console.log(username)
    return(
        <div className="WelcomeComponent container">
            <h1>Welocme {username}</h1>
            <div>Manage Your Todos - <Link to="/todos">Go Here</Link></div>
        </div>
    )
}
