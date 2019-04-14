import React from 'react'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider, InlineDatePicker } from 'material-ui-pickers'
import 'date-fns'
import es from 'date-fns/locale/es'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'

const materialTheme = createMuiTheme({
    overrides: {
        MuiInput: {
            underline: {
                '&:before': {
                    borderBottom: '1px solid #9b9b9b'
                },
                '&:after': {
                    borderBottom: '1px solid #fff'
                },
                '&:hover': {
                    borderBottom: '1px solid #9b9b9b'
                }
            }
        },
        MuiPickersToolbar: {
            toolbar: {
                backgroundColor: '#000'
            }
        },
        MuiPickersDay: {
            day: {
                color: '#000'
            },
            selected: {
                '&:hover': {
                    backgroundColor: '#444'
                },
                backgroundColor: '#000'
            },
            current: {
                color: '#333'
            }
        },
        MuiPickersModal: {
            dialogAction: {
                color: '#000'
            }
        },
        MuiPickersYear: {
            selected: {
                color: '#000'
            }
        },
        MuiIconButton: {
            // color: '#9b9b9b'
        }
    }
})

class DatePick extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedDate: props.value
        }
        this.handleDateChange = this.handleDateChange.bind(this)
    }

    handleDateChange(date) {
        this.props.onChange(date)
        this.setState({ selectedDate: date })
    }

    render() {
        const { classes } = this.props
        const { selectedDate } = this.state

        return (
            <MuiThemeProvider theme={materialTheme}>
                <div className="date-style">
                    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={es}>
                        <InlineDatePicker
                            keyboard
                            disableFuture
                            placeholder="dd/mm/yyyy"
                            margin="normal"
                            label="Fecha de nacimiento"
                            format="dd-MM-yyyy"
                            helperText=""
                            animateYearScrolling={false}
                            mask={value =>
                                value
                                    ? [
                                        /\d/,
                                        /\d/,
                                        '-',
                                        /\d/,
                                        /\d/,
                                        '-',
                                        /\d/,
                                        /\d/,
                                        /\d/,
                                        /\d/
                                    ]
                                    : []
                            }
                            value={selectedDate}
                            disableOpenOnEnter
                            onError={(_, error) => {}}
                            onChange={this.handleDateChange}
                        />
                    </MuiPickersUtilsProvider>
                    {this.props.valid ? (
                        <span className="info-text">{this.props.message}</span>
                    ) : (
                        ''
                    )}
                </div>
            </MuiThemeProvider>
        )
    }
}

export default DatePick
