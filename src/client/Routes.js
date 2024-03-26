import React from "react";
import HomePage from "./page/HomePage";
import UsersListPage from "./page/UsersListPage";

export default [
    {
        ...HomePage,
        path: '/',
        exact: true
    },
    {
        ...UsersListPage,
        path: '/users',
        // loader: ({ params }) => loadData(params),
    },
]