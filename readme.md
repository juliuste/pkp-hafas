# pkp-hafas

**An API client for [_Polskie Koleje Państwowe (PKP)_](https://en.wikipedia.org/wiki/Polish_State_Railways), the major national transport provider in Poland.** It acts as a consistent and straightforward interface on top of a verbose API.

This project is actually a thin wrapper around [`hafas-client@5`](https://github.com/public-transport/hafas-client/tree/5#hafas-client). [Its docs](https://github.com/public-transport/hafas-client/tree/5/docs) document the API in general.

[![npm version](https://img.shields.io/npm/v/pkp-hafas.svg)](https://www.npmjs.com/package/pkp-hafas)
![ISC-licensed](https://img.shields.io/github/license/juliuste/pkp-hafas.svg)
![minimum Node.js version](https://img.shields.io/node/v/pkp-hafas.svg)


## Installing

```shell
npm install pkp-hafas
```


## API

Check [the docs for `hafas-client@5`](https://github.com/public-transport/hafas-client/tree/5/docs) as well as [its PKP-specific customisations](https://github.com/public-transport/hafas-client/blob/5/p/pkp/readme.md).


## Usage

```javascript
const hafas = require('pkp-hafas')
```

As an example, we will search for a route from *Kraków Główny* to *Wrocław Główny*. To get the station IDs, use [`locations(query, [opt])`](https://github.com/public-transport/hafas-client/blob/5/docs/locations.md).

```javascript
client.journeys('5100028', '5100069', {results: 1})
.then(({journeys}) => console.log(journeys[0]))
.catch(console.error)
```

```javascript
{
    type: "journey",
    legs: [
        {
            origin: {
                type: "stop",
                id: "5100028",
                name: "Kraków Główny",
                location: {
                    type: "location",
                    id: "5100028",
                    latitude: 50.067192,
                    longitude: 19.947423
                },
                products: {
                    high-speed-train: true,
                    long-distance-train: true,
                    regional-train: true,
                    bus: false
                }
            },
            destination: {
                type: "stop",
                id: "5100069",
                name: "Wrocław Główny",
                location: {
                    type: "location",
                    id: "5100069",
                    latitude: 51.098075,
                    longitude: 17.037084
                },
                products: {
                    high-speed-train: true,
                    long-distance-train: true,
                    regional-train: true,
                    bus: false
                }
            },
            arrival: "2020-03-13T05:00:00+01:00",
            plannedArrival: "2020-03-13T05:00:00+01:00",
            arrivalDelay: 0,
            departure: "2020-03-13T00:06:00+01:00",
            plannedDeparture: "2020-03-13T00:06:00+01:00",
            departureDelay: 0,
            reachable: true,
            tripId: "1|230049|0|51|12032020",
            line: {
                type: "line",
                id: "tlk36170",
                fahrtNr: "36170",
                name: "TLK36170",
                public: true,
                adminCode: "51IC__",
                mode: "train",
                product: "long-distance-train",
                operator: {
                    type: "operator",
                    id: "pkp-intercity",
                    name: "PKP Intercity"
                }
            },
            direction: null,
            arrivalPlatform: null,
            plannedArrivalPlatform: null,
            departurePlatform: null,
            plannedDeparturePlatform: null
        }
    ],
    refreshToken: "¶HKI¶T$A=1@O=Kraków Główny@L=5100028@a=128@$A=1@O=Wrocław Główny@L=5100069@a=128@$202003130006$202003130500$TLK36170$$1$"
}
```

## Related

Check [`hafas-client`'s related libs](https://github.com/public-transport/hafas-client/blob/master/readme.md#related).

## Contributing

If you **have a question**, **found a bug** or want to **propose a feature**, have a look at [the issues page](https://github.com/juliuste/pkp-hafas/issues).
