import cart from "../../assets/icons/menu/cart.svg";
import orders from "../../assets/icons/menu/orders.svg";
import favourites from "../../assets/icons/menu/favourites.svg";
import profile from "../../assets/icons/menu/profile.svg";
import './Menu.less';

const Menu = () => {
    return (
        <nav className='menu'>
            <ul className='menu__list'>
                <li className='menu__item'>
                    <a className='menu__link' href='#'>
                        <img className='menu__icon' src={cart} alt='cart-icon'/>
                    </a>
                </li>
                <li className='menu__item'>
                    <a className='menu__link' href='#'>
                        <img className='menu__icon' src={orders} alt='orders-icon'/>
                    </a>
                </li>
                <li className='menu__item'>
                    <a className='menu__link' href='#'>
                        <img className='menu__icon' src={favourites} alt='favourites-icon'/>
                    </a>
                </li>
                <li className='menu__item'>
                    <a className='menu__link' href='#'>
                        <img className='menu__icon' src={profile} alt='profile-icon'/>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;