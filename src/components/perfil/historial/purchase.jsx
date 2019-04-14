import React from 'react'
import moment from 'moment'
import md5 from 'md5'

export default props => {
    return (
        <div className="clase-individual">
            <p>
                {moment(props.purchase.conektaTransaction.createdAt).format(
                    'LLLL'
                )}
            </p>
            <br />
            <p>
                <strong>Código de compra: </strong>
                {props.purchase.conektaTransaction.code}
            </p>
            <p>
                <strong>Total:</strong> ${' '}
                {props.purchase.conektaTransaction.amount.toFixed(2)}
            </p>
            <a onClick={() => props.getDetalleCompra(props.purchase)}>
                Ver detalle
            </a>
            {props.purchase.pdfFile ? (
                <a
                    className="fact"
                    href={props.purchase.pdfFile}
                    target="_blank"
                >
                    Descargar Factura
                </a>
            ) : (
                ''
            )}
        </div>
    )
}
