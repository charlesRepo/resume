import BlockTitle from '../components/BlockTtitle'
import SkillItem from '../components/SkillItem'

const SkillsList = ({name, list}) => {
    return (
            <section className='pb-2'>
                <BlockTitle title={name} />    
                <ul className="list-disc list-outside">
                {list.map(({include, skill, desc}) => {
                    return include && <SkillItem key={skill} skill={skill} desc={desc}/>
                })}
                </ul>
            </section>
    )    
}

export default SkillsList;