import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap/lib/Tab';

const Table = ({ tableData, headingColumns, title, breakOn = 'medium'}) => {
let tableClass = 'table-container_table';

if (breakOn === 'small') {
    tableClass += 'table-container_table--break-sm';
}else if (breakOn === 'medium') {
    tableClass += 'table-container_table--break-md';
}else if (breakOn === 'large') {
    tableClass += 'table-container_table--break-lg';
}


const data = tableData.map((row, index) => {

    let rowData= [];
    let i=0;
    for (const key in row) {
    rowData.push({
        key: headingColumns[i],
        val: row[key]
    });
    i++;

}
return < tr key ={index}>


{rowData.map((data,index) => <td key ={index} data-heading = {data.key}>{data.val} </td>)}
</tr>
});
    return (
        <div className= "table-container">
            <div className= "table-container_title">

                <h2>{title}</h2>
            </div>
            < table className={tableClass}>


                <thead>

                    <tr>
                        {headingColumns.map((col, index) => (

                            <th key ={index}>{col}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data}
                </tbody>


            </table>


        </div>
        
    );
}

Table.propTypes = { 
tableData: PropTypes.arrayOf(PropTypes.object).isRequired,
headingColumns: PropTypes.arrayOf(PropTypes.string).isRequired,
title: PropTypes.string.isRequired,
breakOn: PropTypes.oneOf ( ['small', 'medium', 'large'])
}
export default Table;