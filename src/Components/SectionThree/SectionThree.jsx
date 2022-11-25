import React from 'react'
import './SectionThree.css'
import { FaTasks } from 'react-icons/fa';
import { FaUser} from 'react-icons/fa';
import { FaUsers} from 'react-icons/fa';
import { FaList} from 'react-icons/fa';
import { FaBalanceScale} from 'react-icons/fa';
import { FaClock} from 'react-icons/fa';
import { FaFile} from 'react-icons/fa';
import { FaTag} from 'react-icons/fa';
import { FaListAlt} from 'react-icons/fa';
import { FaCalendar} from 'react-icons/fa';

function SectionThree() {
    return (
        <div className='sectionThree_container' id="section-three">
            <div className="sectionThree_header">
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, maiores?</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className="sectionThree_email">
                <input type="email" />
                <button>Submit</button>
            </div>

            <div className="sectionThree_icons">
                <div className="sectionThree_services" id="tasks_icon">
                    <FaTasks size={35}/>
                    <p>Assignments</p>
                </div>
                
                <div className="sectionThree_services" id="communication_icon">
                    <FaUsers size={45}/>
                    <p>Communication</p>
                </div>
                <div className="sectionThree_services" id="file_icon">
                    <FaFile size={45}/>
                    <p>Resources</p>
                </div>
                <div className="sectionThree_services" id="tag_icon">
                    <FaTag size={45}/>
                    <p>Issues</p>
                </div>
                <div className="sectionThree_services" id="listalt_icon">
                    <FaListAlt size={45}/>
                    <p>Workflow</p>
                </div>
                <div className="sectionThree_services" id="list_icon">
                    <FaList size={45}/>
                    <p>Tasks</p>
                </div>
                <div className="sectionThree_services" id="calendar_icon">
                    <FaCalendar size={45}/>
                    <p>Meetings</p>
                </div>
                <div className="sectionThree_services" id="clock_icon">
                    <FaClock size={45}/>
                    <p>Logs</p>
                </div>
            </div>
        </div>
    )
}

export default SectionThree