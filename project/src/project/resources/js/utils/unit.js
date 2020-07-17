export function makeUnit(value, unit) {
    if (unit) {
        return value + unit;
    } else {
        if (typeof value === 'number') {
            unit = 'px';
        } else {
            let num = '' + parseInt(value);
            if (num.length !== value.length) {
                unit = value.slice(num.length);
                value = num;
            } else {
                unit = 'px';
            }
        }
    }
    return value + unit;
}

export function makeBorder(value, type = 'solid', color = 'black') {
    return `${mU(value)} ${type} ${color}`
}

export function calcAOB(a, o, b) {
    return `calc(${mU(a)} ${o} ${mU(b)})`
}

export function makeTransition() {
    let ret = '';
    for (let idx = 0; idx < arguments.length; idx++) {
        if (idx === 0) {
            ret += `${arguments[0]} 1s ease `;
        } else if (idx % 2 === 0) {
            ret += `, ${arguments[idx]} 1s ease `;
        } else {
            ret += `${arguments[idx]}s`;
        }
    }
    return ret;
}

export const mU = makeUnit;
export const mB = makeBorder;
export const mT = makeTransition;
