import React from "react";
import { Divider, Col, Row, Table, Typography, Input, Pagination } from "antd";
import { FilterOutlined, SearchOutlined } from "@ant-design/icons";

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
        }}
      >
        <Col span={12}>
          <Row>
            <Col span={3}>
              <Typography style={{ fontSize: "8px" }}>
                <FilterOutlined /> Filters{" "}
              </Typography>
            </Col>
            <Col span={7}>
              <Typography style={{ fontSize: "8px", fontWeight: "lighter" }}>
                Order Data ,july2020,2024
              </Typography>
            </Col>
            <Col span={4}>
              <Typography style={{ fontSize: "8px", fontWeight: "lighter" }}>
                Customer
              </Typography>
            </Col>
            <Col span={4}>
              <Typography style={{ fontSize: "8px", fontWeight: "lighter" }}>
                Clear all
              </Typography>
            </Col>
          </Row>
        </Col>
        <Row>
          <Col span={20}>
            <Input
              size="large"
              placeholder="Search"
              prefix={<SearchOutlined />}
            />
          </Col>
        </Row>

    
      </Row>

      <Table
        pagination={false}
        style={{ flexDirection: "row-reverse"}}
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
