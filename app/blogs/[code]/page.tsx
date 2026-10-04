"use client";

import { Avatar, Divider, Flex, Spin } from "antd";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import { isEmpty, toString } from "lodash";
import { fetchDetailBlog } from "@/redux/entities/blogs/asyncThunk";
import { getDetailBlog } from "@/redux/selectors/blogs";
import { BlogType } from "@/models/blogModel";
import { CustomText } from "@/components/homePage/common";
import { WaitingLoading } from "@/helpers/renderHelpers";

export default function BlogDetailsPage() {
  const dispatch = useAppDispatch();
  const params = useParams<{ code: string }>();
  const blogCode: string = toString(params?.code);
  const detailBlog = useAppSelector(getDetailBlog);
  const detailBlogData: BlogType = detailBlog.data;

  useEffect(() => {
    if (!isEmpty(blogCode))
      dispatch(fetchDetailBlog({ params: { idTitle: blogCode } }));
  }, [blogCode, dispatch]);

  const publishDate = detailBlogData?.date || detailBlogData?.author?.date;
  const formattedDate = publishDate
    ? new Date(publishDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <main className="h-fit w-full">
      <div className="flex h-full w-full items-center justify-center">
        <div className="h-fit w-full pb-12">
          {isEmpty(detailBlogData) ? (
            <WaitingLoading loading={detailBlog.loading} />
          ) : (
            <Spin spinning={detailBlog.loading}>
              <div className="relative h-[28em] w-full overflow-hidden lg:h-[40em]">
                <img
                  src={detailBlogData.images?.thumbnail}
                  alt={
                    detailBlogData.images?.alt ||
                    detailBlogData.title ||
                    "Blog cover"
                  }
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>

              <div className="relative -top-40 mx-auto h-fit w-11/12 rounded-lg bg-white pb-20 pt-10 shadow-md lg:-top-80 lg:w-3/4">
                <div className="h-fit w-full px-4 lg:px-10">
                  <Flex justify="center" align="center">
                    <Avatar className="mx-auto bg-slate-200" size={60}>
                      {(detailBlogData.author?.name || "M")
                        .split(" ")
                        .map((part) => part[0])
                        .join("")
                        .slice(0, 2)}
                    </Avatar>
                  </Flex>

                  <CustomText
                    type="paragraph"
                    topClass="!text-lg !text-center mt-4"
                    extraClass="!text-black"
                  >
                    <span className="font-semibold">
                      {detailBlogData.author?.name}
                    </span>
                    <br />
                    {detailBlogData.author?.role}
                  </CustomText>

                  <div className="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm text-neutral-500">
                    {formattedDate && <span>{formattedDate}</span>}
                    {detailBlogData.readTime && (
                      <>
                        <span aria-hidden>•</span>
                        <span>{detailBlogData.readTime}</span>
                      </>
                    )}
                    {detailBlogData.category && (
                      <>
                        <span aria-hidden>•</span>
                        <span>{detailBlogData.category}</span>
                      </>
                    )}
                  </div>

                  <Divider />

                  <CustomText
                    type="paragraph"
                    topClass="!text-3xl !text-center"
                    extraClass="!text-black"
                  >
                    <span className="!font-semibold">
                      {detailBlogData.title}
                    </span>
                  </CustomText>

                  {detailBlogData.chapeau && (
                    <p className="mx-auto mt-4 max-w-2xl text-center text-lg leading-snug text-neutral-600">
                      {detailBlogData.chapeau}
                    </p>
                  )}

                  {!isEmpty(detailBlogData.tags) && (
                    <div className="mt-5 flex flex-wrap justify-center gap-2">
                      {detailBlogData.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-neutral-100 px-3 py-1 text-sm text-neutral-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mx-auto mt-10 h-fit w-11/12 lg:w-3/4">
                    <div
                      className="blog-content"
                      dangerouslySetInnerHTML={{
                        __html: detailBlogData.content || "",
                      }}
                    />

                    {(detailBlogData.images?.credit ||
                      detailBlogData.images?.creditUrl) && (
                      <p className="mt-10 text-sm text-neutral-500">
                        Cover photo:{" "}
                        {detailBlogData.images.creditUrl ? (
                          <a
                            href={detailBlogData.images.creditUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="underline underline-offset-2"
                          >
                            {detailBlogData.images.credit || "Unsplash"}
                          </a>
                        ) : (
                          detailBlogData.images.credit
                        )}
                        . Images via Unsplash (free to use).
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </Spin>
          )}
        </div>
      </div>
    </main>
  );
}
