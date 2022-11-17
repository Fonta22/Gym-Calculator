type returnType = {
    cal: number,
    kcal: number,
    kj: number
}

type caloricFactor = 1 | 2;

/**
 * 
 * @param mass 
 * @param height 
 * @param caloricFactor 
 * @param romanian 
 * @param russian 
 * @returns 
 */
export function calculateCalories(
    mass: number,
    height: number,
    caloricFactor: caloricFactor,
    romanian: boolean,
    russian: boolean
): returnType {
    let calories: number = ((10 * mass) + (6.25 * height) - (5 * 18) + 5) * caloricFactor + 400;

    if (romanian) calories = calories * 3;
    if (russian) calories = calories * 4;

    return {
        cal: Math.round(calories),
        kcal: Math.round((calories / 1000) * 10) / 10,
        kj: Math.round((calories * .004184) * 10) / 10
    };
}