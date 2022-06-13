//returns the sum of the distance covered by the BMW, which have only two doors

let cars = [
    { brand: "Renault", doors: 2, distance: 150000 },
    { brand: "Opel", doors: 4, distance: 25000 },
    { brand: "BMW", doors: 2, distance: 75000 },
    { brand: "BMW", doors: 3, distance: 175000 },
    { brand: "Mercedes", doors: 5, distance: 35000 },
    { brand: "BMW", doors: 2, distance: 100000 },
]

const sumOfKmsBySmallBMWs = (cars) => {
    let sum = 0;

    for (let car of cars) {
        if (car.brand === 'BMW' && car.doors === 2) {
            sum = sum + car.distance
        }
    }


    return sum
}

console.log(sumOfKmsBySmallBMWs(cars))