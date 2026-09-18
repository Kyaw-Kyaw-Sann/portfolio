"use client";
import Image, { type ImageProps } from "next/image";
import { useState } from "react";

export function ProjectImage(props: ImageProps) {
  const [failed, setFailed] = useState(false);
  if (failed) return <div role="img" aria-label={props.alt + " — preview unavailable"} className="absolute inset-0 grid place-items-center p-6 text-center text-sm text-muted">Preview unavailable. Project details are available below.</div>;
  return <Image {...props} alt={props.alt} onError={() => setFailed(true)} />;
}
