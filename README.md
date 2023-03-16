# Banco Olmeca App
Application that simulates a small bank ATM

# Installation

This app uses the **React** with **Ruby on Rails API** for the database

 - React version: 18.2.0
 - Node version: 18.15.0
 - Vite version: 4.1.0

## Install node.js
To install **node.js** i'm using [asdf](https://asdf-vm.com/guide/getting-started.html) version manager
```sh
asdf install
```
## Install application dependencies
```sh
# I'm using pnpm
npm install -g pnpm

# application dependencies
pnpm install

# Or you can use npm
npm install
```

## For the API
[Banco Olmeca Rails App](https://github.com/waxave/banco_olmeca/)

## Start the application
```sh
# I'm using pnpm
pnpm run dev

# Or you can use npm
npm run dev
```

# Navigating the app

Live url: [Banco Olmeca](https://atm.waxave.cc/)


## Login

To use the app you can use any card number from [Banco Olmeca API](https://banco-olmeca.waxave.cc/api/cards)

The PIN for all the cards is [9999]

## Login

![login to atm](./images/login.png)
## Dashboard

![home](./images/home.png)
## Operations

 - Deposit
![Deposit](./images/deposit.png)
 - Withdrawal
![Withdrawal](./images/withdrawal.png)
