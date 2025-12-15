import { useEffect, useRef, useState } from "react";
import { FaUserPlus } from "react-icons/fa";

export default function QueueForm({ onAdd }) {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !service.trim()) return;

    onAdd({ name, service });
    setName("");
    setService("");

    // Focus again after submit
    inputRef.current?.focus();
  };

  return (
    <form className="queue-form" onSubmit={handleSubmit}>
      <h2>Add to Queue</h2>

      <div className="form-group">
        <input
          type="text"
          placeholder="Customer name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          ref={inputRef}
        />
      </div>

      <div className="form-group">
        <select value={service} onChange={(e) => setService(e.target.value)}>
          <option value="">Select Service</option>
          <option value="consultation">consultation</option>
          <option value="payment">payment</option>
          <option value="support">support</option>
        </select>
      </div>

      <button type="submit">
        <FaUserPlus /> Add Customer
      </button>
    </form>
  );
}
