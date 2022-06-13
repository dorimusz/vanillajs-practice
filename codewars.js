const animalObj = { name: "dog", legs: 4, color: "white" }

function animal(obj) {
    console.log(obj.name)
    return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
}

console.log(animal(animalObj))