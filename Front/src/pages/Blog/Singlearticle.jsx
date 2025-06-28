import { useEffect, useState } from "react";
import { useNavigate, useParams, NavLink } from "react-router-dom";



function SingleArticle() {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const getArticle = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/blog/articles/${articleId}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setArticle(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getArticle();
  }, [articleId]);

  const deleteButtonClick = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/blog/articles/${articleId}`, {
        method: "DELETE",
      });

      const data = await response.json();
      console.log(data);
      navigate("/admin/blog");
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return <p>Loading article...</p>;
  }

  if (error) {
    return <p>Error loading article: {error}</p>;
  }

  if (!article) {
    return <p>No article found.</p>;
  }

  return (
    <>
      <div className="article-container text-center px-12 py-10 max-w-4xl mx-auto">
        <div className="p-4 bg-blue-900 rounded-t-lg">
          <h1 className="text-white px-2 py-2 text-3xl font-serif font-bold">{article.title}</h1>
        </div>
        <div className="p-6 bg-blue-950 rounded-b-lg">
          <p className="text-white px-2 py-2 text-lg leading-relaxed">{article.body}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-12 py-6 flex space-x-4">
        <NavLink
          className="px-6 py-2 rounded-full hover:bg-blue-800 text-lg font-semibold bg-blue-600 text-white"
          to={`/admin/blog/article-edit/${article._id}`}
        >
          Update Article
        </NavLink>

        <button
          className="px-6 py-2 rounded-full hover:bg-red-700 text-lg font-semibold bg-red-600 text-white"
          onClick={deleteButtonClick}
        >
          Delete
        </button>
      </div>
    </>
  );
}

export default SingleArticle;
