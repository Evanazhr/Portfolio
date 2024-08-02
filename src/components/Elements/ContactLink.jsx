const ContactLink = ({ variant, children, href, title }) => {
    return (
        <a
            title={title}
            href={href}
            target="_blank"
            className={`${variant} flex animate-pulse flex-row items-center justify-center gap-2 rounded-full p-3 font-bold shadow-md shadow-light-color hover:shadow-sm hover:shadow-light-color`}
        >
            {children}
        </a>
    )
}

export default ContactLink
