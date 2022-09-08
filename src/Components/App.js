import CivTable from './CivTable.js';
import civs from "../JSON/Civilizaciones.json";

export default function App() {
  return (
    <div className="App">
      {
        civs.map(
          (civ) => <CivTable civ={civ}></CivTable>
        )
      }
    </div>
  );
}