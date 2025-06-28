import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function UpdateArticle() {
  const { articleId } = useParams();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getArticle = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/blog/articles/${articleId}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setArticle(data);
      setTitle(data.title || "");
      setBody(data.body || "");
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (articleId) {
      getArticle();
    }
  }, [articleId]);

  const updateformSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/blog/articles/${articleId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, body }),
      });
      if (!response.ok) {
        throw new Error("Failed to update article");
      }
      const data = await response.json();
      console.log("Article updated:", data);
      // Optionally redirect or show success message here
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  if (loading) return <p>Loading article...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div className="bg-blue-400 text-center text-3xl p-3">
        <h1>Update Article</h1>
      </div>

      <div className="px-10 py-8">
        <form onSubmit={updateformSubmit} className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
              Title
            </label>
            <input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Enter Article Title"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="body" className="block text-gray-700 font-bold mb-2">
              Body
            </label>
            <textarea
              id="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Enter Article Body"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={8}
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Update Article
          </button>
        </form>
      </div>
    </>
  );
}

export default UpdateArticle;
