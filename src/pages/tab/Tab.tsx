import { Tabs, Layout, Col, Row, Divider, Typography } from "antd";
import ReadyToShip from "./readyTpShip/ReadyToShip";
import INProgress from "./inProgress/INProgress";
import Hold from "./hold/Hold";
import Finished from "./finished/Finished";
import { Children, useState } from "react";
import ContentINProgress from "./inProgress/ContentINProgress";

interface Props {}

function Tab(props: Props) {
  const { TabPane } = Tabs;
  const { Header, Footer, Sider, Content } = Layout;
  function callback(key: string) {
    console.log(key);
  }
  const {} = props;
  const [activeTab, setActiveTab] = useState("1");
  return (
    <>
      <Content>
        <Row justify="center">
          <Col span={16}>
            <Tabs
              defaultActiveKey="1"
              onChange={(key) => {
                setActiveTab(key);
              }}
              tabBarStyle={{
                backgroundColor: "#FFFFFF",
                display: "flex",
                flexDirection: "column",
                marginBottom: "0px",
                paddingLeft: "5px",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
                alignItems: "flex-start",
              }}
              tabBarGutter={50}
            >
              <TabPane
                tab={<Typography>ready to ship</Typography>}
                key="1"
                style={{ backgroundColor: "#FFFFFF" }}
              >
                <ReadyToShip />
              </TabPane>

              <TabPane tab={<Typography>In Progress</Typography>} key="2">
                <>
                  <INProgress />
                </>
              </TabPane>

              <TabPane tab={<Typography>on hold</Typography>} key="3">
                <Hold />
              </TabPane>
              <TabPane tab={<Typography>finished</Typography>} key="4">
                <Finished />
              </TabPane>
            </Tabs>
            <Divider />
          </Col>
        </Row>
      </Content>
    </>
  );
}

export default Tab;
