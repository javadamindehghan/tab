import { ConfigProvider } from "antd";
import Tab from "./pages/tab/Tab";

function App() {
  const theme = {
    components: {
      Table: {
        headerSplitColor: 'transparent'
      }
    },
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
