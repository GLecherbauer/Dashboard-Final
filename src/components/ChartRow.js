import React from 'react';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.nombre_producto}</td>
                    <td>{props.marca_id}</td>
                    <td>{props.precio}</td>
                    <td>
                    </td>
                    <td></td>
                </tr>
            )
    }
    
        

export default ChartRow;