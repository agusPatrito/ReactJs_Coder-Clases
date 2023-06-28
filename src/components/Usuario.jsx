// export const Usuario = (props) =>{
//     const{nombre, edad, rol} = props
    
//     return(
//        <div>
//             <h3>{props.nombre}</h3>
//             <p>Rol: {props.rol}</p>
//             <p>Edad {props.edad}</p>    
//        </div> 
//     )
// }

export const Usuario = ( {nombre, edad, rol} ) =>{

    
    return(
       <div>
            <h3>{props.nombre}</h3>
            <p>Rol: {props.rol}</p>
            <p>Edad {props.edad}</p>    
       </div> 
    )
}