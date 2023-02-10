import { Link } from "react-router-dom";
import './index.scss';
import { useState, useEffect} from 'react'
import AnimatedLetters from "../AnimatedLetters";
import Logo from "../Logo";
import Language from "../Stacks";
import Loader from "react-loaders";

const Home = () => {
    const[letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['D','a','v','i','d',' ','C','o','o','m','b','s']
    const jobArray = ['W','e','b',' ','D','e','v','e','l','o','p','e','r']

    useEffect(()=>{
        setTimeout(()=>{
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])


    return (
        <>
        <div className="container home-page">
            <div className='text-zone'>
                <h1>
                    <span className={letterClass}>H</span> 
                    <span className={`${letterClass} _12`}>i</span> <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <span className={`${letterClass} _15`}> </span>
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
                <br />
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22}/>
                </h1>
                <h2>Fullstack Developer / Freelance Deveolper / Open to Work</h2>
                <Link to='/contact' className="flat-button">CONTACT ME</Link>
            </div>
            <Logo />
            <Language />
        </div>
        <Loader type='ball-zig-zag' />
        </>
    );
}

export default Home