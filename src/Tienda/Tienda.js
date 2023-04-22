import './Tienda.css'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {consultarProductos} from '../services/buscarProductos'


export function Tienda(){

    const[productostienda,setProductostienda]=useState("")
    const[estadocarga,setEstadoCarga]=useState(true)

    function cambiarFoto(evento){
        evento.preventDefault()
        evento.target.classList.remove("sombra")
    }

    function cambiarFoto2(evento){
        evento.preventDefault()
        evento.target.classList.add("sombra")
    }

    let navegador= useNavigate()
    function pasarInformacion(producto){
        navegador('/compras',{
            state:{producto}
        })
      
    }

    useEffect(function(){
        consultarProductos()
        .then(function(respuesta){
            setEstadoCarga(false)
            setProductostienda(respuesta)
        })  
    },[])

    if(estadocarga==true){

        return(
            <>
                <h1>ESTAMOS CARGANDO...</h1>
            </>
        )
    }else{
        return(
            <>
               <div class="row row-cols-1 row-cols-md-4 g-5 my-5">
                    {
                        productostienda.map(function(producto){
                            return(
                                <div class="col zoom" onClick={function(){pasarInformacion(producto)}}>
                                    <div class="card shadow h-100 p-2">
                                        <img src={producto.foto} alt="foto" class="img-fluid sombra" 
                                            onMouseOver={cambiarFoto} 
                                            onMouseLeave={cambiarFoto2}
                                        />
                                        <h2 class="text-center">{producto.nombre}</h2>
                                        <p class="text-center">{producto.descripción}</p>
                                        <h5 class="text-center precio">${producto.precioUnitario}</h5>  
                                    </div>
                                </div>
                            )
                        })
                    }
               </div>
            </>
        )
    }
    }

    /*let productos=[
        {
            nombre:"Cien años de soledad.",
            precio:78000,
            descripción:"Libro del escritor Gabriel García Marquez, publicado en 1967.",
            foto:"https://firebasestorage.googleapis.com/v0/b/tiendasisu-b70ee.appspot.com/o/ciena%C3%B1osdesoledad.webp?alt=media&token=aab0da80-7f7e-4990-8ba4-9001588e758f",
           
        },
        {
            nombre:"El coronel no tiene quien le escriba.",
            precio:32000,
            descripción:"Libro del escritor Gabriel García Marquez, publicado en 1961.",
            foto:"https://firebasestorage.googleapis.com/v0/b/tiendasisu-b70ee.appspot.com/o/elcoronelnotiene.webp?alt=media&token=519a9de4-a9a1-4e30-b60d-a8a7e5a1b77b",
            
        },
        {
            nombre:"Crónica de una muerte anunciada.",
            precio:43500,
            descripción:"Libro del escritor Gabriel García Marquez, publicado en 1981.",
            foto:"https://firebasestorage.googleapis.com/v0/b/tiendasisu-b70ee.appspot.com/o/cronicadeuna.webp?alt=media&token=28273359-fec8-42e1-be8a-0734466fa7b3",
            
        },
        {
            nombre:"Memorias de mis putas tristes.",
            precio:30000,
            descripción:"Libro del escritor Gabriel García Marquez, publicado en 2004.",
            foto:"https://firebasestorage.googleapis.com/v0/b/tiendasisu-b70ee.appspot.com/o/memorias.webp?alt=media&token=09fd7c4b-2d40-440e-82c2-1612bd9fe563",
            
        },
        {
            nombre:"El amor en los tiempos del cólera.",
            precio:26000,
            descripción:"Libro del escritor Gabriel García Marquez, publicado en 1985.",
            foto:"https://firebasestorage.googleapis.com/v0/b/tiendasisu-b70ee.appspot.com/o/amor.webp?alt=media&token=3e360266-039c-4b24-9ce5-8539d19c7aa1",
            
        },
        {
            nombre:"El otoño del patriarca.",
            precio:33000,
            descripción:"Libro del escritor Gabriel García Marquez, publicado en 1975.",
            foto:"https://firebasestorage.googleapis.com/v0/b/tiendasisu-b70ee.appspot.com/o/oto%C3%B1o.webp?alt=media&token=44cc97b2-9ca7-4f75-8c28-c79a7d692b18",
           
        },
        {
            nombre:"Los funerales de la mamá grande.",
            precio:48000,
            descripción:"Libro del escritor Gabriel García Marquez, publicado en 1962.",
            foto:"https://firebasestorage.googleapis.com/v0/b/tiendasisu-b70ee.appspot.com/o/erendida.webp?alt=media&token=afd88f0f-0847-4887-8d5c-3686a7563062",
            
        },
        {
            nombre:"El general en su laberinto.",
            precio:59000,
            descripción:"Libro del escritor Gabriel García Marquez, publicado en 1989.",
            foto:"https://firebasestorage.googleapis.com/v0/b/tiendasisu-b70ee.appspot.com/o/laberinto.webp?alt=media&token=cf0f43b8-26f1-45dd-b94a-7da335398239",
           
        },
        {
            nombre:"Doce Cuentos Peregrinos.",
            precio:20000,
            descripción:"Libro del escritor Gabriel García Marquez, publicado en 1992",
            foto:"https://firebasestorage.googleapis.com/v0/b/tiendasisu-b70ee.appspot.com/o/docecuentos.webp?alt=media&token=544b7d0d-f737-4899-9fa1-cbfc475e9268",
            
        },
        {
            nombre:"Relato de un náufrago.",
            precio:66000,
            descripción:"Libro del escritor Gabriel García Marquez, publicado en 1955.",
            foto:"https://firebasestorage.googleapis.com/v0/b/tiendasisu-b70ee.appspot.com/o/relatode.webp?alt=media&token=99e5c1ef-eef4-4cb6-bd15-731b33e9d431", 
           
        }
    ]*/

   