import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./src/navigation";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
export default function App() {
  return (
    <SafeAreaProvider>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.dark}>
        <Navigation />
      </ApplicationProvider>
    </SafeAreaProvider>
  );
}
