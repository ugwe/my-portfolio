import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaBehance } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/ugwe" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/michaelugwe/" },
  { icon: <FaBehance />, path: "https://www.behance.net/michaelugwe"},
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
