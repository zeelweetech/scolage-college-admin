import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import ApplicantsList from "../../helper/ApplicantsList";
import { useState } from "react";
import { FilterMatchMode } from "primereact/api";
import { Dropdown } from "primereact/dropdown";
import { styled } from "styled-components";
import { FiMoreHorizontal } from "react-icons/fi";
import toast from "react-hot-toast";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const DatatableStyles = styled.div`
  /* padding: 0 26px 26px; */
  .p-rating .p-rating-item .p-rating-icon {
    color: #707070;
  }
  .p-rating .p-rating-item.p-rating-item-active .p-rating-icon {
    color: #fdd400;
  }

  .p-datatable .p-datatable-thead {
    position: relative;

    &::before {
      content: "";
      position: absolute;
      bottom: 7px;
      left: 0;
      height: 1px;
      width: 100%;
      background: #707070;
    }
  }

  .p-datatable .p-datatable-thead > tr > th {
    border-color: transparent !important;
    background: #fff;
  }

  .p-datatable .p-datatable-tbody tr {
    background: #fff;
    border: 2px solid transparent !important;
    border-top: none !important;
    border-radius: 20px !important;
    position: relative;
    z-index: 1;
  }

  .p-datatable .p-datatable-tbody tr.p-highlight {
    background: #fff;
    outline: 1px solid #60269e !important;
  }

  .p-datatable .p-datatable-tbody > tr > td {
    border: none !important;
  }

  .p-datatable .p-paginator-bottom {
    border: none !important;
  }

  .p-checkbox .p-checkbox-box {
    box-shadow: none !important;
  }

  .p-checkbox .p-checkbox-box.p-highlight {
    border-color: #60269e;
    background: #60269e;
  }

  .payment-status {
    background: #f6efff;
    border-radius: 12px;
    padding: 6px 38px 10px;
    font-weight: 400;
    font-size: 19px;
    line-height: 25px;
    text-transform: capitalize;

    &.paid {
      color: #60269e;
      background: #f6efff;
    }
    &.pending {
      color: #f9b035;
      background: #fff8eb;
    }
  }
  .onboard-status {
    font-weight: 400;
    font-size: 19px;
    line-height: 25px;
    text-transform: capitalize;

    &.applied {
      color: #2fc41e;
    }
    &.pending {
      color: #f96767;
    }
  }

  .p-paginator .p-dropdown {
    order: -1;
  }
  .p-paginator .p-paginator-first,
  .p-paginator .p-paginator-last {
    display: none;
  }
  .p-datatable.p-datatable-lg .p-datatable-header {
    background: none;
    border: none;
    padding-inline: 0;
  }

  /* fontWeight: 400, fontSize: "19px", lineHeight: "25px", color: "#707070" */
  .tableText {
    /* font-size: 19px;
      font-weight: 400 !important;
      line-height: 25px;
      color: #707070 !important; */
    color: #7a86a1 !important ;
    font-size: 15px;
    font-weight: 400 !important;
    line-height: normal;
    &.dark-text[role="cell"] {
      color: #212121 !important;
      font-weight: 600 !important;
    }

    .p-column-header-content {
      justify-content: center;
    }
  }

  @media (min-width: 768px) and (max-width: 1280px) {
    padding: 0;

    .p-datatable.p-datatable-lg .p-datatable-header {
      padding-inline: 0;
    }

    .tableText {
      font-size: 17px;
      line-height: 23px;
    }

    .p-datatable.p-datatable-lg .p-datatable-tbody > tr > td {
      padding: 14px;
    }
  }
`;

const SearchboxStyles = styled.div`
  /* margin: 0 52px 48px; */
  max-width: 500px;
  width: 500px;
  position: relative;

  input {
    border: 1px solid #707070;
    height: 45px;
    border-radius: 20px;
    padding: 18px 20px 18px 60px;
    font-weight: 400;
    width: 100%;
    font-size: 18px;
    line-height: 24px;
    outline: none;
    color: #000;
    &::placeholder {
      color: #7a86a1;
    }
  }

  label {
    pointer-events: none;
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
  }

  @media (min-width: 768px) and (max-width: 1280px) {
    input {
      padding: 12px 12px 12px 40px;
      font-size: 16px;
    }

    label {
      left: 12px;
      svg {
        width: 20px;
      }
    }
  }
`;

