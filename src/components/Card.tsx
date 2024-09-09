import grainImage from "@/assets/images/grain.jpg"
import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge"

export const Card = ({className, children, ...other}: ComponentPropsWithoutRef<"div">) =>{
    
    return (
        <div className={twMerge(
            "after:z-10 after:content-[&apos;&apos;] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/30 after:pointer-events-none bg-gray-800 rounded-3xl relative z-0 overflow-hidden",
            className
          )}
          {...other}
          >
            <div className="absolute inset-0 -z-10 opacity-5" style={{backgroundImage: `url(${grainImage.src})`}}></div>
            {children}
        </div>
    )
}

