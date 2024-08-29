import React, { useState } from "react";
import { Divider, Radio, Table } from "antd";
import type { TableColumnsType } from "antd";
import { type } from "os";

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: any[]) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record: any) => ({}),
};

const TableAnt = ({ data, columns }: { data: any; columns: any }) => {


  return (
    <div>
      <Table
      style={{flexDirection:'row-reverse'}}
     
        rowSelection={{
          
          type: 'checkbox',
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      
      
      />
    </div>
  );
};

export default TableAnt;
