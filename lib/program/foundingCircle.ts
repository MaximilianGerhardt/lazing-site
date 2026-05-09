export type ProgramRole = "creator" | "developer" | "builder";

export const programRoles: Array<{
  value: ProgramRole;
  label: string;
  badge: string;
}> = [
  { value: "creator", label: "Creator", badge: "Founding Creator" },
  { value: "developer", label: "Developer", badge: "Founding Developer" },
  { value: "builder", label: "Builder", badge: "Founding Builder" },
];

export const programRoleLabels: Record<ProgramRole, string> = {
  creator: "Founding Creator",
  developer: "Founding Developer",
  builder: "Founding Builder",
};

export const programRoleNotes: Record<ProgramRole, string> = {
  creator:
    "You want to turn repeatable expertise into packs, routines, lenses or audience systems.",
  developer:
    "You want to build adapters, pack tools, trace surfaces, evals or runtime integrations.",
  builder:
    "You want to run early systems, report friction and prove workflows in real use.",
};

export const programRoleTracks: Record<ProgramRole, "creator" | "developer" | "builder"> = {
  creator: "creator",
  developer: "developer",
  builder: "builder",
};
