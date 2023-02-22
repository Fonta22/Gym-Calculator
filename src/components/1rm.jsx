import React, { useState } from 'react';
import { percentages, calculate1RM } from '../scripts/1rm.ts';

const RM = () => {
    const getLabels = () => {
        let labels = [];
        for (let i = 1; i <= 12; i++) {
            labels.push(i + 'RM');
        }
        return labels;
    }

    const defaultValues = calculate1RM(50, 8);

    const [values, setValues] = useState(defaultValues);
    const [labels, setLabels] = useState(getLabels());


    console.log(percentages, values, values.slice(8));
    return (
        <div>
            <br />
            <h2>1RM Calculator</h2>
            <br />
            <table>
                <tbody>
                    <tr>
                        <td className="data-td">Weight</td>
                        <td>
                            <input type="number" className="form-control" placeholder='Weight (KG)' />
                        </td>
                    </tr>
                    <tr>
                        <td className="data-td">Reps</td>
                        <td>
                            <input type="number" className="form-control" placeholder='Reps' />
                        </td>
                    </tr>
                </tbody>
            </table>
            <br />
            <button type="button" className="btn btn-primary">Submit</button>
            <br />
            <br />
            <table className='table table-dark'>
                <tbody>
                    {[[0, 4], [4, 8], [8, 12]].map((limit, i) => {
                            return (<>
                                <tr>
                                    {labels.slice(limit[0], limit[1]).map((value, i) => {
                                        return <td><b>{value}</b></td>
                                    })}
                                </tr>
                                <tr>
                                   {percentages.slice(limit[0], limit[1]).map((value, i) => {
                                        return <td color='#FFF'>{value}%</td>
                                    })}
                                </tr>
                                <tr>
                                    {values.slice(limit[0], limit[1]).map((value, i) => {
                                        return <td id={(i + 1) + 'rm'}>{value}</td>
                                    })}
                                </tr>
                                <tr>&nbsp;</tr>
                            </>)
                    })}
                </tbody>
            </table>            
        </div>
    );
}

export default RM;