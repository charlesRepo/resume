const SkillItem = ({skill, desc}) => {
    return (
        <li className="font-sans text-base leading-5"><span className="font-sans font-medium text-regal-blue">{skill}{desc ? ':' : ''}</span> {desc}</li> 
    )
}

export default SkillItem;

