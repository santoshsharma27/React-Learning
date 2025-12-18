import { useEffect, useState } from "react";
import "./App.css";
import QueueForm from "./components/QueueForm";
import QueueDisplay from "./components/QueueDisplay";

export default function App() {
  const [queue, setQueue] = useState(() => {
    try {
      const storedQueue = localStorage.getItem("queue");
      return storedQueue ? JSON.parse(storedQueue) : [];
    } catch (error) {
      console.error("Failed to load queue from localstorage", error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("queue", JSON.stringify(queue));
    } catch (error) {
      console.error("Failed to save queue to localstorage", error);
    }
  }, [queue]);

  //Sync across tabs
  useEffect(() => {
    const handleStorage = (e) => {
      if (e.key === "queue") {
        try {
          const newQueue = JSON.parse(e.newValue || "[]");
          setQueue(newQueue);
        } catch (error) {
          console.error("Failed to parse queue from localstorage", error);
        }
      }
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

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
