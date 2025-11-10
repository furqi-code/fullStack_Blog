import { useEffect, useContext } from "react";
import { Link } from "react-router";
import Sidebar from "./sidebar";
import FavouriteArticles from "../shared/favouriteArticle";
import { BlogContext } from "../../store/blogContext";

const FavBlog = () => {
  const {favouriteList, isLoggedin, getFavouritelist} = useContext(BlogContext)

  useEffect(() => {
    if(isLoggedin)
      getFavouritelist();
  }, []);

  return (
    <>
      <div className="py-8">
        <div className="container mx-auto px-4 max-w-[1440px]">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <main className="flex-1">
              <div className="space-y-6">
                <div className="bg-white shadow rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    Favorite Articles
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {favouriteList.map((blog) => (
                      <Link to={`/blogs/${blog.blog_id}`} key={blog.id}>
                        <FavouriteArticles blog={blog} />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default FavBlog;
