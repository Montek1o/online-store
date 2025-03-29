import Menu from "../Menu/Menu.tsx";
import Search from "../Search/Search.tsx";
import './Header.less';

const Header = () => {
    return (
        <header className='header'>
            <h1 className='header__title'>магаз</h1>
            <Search />
            <Menu />
        </header>
    );
};

export default Header;