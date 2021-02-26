# U Develop It
[![Issues](https://img.shields.io/github/issues/deckiedevs/u-develop-it)](https://github.com/deckiedevs/u-develop-it/issues) [![Issues](https://img.shields.io/github/contributors/deckiedevs/u-develop-it)](https://github.com/deckiedevs/u-develop-it/graphs/contributors) 

## Description
A Node.js application using Express and Sqlite3 to manage candidates, parties, and votes for the company "U Develop It".

## Contents
* [Installation](#Installation)
* [Questions](#Questions)
* [Credits](#Credits)
    
## Installation
Clone down the repository and run `npm i` in the command line.  

## Usage
In the command line, run `sqlite3 db/database.db` then `.open db/election.db`.  Close the SQLite terminal and run the schema from the command line with `sqlite db/election.db < db/schema.sql`.  The tables can also be seeded by running `sqlite3 db/election.db < db/seeds.sql`.  Queries to the database can then be conducted through the SQLite terminal.

## Questions
If you have any questions about the repo, please [open an issue](https://github.com/deckiedevs/u-develop-it/issues) or contact me via email at deckiedevs@gmail.com. You can find more of my work on my GitHub, [deckiedevs](https://github.com/deckiedevs/).