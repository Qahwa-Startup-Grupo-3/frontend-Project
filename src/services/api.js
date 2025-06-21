// src/services/api.js
import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:3000' })

/* ---------- LOGIN ---------- */
export const loginUsuario = async ({ email, password, tipo }) => {
    const { data } = await API.get('/usuarios', { params: { email, password, tipo } })
    if (data.length === 0) throw new Error('Credenciales incorrectas')
    return data[0]                    // ← usuario encontrado
}

/* ---------- PRODUCCIONES ---------- */
export const crearProduccion = async (produccion) => {
    const { data } = await API.post('/producciones', produccion)
    return data
}

export const obtenerProducciones = async (usuarioId) => {
    const { data } = await API.get('/producciones', { params: { usuarioId } })
    return data
}

export const registrarUsuario = async (usuario) => {
    const respuesta = await fetch('http://localhost:3000/usuarios', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    })

    if (!respuesta.ok) {
        throw new Error('Error al registrar usuario')
    }

    return await respuesta.json()
}

/* ---------- INVENTARIO ---------- */

export const obtenerInventarioProductor = async (usuarioId) => {
    const { data } = await API.get('/inventario', { params: { usuarioId } })
    return data
}

export const registrarInventario = async (nuevoProducto) => {
    const { data } = await API.post('/inventario', nuevoProducto)
    return data
}

/* ---------- PUBLICACIONES ---------- */

export const guardarPublicacion = async (publicacion) => {
    const { data } = await API.post('/publicaciones', publicacion)
    return data
}

export const obtenerPublicaciones = async (usuarioId) => {
    const { data } = await API.get('/publicaciones', { params: { usuarioId } })
    return data
}




