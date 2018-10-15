import React, { Component } from 'react';

import jacobPic from '../../images/jacob.jpg';
import { Image, Col, Row } from 'react-bootstrap';
import './About.css';

const certificationsLists = [
    'Bachelor\'s degree in Economics and Environmental Science',
    'Master\'s degree in Secondary Education (Science)',
    'State licensed science teacher',
    'CELTA certificate (English as a second language certification)',
    'ESL teacher at private Korean academy (Ages 4-18)',
    'ESL teacher at American community college (Ages 16-60+)',
    'Science teacher at American high school (Biology and Chemistry)',
    'After school tutor for several elementary and middle schools',
    '10+ years of tutoring various subjects'
]

export default class Profolio extends Component {
    render() {
        const certificationsList = certificationsLists.map((certificationsList) => (
            <li key={certificationsList.toString()}>{certificationsList}</li>
            )
        );

        return (
            <div className="profolioPage">
                <h1><b>About me</b></h1>
                <Row className="show-grid">
                    
                    <Col xs={12} md={8} className="profolioPage-description">
                        <p>My name is Jacob, and I have been working as a teacher and tutor since early 2007. I am
        originally from Ventura County in California where I started my teaching career as a
        science teacher. Since then, I have lived and worked as a teacher in Seoul, South Korea;
        Denver, Colorado; and now in St. Paul/Minneapolis, Minnesota.</p>

                        <p>My educational background is in both the social and natural sciences, and I have many
    years of experience mainly teaching science and English as a second language. I have taught students as young as 4 years old to students that are more than 60 years old. I
    have worked as a professional educator in private schools, public elementary and high schools, and in a community college.</p>

                        <p>I did not always know that I wanted to be a teacher. When I was a kid, I always said that I wanted to be a professional soccer player, a scientist, or a business owner. However,
    after my first ever teaching experience that went surprisingly well, I will never forget how excited and gratified I felt. I had a moment of that tingling feeling of euphoria
    running down my neck and back, and I pretty much decided right then that I wanted to change my career to become an educator.</p> 
                    </Col>
                    <Col xs={6} md={4} className="profilePic-container">
                        <Image src={jacobPic} circle className="profilePic" />
                    </Col>
                    <Col xs={6} md={4} className="accomplishment-list">
                        {certificationsList}
                    </Col>
                </Row>

            </div>

            
        );
    }
}