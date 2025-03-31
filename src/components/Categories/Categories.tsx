import data from '../../data/products.json';
import './Categories.less';

const Categories = () => {
    return (
        <div className='categories'>
            {data.categories.map((item) => 
                <div className='categories__item' key={item.id}>
                    <img
                        className='categories__photo'
                        src={new URL(`../../assets/images/categories/${item.image}`, import.meta.url).href} 
                        alt={item.name} 
                    />
                    <p className='categories__text'>{item.name}</p>
                </div>
            )}
        </div>
    );
};

export default Categories;