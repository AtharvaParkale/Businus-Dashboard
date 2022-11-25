import React from 'react'
import './SectionTwo.css'
import problem_image from '../../assets/images/problem_image.jpg'
import solution_image from '../../assets/images/solution_image.jpg'

function SectionTwo() {
    return (
        <div className='sectionTwo_container' id="section-two">
            <div className="sectionTwo_innercontainer1">
                <p>Problem</p>
                <div className="problem_image">
                    <img src={problem_image} alt="problem" />
                </div>
            </div>
            <div className="sectionTwo_innercontainer2">
                <p>Solution</p>
                <div className="solution_image">
                    <img src={solution_image} alt="solution" />
                </div>
            </div>
        </div>
    )
}

export default SectionTwo