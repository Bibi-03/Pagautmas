export function currencyFormatter( value ) {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    });
  
    return formatter.format(value).replace('$', '₡');
  }
  