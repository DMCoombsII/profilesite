import './index.scss'
import Mern from '../../assets/images/MERN.jpeg'
import Python from '../../assets/images/python.jpeg'

const Language = () => {

    return(
        <div className='stacks'>
            <img className='mern'src={Mern} alt='nothing' />
            <img className='python'src={Python} alt='nothing' />
        </div>
    )
}

export default Language