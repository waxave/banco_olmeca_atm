import { AUTH_CARD_ENDPOINT, CARDS_ENDPOINT } from "../constants"

const cardMapper = (card) => {
  return {
    id: card.id,
    number: card.number,
    expirationMonth: card.expiration_month,
    expirationYear: card.expiration_year,
    kind: card.kind,
    balance: card.balance,
    accountId: card.account_id,
  }
}

export function authCard ({ cardNumber, cardPin }) {
  return fetch(AUTH_CARD_ENDPOINT, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        number: cardNumber,
        pin: cardPin
      })
    }).then(response => response.json())
    .then(json => {
      if (json.error) throw new Error(json.error)

      return cardMapper(json)
    })
    .catch(error => {
      throw new Error(error)
    })
}


export function fetchCard (id) {
  return fetch(`${CARDS_ENDPOINT}${id}`)
    .then(response => response.json())
    .then(json => {
      if (json.error) throw new Error(json.error)

      return cardMapper(json)
    })
    .catch(error => {
      throw new Error(error)
    })
}
