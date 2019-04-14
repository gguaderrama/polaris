import React from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import es from 'date-fns/locale/es'
registerLocale('es', es)

const Date = props => {
    return (
        <div className="date-input">
            <label className="text-label">Fecha de nacimiento</label>
            <DatePicker
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                locale="es"
                dateFormat="dd-MM-YYYY"
                placeholderText="DD/MM/YYYY"
                selected={props.value}
                onChange={props.onChange}
            />
        </div>
    )
}

export default Date
