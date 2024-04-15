"use client";
import React, { ReactNode, useMemo, useState } from "react";
import {
  HiAdjustmentsVertical,
  HiDocumentArrowDown,
  HiMagnifyingGlass,
} from "react-icons/hi2";
import GridElementHeader from "./GridElementHeader";

import {
    Column,
    ColumnDef,
    PaginationState,
    Table,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
  } from '@tanstack/react-table'
import { Stock } from "../mockData";
import { HiChevronUp, HiChevronDown, HiChevronDoubleLeft , HiChevronDoubleRight, HiChevronLeft , HiChevronRight   } from "react-icons/hi2";
import { COLORS } from "../utils";





const Table = ({data}:{data:Stock[]}) => {  
    const [fdata,setFData] = useState<Stock[]>(data)
    const columns:ColumnDef<Stock>[] = useMemo<ColumnDef<Stock>[]>(
        () => [
          {
            accessorKey: 'name',
            id: 'name',
            header: () => 'Ticker',
            cell: info => info.getValue(),
            footer: props => props.column.id,
          },
          {
            accessorFn: row => row.rank,
            id: 'rank',
            cell: info => info.getValue(),
            header: () => "Rank",
            footer: props => props.column.id,
          },
          {
            accessorKey: 'return',
            cell: info => `${info.getValue()}%`,
            id: 'return',
            header: () => 'Return',
            footer: props => props.column.id,
          },
        ],
        []
      )
    
    
    const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  })
    const [searchTerm, setSearchTerm] = useState<string>("")

    const filterTable = (term:string) => {
        table.getAllColumns().forEach(c=>{c.setFilterValue(term)})
        setSearchTerm(term)
    }

  const table = useReactTable({
    columns,
    data:fdata,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    //no need to pass pageCount or rowCount with client-side pagination as it is calculated automatically
    state: {
      pagination,
    },
    // autoResetPageIndex: false, // turn off page index reset when sorting or filtering
  })
  const Header = ():ReactNode => 
  <div className="flex gap-2">
    <div className="flex bg-bg2 border-2 border-bg3 rounded-xl gap-2 p-2 min-w-12 h-12">
      <HiMagnifyingGlass size={32} className="ml-2" />
      <input
        className="bg-transparent text-base font-normal w-full p-2 focus:outline-none"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e)=>filterTable(e.target.value)}
        // onClick={e => e.stopPropagation()}
      />
    </div>
    <button className="bg-bg2 border-2 border-bg3 hover:bg-bg3 transition-colors rounded-xl text-lg group font-bold p-2 w-12 h-12 flex items-center justify-center">
      <HiAdjustmentsVertical
        size={32}
        className="fill-txt2 group-hover:fill-txt1"
      />
    </button>
    <button className="bg-bg2 border-2 border-bg3 hover:bg-bg3 transition-colors rounded-xl text-lg group font-bold p-2 w-12 h-12 flex items-center justify-center">
      <HiDocumentArrowDown
        size={30}
        className="fill-txt2 group-hover:fill-txt1"
      />
    </button>
  </div>
