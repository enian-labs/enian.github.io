import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/inventory")({
  component: Inventory,
});

function Inventory() {
  return (
    <div className="p-2">
      <h3 className="text-indigo-500">Inventory | Enian Combat!</h3>
    </div>
  );
}
