import Hero from "../components/Hero"
import SelectedProject from "../components/SelectedProject"
import Skills from "../components/Skills"
import Footer from "../components/Footer"

export default function Home() {
    document.title = "Home | Evan Azhar Hartana"

    return (
        <>
            <div className="w-full px-5 py-5 text-light-color md:py-12">
                {/* Hero Section */}
                <Hero />

                {/* Career and SelectedProject  */}
                <SelectedProject />

                {/* Stacks or skills */}
                <div className="mb-6 w-full animate-fadeUp overflow-hidden border-b border-secondary-dark pb-6">
                    <div className="mb-6 flex flex-row items-center gap-2">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M9.96424 2.68571C10.0668 2.42931 9.94209 2.13833 9.6857 2.03577C9.4293 1.93322 9.13832 2.05792 9.03576 2.31432L5.03576 12.3143C4.9332 12.5707 5.05791 12.8617 5.3143 12.9642C5.5707 13.0668 5.86168 12.9421 5.96424 12.6857L9.96424 2.68571ZM3.85355 5.14646C4.04882 5.34172 4.04882 5.6583 3.85355 5.85356L2.20711 7.50001L3.85355 9.14646C4.04882 9.34172 4.04882 9.6583 3.85355 9.85356C3.65829 10.0488 3.34171 10.0488 3.14645 9.85356L1.14645 7.85356C0.951184 7.6583 0.951184 7.34172 1.14645 7.14646L3.14645 5.14646C3.34171 4.9512 3.65829 4.9512 3.85355 5.14646ZM11.1464 5.14646C11.3417 4.9512 11.6583 4.9512 11.8536 5.14646L13.8536 7.14646C14.0488 7.34172 14.0488 7.6583 13.8536 7.85356L11.8536 9.85356C11.6583 10.0488 11.3417 10.0488 11.1464 9.85356C10.9512 9.6583 10.9512 9.34172 11.1464 9.14646L12.7929 7.50001L11.1464 5.85356C10.9512 5.6583 10.9512 5.34172 11.1464 5.14646Z"
                                fill="currentColor"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                        <h1 className="text-lg font-bold">Stacks </h1>
                    </div>
                    <div className="hover:pause mb-3 animate-infinite-slide-l">
                        <Skills />
                    </div>
                    <div className="hover:pause mb-6 animate-infinite-slide-r">
                        <Skills />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
