import { Post } from "../data.ts";
import { paths } from "../paths.ts";

import { GlobalFooter, PageNav, PostDetails } from "./_components.tsx";
import { BaseLayout } from "./_layouts.tsx";
import { CustomizedMarkdown } from "./_markdown.tsx";

type PostPageProps = {
  post: Post;
};

export const PostPage: React.FC<PostPageProps> = ({ post }) => (
  <BaseLayout
    url={paths.post(post)}
    title={post.meta.title}
    description={post.meta.description}
  >
    <PageNav />

    <header>
      <h1>{post.meta.title}</h1>
      <PostDetails post={post} />
    </header>

    <CustomizedMarkdown>{post.body}</CustomizedMarkdown>

    <GlobalFooter />
  </BaseLayout>
);
