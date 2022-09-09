import Header from './Header';
import Main from './Main';
import Aside from './Aside';
import Footer from './Footer';

const Layout = () => {
    return (
    <section className='px-20 pt-5 pb-10'>
        <Header />
        <div className='grid md:grid-cols-[3fr_1fr] sm:grid-cols-1 gap-8'>
            <Main />
            <Aside />
        </div>
        <Footer />
    </section>
    )
}

export default Layout;