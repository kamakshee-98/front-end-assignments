import React from 'react'
import './Addsales.css'
import { Link} from 'react-router-dom';


const Addsales = () => {

    return (
        <div>
            <div className='container'>
                {/* Heading */}
                <h2 className='text-center mt-3'>ADD SALES ENTRY</h2>
                {/* form */}
                <form >
                    <div className="mb-3"> {/* Product Name */}
                        <label className="form-label">Product Name</label>
                        <input type="text" className="form-control" id="exampleInputProductName1" />
                    </div>
                    <div className="mb-3"> {/* Quantity */}
                        <label className="form-label">Quantity</label>
                        <input type="text" className="form-control" id="exampleInputQuantity1" />
                    </div>
                    <div className="mb-3"> {/* Amount */}
                        <label className="form-label">Amount</label>
                        <input type="int" className="form-control" id="exampleInputQuantity2" />
                    </div>
                    {/* Button */}
                    <div className='d-grid'>
                        <button type='submit' className='btn btn-primary'>
                            <Link to='/sales' className='text-dark'>Submit</Link></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Addsales