import { TaskCard } from "./TaskCard";
import { useDroppable } from "@dnd-kit/core";

export function Column({ column, tasks }) {
  const { setNodeRef } = useDroppable({
    id: column.id,
  });

  return (
    <div className="flex w-80 flex-col rounded-lg bg-black p-4">
      <h2 className="mb-4 font-semibold text-white">{column.title}</h2>
      <div ref={setNodeRef} className="flex flex-1 flex-col gap-4">
        {tasks?.map((task) => {
          return <TaskCard key={task.id} task={task} />;
        })}
      </div>
    </div>
  );
}
