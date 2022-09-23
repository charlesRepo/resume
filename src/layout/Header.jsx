import data from '../data.json'

const Header = () => {
const {name, description, tel, email, location, social} = data.personal_info;
    return (
        <header className='grid md:grid-cols-[3fr_1fr] sm:grid-cols-1 gap-8 pb-5'>
            <section>
                <h1 className='font-sans text-4xl font-bold'>{name}</h1>
                <p className='font-sans text-lg max-w-2xl leading-6'>{description}</p>
            </section>
            <nav>
            <ul className='font-display pt-5'>
                <li><a href={"tel:"+tel}>{tel}</a></li>
                <li><a href={"mailto:" + email}>{email}</a></li>
                {social.map((s, index) => {
                    return <li key={index}><a target="_blank" href={s.url} rel="noreferrer">{s.name}</a></li>
                })}
                <li>{location}</li>
            </ul>
                
            </nav>
        </header>
    )
}

export default Header;