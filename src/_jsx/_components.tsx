import { helpers } from "deno-static/mod.ts";

import { Post } from "../data.ts";
import { paths } from "../paths.ts";

export const PostDetails = ({ post }: { post: Post }) => (
  <div className="post-details">
    <p>
      <time>
        {post.meta.date.toLocaleString("en", { dateStyle: "long" })}
      </time>
    </p>
    <p>
      {post.info.readingInfo.duration.total("minutes")} min read
    </p>
    <p>
      Tags: {post.meta.tags.join(", ")}
    </p>
  </div>
);

export const PageNav = () => (
  <nav className="print-hide">
    <a href={helpers.url(paths.home())}>
      <small>⇤ Back</small>
    </a>
  </nav>
);

export const GlobalFooter = () => (
  <footer>
    <p>🙏</p>
  </footer>
);
