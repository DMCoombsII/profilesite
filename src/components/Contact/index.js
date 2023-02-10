import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import {useEffect, useState} from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import {useRef} from 'react'

const Contact = () => {
    const[letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()
    
    useEffect(()=>{
        setTimeout(()=>{
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
        .sendForm(
            'service_ek46d85',
            'template_euxaw4c',
            refForm.current,
            'wOhvyBDfOTJOH-QYD'
            
        )
        .then(
            ()=>{
                alert('Message successfully sent!')
                window.location.reload(false)
            },
            ()=>{
                alert('failed to send message, try again')
            }
        )
    }

    return(
    <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['C','o','n','t','a','c','t',' ','M','e']}
                    idx={15}
                    />
                </h1>
                <p>
                    I am interested in fullstack jobs - especially those with 
                    an atmosphere that fosters growth both in the work setting and 
                    in sharpening our craft. If you have any questions, please reach 
                    out ussing the form below.
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required />
                            </li>
                            <li className='half'>
                                <input type='email' name='email' placeholder='Email' required />
                            </li>
                            <li>
                                <input placeholder="Subject" type='text' name='subject' required/>
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required></textarea>
                            </li>
                            <li>
                                <input type="submit" className='flat-button' value='SEND' /> 
                            </li> 
                        </ul>
                    </form>
                </div>
            </div>
            <div className='info-map'>
            David Maxwell Coombs II,
            <br />
            United States,
            <br />
            Lowell Massachusetts <br />
            <span>dmcoombsII@gmail.com</span>
            </div>
            <div className='map-wrap'>
            <MapContainer center={[42.6334 , -71.3162]} zoom={13}>
                <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                <Marker position={[42.6334, -71.3162]}>
                    <Popup>David is looking for work here!</Popup>
                </Marker>
            </MapContainer>
            </div>
        </div>
        <Loader type='ball-zig-zag'/>
    </>)
}

export default Contact