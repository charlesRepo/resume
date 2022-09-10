const Footer = () => {
    const currentDateTime= Date().toLocaleString()
 return (
    <footer className="pt-10 text-center">
    <small className="font-sans font-xs"><b>Last updated:</b> {currentDateTime} | <b>Web version:</b> <a href="https://charlesrepo.github.io/resume/">https://charlesrepo.github.io/resume/</a></small> 
    </footer>
 )
}

export default Footer