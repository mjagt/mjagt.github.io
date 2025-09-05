const coords = []

export function someFunction(name) {
    console.log(`Hello, ${name}!`);
}

export function readCoords() {
    coords.forEach(coord => 
        console.log(coord)
    )
}

export function writeCoords(obj) {
    coords.push(obj);
}

