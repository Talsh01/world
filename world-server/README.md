# World Server

REST API for getting information about the world continents & countries from https://countries.trevorblades.com/

## Requirements

For development, you will only need Node.js and npm installed in your environement.

## API

### Get all continents

Get all continents data - Get request

> http://localhost:8080/api/getcontinents

### Get a list of countries by continent code

Get a list of countries by a continent - Post request
must provide continentcode in request body

> http://localhost:8080/api/getcountries


