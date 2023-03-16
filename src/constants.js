const CLEAN_SPACES_CARD = '   '
const CLEAN_SPACES_PIN = '        '
const CARD_PLACEHOLDER = '1   1   1   1   -   2   2   2   2   -   3   3   3   3   -   4   4   4   4'
const PIN_PLACEHOLDER = '1        2        3        4'
const AUTH_CARD_ENDPOINT = `${import.meta.env.VITE_BANCO_OLMECA_API}/cards/auth`
const NEW_OPERATION_ENDPOINT = `${import.meta.env.VITE_BANCO_OLMECA_API}/operations`
const CARDS_ENDPOINT = `${import.meta.env.VITE_BANCO_OLMECA_API}/cards/`

const BANK_ACTIONS = {
  BANK: 'BANK',
  DEPOSIT: 'DEPOSIT',
  WITHDRAWAL: 'WITHDRAWAL'
}

const OPERATIONS = {
  DEPOSIT: 'deposit',
  WITHDRAWAL: 'withdrawal'
}

export {
  CLEAN_SPACES_CARD,
  CLEAN_SPACES_PIN,
  AUTH_CARD_ENDPOINT,
  BANK_ACTIONS,
  NEW_OPERATION_ENDPOINT,
  OPERATIONS,
  CARDS_ENDPOINT,
  CARD_PLACEHOLDER,
  PIN_PLACEHOLDER
}
