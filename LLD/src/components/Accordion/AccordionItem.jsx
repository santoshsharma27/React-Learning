function AccordionItem({ index, title, description, curOpen, onOpen }) {
  const isOpen = index === curOpen;

  function handleToggle() {
    onOpen(isOpen ? null : index);
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
