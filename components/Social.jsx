import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";
import { LinkPreview } from "./ui/link-preview";

const socials = [
    { icon: <FaGithub />, path: "https://github.com/VirajVikum" },
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/viraj-amarasingha" },
    { icon: <FaYoutube />, path: "" },
    { icon: <FaTwitter />, path: "" },
];

const Social = ({ containerStyles, iconStyles }) => {
    return <div className={containerStyles}>
        {socials.map((item, index) => {
            return (
                item.path === "" ? (
                        <Link key={index} href={item.path} className={iconStyles}>
                            {item.icon}
                        </Link>
                    ) : (
                        <LinkPreview url={item.path} className={iconStyles}>
                            {item.icon}
                        </LinkPreview>
                    )
                

            );
        })}
    </div>

}

export default Social