import emptyPhoto from "../assets/empty.jpg"

export default function ProjectCard({
    link = "#",
    title = "title",
    description = "description",
    thumbnail = emptyPhoto,
    imageAlt = "alt image",
}) {
    return (
        <div className="h-fit w-full animate-scaleUp rounded-lg shadow-light-color shadow-smrounded-lg border-4 border-third-dark bg-secondary-dark p-6 transition-all duration-150 hover:scale-95">
            <a href={link}>
                <div>
                    <div className="flex flex-col items-start justify-center">
                        <h2 className="mb-3 text-xl font-bold">{title}</h2>
                        <p className="mb-2">{description}</p>
                    </div>
                    <div className="relative">
                        <img
                            src={thumbnail}
                            alt={imageAlt}
                            className="h-full w-full rounded-md bg-cover bg-center"
                        />
                    </div>
                </div>
            </a>
        </div>
    )
}
