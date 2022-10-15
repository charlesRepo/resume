import data from '../data.json'
import MainTitle from '../components/MainTitle';
import ExperienceBlock from '../blocks/ExperienceBlock';

const Main = () => {
    const {experience:exp, internship:int, education:edu} = data;
    
    return (
        <main>
            {[exp, int, edu].map((section, index) => {
                return section.include && <section key={index}>
                    <MainTitle text={section.main_title}/>
                    {section.entries.map(({include, title, date, company, desc_list:description}, index) => {
                        return include && <ExperienceBlock key={index} title={title} date={date} company={company} description={description}/>
                            })}
                </section>
                    
            })}
        </main>
    )
}

export default Main;