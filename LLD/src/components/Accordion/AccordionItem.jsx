function AccordionItem({ title, description, isOpen, toggleIsOpen }) {
  return (
    <div
      className={`m-2 rounded-lg border ${
        isOpen ? "border-blue-500" : "border-gray-200"
      }`}
    >
      <div
        className="flex cursor-pointer justify-between bg-slate-200 p-6 font-bold"
        onClick={toggleIsOpen}
      >
        <span>{title}</span>
        <span>{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && <div className="p-5">{description}</div>}
    </div>
  );
}

export default AccordionItem;
