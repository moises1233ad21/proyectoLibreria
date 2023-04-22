import './Home.css'
import { AcercaDe } from '../AcercaDe/AcercaDe'
import { Servicios } from '../Servicios/Servicios'

export function Home(){
    return(
        <>
            <section>
                <div class="banner">
                    <h1 class="letrau">LIBRERIA</h1>
                    <h1 class="letrau">MACONDO</h1>
                </div>
            </section>
            <AcercaDe></AcercaDe>
            <Servicios></Servicios>
        </>
    )
}