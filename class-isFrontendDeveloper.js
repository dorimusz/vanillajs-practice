class Developer {
    constructor(knownLanguages, minWage) {
        this.knownLanguages = knownLanguages
        this.minWage = minWage
    }
    isFrontendDeveloper() {
        if (this.knownLanguages.includes('html') && this.knownLanguages.includes('css') && this.knownLanguages.includes('js')) return true
        else return false
    }
}

const d1 = new Developer(["html", "css", "js", "java"], 3000)
const d2 = new Developer(["html", "css", "python", "java"], 2000)
const d3 = new Developer(["html", "css", "js", "java"], 2000)


class HR {
    constructor(maxWage) {
        this.maxWage = maxWage
    }
    canHire(developer) {
        let canBeHired = developer.isFrontendDeveloper();
        if (canBeHired && developer.minWage < this.maxWage) return true
        else return false
    }
}

const hr1 = new HR(2500)
const hr2 = new HR(10000)

// console.log(d3.isFrontendDeveloper());
console.log(hr1.canHire(d1))
console.log(hr1.canHire(d2))
console.log(hr2.canHire(d1))
console.log(hr2.canHire(d2))
