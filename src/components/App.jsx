import { Header } from "./Header.jsx"
import { Button } from "../Button"
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
