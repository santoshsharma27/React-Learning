function AccordionItem({ title, description, isOpen, setIsOpen }) {
  function handleToggle() {
    setIsOpen(isOpen != isOpen);
  }

  return (
    <div className="border-gray m-2 rounded-lg border">
      <div
        className="flex cursor-pointer justify-between bg-slate-200 p-6 font-bold"
        onClick={() => handleToggle()}
      >
        <span>{title}</span>
        <span>{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && <div className="p-5">{description}</div>}
    </div>
  );
}

export default AccordionItem;