const TableHeaderStyles = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-between;

  .Theader-right {
    display: flex;
    align-items: center;
    gap: 28px;

    .filter-main {
      .p-dropdown {
        height: 45px;
        border-radius: 20px;
        box-shadow: none;
        border-color: #707070;
        align-items: center;

        .p-dropdown-label {
          padding-right: 0px;
        }
      }
    }

    button {
      width: 66px;
      height: 66px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #ffffff;
      border: 1px solid #707070;
      border-radius: 20px;
      filter: drop-shadow(1.389px 7.878px 29px rgba(105, 95, 151, 0.141));

      &:last-child {
        filter: none;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1280px) {
    .Theader-right {
      gap: 12px;

      button {
        width: 50px;
        height: 50px;
        border-radius: 15px;
      }
      .filter-main {
        .p-dropdown {
          height: 50px;
        }
      }
    }
  }
`;

const OptStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 10px;
    font-weight: 400;
    line-height: normal;
    background: #60269e;
    width: 64px;
    height: 24px;
    border-radius: 100px;
  }
`;

const StatusStyles = styled.p`
  padding-left: 18px;
  position: relative;
  &::before {
    content: "";
    width: 8px;
    height: 8px;
    background: purple;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    border-radius: 100px;
  }

  &.Accepted {
    &::before {
      background: #60269e;
    }
  }

  &.Pending {
    &::before {
      background: #f9b035;
    }
  }
  &.Rejected {
    &::before {
      background: #f96767;
    }
  }
`;

const StatusBody = (record) => {
  return <StatusStyles className={record.status}>{record.status}</StatusStyles>;
};

const ApplicantsTable = () => {
  const [record, setRecord] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const CollageId = localStorage.getItem("collegeProfileId");

  const getApplicantsList = async () => {
    try {
      const { data } = await axios.get(`/v2/studentlist/get/${CollageId}`);
      setRecord(data);
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    getApplicantsList();
  }, []);

  const optionButton = (record) => {
    const endpoint = record.applicationNo;
    return (
      <OptStyles>
        <Link to={`/applicants/${endpoint}`}>View</Link>
      </OptStyles>
    );
  };

  const getStatus = (record) => {
    switch (record.status) {
      case "applied":
        return "applied";

      case "pending":
        return "pending";

      case "rejected":
        return "rejected";

      default:
        break;
    }
  };

  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    //   name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    //   "country.name": { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    //   representative: { value: null, matchMode: FilterMatchMode.IN },
    //   status: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
  });

  const onGlobalFilterChange = (event) => {
    const value = event.target.value;
    let _filters = { ...filters };

    _filters["global"].value = value;

    setFilters(_filters);
  };

  const renderHeader = () => {
    const value = filters["global"] ? filters["global"].value : "";
    const [selectedFilter, setSelectedFilter] = useState(null);
    const Filter = [
      { name: "filter 1" },
      { name: "filter 2" },
      { name: "filter 3" },
      { name: "filter 4" },
    ];

    return (
      <TableHeaderStyles>
        <SearchboxStyles>
          <label htmlFor="search">
            <svg
              width="23"
              height="22"
              viewBox="0 0 23 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.826 20.246L18.195 16.711L18.109 16.582C17.9488 16.4249 17.7334 16.3369 17.509 16.3369C17.2847 16.3369 17.0692 16.4249 16.909 16.582C15.3989 17.947 13.4537 18.7321 11.4192 18.7976C9.38465 18.8632 7.39285 18.2049 5.79803 16.94C4.22402 15.7022 3.16757 13.9224 2.83477 11.9478C2.50198 9.97318 2.91668 7.94541 3.99801 6.26003C5.11146 4.55902 6.79462 3.31042 8.74548 2.73827C10.6963 2.16612 12.7872 2.30785 14.643 3.13802C16.4871 3.93096 17.9727 5.37791 18.814 7.20043C19.6553 9.02294 19.7928 11.0922 19.2 13.01C19.1561 13.1501 19.1507 13.2995 19.1845 13.4424C19.2183 13.5853 19.29 13.7164 19.392 13.822C19.4959 13.9293 19.6255 14.0081 19.7686 14.0508C19.9117 14.0936 20.0633 14.0988 20.209 14.066C20.3541 14.0348 20.4884 13.9659 20.5984 13.8662C20.7083 13.7664 20.7899 13.6394 20.835 13.498C21.546 11.2206 21.4017 8.762 20.4293 6.58333C19.4569 4.40466 17.7231 2.65554 15.553 1.66402C13.3683 0.629249 10.8898 0.393468 8.54916 0.99773C6.20849 1.60199 4.15388 3.00803 2.74304 4.97103C1.36847 6.91365 0.755396 9.29354 1.02032 11.6585C1.28524 14.0235 2.40969 16.2087 4.18002 17.799C5.97742 19.4194 8.28475 20.3605 10.7027 20.4595C13.1207 20.5585 15.4972 19.8091 17.421 18.341L20.636 21.471C20.7975 21.6255 21.0125 21.7118 21.236 21.7118C21.4596 21.7118 21.6745 21.6255 21.836 21.471C21.9137 21.3953 21.9757 21.305 22.0183 21.2053C22.061 21.1056 22.0835 20.9985 22.0847 20.89C22.0858 20.7816 22.0654 20.674 22.0248 20.5734C21.9842 20.4728 21.9241 20.3813 21.848 20.304L21.836 20.292L21.826 20.246Z"
                fill="black"
              />
            </svg>
          </label>
          <input
            type="text"
            id="search"
            value={value || ""}
            onChange={(e) => onGlobalFilterChange(e)}
            placeholder="Search"
          />
        </SearchboxStyles>

        <div className="Theader-right">
          <div className="filter-main">
            {/* <select placeholder="filter">
                     <option selected disabled>
                        filter
                     </option>
                     <option value="1">1</option>
                     <option value="2">2</option>
                  </select> */}
            <Dropdown
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.value)}
              options={Filter}
              optionLabel="name"
              placeholder="Filter"
              className="w-full md:w-14rem"
            />
          </div>
        </div>
      </TableHeaderStyles>
    );
  };

  const header = renderHeader();

  const CourseBody = (record) => {
    return record.course[0].subjectname;
  };

  const NameBody = (record) => {
    return record.studentname[0].name;
  };

  const LocationBody = (record) => {
    return record.student_detail[0].city;
  };

  return (
    <DatatableStyles>
      <DataTable
        value={record}
        size="large"
        paginator
        rows={8}
        rowsPerPageOptions={[5, 8, 10, 20, 50]}
        //   loading={loading}
        selection={selectedProducts}
        onSelectionChange={(e) => setSelectedProducts(e.value)}
        rowHover
        dataKey="applicationNo"
        header={header}
        filters={filters}
        onFilter={(e) => setFilters(e.filters)}
        tableStyle={{ minWidth: "700px", maxWidth: "948px" }}
      >
        <Column
          selectionMode="multiple"
          exportable={false}
          headerStyle={{ width: "3rem" }}
        ></Column>
        <Column
          className="tableText"
          style={{ textAlign: "left" }}
          headerStyle={{ width: "10rem" }}
          field="applicationNo"
          header="Application No"
        />
        <Column
          className="tableText dark-text"
          headerStyle={{ width: "116px", padding: 0 }}
          style={{ padding: 0 }}
          body={NameBody}
          header="Student Name"
        />
        <Column
          className="tableText dark-text"
          style={{ textAlign: "center" }}
          field="course"
          body={CourseBody}
          header="Course Applied for"
        />
        <Column
          className="tableText"
          style={{ textAlign: "center" }}
          body={LocationBody}
          header="Location"
        />
        <Column
          className="tableText"
          style={{ textAlign: "center" }}
          field="SSCResult"
          header="SSC Expected Result %"
        />
        <Column
          className="tableText"
          style={{ textAlign: "center" }}
          field="status"
          header="Status"
          body={StatusBody}
        />
        <Column
          className="tableText"
          body={optionButton}
          headerStyle={{ textAlign: "center" }}
          header={"View Profile Details"}
        />
      </DataTable>
    </DatatableStyles>
  );
};

export default ApplicantsTable;
