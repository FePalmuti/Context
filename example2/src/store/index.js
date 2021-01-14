import ThemeProvider from "./theme";
import NumberContext from "./number";

export default function ({ children }) {
  return (
    <ThemeProvider>
      <NumberContext>
        {children}
      </NumberContext>
    </ThemeProvider>
  );
}
