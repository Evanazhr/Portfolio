import HeroPhoto from "../assets/evan-photo.jpg"
import { TypeAnimation } from "react-type-animation"

export default function Hero() {
    return (
        <div className="mb-6 animate-fadeUp border-b border-secondary-dark pb-6">
            <div className="mb-6 flex flex-col items-center justify-start gap-4 md:flex-row">
                <div className="my-3 h-24 w-24 animate-scaleUp overflow-hidden rounded-full shadow-xl md:hidden">
                    <img
                        src={HeroPhoto}
                        alt="photo"
                        className="bg-cover bg-center transition-all hover:scale-125"
                    />
                </div>

                <TypeAnimation
                    sequence={[
                        "Hello friend, i am Evan!",
                        3000,
                        "Welcome to my website 👋",
                        3000,
                    ]}
                    wrapper="span"
                    className="text-2xl font-bold text-light-color sm:text-3xl"
                    speed={40}
                    repeat={Infinity}
                />
            </div>
            <div className="flex flex-col items-center justify-center py-3 text-center md:items-start md:justify-start md:text-start">
                <p className="pt-1">
                    My name is Evan Azhar Hartana, you can call me Evan, i am
                    student of Pamulang University, Computer Systems major. I
                    love to learn new things. I am always curious and motivated
                    to expand my skills and knowledge.
                </p>
            </div>
            <div className="my-6 flex w-full flex-row items-center justify-center gap-6">
                <a
                    title="email"
                    href="mailto:evanazhr@gmail.com"
                    target="_blank"
                    className="flex animate-pulse-3 flex-row items-center justify-center gap-2 rounded-full p-3 font-bold shadow-md shadow-light-color hover:shadow-sm hover:shadow-light-color"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        className="h-6 w-6"
                    >
                        <linearGradient
                            id="6769YB8EDCGhMGPdL9zwWa"
                            x1="15.072"
                            x2="24.111"
                            y1="13.624"
                            y2="24.129"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0" stop-color="#e3e3e3" />
                            <stop offset="1" stop-color="#e2e2e2" />
                        </linearGradient>
                        <path
                            fill="url(#6769YB8EDCGhMGPdL9zwWa)"
                            d="M42.485,40H5.515C4.126,40,3,38.874,3,37.485V10.515C3,9.126,4.126,8,5.515,8h36.969 C43.874,8,45,9.126,45,10.515v26.969C45,38.874,43.874,40,42.485,40z"
                        />
                        <linearGradient
                            id="6769YB8EDCGhMGPdL9zwWb"
                            x1="26.453"
                            x2="36.17"
                            y1="25.441"
                            y2="37.643"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0" stop-color="#f5f5f5" />
                            <stop offset=".03" stop-color="#eee" />
                            <stop offset="1" stop-color="#eee" />
                        </linearGradient>
                        <path
                            fill="url(#6769YB8EDCGhMGPdL9zwWb)"
                            d="M42.485,40H8l37-29v26.485C45,38.874,43.874,40,42.485,40z"
                        />
                        <linearGradient
                            id="6769YB8EDCGhMGPdL9zwWc"
                            x1="3"
                            x2="45"
                            y1="24"
                            y2="24"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0" stop-color="#d74a39" />
                            <stop offset="1" stop-color="#c73d28" />
                        </linearGradient>
                        <path
                            fill="url(#6769YB8EDCGhMGPdL9zwWc)"
                            d="M5.515,8H8v32H5.515C4.126,40,3,38.874,3,37.485V10.515C3,9.126,4.126,8,5.515,8z M42.485,8 H40v32h2.485C43.874,40,45,38.874,45,37.485V10.515C45,9.126,43.874,8,42.485,8z"
                        />
                        <linearGradient
                            id="6769YB8EDCGhMGPdL9zwWd"
                            x1="24"
                            x2="24"
                            y1="8"
                            y2="38.181"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0" stop-opacity=".15" />
                            <stop offset="1" stop-opacity=".03" />
                        </linearGradient>
                        <path
                            fill="url(#6769YB8EDCGhMGPdL9zwWd)"
                            d="M42.485,40H30.515L3,11.485v-0.969C3,9.126,4.126,8,5.515,8h36.969 C43.874,8,45,9.126,45,10.515v26.969C45,38.874,43.874,40,42.485,40z"
                        />
                        <linearGradient
                            id="6769YB8EDCGhMGPdL9zwWe"
                            x1="3"
                            x2="45"
                            y1="17.73"
                            y2="17.73"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0" stop-color="#f5f5f5" />
                            <stop offset="1" stop-color="#f5f5f5" />
                        </linearGradient>
                        <path
                            fill="url(#6769YB8EDCGhMGPdL9zwWe)"
                            d="M43.822,13.101L24,27.459L4.178,13.101C3.438,12.565,3,11.707,3,10.793v-0.278 C3,9.126,4.126,8,5.515,8h36.969C43.874,8,45,9.126,45,10.515v0.278C45,11.707,44.562,12.565,43.822,13.101z"
                        />
                        <linearGradient
                            id="6769YB8EDCGhMGPdL9zwWf"
                            x1="24"
                            x2="24"
                            y1="8.446"
                            y2="27.811"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0" stop-color="#e05141" />
                            <stop offset="1" stop-color="#de4735" />
                        </linearGradient>
                        <path
                            fill="url(#6769YB8EDCGhMGPdL9zwWf)"
                            d="M42.485,8h-0.3L24,21.172L5.815,8h-0.3C4.126,8,3,9.126,3,10.515v0.278 c0,0.914,0.438,1.772,1.178,2.308L24,27.459l19.822-14.358C44.562,12.565,45,11.707,45,10.793v-0.278C45,9.126,43.874,8,42.485,8z"
                        />
                    </svg>
                </a>
                <a
                    target="_blank"
                    href="https://github.com/Evanazhr/"
                    className="flex animate-pulse-1 flex-row items-center justify-center gap-2 rounded-full p-3 font-bold shadow-md shadow-light-color hover:shadow-sm hover:shadow-light-color"
                    title="Github"
                >
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        height="24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title></title>
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                    </svg>
                </a>
                <a
                    target="_blank"
                    href="https://www.instagram.com/evanazh?igsh=OWMzcG1wOXBlcThv"
                    className="flex animate-pulse-2 flex-row items-center justify-center gap-2 rounded-full p-3 font-bold shadow-md shadow-light-color hover:shadow-sm hover:shadow-light-color"
                    title="instagram"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        className="h-6 w-6"
                    >
                        <radialGradient
                            id="yOrnnhliCrdS2gy~4tD8ma"
                            cx="19.38"
                            cy="42.035"
                            r="44.899"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0" stop-color="#fd5" />
                            <stop offset=".328" stop-color="#ff543f" />
                            <stop offset=".348" stop-color="#fc5245" />
                            <stop offset=".504" stop-color="#e64771" />
                            <stop offset=".643" stop-color="#d53e91" />
                            <stop offset=".761" stop-color="#cc39a4" />
                            <stop offset=".841" stop-color="#c837ab" />
                        </radialGradient>
                        <path
                            fill="url(#yOrnnhliCrdS2gy~4tD8ma)"
                            d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20 c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20 C42.014,38.383,38.417,41.986,34.017,41.99z"
                        />
                        <radialGradient
                            id="yOrnnhliCrdS2gy~4tD8mb"
                            cx="11.786"
                            cy="5.54"
                            r="29.813"
                            gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0" stop-color="#4168c9" />
                            <stop
                                offset=".999"
                                stop-color="#4168c9"
                                stop-opacity="0"
                            />
                        </radialGradient>
                        <path
                            fill="url(#yOrnnhliCrdS2gy~4tD8mb)"
                            d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20 c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20 C42.014,38.383,38.417,41.986,34.017,41.99z"
                        />
                        <path
                            fill="#fff"
                            d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5 s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
                        />
                        <circle cx="31.5" cy="16.5" r="1.5" fill="#fff" />
                        <path
                            fill="#fff"
                            d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12 C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
                        />
                    </svg>
                </a>
                <a
                    href="https://discord.com/users/Evan Azhar Hartana#0738"
                    target="_blank"
                    title="discord"
                    className="flex animate-pulse-4 flex-row items-center justify-center gap-2 rounded-full p-3 font-bold shadow-md shadow-light-color hover:shadow-sm hover:shadow-light-color"
                >
                    <svg
                        className="h-6 w-6"
                        viewBox="0 -28.5 256 256"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g>
                            <path
                                d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
                                fill="#5865F2"
                                fill-rule="nonzero"
                            ></path>
                        </g>
                    </svg>
                </a>
            </div>
        </div>
    )
}
