import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import AddItems from '../component/AddItems'
import Header from '../component/Header';
import { deleteProduct, getAllProduct } from '../../../services/allApi';
import SERVER_URL from '../../../services/serverUrl';
import EditItem from '../component/EditItem';

function Items() {

    const [allproduct, setAllproduct] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');


    const[updateSucc,setUpdateSucc]=useState('')

    const [productChanged,setProductChanged]=useState('')
    useEffect(()=>{
        getAllProductTable();
    },[])

    useEffect(()=>{
        getAllProductTable()
    },[productChanged,updateSucc])

    // useEffect(() => {
    //     getAllProductTable();
    // }, [productChanged]); // Empty dependency array to avoid infinite loop

    const getAllProductTable = async () => {
        try {
            const res = await getAllProduct();
            if (res.status === 200) {
                setAllproduct(res.data);
            }
        } catch (err) {
            console.log(err);
        }
    };

    const handleDelete = async (pid) => {
        try {
            const result = await deleteProduct(pid);
            if (result.status === 200) {
                getAllProductTable();
            }
        } catch (err) {
            console.log(err);
        }
    };

    const filteredProducts = allproduct.filter(pro => {
        const nameMatch = pro.name.toLowerCase().includes(searchQuery.toLowerCase());
        const categoryMatch = Array.isArray(pro.category)
            ? pro.category.some(cat => cat.toLowerCase().includes(searchQuery.toLowerCase()))
            : pro.category.toLowerCase().includes(searchQuery.toLowerCase());

        return nameMatch || categoryMatch;
    });

    return (
        <>
            <Header />
            <div className="p-3">
                <div className="d-flex justify-content-between align-items-end bg-light p-4 w-100">
                    <div className="w-50">
                    <input 
                            type="search" 
                            className="form-control w-100" 
                            placeholder="Search by product name or category" 
                            style={{ fontSize: '12px' }} 
                            onChange={(e) => setSearchQuery(e.target.value)} 
                        />
                    </div>
                    <AddItems setProductChanged={setProductChanged}/>
                </div>

                <div className="p-3">
                    <Table  responsive bordered hover>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Category</th>
                                <th>Product Details</th>
                                <th>Size</th>
                                <th>Image</th>
                                <th>Available</th>
                                <th><i className="fa-solid fa-trash"></i></th>
                                <th><i className="fa-solid fa-file-pen"></i></th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredProducts.map(pro => (
                                <tr key={pro._id}>
                                    <td></td>
                                    <td>{pro.name}</td>
                                    <td>{pro.price}</td>
                                    <td>{Array.isArray(pro.category) ? pro.category.join(", ") : "No category available"}</td>
                                    <td>{pro.description}</td>
                                    <td>{Array.isArray(pro.size) ? pro.size.join(", ") : "No size available"}</td>
                                    <td><img src={`${SERVER_URL}/uploads/${pro.imgOne}`} alt="" style={{ height: '80px', width: '100px' }} /></td>
                                    <td>{pro.instock}</td>
                                    <td><i onClick={() => handleDelete(pro._id)} className="fa-solid fa-xmark"></i></td>
                                    <td><EditItem pro={pro} setUpdateSucc={setUpdateSucc} /></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    );
}

export default Items;
