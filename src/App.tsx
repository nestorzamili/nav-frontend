import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <MantineProvider>
      <AppRouter />
    </MantineProvider>
  );
}

export default App;
