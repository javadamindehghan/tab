import React from "react";
import { Divider, Col, Row, Table, Typography, Input, Pagination } from "antd";
import { FilterOutlined, SearchOutlined } from "@ant-design/icons";
import Filter from "../Filter";
import MenuAnt from "./MenuAnt";

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
    <>
      <Row
        style={{
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "white",
          paddingTop: "20px",
        }}
      >
        <Col span={8} push={1}>
          <Filter />
        </Col>

        <Col span={16} >
          <Row>
            <Col span={4} push={8} style={{textAlign:'right'}}>
              <MenuAnt />
            </Col>
            <Col span={10} push={9}>
              <Input
                size="large"
                placeholder="Search"
                prefix={<SearchOutlined />}
              />
            </Col>
          </Row>
        </Col>
      </Row>

      <Table
        pagination={false}
        style={{ flexDirection: "row-reverse" }}
        rowSelection={{
          type: "checkbox",
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
      {/* <Row>
        <Col span={24} style={{backgroundColor:'white'}}><Divider/></Col>
      </Row> */}

      <Row>
        <Col
          span={24}
          style={{
            justifyContent: "flex-end",
            display: "flex",
            margin: "10px",
          }}
        >
          <Typography> total record {data.length}</Typography>
          <Pagination size="small" total={data.length} />
        </Col>
      </Row>
    </>
  );
};

export default TableAnt;
