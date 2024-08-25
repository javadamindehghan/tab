import React, { useState } from "react";
import { DownOutlined, TruckOutlined } from "@ant-design/icons";
import type { GetProp, RadioChangeEvent, TableProps } from "antd";
import {  Space,  Table ,Button  } from "antd";


type SizeType = TableProps["size"];
type ColumnsType<T extends object> = GetProp<TableProps<T>, "columns">;
type TablePagination<T extends object> = NonNullable<
  Exclude<TableProps<T>["pagination"], boolean>
>;
type TablePaginationPosition = NonNullable<
  TablePagination<any>["position"]
>[number];
type ExpandableConfig<T extends object> = TableProps<T>["expandable"];
type TableRowSelection<T extends object> = TableProps<T>["rowSelection"];

interface DataType {
  key: number;
  OrderData: string;
  OrderId: number;
  customer: string;
  Quantity: number;
  TotalValue: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: "OrderData",
    dataIndex: "OrderData",
    sorter: true,
  },
  {
    title: "OrderId",
    dataIndex: "OrderId",
  
  },
  {
    title: "customer",
    dataIndex: "customer",
  },
  {
    title: "Quantity",
    dataIndex: "Quantity",
  },
  {
    title: "Total Value",
    dataIndex: "TotalValue",
  },
  {
    title: "Action",
    key: "action",
  
    render: () => (
      <Space size="middle">
      <Button style={{color:'black'}} type="primary">Ship Now <TruckOutlined /></Button>
      <Button style={{color:'black' , border:'solid 1px black'}}>...</Button>

      </Space>
    ),
  },
];

const data: DataType[] = [];
for (let i = 1; i <= 10; i++) {
  data.push({
    key: i,
    OrderData: "John Brown",
    OrderId: Number(`${i}2`),
    customer: `John Brown`,
    Quantity: 12,
    TotalValue: 1500,
  });
}



const TableAnt: React.FC = () => {
  const [size, setSize] = useState<SizeType>("large");
  const [showHeader, setShowHeader] = useState(true);
  const [rowSelection, setRowSelection] = useState<
    TableRowSelection<DataType> | undefined
  >({});
  const [hasData, setHasData] = useState(true);
  const [tableLayout, setTableLayout] = useState();
  const [top, setTop] = useState<TablePaginationPosition>("none");
  const [bottom, setBottom] = useState<TablePaginationPosition>("bottomRight");
  const [ellipsis, setEllipsis] = useState(false);
  const [yScroll, setYScroll] = useState(false);
  const [xScroll, setXScroll] = useState<string>();

  const handleSizeChange = (e: RadioChangeEvent) => {
    setSize(e.target.value);
  };

  const handleTableLayoutChange = (e: RadioChangeEvent) => {
    setTableLayout(e.target.value);
  };

  const handleEllipsisChange = (enable: boolean) => {
    setEllipsis(enable);
  };



  const handleHeaderChange = (enable: boolean) => {
    setShowHeader(enable);
  };

  const handleRowSelectionChange = (enable: boolean) => {
    setRowSelection(enable ? {} : undefined);
  };

  const handleYScrollChange = (enable: boolean) => {
    setYScroll(enable);
  };

  const handleXScrollChange = (e: RadioChangeEvent) => {
    setXScroll(e.target.value);
  };

  const handleDataChange = (newHasData: boolean) => {
    setHasData(newHasData);
  };

  const scroll: { x?: number | string; y?: number | string } = {};
  if (yScroll) {
    scroll.y = 240;
  }
  if (xScroll) {
    scroll.x = "100vw";
  }

  const tableColumns = columns.map((item) => ({ ...item, ellipsis }));
  if (xScroll === "fixed") {
    tableColumns[0].fixed = true;
    tableColumns[tableColumns.length - 1].fixed = "right";
  }

  const tableProps: TableProps<DataType> = {
    size,
    showHeader,
    rowSelection,
    scroll,
    tableLayout,
  };

  return (
    <>
      <Table
        {...tableProps}
        pagination={{ position: [top, bottom] }}
        columns={tableColumns}
        dataSource={hasData ? data : []}
        scroll={scroll}
      />
    </>
  );
};
export default TableAnt;
