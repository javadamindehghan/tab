import { Tabs, Flex, Layout, Col, Row } from "antd";

interface Props {}

function Tab(props: Props) {
  const { TabPane } = Tabs;
  const { Header, Footer, Sider, Content } = Layout;
  function callback(key: string) {
    console.log(key);
  }
  const {} = props;

  return (
    <>
      <Content>
        <Row justify="center">
          <Col span={12}>
            <Tabs
              defaultActiveKey="1"
              onChange={callback}
              tabBarStyle={{
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "#FFFFFF",
               
                padding: "20px",
                borderRadius:'10px'
              }}
              tabBarGutter={50}
            >
              <TabPane
                tab="ready to ship"
                key="1"
                style={{ backgroundColor: "#FFFFFF"}}
              >
                Content of Tab Pane 1
              </TabPane>

              <TabPane tab="in progress" key="2">
                Content of Tab Pane 2
              </TabPane>

              <TabPane tab="on hold" key="3">
                Content of Tab Pane 3
              </TabPane>
              <TabPane tab="finished" key="4">
                Content of Tab Pane 3
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </Content>
    </>
  );
}

export default Tab;
