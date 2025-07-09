import data from '../data.json';

const Footer = () => {
    const lastUpdated = data.personal_info.last_updated;
 return (
    <footer className="pt-10 text-center">
    <small className="font-sans font-xs"><b>Last updated:</b> {lastUpdated} | <b>Web version:</b> <a href="https://charlesrepo.github.io/resume/">https://charlesrepo.github.io/resume/</a></small> 
    </footer>
 )
}

export default Footer