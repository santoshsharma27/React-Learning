import { useState } from "react";
import AccordionItem from "./AccordionItem";

const data = [
  {
    title: "Accordion Item #1",
    description:
      "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
    id: 1,
  },
  {
    title: "Accordion Item #2",
    description:
      "This is the second item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
    id: 2,
  },
  {
    title: "Accordion Item #3",
    description:
      "This is the third item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
    id: 3,
  },
];

function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="m-auto w-[50%]">
      <h1 className="text-center text-2xl font-extrabold">Accordion</h1>
      {data.map((item, index) => (
        <AccordionItem
          key={item.id}
          title={item.title}
          description={item.description}
          isOpen={index === openIndex}
          toggleIsOpen={() => {
            setOpenIndex(index === openIndex ? null : index);
          }}
        />
      ))}
    </div>
  );
}

export default Accordion;
