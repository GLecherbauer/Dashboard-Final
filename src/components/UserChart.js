import React from 'react';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.nombre_completo}</td>
                    <td>{props.email}</td>
                    <td>{props.categoria}</td>
                    <td>{props.nombre_usuario}</td>
                    <td>
                    </td>
                    <td></td>
                </tr>
            )
    }
    

export default ChartRow;