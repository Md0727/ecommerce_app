import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Header = () => {

    const items = useSelector((state)=> state.cart);

    return (
        <div className="header-se">
            <div className="navbar navbar-expand-lg navbar-light bg-light position-sticky1">
                <nav className="container">
                    <NavLink className="navbar-brand" to="/">Ecommerce App</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="/cart-list">Cart {items.length}</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>

    )
}
