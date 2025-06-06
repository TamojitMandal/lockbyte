import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faTelegramPlane, faDiscord } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
    return (
        <>
            <footer className="bg-#0d1315 dark:bg-gray-900">
                <div className="mx-auto text-white w-full  p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <Link href="/" className="text-xl font-bold hover:cursor-pointer group inline-block">
                                <span className="text-red-600 group-hover:text-white transition">L</span>
                                <span className="text-white group-hover:text-red-600 transition">OCK</span>
                                <span className="text-red-600 group-hover:text-white transition">B</span>
                                <span className="text-white group-hover:text-red-600 transition">YTE</span>
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-white  uppercase dark:text-white">
                                    Resources
                                </h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <Link href="/" className="hover:underline">
                                            LOCKBYTE
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/" className="hover:underline">
                                            Twitter
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-white  uppercase dark:text-white">
                                    Follow us
                                </h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a
                                            href="https://github.com/"
                                            className="hover:underline "
                                        >
                                            Github
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://discord.gg/"
                                            className="hover:underline"
                                        >
                                            Discord
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                                    Legal
                                </h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">
                                            Privacy Policy
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline">
                                            Terms &amp; Conditions
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 w-full border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                            © 2023{" "}
                            <Link href="/" className="hover:underline">
                                LOCKBYTE™
                            </Link>
                            . All Rights Reserved.
                        </span>
                        <div className="flex space-x-4">
                            <a href="https://twitter.com/your_handle" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faXTwitter} className="text-white w-6 h-6" />
                            </a>
                            <a href="https://t.me/your_channel" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faTelegramPlane} className="text-white w-6 h-6" />
                            </a>
                            <a href="https://discord.gg/your_invite_code" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faDiscord} className="text-white w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}