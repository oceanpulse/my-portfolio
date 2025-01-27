import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: ""
  },
  {
    icon: <FaLinkedin />,
    path: ""
  }
]

const Social = (containerStyles, iconStyles) => {
  return (
    <div className={`flex gap-6 ${containerStyles}`}> 
      {socials.map((item, index) => (
        <Link 
          href={item.path} 
          key={index} 
          className={`
            w-9 
            h-9 
            border
            border-accent 
            rounded-full 
            flex 
            justify-center 
            items-center 
            text-accent 
            text-base 
            hover:bg-accent 
            hover:text-primary 
            hover:transition-all 
            mb-6
            duration-500${iconStyles}
          `}
        >
          {item.icon}
        </Link>
      ))}
    </div>
  )
}

export default Social