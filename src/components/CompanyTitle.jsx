import Link from "./Link";
const CompanyTitle = ({company}) => {
    const {name, url, location} = company;
    return (
        <section className="">
            <h3 className="font-display font-regular uppercase text-black text-base inline-block">{name}</h3>
            <Link url={url} />
            <span className="pl-2 font-display font-regular">{location}</span>
        </section>
        
    )
}

export default CompanyTitle;