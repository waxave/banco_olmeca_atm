import { NEW_OPERATION_ENDPOINT } from "../constants"

const operationMapper = (operation) => {
  return {
    id: operation.id,
    concept: operation.concept,
    amount: operation.amount
  }
}

export function createOperation ({card, amount, kind}) {
  return fetch(NEW_OPERATION_ENDPOINT, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        operation: {
          account_id: card.accountId,
          concept: `New ${kind} for ${card.number}`,
          amount: amount,
          kind: kind,
          operationable_id: card.id
        }
      })
    }).then(response => response.json())
    .then(json => {
      if (json.error) throw new Error(json.error)
      if (json.withdrawal_error) throw new Error(json.withdrawal_error)

      return operationMapper(json)
    })
    .catch(error => {
      throw new Error(error)
    })
}
