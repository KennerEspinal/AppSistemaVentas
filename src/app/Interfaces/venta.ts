import { DetalleVenta } from "./detalle-venta"

export interface Venta {
    idVenta?: number,
    numeroDocumento?: string,
    idCliente?: string,
    nomCliente?: string,
    tipoPago: string,
    fechaRegistro?: string,
    totalTexto: string,
    detalleVenta: DetalleVenta[]
}
