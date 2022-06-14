import React, { Fragment, useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import history from '../../../helpers/history';
import Avatar from '../../../assets/Images/avatar.png'

import './SideNav.scss';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import GroupIcon from '@mui/icons-material/Group';


function SideNav(props) {

    const [state, setstate] = useState({
        actHome: false,
    })

    return (
        <Fragment>
            <div className="sidenavContainer todo-sidenav-container active">
                <div className="todo-sidenav-content">
                    <div className="ts-header">
                        {/* <img src={Logo}  /> */ }
                        {/* <i className='bx bx-menu' id="btn"></i> */}
                    </div>

                    <div className="ts-body">
                        <div className="ts-body-scroller">

                            <div className="ts-lists">
                                {/* <h6> Admin Tools </h6> */ }

                                <Link to="/dashboard" className='ts-items' >
                                    <DashboardOutlinedIcon className="icon-items" />
                                    <div className="items-text"> Dashboard </div>

                                    <div className="help-hover-content">
                                        <div className="hover-text"> Dashboard </div>
                                    </div>
                                </Link>
                                <Link to="/company" className='ts-items' >
                                    <GroupIcon className="icon-items" />
                                    <div className="items-text"> Company </div>

                                    <div className="help-hover-content">
                                        <div className="hover-text"> Company </div>
                                    </div>
                                </Link>
                                <Link to="/user" className='ts-items' >
                                    <i className='bx bx-user icon-items'></i>
                                    <div className="items-text"> User </div>

                                    <div className="help-hover-content">
                                        <div className="hover-text"> User </div>
                                    </div>
                                </Link>
                                <Link to="/tag" className='ts-items' >
                                    <i className='bx bxs-tag icon-items'></i>
                                    <div className="items-text"> Tags </div>

                                    <div className="help-hover-content">
                                        <div className="hover-text"> Tags </div>
                                    </div>
                                </Link>
                                <Link to="/article" className='ts-items' >
                                    <i className='bx bx-book-open icon-items'></i>
                                    <div className="items-text">  Articles </div>

                                    <div className="help-hover-content">
                                        <div className="hover-text"> Articles </div>
                                    </div>
                                </Link>
                                <Link to="/helpdesk" className='ts-items' >
                                    <i className='bx bxs-help-circle icon-items'></i>
                                    <div className="items-text">  Help Center </div>

                                    <div className="help-hover-content">
                                        <div className="hover-text"> Help Center </div>
                                    </div>
                                </Link>
                                <Link to="/" className='ts-items' >
                                    <i className='bx bx-log-out icon-items'></i>
                                    <div className="items-text">  Logout </div>

                                    <div className="help-hover-content">
                                        <div className="hover-text"> Logout </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment >
    )
}

export default SideNav
