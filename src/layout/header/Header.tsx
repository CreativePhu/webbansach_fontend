import React from 'react'
import { Outlet, Link, NavLink } from "react-router-dom";

interface HeaderProps {
    searchKey: string;
    updateSearchKey: any;
    updateText: any;
}

const Header: React.FC<HeaderProps> = ({ searchKey, updateSearchKey, updateText }) => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-3" to={`/`}>Sachviet.com</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to={`/`}>Trang chủ</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Thể loại sách
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to={`/1`}>Thể Loại 1</Link></li>
                                <li><Link className="dropdown-item" to={`/2`}>Thể Loại 2</Link></li>
                                <li><Link className="dropdown-item" to={`/3`}>Thể Loại 3</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Quy định bán hàng
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Quy định 1</a></li>
                                <li><a className="dropdown-item" href="#">Quy định 2</a></li>
                                <li><a className="dropdown-item" href="#">Quy định 3</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Liên hệ</a>
                        </li>
                    </ul>
                    <div className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchKey} onChange={(e) => updateText(e)} />
                        <button className="btn btn-outline-success" type="submit" onClick={() => updateSearchKey()}>Search</button>
                    </div>

                    <ul className="navbar-nav me-1">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="fas fa-shopping-cart"></i>
                            </a>
                        </li>
                    </ul>

                    <ul className="navbar-nav me-1">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="fas fa-user"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header