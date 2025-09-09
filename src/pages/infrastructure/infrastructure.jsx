import React from 'react';
import './infrastructure.css';

const Infrastructure = () => {
    return (
        <div className="infrastructure-container">
            <div className="banner"></div>
            
            <div className="info-card">
                <div className="section-title">CLASSROOMS</div>
                <div>
                    All classrooms are converted into Virtual classrooms with multimedia projectors. Computer center and Server room. Modernization of Lecture Halls in the Degree wing. Well furnished and air conditioned computer laboratories.
                </div>
            </div>
            
            <div className="info-card">
                <div className="section-title">Other Facilities</div>
                <ul>
                    <li>Parking facilities</li>
                    <li>Library facilities</li>
                    <li>Cyber café facility</li>
                    <li>Training and Placement Cell</li>
                    <li>Bank facility with ATM</li>
                    <li>Sports facilities</li>
                    <li>Gymnasium</li>
                    <li>Student’s canteen</li>
                    <li>Medical Facility</li>
                    <li>LEET pattern</li>
                    <li>Computerized library</li>
                    <li>Industrial Training</li>
                    <li>Computerization of Office</li>
                    <li>Internet connectivity in Hostels as well as in rooms of all Faculty members</li>
                    <li>On-line journals are available to the students for Project Work, Seminars, Knowledge Upgradation and Paper Presentation</li>
                    <li>Talks and extension Lectures by Experts in various fields</li>
                </ul>
                <div className="bold" style={{marginTop: 8}}>Disabled Friendly Campus</div>
            </div>
            
            <div className="info-card">
                <div className="section-title">Extracurricular programs</div>
                <div>
                    For the all round development of the students, the college provides a host of various students activities. These activities range from personal hobbies to sports and technical interests. The students are encouraged to become the member of these bodies to help broaden their horizons. These clubs not only help the students to explore their hidden talent but also help in areas such as personality development and inculcating in the students the spirit of organization by providing them with a platform for hosting their respective club presentations.
                    <br /><br />
                    <span className="bold">To name few are:</span>
                    <ul>
                        <li>The Editorial Board</li>
                        <li>Speakers Club</li>
                        <li>Panache</li>
                        <li>Projection Club</li>
                        <li>Dramatics</li>
                        <li>Sports Club</li>
                        <li>Music Club</li>
                        <li>IT Club</li>
                    </ul>
                    The facilities provided for the Sports Club are Kho-Kho field, Cricket Pitch, Race Tracks, Football Ground, Volley Ball Court, Hockey Ground.
                </div>
            </div>
            
            <div className="residential-info-card">
                <div className="section-title">Hostel facilities</div>
                <div>
                    Internet connectivity in Hostels as well as in rooms of all Faculty members. On-line journals are available to the students for Project Work, Seminars, Knowledge Upgradation and Paper Presentation.
                </div>
            </div>
        </div>
    );
};

export default Infrastructure;
