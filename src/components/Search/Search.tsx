import search from "../../assets/icons/menu/search.svg";
import './Search.less';

const Search = () => {
    return (
        <div className='search'>
            <img className='search__icon' src={search} alt='search-icon' />
            <input className='search__input' type='text' placeholder='Поиск товаров' />
        </div>
    );
};

export default Search;