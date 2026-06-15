import { useMemo, useState } from "react";
import {
  approvalQueue,
  collectionMeta,
  editorialActions,
  productionNotes,
  readinessSignals,
  reviewRows,
  type ApprovalItem,
  type ReviewRow,
} from "../data/collectionReview";

const generatedImage = "/assets/control-collection-review-generated.png";

const readinessFilters: Array<ReviewRow["readiness"] | "All"> = ["All", "Ready", "Review", "Hold"];

function StatusMark({ state }: { state: string }) {
  return <span className={`status-mark status-mark--${state.toLowerCase()}`} aria-hidden="true" />;
}

function ApprovalPreview({ item }: { item: ApprovalItem }) {
  return (
    <article className="approval-card">
      <div className="approval-card__image" aria-hidden="true">
        <img src={generatedImage} alt="" style={{ objectPosition: item.crop }} />
      </div>
      <div className="approval-card__body">
        <div className="board-row board-row--tight">
          <span>{item.id}</span>
          <span>{item.status}</span>
        </div>
        <h3>{item.label}</h3>
        <p>{item.note}</p>
      </div>
    </article>
  );
}

export function CollectionReviewBoard() {
  const [activeFilter, setActiveFilter] = useState<(typeof readinessFilters)[number]>("All");

  const filteredRows = useMemo(() => {
    if (activeFilter === "All") {
      return reviewRows;
    }

    return reviewRows.filter((row) => row.readiness === activeFilter);
  }, [activeFilter]);

  return (
    <main className="collection-board" aria-labelledby="collection-board-title">
      <section className="board-intro">
        <div>
          <p className="board-kicker">Internal collection control</p>
          <h1 id="collection-board-title">Collection Review Board</h1>
        </div>
        <dl className="collection-meta" aria-label="Collection overview metadata">
          {collectionMeta.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="board-hero" aria-label="Collection overview">
        <figure className="board-hero__media">
          <img src={generatedImage} alt="Studio review wall with garments, collection references, and editorial table" />
          <figcaption>
            <span>Primary visual reference</span>
            <span>Studio wall, rack, garment movement, and publication desk</span>
          </figcaption>
        </figure>

        <div className="readiness-panel" aria-label="Readiness signals">
          <div className="section-heading">
            <p>Readiness signals</p>
            <span>Updated 09:42</span>
          </div>
          <div className="signal-grid">
            {readinessSignals.map((signal) => (
              <article className="signal-card" key={signal.label}>
                <div className="board-row">
                  <span>{signal.label}</span>
                  <StatusMark state={signal.state} />
                </div>
                <strong>{signal.value}</strong>
                <p>{signal.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="asset-review" aria-label="Asset review rows">
        <div className="section-heading section-heading--with-controls">
          <div>
            <p>Asset and look review</p>
            <span>{filteredRows.length} rows in current view</span>
          </div>
          <div className="filter-controls" aria-label="Readiness filter">
            {readinessFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={filter === activeFilter ? "is-active" : ""}
                onClick={() => setActiveFilter(filter)}
                aria-pressed={filter === activeFilter}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="review-table" role="table" aria-label="Collection asset review">
          <div className="review-table__head" role="row">
            <span role="columnheader">Look</span>
            <span role="columnheader">Asset</span>
            <span role="columnheader">Owner</span>
            <span role="columnheader">Readiness</span>
            <span role="columnheader">Signal</span>
            <span role="columnheader">Next action</span>
          </div>
          {filteredRows.map((row) => (
            <div className="review-table__row" role="row" key={row.look}>
              <span role="cell" data-label="Look">
                {row.look}
              </span>
              <span role="cell" data-label="Asset">
                {row.asset}
              </span>
              <span role="cell" data-label="Owner">
                {row.owner}
              </span>
              <span role="cell" data-label="Readiness">
                <span className={`readiness-pill readiness-pill--${row.readiness.toLowerCase()}`}>
                  {row.readiness}
                </span>
              </span>
              <span role="cell" data-label="Signal">
                {row.signal}
              </span>
              <span role="cell" data-label="Next action">
                {row.action}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="board-lower-grid">
        <div className="approval-queue" aria-label="Image approval queue">
          <div className="section-heading">
            <p>Image approval queue</p>
            <span>Primary asset crops only</span>
          </div>
          <div className="approval-queue__list">
            {approvalQueue.map((item) => (
              <ApprovalPreview item={item} key={item.id} />
            ))}
          </div>
        </div>

        <aside className="production-stack" aria-label="Production notes and editorial actions">
          <section className="production-notes" aria-label="Production notes">
            <div className="section-heading">
              <p>Production notes</p>
              <span>Signals for handoff</span>
            </div>
            <div className="production-note-list">
              {productionNotes.map((note) => (
                <article className="production-note" key={note.source}>
                  <div className="board-row">
                    <span>{note.source}</span>
                    <span>{note.status}</span>
                  </div>
                  <p>{note.note}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="editorial-actions" aria-label="Next editorial actions">
            <div className="section-heading">
              <p>Next editorial actions</p>
              <span>Publication path</span>
            </div>
            <ol>
              {editorialActions.map((action) => (
                <li key={action.title} className={action.done ? "is-complete" : undefined}>
                  <span className="action-check" aria-hidden="true" />
                  <div>
                    <strong>{action.title}</strong>
                    <span>
                      {action.owner} / {action.due}
                    </span>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </aside>
      </section>
    </main>
  );
}
