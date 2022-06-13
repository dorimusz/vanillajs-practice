/* Implemented an instance method on the Character Class which returns the base damage; then implemented a static method on the class which returns the character with the highest current attack. */

class Character {
    constructor(name, health, baseDamage, type) {
        this.name = name
        this.health = health
        this.baseDamage = baseDamage
        this.type = type
    }
    getCurrentDamage() {
        let percentage = this.baseDamage;
        if (this.type === 'barbarian' && this.health < 20) {
            percentage = 150 / 100 * percentage
            return percentage
        }
        else return this.baseDamage
    }
}

const c1 = new Character("Conan", 20, 1500, "barbarian")
const c2 = new Character("Thor", 100, 1500, "ranger")
const c3 = new Character("Lengar", 5, 1100, "barbarian")
const c4 = new Character("Hulk", 100, 1400, "paladin")


class CharacterFinder {
    static getMostDangerous(characters) {
        let highestCurrentAttack = 0;
        let dangerousCharacter = 0;

        if (characters.length === 0) return null;

        for (const character of characters) {
            let attackDamage = character.getCurrentDamage();
            if (attackDamage > highestCurrentAttack) {
                highestCurrentAttack = character.getCurrentDamage();
                dangerousCharacter = character
            }
        }
        return dangerousCharacter
    }
}

// console.log(c1.getCurrentDamage())
console.log(CharacterFinder.getMostDangerous([c1, c2, c3, c4]))