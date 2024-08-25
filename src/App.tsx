import { ConfigProvider } from "antd";
import Tab from "./Tab";

function App() {
  const theme = {
    token: {
      colorPrimary: "#F4EDAE",
      borderRadius: 2,

   
    
    },
  };
  return (
    <ConfigProvider theme={theme}>
      <>
        <Tab />
      </>
    </ConfigProvider>
  );
}

export default App;
