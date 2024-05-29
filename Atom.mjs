







class Atom {
    static PERIOD = [
        { capacity: 0n },   // PERIOD[0]
        { capacity: 2n },   // PERIOD[1]
        { capacity: 10n },  // PERIOD[2]
        { capacity: 18n },  // PERIOD[3]
        { capacity: 36n },  // PERIOD[4]
        { capacity: 54n },  // PERIOD[5]
        { capacity: 86n },  // PERIOD[6]
        { capacity: 118n }, // PERIOD[7]
    ]

    static P = Atom.PERIOD

    constructor(numberOfElectrons) {
        this.nucleus = {
            protons: 0n,
            neutrons: 0n
        }

        this.AtomicNumber = BigInt(numberOfElectrons)

        this.cloud = new ElectronCloud(this.AtomicNumber)



    }
}

class ElectronCloud {
    static orbitalReference = [
        [Orbital.TYPE.naught],
        [Orbital.TYPE.s],
        [Orbital.TYPE.s, Orbital.TYPE.p],
        [Orbital.TYPE.s, Orbital.TYPE.p],
        [Orbital.TYPE.s, Orbital.TYPE.d, Orbital.TYPE.p],
        [Orbital.TYPE.s, Orbital.TYPE.d, Orbital.TYPE.p],
        [Orbital.TYPE.s, Orbital.TYPE.f, Orbital.TYPE.d, Orbital.TYPE.p],
        [Orbital.TYPE.s, Orbital.TYPE.f, Orbital.TYPE.d, Orbital.TYPE.p]
    ].freeze()

    constructor(atomicNumber) {
        const level = (atomicNumber) => {
            if (numberOfElectrons > Atom.P[6].capacity && numberOfElectrons <= Atom.P[7].capacity) {
                return 7
            } else if (numberOfElectrons > Atom.P[5].capacity) {
                return 6
            } else if (numberOfElectrons > Atom.P[4].capacity) {
                return 5
            } else if (numberOfElectrons > Atom.P[3].capacity) {
                return 4
            } else if (numberOfElectrons > Atom.P[2].capacity) {
                return 3
            } else if (numberOfElectrons > Atom.P[1].capacity) {
                return 2
            } else if (numberOfElectrons > Atom.P[0].capacity) {
                return 1
            } else {
                throw new RangeError(`Number Of Electrons cannot be less than 0 or greater than ${Atom.P.findLast()}, as level ${Atom.P.length - 1} is the maxiumum level of known elements`)
            }
        }
        this.orbitals = []

        /**
         * @todo finish electron distribution
         */
        this.distributeElectrons(atomicNumber)

    }

    /**
     * @stub ElectronCloud.distributeElectrons
     */
    distributeElectrons(atomicNumber) {
        let numberOfElectrons = atomicNumber
        let period = 0
        ElectronCloud.orbitalReference.forEach(level => {
            level.forEach( orbital => {
                if(numberOfElectrons <= 0){
                    return
                } else if(numberOfElectrons > 0 && orbital.capacity < numberOfElectrons){
                    orbital.contains = numberOfElectrons
                    numberOfElectrons -= orbital.contains
                } else { // if(numberOfElectrons > 0 && orbital.capacity > numberOfElectrons){
                    orbital.contains = orbital.capacity
                    numberOfElectrons -= orbital.contains
                }
            })
            period++
        })

    }
}

class Orbital {
    static TYPE = {
        naught: {
            capacity: 0,
            initialPeriod: 0
        },
        s: {
            capacity: 2,
            initialPeriod: 1
        },
        p: {
            capacity: 6,
            initialPeriod: 2
        },
        d: {
            capacity: 10,
            initialPeriod: 4
        },
        f: {
            capacity: 14,
            initialPeriod: 6
        }
    }.freeze()
    // Shortand field
    static T = Orbital.TYPE
    static orbitalOrder = [Orbital.TYPE.s, Orbital.TYPE.f, Orbital.TYPE.d, Orbital.TYPE.p].freeze()

    constructor(OrbitalType=Orbital.TYPE.naught, period, contains=0) {
        this.period = period
        this.type = OrbitalType
        this.contains = contains
    }

    fill(numberOfElectrons) {
        if (numberOfElectrons >= this.type.capacity) {
            this.contains = this.type.capacity
        } else if (numberOfElectrons >= 0 && numberOfElectrons < this.type.capacity) {
            this.contains = numberOfElectrons
        } else {
            throw new RangeError(
                `Quantity of Electrons(${numberOfElectrons})` +
                `must be greater than zero`)
        }

        return numberOfElectrons - this.contains
    }
}

class SOrbital extends Orbital {
    constructor(levelInt) {
        super(Orbital.TYPE.s, levelInt)
    }
}

class POrbital extends Orbital {
    constructor(levelInt) {
        super(Orbital.TYPE.p, levelInt)
    }
}

class DOrbital extends Orbital {
    constructor(levelInt) {
        super(Orbital.TYPE.d, levelInt)
    }
}

class FOrbital extends Orbital {
    constructor(levelInt) {
        super(Orbital.TYPE.f, levelInt)
    }
}




















