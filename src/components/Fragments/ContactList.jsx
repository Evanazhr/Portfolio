import ContactLink from "../Elements/ContactLink"

import { MdEmail } from "react-icons/md"
import { FaInstagram } from "react-icons/fa"
import { FaDiscord } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"

const ContactList = ({ variant }) => {
    return (
        <>
            <ContactLink
                href="mailto:evanazhr@gmail.com"
                title="Email : evanazhr@gmail.com"
                variant={variant}
            >
                <MdEmail />
            </ContactLink>
            <ContactLink
                href="https://www.instagram.com/evanazh?igsh=OWMzcG1wOXBlcThv"
                title="Instagram : @evanazh"
                variant={variant}
            >
                <FaInstagram />
            </ContactLink>
            <ContactLink
                href="https://discord.com/users/Evan Azhar Hartana#0738"
                title="Discord : Evan Azhar Hartana#0738"
                variant={variant}
            >
                <FaDiscord />
            </ContactLink>
            <ContactLink
                href="https://github.com/Evanazhr/"
                title="Github : Evanazhr"
                variant={variant}
            >
                <FaGithub />
            </ContactLink>
        </>
    )
}

export default ContactList
