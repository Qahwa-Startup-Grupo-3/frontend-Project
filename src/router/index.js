import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import RegisterProducer from '../views/RegisterProducer.vue'
import RegisterDistributor from '../views/RegisterDistributor.vue'
import Validation from '../views/Validation.vue'
import TipoUsuario from '../views/TipoUsuario.vue'
import SesionProductor from '../views/SesionProductor.vue'
import SesionDistribuidor from '../views/SesionDistribuidor.vue'
import PerfilProductor from '../views/PerfilProductor.vue'
import PerfilDistribuidor from '../views/PerfilDistribuidor.vue'
import ProduccionProductor from '../views/ProduccionProductor.vue'
import RegistrarProduccion from '../views/RegistrarProduccion.vue'
import InventarioProductores from '../views/InventarioProductores.vue'
import AgregarInventario from '../views/AgregarInventario.vue'
import PublicacionesProductor from "../views/PublicacionesProductor.vue";
import AgregarPublicacion from "../views/AgregarPublicacion.vue";
import ProductoDetalle from "../views/ProductoDetalle.vue";
import PedidosProductor from "../views/PedidosProductor.vue";
import AgregarPedido from "../views/AgregarPedido.vue";


const routes = [
    { path: '/', component: Home },
    { path: '/registro', component: Register },
    { path: '/registro-productor', component: RegisterProducer },
    { path: '/registro-distribuidor', component: RegisterDistributor },
    { path: '/validacion-registro', component: Validation },
    { path: '/tipo-usuario', name: 'TipoUsuario', component: TipoUsuario },
    { path: '/sesion-productor', name: 'SesionProductor', component: SesionProductor },
    { path: '/sesion-distribuidor', name: 'SesionDistribuidor', component: SesionDistribuidor },
    { path: '/perfil-productor', name: 'PerfilProductor', component: PerfilProductor },
    { path: '/perfil-distribuidor', name: 'PerfilDistribuidor', component: PerfilDistribuidor },
    { path: '/produccion', name: 'ProduccionProductor', component: ProduccionProductor },
    { path: '/registrar-produccion', name: 'RegistrarProduccion', component: RegistrarProduccion },
    { path: '/inventario', name: 'InventarioProductores', component: InventarioProductores },
    { path: '/agregar-inventario', name: 'AgregarInventario', component: AgregarInventario },
    {path: '/publicaciones', name: 'PublicacionesProductor', component: PublicacionesProductor },
    { path: '/agregar-publicacion', name: 'AgregarPublicacion', component: AgregarPublicacion },
    {
        path: '/producto/:id',
        name: 'ProductoDetalle',
        component: ProductoDetalle
    },
    {
        path: '/pedidos-productor', // ← Este es el path que usas en router-link
        name: 'PedidosProductor',
        component: PedidosProductor
    },
    {
        path: '/agregar-pedido',
        name: 'AgregarPedido',
        component: AgregarPedido
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
