import React, {useEffect, useState} from 'react'
import Dialog from "@material-ui/core/Dialog";
import styled from "styled-components";
import {documentActionTypeConstants} from "../../../constants";


const Container = styled.div`
  width: 450px;
  height: 450px;
  max-height: 500px;
  position: center;
  border-radius: 4px;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.05);
  border: solid 1px #e5e5e5;
  background-color: white;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  align-content: center;
  margin: auto;
`;

const Title = styled.div`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #26292c;
  margin-top: 15px;
  text-align: left;
`;
const CloseButton = styled.img`
  float: right;
`;

const Label = styled.div`
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #181c1b;
  padding: 15px 0 2px 0;
`;

const Input = styled.input`
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #181c1b;
  width: 100%;
  height: 44px;
  border: 1px solid lightgrey;
  outline: none;
  border-radius: 4px;
  transition: all 0.3s;
  padding-left: 10px;
`;

const Button = styled.button`
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
  width: 100%;
  height: 44px;
  background-color: #00a0f0;
  font-size: 13px;
  border-radius: 4px;
  border: #00a0f0;
  vertical-align: center;
  font-family: Roboto;
  margin: 15px 0;

  &:focus {
    outline: none;
    border-radius: 5px;
    transition: all 0.3s;
    border: none;
  }
`;
const AddProviderDetail = (props) => {
    console.log("props.document==", props.document)
    const [providerDetail, setProviderDetail] = useState({
        email: "",
        name: "",
        phone: "",
        userName: "",
    })
    const [providerDetailError, setProviderDetailError] = useState({
        email: "",
        name: "",
        phone: "",
        userName: "",
    })
    useEffect(() => {
        props.document && Object.keys(props.document).length > 0 && setProviderDetail({
            email: props.document?.providerInformation?.email || "",
            name: props.document?.providerInformation?.name || "",
            phone: props.document?.providerInformation?.phone || "",
            userName: props.document?.providerInformation?.userName || "",
        })
    }, [props.document])

    function handleChange(event) {
        let {name, value} = event.target
        let provider = {...providerDetail, [name]: value}
        let providerError = {...providerDetailError, [name]: ''}
        setProviderDetail(provider)
        setProviderDetailError(providerError)
    }

    function validateValues() {
        let email = !providerDetail.email ? 'Please enter email address' : ''
        let name = !providerDetail.name ? 'Please enter clinic name' : ''
        let phone = !providerDetail.phone ? 'Please enter phone' : ''
        let userName = !providerDetail.userName ? 'Please enter doctor name' : ''
        setProviderDetailError({
            email,
            name,
            phone,
            userName
        })
        return !!(email || name || phone || userName)
    }

    function saveProviderDetail() {
        if (validateValues())
            return
        let requestData = {
            surgeryId: props.document.surgeryId || '',
            surgeryDocumentId: props.document.surgeryDocumentId || '',
            documentActionType: documentActionTypeConstants.PROVIDE_INFORMATION,
            providerInformation: {...providerDetail}
        }
        props.updateSurgeryClearanceDocument(requestData)
        setTimeout(() => props.handleCloseDialog(), 3000)
    }

    return (<Dialog open={props.openDialog} onClose={props.handleCloseDialog}>
        <Container>
            <Wrapper>
                <div className="display-flex flex-direction-row justify-content-between">
                    <Title>{'Medical Clearance Provider Details'}</Title>
                    <CloseButton src="/images/cross.svg" width={'20px'} onClick={props.handleCloseDialog}/>
                </div>
                <Label>Name</Label>
                <Input onChange={(event) => handleChange(event)} value={providerDetail.userName}
                       type={'text'} name={'userName'}/>
                {providerDetailError.userName &&
                <div className="fc-red fs-14 py-1">{providerDetailError.userName}</div>}

                <Label>Clinic</Label>
                <Input onChange={(event) => handleChange(event)} value={providerDetail.name}
                       type={'text'} name={'name'}/>
                {providerDetailError.name &&
                <div className="fc-red fs-14 py-1">{providerDetailError.name}</div>}

                <Label>Email</Label>
                <Input onChange={(event) => handleChange(event)} value={providerDetail.email}
                       type={'text'} name={'email'}/>
                {providerDetailError.email &&
                <div className="fc-red fs-14 py-1">{providerDetailError.email}</div>}

                <Label>Phone</Label>
                <Input onChange={(event) => handleChange(event)} value={providerDetail.phone}
                       type={'text'} name={'phone'}/>
                {providerDetailError.phone &&
                <div className="fc-red fs-14 py-1">{providerDetailError.phone}</div>}

                <Button type="button"
                        onClick={() => saveProviderDetail()}>{'Add'}</Button>

            </Wrapper>
        </Container>
    </Dialog>)

}
export default AddProviderDetail