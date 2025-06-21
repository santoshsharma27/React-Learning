import React, { useState } from "react";

type SelectProps<T> = {
  options: T[];
  value: T;
  onChange: (value: T) => void;
  getLabel: (option: T) => string;
  getKey: (option: T) => string | number;
};

function Select<T>({
  options,
  value,
  onChange,
  getLabel,
  getKey,
}: SelectProps<T>) {
  return (
    <select
      value={getKey(value)}
      onChange={(e) => {
        const selected = options.find(
          (opt) => getKey(opt).toString() === e.target.value,
        );
        if (selected) {
          onChange(selected);
        }
      }}
      className="rounded border px-3 py-2"
    >
      {options.map((opt) => (
        <option key={getKey(opt)} value={getKey(opt)}>
          {getLabel(opt)}
        </option>
      ))}
    </select>
  );
}

export default Select;

//////////////////////////////////

// App.tsx;

type User = {
  id: number;
  name: string;
};

const users: User[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

function App() {
  const [selectedUser, setSelectedUser] = useState(users[0]);

  return (
    <div className="space-y-4 p-6">
      <h2 className="text-xl font-semibold">Select a User</h2>
      <Select<User>
        options={users}
        value={selectedUser}
        onChange={(user) => setSelectedUser(user)}
        getLabel={(user) => user.name}
        getKey={(user) => user.id}
      />
      <p className="mt-4">Selected User: {selectedUser.name}</p>
    </div>
  );
}
