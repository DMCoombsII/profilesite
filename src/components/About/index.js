import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faHtml5, faJava, faJsSquare, faNode, faNodeJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons'

const About = () => {
    const[letterClass, setLetterClass] = useState('text-animate')
    
    useEffect(()=>{
        setTimeout(()=>{
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t',' ','M','e']}
                        idx={15}
                    />
                </h1>
                <p>
                    1st paragraph is who i am and what i want
                </p>
                <p>
                    2nd paragraph are good and hireable qualities 
                </p>
                <p>
                    3rd paragraph is where i want my career to go!
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4f4'/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faNodeJs} color='#32cd32'/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faPython} color='#4169e1'/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About