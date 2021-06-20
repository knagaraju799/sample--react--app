import React, { useEffect, useMemo } from "react";
import "./ProjectSummaryTable.scss";
import { useTable, usePagination } from "react-table";
import { COLUMNS } from "./columns";
import IsEmpty from "../../common/components/IsEmpty";
import IsError from "../../common/components/IsError";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const ProjectSummaryTable = (props) => {
  const { rowData, isError, isEmpty } = props;
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => rowData);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    usePagination
  );

  const {
    page,
    nextPage,
    previousPage,
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    pageOptions,
    state,
    canNextPage,
    canPreviousPage,
    setPageSize,
  } = tableInstance;

  const { pageIndex } = state;

  useEffect(() => {
    setPageSize(5);
  }, []);

  return (
    <div className="projectSummaryTable">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        {isError ? (
          <IsError />
        ) : isEmpty ? (
          <IsEmpty />
        ) : (
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps({
                          style: {
                            minWidth: cell.column.minWidth,
                            width: cell.column.width,
                          },
                        })}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        )}
      </table>
      <div className="projectSummaryTable--Pagination">
        <span className="projectSummaryTable--Pagination--PageCount">
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <button
          className="navButton"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          <NavigateNextIcon className="prevButton" />
        </button>
        <button
          className="navButton"
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          <NavigateNextIcon />
        </button>
      </div>
    </div>
  );
};

export default ProjectSummaryTable;
