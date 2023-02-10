import './index.scss'
import Nice from '../../assets/images/Nice.jpeg'
import Menash from '../../assets/images/menash.jpeg'
import Mendanny from '../../assets/images/mendanny.jpg'

const Language = () => {

    return(
        <div className='stacks'>
            <img className='nice'src={Nice} alt='nothing' />
            <img className='menash'src={Menash} alt='nothing' />
            <img className='menash'src={Mendanny} alt='nothing' />
        </div>
    )
}

export default Language