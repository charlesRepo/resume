import data from '../data.json'
import MainTitle from '../components/MainTitle';
import ExperienceBlock from '../blocks/ExperienceBlock';

const Main = () => {
    const {experience:exp, internship:int, education:edu} = data;
    
    return (
        <main>
            {[exp, int, edu].map((section) => {
                return section.include && <section key={section.main_title}>
                    <MainTitle text={section.main_title}/>
                    {section.entries.map(({include, title, date, company, desc_list:description}) => {
                        return include && <ExperienceBlock key={title} title={title} date={date} company={company} description={description}/>
                            })}
                </section>
                    
            })}
        </main>
    )
}

export default Main;