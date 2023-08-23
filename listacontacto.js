let listaContacto = ["felipeCalvache","carlosperez","abnerjimenez",]

function agregarContacto(nuevoContacto){          
listaContacto.push(nuevoContacto)
return listaContacto

}

function borrarContacto(contactoABorrar){ 
 let nuevaLista =listaContacto.filter((contacto) => contacto !== contactoABorrar)  
 listaContacto = nuevaLista
}

borrarContacto("abnerjimenez")
    
 agregarContacto("jhonflores");
 
console.log(listaContacto)
