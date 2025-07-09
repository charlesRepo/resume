import Date from './Date';
import PropTypes from 'prop-types';

/**
 * A reusable block title component that displays a title and optional date range
 * @param {Object} props - Component props
 * @param {string} props.title - The title text to display
 * @param {Object} props.date - Date range object
 * @param {string} props.date.start - Start date
 * @param {string} props.date.end - End date
 */
const BlockTitle = ({ title = '', date = { start: '', end: '' } }) => {
    const { start, end } = date;

    return (
        <section className="flex flex-col gap-1">
            {title && (
                <h2 className="font-display capitalize font-bold text-black text-xl">
                    {title}
                </h2>
            )}
            {(start && end) && <Date start={start} end={end} />}
        </section>
    );
};

BlockTitle.propTypes = {
    title: PropTypes.string,
    date: PropTypes.shape({
        start: PropTypes.string,
        end: PropTypes.string,
    }),
};

export default BlockTitle;