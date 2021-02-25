
import { hostNode } from "../global/globales"

export const peticiones = async (url) => {
    let respuesta = await fetch (`${hostNode}${url}`)

    let obtener = await respuesta.json();
    return obtener;
}

