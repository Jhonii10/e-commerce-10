
export const UseFormatAmount = () => {

    const formatAmount = (amount) => {
        return amount?.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      };

    return {

        // metodos
        formatAmount:formatAmount,

    }
}
