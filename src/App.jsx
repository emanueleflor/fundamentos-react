import { Header } from "./components/Header.module.css"
import { Button } from "./Button"
import "./components/Header.module.css"
import "./global.css"

export function App() {
  return (
    <div>
      <Header />
      <Button
        author="Leli Flor"
        content="Lorem ipsum"
      />
      <Button
        author="emanuele"
        content="Novo POST"
      />
    </div>
  );
}
