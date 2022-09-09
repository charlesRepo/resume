const Link = ({url, target="_blank"}) => {
    return (
        <a href={url} target={target} className="font-display font-regular pl-2 text-regal-blue">({url.replace(/https?:\/\//, '')})</a>
    )
}

export default Link;