import React, { useState } from 'react';
import Select from 'react-select';
import { calculateCalories } from '../scripts/calories.ts';

const options = [
    { value: 1.2, label: 'No sport' },
    { value: 1.375, label: '1 to 3 days' },
    { value: 1.55, label: '3 to 5 days' },
    { value: 1.725, label: '6 to 7 days' },
    { value: 1.9, label: '2h per day' },
];

const Calories = () => {
    const defaultStats = {
        mass: 60,
        height: 180,
        caloricFactor: 1.375,
        romanian: false,
        russian: false
    }

    const [mass, setMass] = useState(defaultStats.mass);
    const [height, setHeight] = useState(defaultStats.height);
    const [caloricFactor, setCaloricFactor] = useState(defaultStats.caloricFactor);

    const [romanian, setRomanian] = useState(defaultStats.romanian);
    const [russian, setRussian] = useState(defaultStats.russian);

    const [calories, setCalories] = useState(calculateCalories(defaultStats.mass, defaultStats.height, defaultStats.caloricFactor));

    return (
        <div>
            <br />
            <h2>Calories Calculator</h2>
            <br />
            <table>
                <tbody>
                    <tr>
                        <td className="data-td">Mass (kg)</td>
                        <td>
                            <input
                                type="number"
                                title="mass"
                                className="form-control"
                                placeholder="Mass"
                                id="mass-inp"
                                onChange={e => setMass(parseInt(e.target.value))}
                                defaultValue={defaultStats.mass}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="data-td">Height (cm)</td>
                        <td>
                            <input
                                type="number"
                                title="height"
                                className="form-control"
                                placeholder="Height"
                                id="height-inp"
                                onChange={e => setHeight(parseInt(e.target.value))}
                                defaultValue={defaultStats.height}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="data-td">Sport / week</td>
                        <td>
                            <Select
                                value={options.value}
                                options={options}
                                defaultValue={options[1]}
                                onChange={e => setCaloricFactor(e.value)}
                            />
                        </td>
                    </tr>
                </tbody>
            </table> 
            <br />
            <div className="form-check">
                <input className="form-check-input" type="checkbox" id="romanian-check" checked={romanian} onChange={() => setRomanian(!romanian)} />
                <label className="form-check-label" htmlFor="romanian-check">
                    Romanian&nbsp;
                    <img className="flag-icon" src="./img/ro.png" alt="Romania Flag" />
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" id="russian-check" checked={russian} onChange={() => setRussian(!russian)} />
                <label className="form-check-label" htmlFor="russian-check">
                    Russian&nbsp;
                    <img className="flag-icon" src="./img/ru.png" alt="Russia Flag" />
                </label>
            </div>
            <br />
            <button type="button" className="btn btn-primary" onClick={() => setCalories(calculateCalories(mass, height, caloricFactor, romanian, russian))}>Submit</button>
            <br />
            <br />
            <table className="table table-dark">
                <tbody>
                    <tr>
                        <td>For bulking</td>
                        <td></td>
                        <td>{calories.cal} kcal</td>
                        {/*<td>{calories.kj} KJ</td>*/}
                    </tr>
                </tbody>
            </table>
            <br />
            {/*<div className="lang-links">
                <a href="index.html">English</a> /&nbsp;
                <a href="lang/ru.html">Русский</a> /&nbsp;
                <a href="lang/ca.html">Català</a> /&nbsp;
                <a href="lang/no.html">Norsk</a>
            </div>*/}
        </div>
    );
}

export default Calories;