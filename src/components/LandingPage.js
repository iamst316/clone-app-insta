import './LandingPage.css'
import mainImg from '../img/lens-1418954.png';

export default function LandingPage() {
    return <div className='container'>
        <div className='landing-page-image'>
            <img src={mainImg} />
        </div>
        <div className='landing-page-info'>
            <div className='company-name'>10x team 04</div>
            <div className='enter-link'>
                <a href='/postview'>Enter</a>
            </div>
        </div>
    </div>
}

