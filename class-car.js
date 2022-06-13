/* A instance method implemented on the Car Class, which returns true if the car is clean, and has at least 50 kms. A static method is implemented on the CarFinder class  which receives an array of things and returns the number of the available brands. */


class Car {
    constructor(brand, isClean, approxRang) {
        this.brand = brand
        this.isClean = isClean
        this.approxRang = approxRang
    }
    isAvailable() {
        if (this.isClean && this.approxRang >= 50) return true
        else return false
    }
}

const c1 = new Car("Opel", true, 100)
const c2 = new Car("BMW", true, 100)
const c3 = new Car("Honda", true, 100)
const c4 = new Car("BMW", true, 100)
const c5 = new Car("BMW", true, 40)
const c6 = new Car("BMW", false, 100)


class CarFinder {
    static getAvailable(cars, brand) {
        let result = 0;
        for (const car of cars) {
            let carToUse = car.isAvailable();
            if (carToUse === true && car.brand === brand) {
                result = result + 1
            }
        }
        return result
    }
}


/*
class Car {
    constructor(brand, isClean, approxRang) {
        this.brand = brand
        this.isClean = isClean
        this.approxRang = approxRang
    }
    isAvailable() {
        return (this.isClean && this.approxRang >= 50)
    }
}

const c1 = new Car("Opel", true, 100)
const c2 = new Car("BMW", true, 100)
const c3 = new Car("Honda", true, 100)
const c4 = new Car("BMW", true, 100)
const c7 = new Car("BMW", true, 100)
const c5 = new Car("BMW", true, 40)
const c6 = new Car("BMW", false, 100)


class CarFinder {
    static getAvailable(cars, brand) {
        let result = 0;
        for (const car of cars) {
            if ((car.brand === brand) && (car.isAvailable())) {
                result++;
            }
        }
        return result
    }
}
*/

let arr = [1, 2, 3]

console.log(arr.splice(1, 0, 4))


// console.log(c1.isAvailable())
// console.log(CarFinder.getAvailable([c1, c2, c3, c4, c5, c6], "BMW"))