import React from 'react'
import { useTable, usePagination } from 'react-table'
import './Table.scss';


const Table = ({ columns, data }) => {

    const { headerGroups, prepareRow, page, canPreviousPage, canNextPage, pageOptions,
    pageCount, gotoPage, nextPage, previousPage, setPageSize, state: { pageIndex, pageSize },
  } = useTable( { columns,data, initialState: { pageIndex: 0, pageSize: 25 }, }, usePagination )

  return (
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
                    <tr key={`${i}`}>
                    {row.cells.map(cell => <td {...cell.getCellProps()}>{cell.render('Cell')}</td>)}
                    </tr>
                )
                })}
            </tbody>
        </table>

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
            <div className="pagination-item pagination-select">
                <select className="comm-select" value={pageSize} onChange={e => {setPageSize(Number(e.target.value))}} >
                    {[25, 50].map(pageSize => (
                        <option key={pageSize} value={pageSize}> 
                            Show {pageSize}
                        </option>
                    ))}
                </select>
            </div>
      </div>
    </div>
  )
}

export default Table