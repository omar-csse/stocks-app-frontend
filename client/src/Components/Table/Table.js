import React from 'react'
import { useHistory } from 'react-router-dom'
import { useTable, usePagination } from 'react-table'
import './table.scss';


const Table = ({ classes, clickable, columns, data }) => {

    let history = useHistory();

    const { headerGroups, prepareRow, page, canPreviousPage, canNextPage, pageOptions,
        pageCount, gotoPage, nextPage, previousPage, state: { pageIndex },
    } = useTable( { columns,data, initialState: { pageIndex: 0, pageSize: 25 }, }, usePagination )

    const handleRow = (symbol) => history.push(`stock/${symbol}`)        

    return (
        <div className={`top-div-table ${classes}`}>
            <div className="comm-table">
                <table>
                    <thead>
                        <tr>
                            {headerGroups[0].headers.map(column => <th {...column.getHeaderProps()}>{column.render('Header')}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {page.map((row, i) => {
                            prepareRow(row)
                            return (
                                <tr key={`${row.original.symbol}`} onClick={clickable ? () => handleRow(row.original.symbol) : null}>
                                    {row.cells.map(cell => <td {...cell.getCellProps()}>{cell.render('Cell')}</td>)}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div className="pagination">
                <div className="pagination-item pagination-buttons">
                    <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}> {'<<'} </button>
                    <button onClick={() => previousPage()} disabled={!canPreviousPage}> {'<'} </button>
                    <button onClick={() => nextPage()} disabled={!canNextPage}> {'>'} </button>
                    <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}> {'>>'} </button>
                </div>
                <div className="pagination-item pagination-number">
                    <span className="pagenumber"> Page <strong> {pageIndex + 1} of {pageOptions.length} </strong></span>
                </div>
            </div>
        </div>
    )
}

export default Table