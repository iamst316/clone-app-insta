import headerIcon from '../img/icon.svg'
import cameraIcon from '../img/camera.png'
import './Header.css'

function Header() {
    return <div>
        <div className="header">
            <div className="logo">
                <a href='/postview'><img src={headerIcon} /></a>
                <span className="header-name">InstaClone</span>
            </div>
            <div className="upload-icon">
                <a href='/upload'><img src={cameraIcon} /></a>

            </div>
        </div>
    </div>
}

export default Header