import Header from './Header';
import Main from './Main';
import Aside from './Aside';
import Footer from './Footer';

const Layout = () => {
    return (
			<article className="bg-regal-blue md:p-10 print:bg-white">
				<section className="print:md:shadow-none print:md:shadow-transparent print:md:w-full px-10 sm:px-20 pt-5 pb-10 bg-white w-full sm:w-4/5 md:w-3/4 m-auto rounded md:shadow-lg md:shadow-regal-blue-dark">
					<Header />
					<main className="print:grid-cols-[3fr_1fr] grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-8">
						<Main />
						<Aside />
					</main>
					<Footer />
				</section>
			</article>
		);
}

export default Layout;