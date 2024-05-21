import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
// import Profile from './profile.css';
import styled from "styled-components";

export default function HeaderComponent() {
    return (
        <div>
            <div className="navi">
                <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom border-lightgrey "
                     style={{height: '60px', marginLeft: '-20px'}}>
                    <div className="container-fluid flex-can">
                        <div className="logo"><a href="#"><img src="Menu_Logo.png" height="50px"/></a></div>
                        <div>
                            <Avatar style={{width: '25px', height: "25px", marginLeft: '10px'}} alt="Remy Sharp"
                                    src="download.jpg"/>
                        </div>
                    </div>
                </nav>

            </div>

        </div>
    )
}