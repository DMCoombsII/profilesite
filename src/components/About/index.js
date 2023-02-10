import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faHtml5, faJsSquare, faNodeJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import Me from '../Selfie'
import Loader from 'react-loaders'


const About = () => {
    const[letterClass, setLetterClass] = useState('text-animate')
    
    useEffect(()=>{
        setTimeout(()=>{
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
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
                    My name is David Coombs and I am a fullstack developer. 
                    I am looking for work as a react developer at this moment but 
                    there are pleanty of other skills to obtain.
                </p>
                <p>
                    I have only had 1 job my whole life at it has been at Tavern in 
                    the Square, a restaurant chain here in the north east USA. Serving tables
                    here as taught me a lot about hard work and getting the most from your time.
                    I don't miss a shift and give 100% everyday. The hours are long so I am used to 
                    putting in long days at the office. As long as my work is rewarding I will give my all.
                </p>
                <p>
                    My dream job is to be a developer for the MLB. I love baseball and that would be an amzing
                    positon to hold. But on a professional level I am looking for fullstack work and would be 
                    a great add to any team! I am always ready to learn and contribute.
                </p>
                <Me />
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
        <Loader type='ball-zig-zag' />
        </>
    )
}

export default About