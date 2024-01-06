import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import '../App.css';
import '../css/Header.css';

function Header() {
    return (
        <div className="header-container">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="navbar">
                <div className="container-fluid">
                    <a className="navbar-brand logo" href="/">Ecommerce</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="col-lg-6 col-md-8 col-10 mx-lg-auto my-lg-0 my-md-3 my-3 d-flex" role="search">
                        <input className="form-control search" type="search" placeholder="Product name, Category name, etc." aria-label="Search" />
                        <button className="search_btn btn btn-outline-success" type="submit">Search</button>
                        </form>

                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="/pages/login.html">
                                <button className="btn login">Login</button>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/pages/cart.html">
                                    <FontAwesomeIcon className="cart" icon={faCartShopping} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    
            <ul className="nav justify-content-center border-bottom border-2" id="secondary_nav">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/pages/all-products.html">All Products</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="/pages/women.html" target="_blank" role="button" aria-expanded="false">Women</a>
                    <ul className="dropdown-menu drop">
                        <li><a className="dropdown-item" href="/pages/women.html">All</a></li>
                        <li><a className="dropdown-item" href="/pages/categories/women-dresses.html">Dresses</a></li>
                        <li><a className="dropdown-item" href="/pages/categories/women-pants.html">Pants</a></li>
                        <li><a className="dropdown-item" href="/pages/categories/women-skirts.html">Skirts</a></li>
                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="/pages/men.html" role="button" aria-expanded="false">Men</a>
                    <ul className="dropdown-menu drop">
                        <li><a className="dropdown-item" href="/pages/men.html">All</a></li>
                        <li><a className="dropdown-item" href="/pages/categories/men-shirts.html">Shirts</a></li>
                        <li><a className="dropdown-item" href="/pages/categories/men-pants.html">Pants</a></li>
                        <li><a className="dropdown-item" href="/pages/categories/men-hoodies.html">Hoodies</a></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/pages/kids.html">Kids</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/pages/contact.html">Contact</a>
                </li>
            </ul>
    </div>
  
    )
}
  
export default Header;