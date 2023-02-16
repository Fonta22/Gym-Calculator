import React, { useState } from 'react';
import { percentages, calculate1RM } from '../scripts/1rm.ts';

const RM = () => {
    console.log(calculate1RM(50, 8));
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
            {/*<div className="form-check">
                <input className="form-check-input" type="checkbox" id="check" />
                <label className="form-check-label" htmlFor="check">
                    Brzycki
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" id="check" />
                <label className="form-check-label" htmlFor="check">
                    Epley
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" id="check" />
                <label className="form-check-label" htmlFor="check">
                    Lander
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" id="check" />
                <label className="form-check-label" htmlFor="check">
                    O'Conner et al.
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" id="check" />
                <label className="form-check-label" htmlFor="check">
                    Lombardi
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" id="check" />
                <label className="form-check-label" htmlFor="check">
                    Mayhew et al.
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" id="check" />
                <label className="form-check-label" htmlFor="check">
                    Wathen
                </label>
            </div>*/}
            <br />
            <table className='table table-dark'>
                <tbody>
                    <tr>
                        <td><b>1RM</b></td>
                        <td><b>2RM</b></td>
                        <td><b>3RM</b></td>
                        <td><b>4RM</b></td>
                    </tr>
                    <tr>
                        {/*
                        #cc0000
                        #d5321b
                        #de4c31
                        #e66346
                        #ed775c
                        #f38b72
                        #f89f88
                        #fcb29f
                        #ffc5b6
                        #ffd8ce
                        #ffece6
                        #ffffff
                        */}
                        <td style={{color:'#cc0000'}}>100%</td>
                        <td style={{color:'#d5321b'}}>94%</td>
                        <td>92%</td>
                        <td>89%</td>
                    </tr>
                    <tr>
                        <td id='1rm'>0</td>
                        <td id='2rm'>0</td>
                        <td id='3rm'>0</td>
                        <td id='4rm'>0</td>
                    </tr>
                    <tr>e</tr>
                    <tr>
                        <td><b>5RM</b></td>
                        <td><b>6RM</b></td>
                        <td><b>7RM</b></td>
                        <td><b>8RM</b></td>
                    </tr>
                    <tr>
                        <td>87%</td>
                        <td>84%</td>
                        <td>82%</td>
                        <td>80%</td>
                    </tr>
                    <tr>
                        <td id='5rm'>0</td>
                        <td id='6rm'>0</td>
                        <td id='7rm'>0</td>
                        <td id='8rm'>0</td>
                    </tr>
                    <tr>e</tr>
                    <tr>
                        <td><b>9RM</b></td>
                        <td><b>10RM</b></td>
                        <td><b>11RM</b></td>
                        <td><b>12RM</b></td>
                    </tr>
                    <tr>
                        <td>78%</td>
                        <td>76%</td>
                        <td>75%</td>
                        <td>73%</td>
                    </tr>
                    <tr>
                        <td id='9rm'>0</td>
                        <td id='10rm'>0</td>
                        <td id='11rm'>0</td>
                        <td id='12rm'>0</td>
                    </tr>
                </tbody>
            </table>            
        </div>
    );
}

export default RM;