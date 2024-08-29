import { Button, Col, Row, TableColumnsType, Typography } from "antd";
import TableAnt from "../../../components/TableAnt";
import ContentINProgress from "./ContentINProgress";

interface Props {}

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
    title: "Pickup Location",
    dataIndex: "PickupLocation",
  },
  {
    title: "Product",
    dataIndex: "Product",
  },
  {
    title: "Status",
    dataIndex: "Status",
    render: (text, record) => (
      <Button
        style={{ display: "flex", alignItems: "flex-end" }}
        onClick={() => console.log(record)}
      >
        <Typography>{`${text}`}</Typography>
        <Typography style={{ color: "grey", fontSize: "5" }}>IQD</Typography>
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
    PickupLocation: "Store West",
    Product: "Cod",
    Status: 20,
    Action: "Ship Now",
  },
  {
    key: "2",
    OrderDate: "9 Aug 24",
    OrderId: 42,
    Customer: "London No. 1 Lake Park",
    PickupLocation: "Store West",
    Product: "Cod",
    Status: 22,
    Action: "Ship Now",
  },
  {
    key: "3",
    OrderDate: "8 Aug 24",
    OrderId: 32,
    Customer: "Sydney No. 1 Lake Park",
    PickupLocation: "Store West",
    Product: "Cod",
    Status: 20,
    Action: "Ship Now",
  },
  {
    key: "4",
    OrderDate: "8 Aug 24",
    OrderId: 99,
    Customer: "Sydney No. 1 Lake Park",
    PickupLocation: "Store West",
    Product: "Cod",
    Status: 20,
    Action: "Ship Now",
  },
];

function INProgress(props: Props) {
  const {} = props;

  return (
    <>
      <ContentINProgress/>
      <TableAnt data={data} columns={columns} />
    </>
  );
}

export default INProgress;
