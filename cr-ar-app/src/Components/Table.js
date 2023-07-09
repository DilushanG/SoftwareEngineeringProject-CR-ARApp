import React from "react";
import "../Styles/TableStyles.css";

function Table({list, colNames, width = 'auto', height = 'auto'}) {
    return (
        <div className="body">
            {list.length > 0 && (
                <table cellSpacing="40px" className="table-heading">
                    <thead className="t-heading">
                        <tr>
                            {colNames.map((headerItem, index) => (
                                <th key={index}>
                                    {headerItem.toUpperCase()}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {Object.values(list).map((obj, index) => (
                            <tr key={index}>
                                {Object.values(obj).map((value,index2) => (
                                    <td key={index2}>
                                        {value}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default Table;