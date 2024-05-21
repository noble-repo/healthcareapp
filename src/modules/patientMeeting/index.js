import React from 'react';
import BaseComponent from "../baseComponent";
import PatientVideoCall from './patientVideoCall';
import Header from '../shared/header';

export class PatientMeeting extends BaseComponent {
    render() {
        return (
            <div>
                <Header />
                <PatientVideoCall />
            </div>
        )
    }
}

export default PatientMeeting

 