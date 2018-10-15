import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

import { connect } from 'react-redux';
import './Services.css';


class Services extends Component {
    renderList = () => {
        return this.props.servicesLists.map((servicesList, index) => {
            return (
                <ListGroupItem key={index}>
                    <div className="servicesList-title">
                        <b>
                            {servicesList.pageTitle}
                        </b>
                    </div>
                    <ListGroupItem bsStyle="success">
                        <u className="serviceList-header">{servicesList.header}</u>

                        {servicesList.services.map((items, servicesIndex) => {
                            // debugger
                            return (
                                <div key={servicesIndex}>
                                    <ul >
                                        <li className="servicesList-item">
                                            {items.servicesTitles}
                                        </li>
                                    </ul>
                                </div>
                            )
                        })}
                        {servicesList.extraServices.map((titleAndDetails, extraServicesIndex) => {
                            return (
                                <div key={extraServicesIndex}>
                                    <ul>

                                        <li className="servicesList-item">
                                            {titleAndDetails.subtitle}
                                        
                                    {titleAndDetails.subDetails.map((list) => {
                                        return (
                                            <div key={list.extraServicesTitle}>
                                                <ul className="extraServicesUnOrder">
                                                    <li className="extraServicesTitle">
                                                        {list.extraServicesTitle}
                                                    </li>
                                                </ul>
                                            </div>
                                        )
                                    })}
                                    </li>
                                    </ul>
                                </div>
                            )
                        })}
                    </ListGroupItem>
                </ListGroupItem>
            );
        });
    }

    renderSecList = () => {
        return this.props.servicesListsTwo.map((servicesListTwo, index) => {
            return (
                <ListGroupItem key={index} >
                    <ListGroupItem bsStyle="info">
                        <div className="secList-header">
                            <u className="serviceList-header">{servicesListTwo.header}</u>
                        </div>
                        {servicesListTwo.services.map((servicesTwo, servicesIndex) => {
                            return (
                                <ul key={servicesIndex}>
                                    <li className="servicesList-item">
                                        {servicesTwo.title}
                                        {servicesTwo.catagorieLists.map((services, catagoryIndex) => {
                                            
                                            return (
                                                <ul key={catagoryIndex} className="extraServicesUnOrder">
                                                    <li className="extraServicesTitle">
                                                        {services.catagoryTitle}
                                                    </li>
                                                </ul>
                                            )
                                        })}
                                        <ul className="servicesTwoDescription">
                                            <li className="servicesChildren">
                                                {servicesTwo.description}
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            )
                        })}
                    </ListGroupItem>
                </ListGroupItem>
            )
        })
    }


    render () {
        return (
            <div className="services-row">
                <ListGroup>
                    {this.renderList()}
                    {this.renderSecList()}
                </ListGroup>
            </div>
        );
    }
}

const mapStateToProps = (stateFromServices) => ({
    servicesLists: stateFromServices.Services,
    servicesListsTwo: stateFromServices.ServicesTwo
})

export default connect(mapStateToProps)(Services)