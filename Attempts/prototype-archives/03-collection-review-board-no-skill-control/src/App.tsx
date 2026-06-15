import { HeaderNavigation } from "./components/HeaderNavigation";
import { SiteFooter } from "./components/SiteFooter";
import { CollectionReviewBoard } from "./components/CollectionReviewBoard";

export default function App() {
  return (
    <div className="prototype-page collection-control-page" data-name="Collection Review Board">
      <HeaderNavigation
        brand="a.d"
        links={[
          { label: "Assets", href: "" },
          { label: "Looks", href: "" },
          { label: "Publish", href: "" },
          { label: "Production", href: "" },
        ]}
      />

      <CollectionReviewBoard />

      <SiteFooter
        name="Amelie Dupont"
        role="Editorial Production"
        location="Paris, France"
        socialLinks={[
          { label: "QUEUE", href: "" },
          { label: "CONTACT", href: "" },
          { label: "ARCHIVE", href: "" },
        ]}
        madeByLabel="CONTROL"
        initials={["A", ".", "D"]}
      />
    </div>
  );
}
