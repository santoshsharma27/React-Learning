function AccordionItem({ title, body, isOpen, setIsOpen }) {
  return (
    <div className="border border-black">
      <div
        className="flex cursor-pointer justify-between bg-slate-200 p-2 font-bold"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        <span>{title}</span>
        <span>🔽</span>
      </div>
      {isOpen && <div className="p-5">{body}</div>}
    </div>
  );
}

export default AccordionItem;
