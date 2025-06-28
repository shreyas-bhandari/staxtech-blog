import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function ListArticles() {
  const [Articles, setArticles] = useState([]);
  // Declare a new state variable, which we'll call "count"

  const getArticles = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/blog/articles");

      const data = await response.json();
      console.log(data);
      setArticles(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      <div className="bg-blue-400 text-center text-3xl p-3">
        <h1>List of All Articles</h1>
      </div>

      {Articles.length > 0 ? (
        <div className="grid grid-cols-1 gap-8  px-10 p-4  ">
          {Articles.map((article) => (
            <div key={article._id}>
              <h3 className="font-extrabold underline text-2xl">{article.title}</h3>

              <div className=" py-1.5 px-1 ">
                <NavLink
                  className="bg-blue-900 rounded-xl hover:bg-blue-500 px-2 py-1.5  inline-block text-white"
                  to={`/admin/blog/articles/${article._id}`}
                >
                  View
                </NavLink>{" "}
                |{" "}
                <NavLink
                  className="bg-green-900 rounded-xl hover:bg-green-500 px-2 py-1.5  inline-block text-white"
                  to={`/admin/blog/article-edit/${article._id}`}
                >
                  Update
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p>No Articles</p>
        </div>
      )}
      <div className="px-10 py-8  inline-block ">
        <NavLink
          className="text-2xl p-3 rounded-4xl bg-blue-950 text-white"
          to="/admin/blog/create"
        >
          Create Article
        </NavLink>
      </div>
    </>
  );
}

export default ListArticles;
