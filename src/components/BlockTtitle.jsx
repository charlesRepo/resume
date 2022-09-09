import Date from './Date';

const BlockTitle = ({title = "", date = {start:'', end:''}}) => {
    const {start, end} = date;
    return (
        <section className="">
            {title && <h2 className="font-display capitalize font-bold text-black text-xl inline-block">   
                {title}
            </h2>}
            {start && end && <Date start={start} end={end}/>}
        </section>
    )
}

export default BlockTitle;