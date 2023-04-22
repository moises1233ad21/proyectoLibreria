import { Route, Routes} from "react-router-dom"
import { Home } from "../Home/Home"
import { Administrador } from "../Administrador/Administrador"
import {Menu} from "../Menu/Menu"
import { Tienda } from "../Tienda/Tienda"
import { AmpliarInfo } from "../AmpliarInfo/AmpliarInfo"
import { Footer } from "../Footer/Footer"
import { QuienesSomos } from "../QuienesSomos/QuienesSomos"
import { Nosotos } from "../Nosotros/Nosotros"


export function Router(){
    return (
        <>
        <header>
        <Menu></Menu>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/administrar" element={<Administrador />} />
          <Route path="/productos" element={<Tienda />} />
          <Route path="/compras" element={<AmpliarInfo />} />
          <Route path="/quienes" element={<QuienesSomos />} />
          <Route path="/nosotros" element={<Nosotos/>}/>
        </Routes>
        <footer>
          <Footer></Footer>
        </footer>
        </>
        
      )
}