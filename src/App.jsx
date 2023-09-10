import { useState } from "react";
import "./style.css";

function App() {
  const [itemList, setItemList] = useState([]);
  const [inputText, setInputText] = useState("");

  function handleAdicionarItem() {
    const textoSemEspacos = inputText.trim();
    if (textoSemEspacos == "") return;
    const newItem = {
      id: Date.now(),
      itemLista: textoSemEspacos,
    };

    setItemList([...itemList, newItem]);
    setInputText("");
  }

  function handleDelete(item) {
    setItemList((prevList) => prevList.filter((lista) => lista.id != item.id));
  }

  return (
    <div className="container">
      <div>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={handleAdicionarItem} className="adicionarItem">
          Add
        </button>
      </div>

      <ul className="lista">
        {itemList.map((item) => (
          <li key={item.id} className="item">
            {item.itemLista}
            <button onClick={() => handleDelete(item)} className="excluirItem">
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
