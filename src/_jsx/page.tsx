import { Page } from "../data.ts";
import { paths } from "../paths.ts";

import { GlobalFooter, PageNav } from "./_components.tsx";
import { BaseLayout } from "./_layouts.tsx";
import { CustomizedMarkdown } from "./_markdown.tsx";

type PagePageProps = {
  page: Page;
};

export const PagePage: React.FC<PagePageProps> = ({ page }) => (
  <BaseLayout
    url={paths.page(page)}
    title={page.meta.title}
    description={page.meta.description}
  >
    <PageNav />

    <header>
      <h1>{page.meta.title}</h1>
    </header>

    <CustomizedMarkdown>{page.body}</CustomizedMarkdown>

    <GlobalFooter />
  </BaseLayout>
);
