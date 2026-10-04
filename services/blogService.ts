import { ResponseBEType } from "@/models/common";
import { BlogType } from "@/models/blogModel";
import { mockBlogs } from "@/mocks/data/blogs";
import { mockDelay } from "@/mocks/delay";

const blogService = {
  async fetchBlogs(args?: {
    params?: { category?: string };
  }): Promise<ResponseBEType<BlogType[]>> {
    await mockDelay();
    const category = args?.params?.category;
    const data = category
      ? mockBlogs.filter((blog) => blog.category === category)
      : mockBlogs;
    return { status: "success", data };
  },

  async fetchDetailBlog(args?: {
    params?: { idTitle: string };
  }): Promise<ResponseBEType<BlogType>> {
    await mockDelay();
    const blog = mockBlogs.find(
      (item) => item.idTitle === args?.params?.idTitle
    );
    if (!blog) {
      return { status: "error", data: "Blog not found" as any };
    }
    return { status: "success", data: blog };
  },
};

export default blogService;
