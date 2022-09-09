import SkillsList from '../blocks/SkillsList';
import MainTitle from '../components/MainTitle';
import data from '../data.json'

const Aside = () => {
    const {main_title, skillset} = data.skills;
    return (
        <section>
            <MainTitle text={main_title}/>
            {skillset.map(({name, list}, index) => {
               return <SkillsList key={index} name={name} list={list}/>
            })}
            
        </section>
    )
}

export default Aside;