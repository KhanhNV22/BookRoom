import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'

export default function Admin() {
    return (
        <div className='container--md margin--body'>
            <div className='mt--60'></div>
            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="home" title="Home">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat reiciendis voluptatem corporis accusantium earum minima. Doloribus aut delectus necessitatibus expedita?</p>
                </Tab>
                <Tab eventKey="profile" title="Profile">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat repellendus quo odio fugiat doloremque quae voluptatum quidem beatae impedit quos.</p>
                </Tab>
                <Tab eventKey="contact" title="Contact">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus quidem incidunt eum sapiente consequatur sint cumque laudantium possimus, sunt nemo.</p>
                </Tab>
            </Tabs>
        </div>
    )
}