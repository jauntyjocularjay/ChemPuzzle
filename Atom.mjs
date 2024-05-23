




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
    ORBITAL = {
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
    
    // Shortand variable
    O = ElectronCloud.ORBITAL

    constructor(numberOfElectrons){
        const level = 0
        this.orbitals = []


        switch(numberOfElectrons){
            case (numberOfElectrons > 86):
                this.orbitals.concat([
                    new Orbital(),
                    new SOrbital(),
                    new SOrbital(),
                    new POrbital(),
                    new SOrbital(),
                    new POrbital(),
                    new SOrbital(),
                    new POrbital(),
                    new DOrbital(),
                    new SOrbital(),
                    new POrbital(),
                    new DOrbital(),
                ])
        }

        while(numberOfElectrons > 0){
            if(level[0] === 0){
                level++
            } else if (level[1]===1){
                numberOfElectrons = ElectronCloud.O.s.capacity - numberOfElectrons
            } else {
                throw new RangeError(`Theoretically there could be more atoms, but for now the capacity cannot exceed ${Atom.P.findLast().capacity}`)
            }
        }
    }
}

// Unneeded for now
class Period {
    constructor(){
        this.level = [
            {capacity: 0}, // level[0]
            {capacity: 2}, // level[1]
            {capacity: 10}, // level[2]
            {capacity: 18},
            {capacity: 36},
            {capacity: 54},
            {capacity: 86},
            {capacity: 118}
        ]
    }
}

class Orbital {
    orbitalOrder =  [Orbital.s, Orbital.f, Orbital.d, Orbital.p]

    constructor(capacity, levelInt){
        this.level = levelInt
        this.type = ''
        this.capacity = capacity
    }
}

class SOrbital extends Orbital {
    constructor(levelInt){
        super(2, levelInt)
        this.type = Orbital.s
    }
}























