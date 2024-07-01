export const formatAmount = (amount: number, rest?: Intl.NumberFormatOptions) =>
  new Intl.NumberFormat("es-AR", {
    style: "decimal",
    currency: "ARS",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    useGrouping: true,
    ...rest,
  }).format(amount);
