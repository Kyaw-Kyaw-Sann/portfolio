import Image from "next/image";

type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className = "size-11" }: BrandMarkProps) {
  return (
    <span
      aria-hidden="true"
      className={`relative block shrink-0 overflow-hidden bg-transparent ${className}`}
    >
      <Image
        src="/logo.svg"
        alt=""
        fill
        sizes="48px"
        unoptimized
        className="brand-logo brand-logo--light object-cover"
      />
      <Image
        src="/logo-dark.svg"
        alt=""
        fill
        sizes="48px"
        unoptimized
        className="brand-logo brand-logo--dark object-cover"
      />
    </span>
  );
}
