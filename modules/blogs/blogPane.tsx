"use client";

import { BlogType } from "@/models/blogModel";
import { Typography } from "antd";
import Link from "next/link";

export const BlogPane = ({ blogItem }: { blogItem: BlogType }) => {
  const alt =
    blogItem.images?.alt || blogItem.title || "Blog post cover image";

  return (
    <div className="h-fit w-full rounded-xl border-[1px] bg-neutral-200/50 p-1 shadow-xl">
      <Link
        href={`/blogs/${blogItem.idTitle}`}
        aria-label={blogItem.title}
        className="block"
      >
        <div className="relative h-[30em] w-full overflow-hidden rounded-xl">
          <img
            src={blogItem.images?.thumbnail}
            alt={alt}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-transparent transition-all duration-500 hover:backdrop-blur-md" />
          <div className="absolute bottom-0 h-1/2 w-full rounded-b-xl bg-gradient-to-t from-black/80 from-[50%] via-black/50 to-transparent backdrop-blur-sm">
            <div className="flex h-full w-full items-end px-6 pb-6 pt-10 sm:px-8 sm:pb-8">
              <div className="h-fit w-full">
                <Typography.Paragraph
                  ellipsis={{ rows: 2 }}
                  style={{ marginBottom: 8 }}
                >
                  <span className="!font-sf_pro_text_light !text-xl !font-bold !text-white">
                    {blogItem.title}
                  </span>
                </Typography.Paragraph>
                <Typography.Paragraph
                  ellipsis={{ rows: 3 }}
                  style={{ marginBottom: 0 }}
                >
                  <span className="!font-sf_pro_text_light !text-lg !text-white">
                    {blogItem.chapeau}
                  </span>
                </Typography.Paragraph>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
