import BlockTitle from '../components/BlockTtitle'
import CompanyTitle from '../components/CompanyTitle';
import DOMPurify from 'dompurify';


const ExperienceBlock = ({title, date, company, description}) => {
    return (
        <section className='pb-2'>
            <BlockTitle title={title} date={date} />
            <CompanyTitle company={company}/>
            <ul className="list-disc list-outside">
            {description.map((desc, index) => {
                return <li key={index} className="font-sans text-base leading-5"> {<div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(desc) }} />}</li>
            })}
               
            </ul>
        </section>
        
    )
}

export default ExperienceBlock;