export type ReadinessSignal = {
  label: string;
  value: string;
  detail: string;
  state: "stable" | "watch" | "blocked";
};

export type ReviewRow = {
  look: string;
  asset: string;
  owner: string;
  readiness: "Ready" | "Review" | "Hold";
  signal: string;
  action: string;
};

export type ApprovalItem = {
  id: string;
  label: string;
  crop: string;
  status: "Approved" | "Retouch" | "Legal";
  note: string;
};

export type ProductionNote = {
  source: string;
  note: string;
  status: "Closed" | "Open";
};

export type EditorialAction = {
  title: string;
  owner: string;
  due: string;
  done: boolean;
};

export const collectionMeta = [
  ["Collection", "Monochrome Atelier"],
  ["Season", "Fall Editorial 2026"],
  ["Review window", "14 Jun - 18 Jun"],
  ["Publication target", "Digital cover package"],
];

export const readinessSignals: ReadinessSignal[] = [
  {
    label: "Runway looks",
    value: "18/24",
    detail: "six alternates need final sequencing",
    state: "watch",
  },
  {
    label: "Image approvals",
    value: "72%",
    detail: "cover selects cleared for layout",
    state: "stable",
  },
  {
    label: "Credits",
    value: "4 open",
    detail: "atelier, casting, and fabric archive",
    state: "blocked",
  },
  {
    label: "Production lock",
    value: "Wed 16:00",
    detail: "print crop notes before handoff",
    state: "watch",
  },
];

export const reviewRows: ReviewRow[] = [
  {
    look: "L01",
    asset: "Opening drape, ivory sleeve",
    owner: "Image desk",
    readiness: "Ready",
    signal: "hero crop and runway still match",
    action: "send to cover layout",
  },
  {
    look: "L04",
    asset: "Black column silhouette",
    owner: "Runway editor",
    readiness: "Review",
    signal: "sequence depends on model release",
    action: "confirm alternate caption",
  },
  {
    look: "L09",
    asset: "Rack detail and fabric study",
    owner: "Production",
    readiness: "Ready",
    signal: "material notes complete",
    action: "pair with studio opener",
  },
  {
    look: "L13",
    asset: "Backstage board reference",
    owner: "Art direction",
    readiness: "Hold",
    signal: "retouch mask still pending",
    action: "recheck before publish",
  },
  {
    look: "L18",
    asset: "Closing movement frame",
    owner: "Editorial",
    readiness: "Review",
    signal: "needs final headline fit",
    action: "test mobile crop",
  },
];

export const approvalQueue: ApprovalItem[] = [
  {
    id: "cover",
    label: "Cover opener",
    crop: "50% 44%",
    status: "Approved",
    note: "strongest garment read, keep full sleeve volume",
  },
  {
    id: "rack",
    label: "Atelier context",
    crop: "12% 50%",
    status: "Retouch",
    note: "lift shadow detail around black garment",
  },
  {
    id: "board",
    label: "Research board",
    crop: "78% 40%",
    status: "Legal",
    note: "confirm visible reference print clearance",
  },
];

export const productionNotes: ProductionNote[] = [
  {
    source: "Retouch",
    note: "Preserve garment texture; no smoothing pass on ivory folds.",
    status: "Open",
  },
  {
    source: "Casting",
    note: "Two release forms received, one agency signature outstanding.",
    status: "Open",
  },
  {
    source: "Layout",
    note: "Desktop opener needs wide crop; mobile package uses centered sleeve crop.",
    status: "Closed",
  },
];

export const editorialActions: EditorialAction[] = [
  {
    title: "Lock final look order against runway notes",
    owner: "Runway editor",
    due: "Today 17:00",
    done: false,
  },
  {
    title: "Write captions for approved image queue",
    owner: "Copy desk",
    due: "Tomorrow 10:30",
    done: false,
  },
  {
    title: "Export mobile crops for publication preview",
    owner: "Art direction",
    due: "Tomorrow 14:00",
    done: false,
  },
  {
    title: "Archive rejected contact sheets",
    owner: "Production",
    due: "Complete",
    done: true,
  },
];
