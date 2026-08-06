import { ReactNode } from "react";

interface Props{
    children:ReactNode
}

export default function Card({children}:Props){

    return(

        <div

            style={{

                background:"var(--surface)",

                border:"1px solid var(--border)",

                borderRadius:24,

                overflow:"hidden",

                transition:"all .35s ease"

            }}

        >

            {children}

        </div>

    )

}