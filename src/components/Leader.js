import React from 'react'
import "./css/Leader.css";

const Leader = (props) => {
    return (
        <div>
            <div className="card text-center bg_lol mt-3">
                <div className="card-body">
                    <table className="table table-fixed text-light">
                        <thead>
                            <tr>
                                <th scope="col" className="col-2">#</th>
                                <th scope="col" className="col-6">Countries</th>
                                <th scope="col" className="col-4">Cases</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.countries.map(({ country, cases }, index) => (
                                <tr key={index}>
                                    <td className='col-2'>{index + 1}</td>
                                    <td className='col-6'>{country}</td>
                                    <td className='col-4'><strong>{cases}</strong></td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Leader