;
  return (
    <>
      <GridElementHeader title={"Asset Classes"} rightElement={<Header/>} />
      <div className="border border-bg3 rounded-2xl overflow-hidden ">
      <table className="w-full h-full">
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id} >
                <th className="p-2 max-h-1/5 w-16 bg-bg2 pl-4">

                </th>
              {headerGroup.headers.map(header => {
                return (
                  <th key={header.id} colSpan={header.colSpan} className="px-6 py-2 font-bold text-txt1 bg-bg2 text-lg">
                    <div
                      {...{
                        className: header.column.getCanSort()
                          ? 'cursor-pointer select-none flex gap-2 items-center'
                          : '',
                        onClick: header.column.getToggleSortingHandler(),
                      }}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {{
                        asc: <HiChevronUp />,
                        desc: <HiChevronDown />,
                      }[header.column.getIsSorted() as string] ?? null}
                    </div>
                  </th>
                )
              })}
            </tr>
          ))}
        </thead>
        <tbody className="border-bg3 rounded-2xl overflow-hidden w-full h-full">
          {table.getPaginationRowModel().rows.map(row => {
            return (
              <tr key={row.id} className="max-h-1/5 even:bg-bg2/60 odd:bg-bg2/30 ">
              <td className="p-2 max-h-1/5 w-16 pl-4" ><div
                key={`cell-${row.index}`}
                style={{ backgroundColor: COLORS[row.index] }}
                className="w-4 h-4 min-h-4 min-w-4 rounded-full"
              />
              </td>
                {row.getVisibleCells().map(cell => {
                  return (
                    <td key={cell.id} className="px-6 py-2 max-h-1/5 :nth-child(2)" >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table></div>
      <div className="flex items-center w-full justify-end gap-4 text-txt2">
        <button
          className="group  bg-bg2 border-2 border-bg3 hover:bg-bg3 transition-colors rounded-lg p-1"
          onClick={() => table.firstPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <HiChevronDoubleLeft 
        className="fill-txt2 group-hover:fill-txt1"/>
        </button>
        <button
          className="group bg-bg2 border-2 border-bg3 hover:bg-bg3 transition-colors rounded-lg p-1"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <HiChevronLeft
        className="fill-txt2 group-hover:fill-txt1"/>
        </button>
        <button
          className="group bg-bg2 border-2 border-bg3 hover:bg-bg3 transition-colors rounded-lg p-1"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          
          <HiChevronRight
        className="fill-txt2 group-hover:fill-txt1"/>
        </button>
        <button
          className="group bg-bg2 border-2 border-bg3 hover:bg-bg3 transition-colors rounded-lg p-1"
          onClick={() => table.lastPage()}
          disabled={!table.getCanNextPage()}
        >
          
          <HiChevronDoubleRight
        className="fill-txt2 group-hover:fill-txt1"/>
        </button>
        <span className="flex items-center gap-1 text-sm text-txt2">
          <div>Page</div>
            <span className="font-bold text-txt1">{table.getState().pagination.pageIndex + 1} </span>
            of{' '}
            {table.getPageCount().toLocaleString()}
        </span>
        <span className="flex items-center gap-3 text-sm">
          | Go to page:
          <input
            type="number"
            min={1}
            max={table.getPageCount()}
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              table.setPageIndex(page)
            }}
            className="border border-bg3 text-txt1 p-1 px-2 rounded-lg w-16 bg-bg2"
          />
        </span>
        {/* <select
            className="border border-bg3 p-1 rounded w-32 bg-bg2"
          value={table.getState().pagination.pageSize}
          onChange={e => {
            table.setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select> */}
      </div>
    </>
  );
};
function Filter({
    column,
    table,
  }: {
    column: Column<any, any>
    table: Table<any>
  }) {
    const firstValue = table
      .getPreFilteredRowModel()
      .flatRows[0]?.getValue(column.id)
  
    const columnFilterValue = column.getFilterValue()
    console.log(table.getAllColumns());
  
    return typeof firstValue === 'number' ? (
      <div className="flex space-x-2" onClick={e => e.stopPropagation()}>
        <input
          type="number"
          value={(columnFilterValue as [number, number])?.[0] ?? ''}
          onChange={e =>
            column.setFilterValue((old: [number, number]) => [
              e.target.value,
              old?.[1],
            ])
          }
          placeholder={`Min`}
          className="w-24 border shadow rounded"
        />
        <input
          type="number"
          value={(columnFilterValue as [number, number])?.[1] ?? ''}
          onChange={e =>
            column.setFilterValue((old: [number, number]) => [
              old?.[0],
              e.target.value,
            ])
          }
          placeholder={`Max`}
          className="w-24 border shadow rounded"
        />
      </div>
    ) : (
      <input
        className="w-36 border shadow rounded"
        onChange={e => column.setFilterValue(e.target.value)}
        onClick={e => e.stopPropagation()}
        placeholder={`Search...`}
        type="text"
        value={(columnFilterValue ?? '') as string}
      />
    )
  }
export default Table;
