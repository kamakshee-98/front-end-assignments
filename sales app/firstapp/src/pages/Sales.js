import React from 'react'

const Sales = () => {
    return (
        <div>
            <div className='container'>
                {/* Heading */}
                <h2 className='text-center mt-3'>TOP 5 SALES</h2>
                {/* table for top 5 product sale */}
                <table className="table table-columns">
                    <thead>
                        <tr>
                            {/* table title */}
                            <th scope="col">#</th>
                            <th scope="col">Sales id</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Sales Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {/* table 1 */}
                            <th scope="row">1</th>
                            <td>s1212</td>
                            <td>Laptop</td>
                            <td>2</td>
                            <td>90000</td>
                        </tr>
                        <tr>
                            {/* table 2 */}
                            <th scope="row">2</th>
                            <td>s1223</td>
                            <td>Mobile</td>
                            <td>5</td>
                            <td>85000</td>
                        </tr>
                       
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Sales