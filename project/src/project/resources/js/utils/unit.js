export function makeUnit(value, unit = 'px') {
    return value + unit;
}

export function calcAOB(a, o, b){
    return `calc(${a} ${o} ${b})`
}

export const mU = makeUnit;