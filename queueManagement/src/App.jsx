import { useEffect, useState } from "react";
import "./App.css";
import QueueForm from "./components/QueueForm";
import QueueDisplay from "./components/QueueDisplay";

export default function App() {
  const [queue, setQueue] = useState(() => {
    const storedQueue = localStorage.getItem("queue");
    return storedQueue ? JSON.parse(storedQueue) : [];
  });

  useEffect(() => {
    localStorage.setItem("queue", JSON.stringify(queue));
  }, [queue]);

  const addToQueue = (customer) => {
    setQueue((prevQueue) => [
      ...prevQueue,
      { ...customer, id: Date.now(), status: "waiting" },
    ]);
  };

  const updateStatus = (id, newStatus) => {
    setQueue((prevQueue) =>
      prevQueue.map((customer) =>
        customer.id === id ? { ...customer, status: newStatus } : customer
      )
    );
  };

  const removeFromQueue = (id) => {
    setQueue((prevQueue) => prevQueue.filter((customer) => customer.id !== id));
  };

  return (
    <div className="app">
      <header>
        <h1>Queue Management Application</h1>
        <p>Manage your customers efficiently</p>
      </header>
      <main>
        <QueueForm onAdd={addToQueue} />
        <QueueDisplay
          queue={queue}
          onUpdateStatus={updateStatus}
          onRemove={removeFromQueue}
        />
      </main>
    </div>
  );
}
