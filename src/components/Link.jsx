const Link = ({url, target="_blank"}) => {
    if (!url) {
        return null;
    }
    return (
        <a href={url} target={target} rel="noopener noreferrer" className="font-display font-regular pl-2 text-regal-blue">({url.replace(/https?:\/\//, '')})</a>
    )
}

export default Link;