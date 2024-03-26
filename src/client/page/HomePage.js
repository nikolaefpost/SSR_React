import React from 'react';
import UsersList from "./UsersListPage";



const HomePage = () => {

    return (
        <div>
            <div>Home super Vasya</div>
            <button onClick={()=>console.log("super Vasya")}>Press me</button>
        </div>
    );
};

export default { component: HomePage };