import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Component/Header/Header';

const Parent = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Parent;