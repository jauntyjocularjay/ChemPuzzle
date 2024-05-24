







class Atom {
    PERIOD = [
        {capacity: 0},   // PERIOD[0]
        {capacity: 2},   // PERIOD[1]
        {capacity: 10},  // PERIOD[2]
        {capacity: 18},  // PERIOD[3]
        {capacity: 36},  // PERIOD[4]
        {capacity: 54},  // PERIOD[5]
        {capacity: 86},  // PERIOD[6]
        {capacity: 118}, // PERIOD[7]
    ]

    P = Atom.PERIOD

    constructor(numberOfElectrons){
        this.nucleus = {
                protons: 0,
                neutrons: 0
            }
        
        this.cloud = new ElectronCloud(numberOfElectrons)
        


    }
}

class ElectronCloud {

    constructor(numberOfElectrons){
        const level = (numberOfElectrons) => {
            if(numberOfElectrons > Atom.P[6].capacity && numberOfElectrons <= Atom.P[7].capacity){
                return 7
            } else if(numberOfElectrons > Atom.P[5].capacity){
                return 6
            } else if(numberOfElectrons > Atom.P[4].capacity){
                return 5
            } else if(numberOfElectrons > Atom.P[3].capacity){
                return 4
            } else if(numberOfElectrons > Atom.P[2].capacity){
                return 3
            } else if(numberOfElectrons > Atom.P[1].capacity){
                return 2
            } else if(numberOfElectrons > Atom.P[0].capacity){
                return 1
            } else {
                throw new RangeError(`Number Of Electrons cannot be less than 0 or greater than ${Atom.P.findLast()}, as level ${Atom.P.length-1} is the maxiumum level of known elements`)
            }
        }
        this.orbitals = []

        /**
         * @todo finish electron distribution
         */
        while(numberOfElectrons > 0){
            Orbital.ORDER.forEach(orbital => {
                if(this.level === 7){

                }
            })
       }
    }
}

class Orbital {
    TYPE = {
        s: {
            capacity: 2,
            period: 1 
        },
        p: {
            capacity: 6,
            period: 2
        },
        d: {
            capacity: 10,
            period: 4
        },
        f: {
            capacity: 14,
            period: 6
        }
    }
    // Shortand field
    T = Orbital.TYPE
    orbitalOrder =  [Orbital.TYPE.s, Orbital.TYPE.f, Orbital.TYPE.d, Orbital.TYPE.p]

    constructor(OrbitalType, levelInt){
        this.level = levelInt
        this.type = OrbitalType
        this.contains = 0
    }
}

class SOrbital extends Orbital {
    constructor(levelInt){
        super(Orbital.TYPE.s, levelInt)
    }
}

class POrbital extends Orbital {
    constructor(levelInt){
        super(Orbital.TYPE.p, levelInt)
    }
}

class DOrbital extends Orbital {
    constructor(levelInt){
        super(Orbital.TYPE.d, levelInt)
    }
}

class FOrbital extends Orbital {
    constructor(levelInt){
        super(Orbital.TYPE.f, levelInt)
    }
}




















