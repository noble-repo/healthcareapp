import React from 'react'
import {Column} from "simple-flexbox";
import {makeStyles} from "@material-ui/core/styles";
import styled from "styled-components";
import Box from '@material-ui/core/Box';


const FirstBox = styled.div`
width: 300px;
height: 77px;
// margin: 18px 0 14px;
margin: 0px 0 14px;
padding: 27px 119px 27px 36px;
border-radius: 2px;
background-color: #00a0f0;
font-family: Roboto;
  font-size: 19px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.21;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;`


const SecondBox = styled.div`
width: 300px;
height: 77px;
margin: 14px 0 0;
padding: 27px 124px 27px 36px;
border-radius: 2px;
background-color: #ffffff;
font-family: Roboto;
  font-size: 19px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.21;
  letter-spacing: normal;
  text-align: left;
  color: #262626;
`

const MainHeading = styled.span`
  width: 82px;
  height: 22px;
  margin: 0 213px 18px 5px;
  font-family: Helvetica;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: normal;
  text-align: left;
  color: #26292c;`

const useStyles = makeStyles((theme) => ({
    sidebar: {
        width: '333px',
        height: '976.5px',
        margin: '0.5px 52px 0 0',
        padding: '23px 15px 745.5px 18px',
        backgroundColor: '#e8f5fe',
    },


}))


export default function SideBar(props) {
    const classes = useStyles()
    return (
        <div className={classes.sidebar}>
            <Column>
                <MainHeading>
                    Requests
                </MainHeading>
                <Box>
                    {props.state.clinicList.length > 0 && props.state.clinicList.map((row, index) => (
                        <>
                            {row.clinicId === props.state.selectedRequest.clinicId ?
                                <FirstBox key={index} onClick={() => props.onChangeSelectedRequest(row)}>
                                    {`${row.owner.firstName || ''} ${row.owner.lastName || ''}`}
                                </FirstBox> :
                                <SecondBox key={index} onClick={() => props.onChangeSelectedRequest(row)}>
                                    {`${row.owner.firstName || ''} ${row.owner.lastName || ''}`}
                                </SecondBox>}
                        </>
                    ))}
                </Box>
            </Column>
        </div>
    )
}