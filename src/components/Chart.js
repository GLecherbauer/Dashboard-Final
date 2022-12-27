import React, {useEffect, useState} from 'react';
import ChartRow from './ChartRow';


function Chart (){

    const [products, setProducts] = useState([])

    useEffect(() =>{
		
        fetch("/api/products")
        .then(response => response.json())
        .then(data => {
            
           setProducts(data)
        
        })
        .catch(error => console.log(error))
    
    },[])
    
    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Productos</th>
                                <th>ID</th>
                                <th>Precio</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                            products.map( ( row , i) => {
                                return <ChartRow { ...row} key={row.id}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;