import { ReactNode } from "react";

interface Props{

children:ReactNode

onClick?:()=>void

}

export default function IconButton({

children,

onClick

}:Props){

return(

<button

onClick={onClick}

style={{

width:44,

height:44,

borderRadius:"50%",

background:"var(--surface)",

border:"1px solid var(--border)",

display:"flex",

justifyContent:"center",

alignItems:"center",

cursor:"pointer",

transition:"all .25s ease"

}}

>

{children}

</button>

)

}