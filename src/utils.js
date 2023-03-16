export function cleanNumericInput (value) {
  return value?.replace(/w/g, '').replace(/[^0-9]/g, '')
}

export function formatMoney(amount) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return formatter.format(amount)
}
