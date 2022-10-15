import BlockTitle from '../components/BlockTtitle'
import SkillItem from '../components/SkillItem'

const SkillsList = ({name, list}) => {
    return (
            <section className='pb-2'>
                <BlockTitle title={name} />    
                <ul className="list-disc list-outside">
                {list.map(({include, skill, desc}, index) => {
                    return include && <SkillItem key={index} skill={skill} desc={desc}/>
                })}
                </ul>
            </section>
    )    
}

export default SkillsList;