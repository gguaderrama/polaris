import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default () => {
    return (
        <table className="navigation-redes">
            <tbody>
                <tr>
                    <td>
                        <a
                            href="https://www.facebook.com/loadtraininglab/"
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={['fab', 'facebook']} />
                        </a>
                    </td>
                    <td>
                        <a
                            href="https://www.instagram.com/LoadTrainingLab/"
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={['fab', 'instagram']} />
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}
