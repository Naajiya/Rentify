import React from 'react'
import Table from 'react-bootstrap/Table';
import AddItems from '../component/AddItems'
import Header from '../component/Header';



function Items() {
    return (
        <>
            <Header />
            <div className='p-3'>
                <div className='d-flex justify-content-end align-items-end bg-light p-2'>
                    <AddItems />
                </div>

                <div className='p-3'>
                    <Table striped bordered hover className=''>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Product </th>
                                <th>Price</th>
                                <th>Category</th>
                                <th>Product Details</th>
                                <th>Size</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            
                        </tbody>
                    </Table>
                </div>

            </div>
        </>
    )
}

export default Items