// calculate formulas

function Brzycki(weight: number, reps: number): number {
    //=$A$2*(36/(37-$B$2))
    return weight * (36 / (37 - reps));
}

function Epley(weight: number, reps: number): number {
    //=$A$2*(1+($B$2/30))
    return weight * (1 + (reps / 30));
}

function Lander(weight: number, reps: number): number {
    //=(100*$A$2)/(101,3-(2,67123*$B$2))
    return (100 * weight) / (101.3 - (2.67123 * reps));
}

function OConner(weight: number, reps: number): number {
    //=$A$2*(1+(0,025*$B$2))
    return weight * (1 + (.025 * reps));
}

function Lombardi(weight: number, reps: number): number {
    //=$A$2*$B$2^0,1
    return weight * (reps ** .1);
}

function Mayhew(weight: number, reps: number): number {
    //=($A$2*$B$2*0,0333)+$A$2
    return (weight * reps * .0333) + weight;
}

function Wathen(weight: number, reps: number): number {
    //=($A$2*$B$2*0,0205)+$A$2
    return (weight * reps * .0205) + weight;
}

const getValues = (weight: number, reps: number): number[] => [
    Brzycki(weight, reps),
    Epley(weight, reps),
    Lander(weight, reps),
    OConner(weight, reps),
    Lombardi(weight, reps),
    Mayhew(weight, reps),

];

export const percentages: number[] = [1, .94, .92, .89, .87, .84, .82, .80, .78, .76, .75, .73];

export function calculate1RM(weight: number, reps: number): number[] {
    let values: number[] = getValues(weight, reps);

    let sum: number = 0;
    for (const value of values) {
        sum += value;
    }

    const rm = sum / values.length;

    values = [];
    for (const pct of percentages) {
        values.push(Math.round(rm * pct));
    }

    return values;
    /*[
        Math.round(rm),
        Math.round(rm * .94),
        Math.round(rm * .92),
        Math.round(rm * .89),
        Math.round(rm * .87),
        Math.round(rm * .84),
        Math.round(rm * .82),
        Math.round(rm * .80),
        Math.round(rm * .78),
        Math.round(rm * .76),
        Math.round(rm * .75),
        Math.round(rm * .73),
    ]*/
}