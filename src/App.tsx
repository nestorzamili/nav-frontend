import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <MantineProvider
      defaultColorScheme="light"
      theme={{
        primaryColor: "blue",
        defaultRadius: "sm",
      }}
    >
      <AppRouter />
    </MantineProvider>
  );
}

export default App;
