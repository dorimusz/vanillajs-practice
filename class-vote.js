class Resident {
    constructor(name, age, hasRegistred = false) {
        this.name = name
        this.age = age
        this.hasRegistred = hasRegistred
    }

    canVote() {
        if (this.age > 17 && this.hasRegistred) return true
        else return false
    }
}

const person1 = new Resident("Bela", 18, true)
const person2 = new Resident("Lajos", 17, true)
const person3 = new Resident("Kazmer", 18, false)
const person4 = new Resident("Otto", 18, true)

class VoterCounter {
    static getNumberOfVoters(people) {
        let result = 0;
        for (let person of people) {
            let canVoteNow = person.canVote();
            if (canVoteNow) {
                result = result + 1
            }
        }
        return result
    }
}


// console.log(person1.canVote())
console.log(VoterCounter.getNumberOfVoters([person1, person2, person3, person4]))