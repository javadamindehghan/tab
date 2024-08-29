import React from "react";
import TableAnt from "../../../components/TableAnt";
import { Button, Col, Row, TableColumnsType, Typography } from "antd";
interface Props {}

const { Title } = Typography;
const columns: TableColumnsType<any> = [
  {
    title: "Order Date",
    dataIndex: "OrderDate",
    sorter: true,
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: "Order Id",
    dataIndex: "OrderId",
  },
  {
    title: "Customer",
    dataIndex: "Customer",
  },
  {
    title: "Quantity",
    dataIndex: "Quantity",
  },
  {
    title: "Total Value",
    dataIndex: "TotalValue",
    render: (text, record) => (
      <Button
        style={{ display: "flex", alignItems: "flex-end" }}
        onClick={() => console.log(record)}
      >
        <Typography>{`${text}`}</Typography>
        <Typography style={{ color: "gry", fontSize: "5" }}>IQD</Typography>
      </Button>
    ),
  },
  {
    title: "Action",
    dataIndex: "Action",
    render: (text, record) => (
      <>
        <Row>
          <Col
            span={24}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Button type="primary" onClick={() => console.log(record)}>
              <Typography>{`${text}`}</Typography>
            </Button>
            <Button>...</Button>
          </Col>
        </Row>
      </>
    ),
  },
];

const data: any[] = [
  {
    key: "1",
    OrderDate: "8 Aug 24",
    OrderId: 32,
    Customer: "New York No. 1 Lake Park",
    Quantity: 12,
    TotalValue: 20,
    Action: "Ship Now",
  },
  {
    key: "2",
    OrderDate: "9 Aug 24",
    OrderId: 42,
    Customer: "London No. 1 Lake Park",
    Quantity: 12,
    TotalValue: 22,
    Action: "Ship Now",
  },
  {
    key: "3",
    OrderDate: "8 Aug 24",
    OrderId: 32,
    Customer: "Sydney No. 1 Lake Park",
    Quantity: 12,
    TotalValue: 20,
    Action: "Ship Now",
  },
  {
    key: "4",
    OrderDate: "8 Aug 24",
    OrderId: 99,
    Customer: "Sydney No. 1 Lake Park",
    Quantity: 12,
    TotalValue: 20,
    Action: "Ship Now",
  },
];

function ReadyToShip(props: Props) {
  const {} = props;

  return (
    <>
      <Row style={{marginTop:'20px'}}>
        <Col span={24}>
        <TableAnt data={data} columns={columns} />
        </Col>
      </Row>
    </>
  );
}

export default ReadyToShip;
