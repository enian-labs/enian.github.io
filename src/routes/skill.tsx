import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/skill")({
  component: Skill,
});

function Skill() {
  return (
    <div className="p-2">
      <h3 className="text-purple-500">Skill | Enian Combat!</h3>
    </div>
  );
}
