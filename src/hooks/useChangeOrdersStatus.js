
export const UseChangeOrdersStatus = (status) => {

    const getBadgeClass = (status) => {
        switch (status) {
          case 'Pendiente':
            return 'pending';
          case 'Procesando':
            return 'processing';
          case 'Enviado':
            return 'shipped';
          case 'Entregado':
            return 'delivered';
          default:
            return 'Pendiente';
        }
      };

    const orderStatus = getBadgeClass(status)

    return {
        orderStatus
    };
}


