import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/market")({
  component: Market,
});

function Market() {
  return (
    <div className="p-2">
      <h3 className="text-cyan-500">Market | Enian Combat!</h3>
    </div>
  );
}
