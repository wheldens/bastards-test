
const barSchema = {
    name: "string",
    address: "string",
    drinks: "object",
};

const barObj = {
    name: "Jimmys drinks",
    address: "Somewhere over the rainbow",
    drinks: {
        beer: ["Straffe Hendrik", "Rochefort", "St Bernard"],
    },
};

const barObjF = {
    name: "Sjonnies",
    address: "Centrum 001",
    drinks: [
        // < No object
        "Heineken",
    ],
};

const carSchema = {
    brand: 'string',
    type: 'string',
    milage: 'number',
    extras: 'array',
};

const carObj = {
    brand: 'Mazda',
    type: 'MX5 NB 1.8',
    milage: 199999.99,
    extras: [
        '2001 Special Edition'
    ],
};

const carObjF = {
    brand: 'BMW',
    type: '335',
    milage: '100000', // < No number
    extras: [
        'LCI',
        'KW Coilovers',
    ],
};
const personSchema = {
    name: 'string',
    age: 'number',
    siblings: 'array',
    metaData: 'object',
    active: 'boolean',
 };

const personObj = {
    name: 'James',
    age: 25,
    siblings: ['Johnnathan'],
    metaData: {},
    active: true,
};

const personObjF = {
    name: 'James',
    age: 25,
    active: true,
};


const bar = {barSchema, barObj, barObjF};
const car = {carSchema, carObj, carObjF};
const person = {personSchema, personObj, personObjF};

export const testData = {bar, car, person};