import './AmpliarInfo.css'
import { Link } from "react-router-dom"
import {useLocation} from "react-router-dom"

export function AmpliarInfo(){

    let location=useLocation()
    let producto=location.state.producto
    console.log(producto)

    return(
        <>
        <br></br>
        <br></br>
        <br></br>
            <div class="container my-5">
                <div class="row">
                    <div class="col-12 col-md-5 ">
                        <img src={producto.foto} class="img-fluid w-100" alt="Libro" />
                    </div>
                    <div class="col-12 col-md-7 border p-3 rounded shadow">
                        <h1 class="fw-bold">{producto.nombre}</h1>
                        <i class="bi bi-star-fill text-warning fs-4 ms-1"></i>
                        <i class="bi bi-star-fill text-warning fs-4 ms-1"></i>
                        <i class="bi bi-star-fill text-warning fs-4 ms-1"></i>
                        <i class="bi bi-star-fill fs-4 ms-1"></i>
                        <i class="bi bi-star-fill fs-4 ms-1"></i>
                        <br></br>
                        <span class="badge text-bg-warning mt-3">Más vendido</span>
                        <br></br>
                        <br></br>
                        <h1>${producto.precioUnitario}</h1>
                        <span class="badge text-bg-primary mt-3">¡Oferta!</span>
                        <br></br>
                        <br></br>
                        <img src='https://firebasestorage.googleapis.com/v0/b/tiendasisu-b70ee.appspot.com/o/visa.png?alt=media&token=c024550e-48a5-4dac-a7a5-2d14b589723b' alt='icono' class="img-fluid me-3" />
                        <img src='https://firebasestorage.googleapis.com/v0/b/tiendasisu-b70ee.appspot.com/o/simbolo.png?alt=media&token=bc81b1f3-41f9-4c19-8bd6-94ad4461eee0' alt='icono' class="img-fluid me-3" />
                        <img src='https://firebasestorage.googleapis.com/v0/b/tiendasisu-b70ee.appspot.com/o/paypal.png?alt=media&token=703a2b0a-d375-4c7d-868a-884aa0acbbef' alt='icono' class="img-fluid me-3"/>
                        <br></br>
                        <br></br>
                        <i class="bi bi-truck fs-1 my-5"></i>
                        <p>Envios a Medellín y el Valle del Aburrá.</p>
                        <br></br>
                        <br></br>
                        <form>
                            <label class="form-label fw-bold">Cantidad:</label>
                            <input class="form-control border" type="number" value="1"></input>
                            <button type='submit' class="btn btn-warning mt-3 w-100">
                                <i class="bi bi-cart3"></i>Añadir
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}