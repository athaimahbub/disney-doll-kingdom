import React from 'react';
import { Outlet } from 'react-router-dom';

const Parent = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default Parent;