import tg from "../../assets/icons/social/tg.svg";
import dzen from "../../assets/icons/social/dzen.svg";
import youtube from "../../assets/icons/social/youtube.svg";
import './Footer.less';

const Footer = () => {
    return (
        <footer className='footer'>
            <p className='footer__copyrights'>© 2023 Магаз</p>
            <div className='footer__contacts'>
                <a className='contacts__email' href='mailto:support@magaz.ru'>support@magaz.ru</a>
                <ul className='contacts__social'>
                    <li className='social__item'>
                        <a className='social__link' href='#'>
                            <img className='social__icon' src={tg} alt='tg-icon'/>
                        </a>
                    </li>
                    <li className='social__item'>
                        <a className='social__link' href='#'>
                            <img className='social__icon' src={dzen} alt='dzen-icon'/>
                        </a>
                    </li>
                    <li className='social__item'>
                        <a className='social__link' href='#'>
                            <img className='social__icon' src={youtube} alt='youtube-icon'/>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;