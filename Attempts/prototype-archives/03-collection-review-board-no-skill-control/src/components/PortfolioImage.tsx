type PortfolioImageVariant = "split" | "full";
type PortfolioImageCrop = "standard" | "project01";

export type PortfolioImageProps = {
  src: string;
  alt: string;
  href: string;
  variant: PortfolioImageVariant;
  crop?: PortfolioImageCrop;
  dataNodeId?: string;
  disabled?: boolean;
};

export function PortfolioImage({
  src,
  alt,
  href,
  variant,
  crop = "standard",
  dataNodeId,
  disabled = false,
}: PortfolioImageProps) {
  return (
    <a
      className={[
        "portfolio-image",
        `portfolio-image--${variant}`,
        `portfolio-image--crop-${crop}`,
        disabled ? "is-disabled" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      href={href}
      aria-disabled={disabled || undefined}
      data-node-id={dataNodeId}
      data-name="Image"
    >
      <img src={src} alt={alt} draggable="false" />
    </a>
  );
}
