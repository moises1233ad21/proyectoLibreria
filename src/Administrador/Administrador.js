import './Administrador.css'
import Swal from 'sweetalert2'
import { useState,useEffect} from 'react'
import { registrarProductoEnBd } from '../services/agregarProducto'

export function Administrador(){

    const[nombre,setNombre]=useState("")
    const[foto, setFoto]=useState("")
    const[cantidad, setCantidad]=useState("")
    const[descripcion, setDescripcion]=useState("")
    const[precio, setPrecio]=useState("")
    const[clasificacion, setClasificacion]=useState("")
    const[marca, setMarca]=useState("")
    const[presentacion, setPresentacion]=useState("")
    const[peso, setPeso]=useState("")
    const[proveedor, setProveedor]=useState("")
    const[volumen, setVolumen]=useState("")
    const[fechaingreso, setFechaIngreso]=useState("")
    const[fechavencimiento, setFechaVencimiento]=useState("")
    const[descuento, setDescuento]=useState("")
    const[estado,setEstado]=useState("")

    function procesarFormulario(evento){
        evento.preventDefault()
        let datosProducto ={
            "nombre":nombre,
            "foto":foto,
            "precioUnitario":precio,
            "cantidad":cantidad,
            "descripcion":descripcion,
            "precioUnitario":precio,
            "clasificacion":clasificacion,
            "marca":marca,
            "presentacion":presentacion,
            "peso": peso,
            "proveedor": proveedor,
            "volumen":volumen,
            "fechaIngreso":fechaingreso,
            "fechaVencimiento":fechavencimiento,
            "aplicaDescuento":descuento,
            "estado":estado
        }
        console.log(datosProducto)
        registrarProductoEnBd(datosProducto)
        .then(function(respuesta){
            Swal.fire(
                '¡Exito en el registro!',
                '¡Tu producto fue registrado!',
                'success'
              )
        })
        .catch(function(error){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No pudimos registrar el producto.',
              })
        })
    }


    return(
        <>
            <br></br>
            <br></br>
            <div class="container-fluid my-5">
                <div class="row">
                    <div class="col-6">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                        <img src="https://firebasestorage.googleapis.com/v0/b/tiendasisu-b70ee.appspot.com/o/cien-anos-de-soledad-gabriel-garcia-marquez-condiciones-1552058543.jpg?alt=media&token=9bb8ba13-1116-4437-b9cb-7841c8259519" alt="foto" class="img-fluid img-thumbnail"/>
                    </div>
                    <div class="col-5 text-center">
                        <h2>Registro de Mercancia.</h2>
                        <br></br>
                        <form onSubmit={procesarFormulario}>
                            <br></br>
                            <div class="row">
                                <div class="col-4">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-basket"></i></span>
                                    <input 
                                        type="text" 
                                        class="form-control" 
                                        id="nombre" 
                                        placeholder="Nombre"
                                        onChange={(evento)=>{
                                            setNombre(evento.target.value)
                                        }}
                                    />
                                </div>
                                </div>
                                <div class="col-4">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-image"></i></span>
                                    <input 
                                        type="text" 
                                        class="form-control" 
                                        id="foto" 
                                        placeholder="Foto"
                                        onChange={(evento)=>{
                                            setFoto(evento.target.value)
                                        }}
                                    />
                                </div>
                                </div>
                                <div class="col-4">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-chevron-bar-expand"></i></span>
                                    <input 
                                        type="number" 
                                        class="form-control" 
                                        id="cantidad" 
                                        placeholder="Cantidad"
                                        onChange={(evento)=>{
                                            setCantidad(evento.target.value)
                                        }}
                                        />
                                </div>
                                </div>
                                <div class="col-4">
                                    <br></br>
                                    <br></br>
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-body-text"></i></span>
                                    <input 
                                        type="text" 
                                        class="form-control" 
                                        id="descripcion" 
                                        placeholder="Descripción"
                                        onChange={(evento)=>{
                                            setDescripcion(evento.target.value)
                                        }}
                                        />
                                </div>
                                </div>
                                <div class="col-4">
                                <br></br>
                                <br></br>
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-currency-dollar"></i></span>
                                    <input 
                                        type="number" 
                                        class="form-control" 
                                        id="precioUnitario" 
                                        placeholder="Precio"
                                        onChange={(evento)=>{
                                            setPrecio(evento.target.value)
                                        }}
                                    />
                                </div>
                                </div>
                                <div class="col-4">
                                <br></br>
                                <br></br>
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-check2-square"></i></span>
                                    <input 
                                        type="text" 
                                        class="form-control" 
                                        id="clasificacion" 
                                        placeholder="Clasificación"
                                        onChange={(evento)=>{
                                            setClasificacion(evento.target.value)
                                        }}
                                    />
                                </div>
                                </div>
                                <div class="col-4">
                                <br></br>
                                <br></br>
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-bookmark-check-fill"></i></span>
                                    <input 
                                        type="text" 
                                        class="form-control" 
                                        id="marca" 
                                        placeholder="Marca"
                                        onChange={(evento)=>{
                                            setMarca(evento.target.value)
                                        }}
                                    />
                                </div>
                                </div>
                                <div class="col-4">
                                <br></br>
                                <br></br>
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-bag-check-fill"></i></span>
                                    <input 
                                        type="text" 
                                        class="form-control" 
                                        id="presentacion" 
                                        placeholder="Presentación"
                                        onChange={(evento)=>{
                                            setPresentacion(evento.target.value)
                                        }}
                                    />
                                </div>
                                </div>
                                <div class="col-4">
                                <br></br>
                                <br></br>
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-infinity"></i></span>
                                    <input 
                                        type="number" 
                                        class="form-control" 
                                        id="peso" 
                                        placeholder="Peso"
                                        onChange={(evento)=>{
                                            setPeso(evento.target.value)
                                        }}
                                    />
                                </div>
                                </div>
                                <div class="col-4">
                                <br></br>
                                <br></br>
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-collection"></i></span>
                                    <input 
                                        type="text" 
                                        class="form-control" 
                                        id="proveedor" 
                                        placeholder="Proveedor"
                                        onChange={(evento)=>{
                                            setProveedor(evento.target.value)
                                        }}
                                    />
                                </div>
                                </div>
                                <div class="col-4">
                                <br></br>
                                <br></br>
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-calculator"></i></span>
                                    <input 
                                        type="number" 
                                        class="form-control" 
                                        id='volumen' 
                                        placeholder="Volumen"
                                        onChange={(evento)=>{
                                            setVolumen(evento.target.value)
                                        }}
                                    />
                                </div>
                                </div>
                                <div class="col-4">
                                <br></br>
                                <br></br>
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-calendar-date"></i></span>
                                    <input 
                                        type="number" 
                                        class="form-control" 
                                        id="fechaingreso"
                                        placeholder="Fecha de Ingreso"
                                        onChange={(evento)=>{
                                            setFechaIngreso(evento.target.value)
                                        }}
                                        />
                                </div>
                                </div>
                                <div class="col-4">
                                <br></br>
                                <br></br>
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-calendar3"></i></span>
                                    <input 
                                        type="number" 
                                        class="form-control" 
                                        id="fechavencimiento" 
                                        placeholder="Fecha de Vencimiento"
                                        onChange={(evento)=>{
                                            setFechaVencimiento(evento.target.value)
                                        }}
                                        />
                                </div>
                                </div>
                                <div class="col-4">
                                <br></br>
                                <br></br>
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-percent"></i></span>
                                    <input 
                                        type="text" 
                                        class="form-control" 
                                        id="descuento" 
                                        placeholder="Descuento"
                                        onChange={(evento)=>{
                                            setDescuento(evento.target.value)
                                        }}
                                        />
                                </div>
                                </div>
                                <div class="col-4">
                                <br></br>
                                <br></br>
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-percent"></i></span>
                                    <input 
                                        type="text" 
                                        class="form-control" 
                                        id="estado" 
                                        placeholder="Estado"
                                        onChange={(evento)=>{
                                            setEstado(evento.target.value)
                                        }}
                                        />
                                        </div>
                                        </div>

                                <div class="d-grid gap-2">
                                    <br></br>
                                    <br></br>
                                    <button class="btn boton col-8 mx-auto" type="submit">Registrar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
