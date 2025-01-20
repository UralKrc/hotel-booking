import Layout from "antd/es/layout";
import { Content } from "antd/es/layout/layout";
import { ThemeProvider } from "styled-components";
import "./App.css";
import MainRouter from "./Router/MainRouter";
import { theme } from "./Theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout className="layout" style={{ minHeight: "100vh" }}>
        <Content>
          <MainRouter />
        </Content>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
