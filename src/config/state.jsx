export default {
    shoppingCart: {
        total: 0,
        subtotal: 0,
        impuestos: 0,
        impuesto: 16,
        shoppingCart: { orderItems: [] },
        shopping_cart_count: 0,
        code: '',
        metodopago: 0,
        modal: false,
        consulta: false,
        loading: false,
        shake: false,
        rfc: '',
        modal_membership: false,
        modal_membershiptwo: false,
    },
    promo : {
        visible: true
    },
    contactUs: {
        active: '/contactanos',
        surname: '',
        mensaje: '',
        confirm: '',
        valid_nombre: false,
        valid_email: false,
        valid_surname: false,
        valid_mensaje: false,
        valid_confirm: false,
        message_nombre: '',
        message_email: '',
        message_surname: '',
        message_mensaje: '',
        message_confirm: '',
        nombre_contact: '',
        email: '',
        captcha: false
    },
    coaches: {
        active: '/coaches',
        instructores: [],
        activo: 1,
        loading: true,
        instructor: {},
        schedule: []
    },
    event: {
        active: '/eventos',
        events: [],
        loading: false,
        view: 'list',
        event: {},
        query: false,
        alert: false
    }
}
