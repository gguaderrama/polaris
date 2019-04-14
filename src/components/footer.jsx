import React from 'react'
import Text from './text'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from '../assets/negro2.png'

export default props => {
    return (
        <table className="footer">
            <tbody>
                <tr>
                    <td className="footer-social" valign="middle">
                        <p>
                            <a href="./#/legal" target="_blank">
                                Aviso de privacidad
                            </a>
                            <a href="./#/legal" target="_blank"> |
                                Términos y condiciones
                            </a>
                            <a href="./#/legal" target="_blank"> |
                                Reglamento
                            </a>
                            <br /> 2019 LOAD Todos los derechos reservados
                        </p>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}
