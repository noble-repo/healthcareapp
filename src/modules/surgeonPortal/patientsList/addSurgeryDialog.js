import React from 'react'
import styled from "styled-components";
import Dialog from '@material-ui/core/Dialog';
import Avatar from '@material-ui/core/Avatar';


const Card = styled.div`
display:flex;
justify-content:center;
`

const Container = styled.div`
width: 350px;
flex-direction: column;
justify-content: center;
min-height: 170px;
overflow: auto;
position:center;
border-radius: 4px;
box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.05);
border: solid 1px #e5e5e5;
background-color:white;
`
const Title = styled.div`
font-size:18px;
margin-top:15px;
padding-left:15px;
text-align:left;
font-family:Roboto;
color: #26292c;
`
const CloseButton = styled.img`
margin-top: -55px;
  margin-left: 177px;
  padding-left: 140px;
  height:20px;
`
const Input = styled.input`
height: 50px;
width: 325px;
border : 1px  solid lightgrey;
padding-left: 10px;
outline: none;
border-radius: 5px;
transition: all 0.3s;
font-size: 12px;
margin-left:12px;
color:grey;
`
const InputOther = styled.input`
height: 50px;
width: 325px;
border : 1px  solid lightgrey;
padding-left: 10px;
outline: none;
border-radius: 5px;
transition: all 0.3s;
font-size: 15px;
margin-left:12px;
color:grey;
`
const Button = styled.button`
width: 325px;
height:50px;
color:white;
background-color:#00a0f0;
font-size:16px;
border-radius:4px;
border :#00a0f0;
vertical-align: center;
font-family:Roboto;
margin-top:40px;
margin-left:12px;
margin-bottom:20px;
font-weight:500;
`
const SearchIcon = styled.img`
  margin-left: 310px;
  margin-top: -80px;
`

const UnOrderedList = styled.ul`
margin: 0;
padding: 0;
position: absolute;
  z-index: 100000;
  top: 110px;
    width: 92%;
    left: 12px;

 li {
background: white;
list-style: none;
border-bottom: 1px solid #d8d8d8;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.14);
margin: 0;
padding: 2px;
transition: background 0.2s;
display: flex;
justify-content: space-between;
text-transform: capitalize;
}
`

export default function AddSurgeryDialog(props) {
    return (
        <Card>

            <Dialog open={props.state.edit} onClose={props.editDialog} style={{marginTop: "-236px"}}>


                <Container>
                    <Title><b>Add New Surgery</b></Title>
                    <CloseButton src="/images/cross.svg" class="Group-9" onClick={props.editDialog}/>
                    <div>
                        <div>

                            <Input placeholder="Search by Patient Name or H3A ID " name={'searchingUser'}
                                   type="text"
                                   value={props.state.searchingUser}
                                   onChange={(event) => props.handleSearchUserForSurgery(event)}/>
                        </div>
                        <SearchIcon src="/images/searchicon.svg" height="13" width="13"/>

                        {props.state.userList && props.state.userList.length > 0 && !props.state.showInput &&
                        <UnOrderedList className="cursor-pointer">
                            {props.state.userList.map((user, index) => (
                                <li key={index} onClick={() => props.onSelectUser(user)}>
                                    <div className="display-flex flex-direction-row align-items-center fs-13">
                                        <Avatar src={user?.picture || "/images/download.jpg"} className="avatar-image"/>
                                        <span
                                            className="pl-2">{user?.name ? `${user?.name || ''}` : `${user?.firstName || ''} ${user?.lastName || ''}`}</span>
                                    </div>
                                </li>
                            ))}
                        </UnOrderedList>}
                        {props?.state?.searchError &&
                        <div className="fc-red fs-14 py-1 pl-3">{props.state.searchError}</div>}
                    </div>

                    {props.state.showInput && <InputOther type="text" placeholder="Surgery Type" name={'surgeryType'}
                                                          value={props.state.surgeryType}
                                                          onChange={(event) => props.handleChange(event)}/>}
                    {props?.state?.surgeryTypeError &&
                    <div className="fc-red fs-14 py-1 pl-3">{props.state.surgeryTypeError}</div>}
                    <Button type="button" onClick={() => props.addSurgery()}>Add Surgery</Button>


                </Container>
            </Dialog>
        </Card>
    )
}

 