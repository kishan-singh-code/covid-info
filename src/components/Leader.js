import React from 'react'

const Leader = (props) => {
    return (
        <div>
            <div className="card mb-3 overflow-auto" style={{ height: "300px" }}>
                <div className="card-body">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Countries</th>
                                <th scope="col">Cases</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.countries.map(({ country, cases }, index) => (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{country}</td>
                                    <td><strong>{cases}</strong></td>
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
