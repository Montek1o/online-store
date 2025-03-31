import Categories from '../../components/Categories/Categories';
import './Main.less';

const Main = () => {
    return (
        <main className='main'>
            <div className='main-wrapper'>
                <div className='main__banner'></div>
                <Categories />
            </div>
        </main>
    );
};

export default Main;