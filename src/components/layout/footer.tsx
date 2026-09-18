import { site } from "@/data/site";
import { PageContainer } from "./page-container";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <PageContainer className="flex flex-col gap-2 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {site.name}.</p>
        <p>{site.role}</p>
      </PageContainer>
    </footer>
  );
}
