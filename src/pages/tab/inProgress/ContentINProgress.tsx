import { Button, Col, Divider, Flex, Layout, Row } from "antd";
import { getModeForUsageLocation } from "typescript";
const { Header, Content } = Layout;
interface Props {}

function ContentINProgress(props: Props) {
  const {} = props;

  return (
    <>
      <Col span={24} style={{backgroundColor:'white' ,padding:'10px', marginBottom:'10px' ,borderRadius :'0 0 5px 5px'}}>
        <Button type="primary" style={{marginRight:'5px'}}>Default</Button>
        <Button type="primary" style={{marginRight:'5px'}}>Default</Button>
        <Button type="primary" style={{marginRight:'5px'}}>Default</Button>
        <Button type="primary" style={{marginRight:'5px'}}>Default</Button>
      </Col>
    </>
  );
}

export default ContentINProgress;
