import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateArticle() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const createFormatSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/blog/articles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, body }),
      });

      if (!response.ok) {
        throw new Error("Failed to create article");
      }

      const data = await response.json();
      console.log(data);

      navigate("/admin/blog");
    } catch (error) {
      console.error("Error creating article:", error);
      alert("Failed to create article. Please try again.");
    }
  };

  return (
    <div>
      <div className="p-6 text-3xl bg-blue-500 text-center font-medium ">
        <h1 className="">Create New Article</h1>
      </div>

      <div className="px-130 py-8">
        <div className="bg-blue-950 inline-block text-white p-10 rounded-lg shadow-md">
          <form onSubmit={createFormatSubmit}>
            <div className="px-10">
              <div className="flex flex-col mb-5">
                <label
                  className="text-xl py-4 text-blue-100 font-serif"
                  htmlFor="title"
                >
                  Title
                </label>
                <div>
                  <input
                    className="bg-white px-1 w-96 py-0.5 text-black width-full rounded"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    placeholder="Enter Article Title"
                    id="title"
                  />
                </div>
              </div>

              <div className="flex flex-col mb-4">
                <label
                  className="text-xl py-4 text-blue-100 font-serif"
                  htmlFor="body"
                >
                  Body
                </label>
                <textarea
                  className="bg-white px-1 py-0.5 w-96 text-black rounded"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  type="text"
                  placeholder="Enter Article Body"
                  id="body"
                ></textarea>
              </div>
            </div>

            <div className="p-7">
              <button
                className="text-xl rounded-4xl text-gray-800 bg-blue-800 hover:bg-blue-500 p-2 font-black"
                type="submit"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateArticle;
