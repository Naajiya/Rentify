import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import AddItems from '../component/AddItems'
import Header from '../component/Header';
import { deleteProduct, getAllProduct } from '../../../services/allApi';
import SERVER_URL from '../../../services/serverUrl';
import EditItem from '../component/EditItem';



function Items() {  

    const [allproduct, setAllproduct] = useState()
    // console.log(allproduct)




    useEffect(() => {
        getAllProductTable()
    }, [allproduct])

    const getAllProductTable = async () => {
        

        try {

            const res = await getAllProduct()

            if (res.status == 200) {
                console.log('its response')
                setAllproduct(res.data)
                // console.log(allproduct)
                // console.log(res.data.imgOne)    
            }

        } catch (err) {
            console.log(err)
        }
    }

    const handleDelete =async(pid)=>{
        try{
            const result = await deleteProduct(pid)

            if(result.status == 200){
                getAllProductTable()
            }
        }catch(err){
            console.log(err)
        }
    }

    return (
        <>
            <Header />
            <div className='p-3'>
                <div className='d-flex justify-content-between align-items-end bg-light p-4 w-100'>
                    <div className='w-50'>
                        <input type="search" className='form-control w-100' placeholder='search by product name' style={{fontSize:'12px'}} />
                    </div>
                    <AddItems />
                </div>

                <div className='p-3'>
                    <Table striped responsive bordered hover className=''>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Product </th>
                                <th>Price</th>
                                <th>Category</th>
                                <th>Product Details</th>
                                <th>Size</th>
                                <th>img</th>
                                <th>Available</th>
                                <th><i class="fa-solid fa-trash"></i></th>
                                <th><i class="fa-solid fa-file-pen"></i></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allproduct?.
                                    map(pro => (    
                                        <tr>
                                            <td></td>
                                            <td>{pro.name}</td>
                                            <td>{pro.price}</td>
                                            <td> {Object.keys(pro.category).filter(category => pro.category[category])}</td>
                                            <td>{pro.description}</td>
                                            <td> {Object.keys(pro.size).filter(size => pro.size[size]).join(', ')}</td>
                                            <td><img src={`${SERVER_URL}/uploads/${pro.imgOne}`} alt="" style={{height:'80px', width:'100px'}} /></td>
                                            <td>{pro.availability ? 'available': 'not available'}</td>
                                            <td><i onClick={()=>handleDelete(pro?._id)} class="fa-solid fa-xmark"></i></td>
                                            <td><EditItem/></td>
                                        </tr>
                                    ))


                            }
                        </tbody>
                    </Table>
                </div>

            </div>
        </>
    )
}

export default Items