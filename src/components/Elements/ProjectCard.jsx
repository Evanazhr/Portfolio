import EmptyPhoto from "../../../public/empty.jpg"
export default function ProjectCard({
    href = "#",
    title = "title",
    description = "description",
    thumbnail = EmptyPhoto,
    imageAlt = "alt image",
}) {
    return (
        <div className="shadow-smrounded-lg h-fit w-full animate-scaleUp rounded-lg border-4 border-third-dark bg-secondary-dark p-6 shadow-light-color transition-all duration-150 hover:scale-95">
            <a href={href}>
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
