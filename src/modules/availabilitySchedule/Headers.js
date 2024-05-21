import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
// import Profile from './profile.css';
import styled from "styled-components";



export default function Header() {

    return (
        <div>

            <div  class="navi">
                <nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom border-lightgrey " >
                    <div class="container-fluid flex-can">

                        <div class="logo" ><a href="#"><img src ="Menu_Logo.png" height="45px" ></img></a> </div>

                        <div >
                            <Avatar style={{width:'25px',height:"25px"}} alt="Remy Sharp" src="download.jpg"  /> 
      
                        </div>
           
                    </div>
                   
                    
      
                
                </nav>

            </div>
                
        </div>
    )
}