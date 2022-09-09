import BlockTitle from '../components/BlockTtitle'
import SkillItem from '../components/SkillItem'

const SkillsList = ({name, list}) => {
    console.log('hello')
    return (
        <section className='pb-2'>
            <BlockTitle title={name} />    
            <ul className="list-disc list-outside">
            {list.map(({skill, desc}, index) => {
                return <SkillItem key={index} skill={skill} desc={desc}/>
            })}
            </ul>
        </section>
        
    )
}

export default SkillsList;