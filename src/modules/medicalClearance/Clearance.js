import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styled from "styled-components";
import { Row, Column } from "simple-flexbox";
import { DropzoneArea } from "material-ui-dropzone";

const Heading = styled.div`
width: 1260px;
  height: 39px;
  margin-top: 50px  ;
  margin-left:40px;
  padding: 10px 1000px 8px 10px;
  background-color: #f7f7f7;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #26292c;
`
const Button = styled.button`
width: 161px;
  height: 19px;
  margin-top: 7px ;
  margin-left:40px;
  font-family: Roboto;
  margin-bottom:100px;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #00a0f0;
  border:none;
  background-color:#ffffff;
`
const Card = styled.div`
width: 227px;
  height: 308px;
  margin-top: 6px;
  margin-left:40px;
  /* padding: 11px 9px 22px 23px; */
  padding-top: 11px ;
    padding-bottom:0px;
    padding-left:11px;
    padding-right:11px;
  border: solid 1px #d4d4d4;
  background-color: #ffffff;
  @media  (max-width:1200px) {
    width: 200px;
    height: 300px;
        }
  `
  const OtherCards = styled.div`
  width: 227px;
    height: 308px;
    margin-top: 6px;
    margin-left:30px;
    padding-top: 11px ;
    padding-bottom:0px;
    padding-left:11px;
    padding-right:11px;
    border: solid 1px #d4d4d4;
    background-color: #ffffff;
    @media  (max-width:1200px) {
    width: 200px;
    height: 300px;
        }
    `
const SubHeading= styled.span`
width: 126px;
  height: 21px;
  /* margin: 38px 145px 6px; */
  margin-top:28px;
  margin-left:40px;
  font-family: Roboto;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #181c1b;
`
const OtherSubHeading= styled.span`
width: 126px;
  height: 21px;
  /* margin: 38px 145px 6px; */
  margin-top:28px;
  margin-left:30px;
  font-family: Roboto;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #181c1b;
`
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Document(props) {
  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      <Heading>Upload&nbsp;Anesthesia&nbsp;Clearance&nbsp;Document</Heading>
      <Row>
        {/* {props.state.rows.map((row) =>
        <span>{row.name}</span>
        )} */}
        <Column>
        <SubHeading>Lab&nbsp;Documents</SubHeading>
        <Card>
        <DropzoneArea id="pic"></DropzoneArea>
        
        </Card>
        <Button onClick={props.editDialog}>or&nbsp;add&nbsp;Providers&nbsp;Details</Button>
       </Column>
       <Column>
        <OtherSubHeading>Medical&nbsp;Clearance</OtherSubHeading>
        <OtherCards>
        <DropzoneArea ></DropzoneArea>
        
        </OtherCards>
        <Button onClick={props.editDialog}>or&nbsp;add&nbsp;Providers&nbsp;Details</Button>
       </Column>
       <Column>
        <OtherSubHeading>Cardiac&nbsp;Clearance</OtherSubHeading>
        <OtherCards>
        <DropzoneArea ></DropzoneArea>
        
        </OtherCards>
        <Button onClick={props.editDialog}>or&nbsp;add&nbsp;Providers&nbsp;Details</Button>
       </Column>
       <Column>
        <OtherSubHeading>Diagnostic&nbsp;Test</OtherSubHeading>
        <OtherCards>
        <DropzoneArea ></DropzoneArea>
        
        </OtherCards>
        <Button onClick={props.editDialog}>or&nbsp;add&nbsp;Providers&nbsp;Details</Button>
       </Column>
       <Column>
        <OtherSubHeading>Others</OtherSubHeading>
        <OtherCards>
        <DropzoneArea ></DropzoneArea>
        
        </OtherCards>
        <Button onClick={props.editDialog}>or&nbsp;add&nbsp;Providers&nbsp;Details</Button>
       </Column>
      </Row>

    </div>
  );
}