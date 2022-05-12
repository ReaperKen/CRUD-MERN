import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserPost = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let res = await axios.get(
        "https://gentle-basin-75819.herokuapp.com/api/users"
      );
      setPosts(res.data);
    };
    getData();
  }, [posts]);

  const handleDelete = async (id) => {
    await axios.delete(
      "https://gentle-basin-75819.herokuapp.com/api/users/" + id
    );
  };
  let navigate = useNavigate();
  const handleEdit = (id) => {
    navigate(`edit/${id}`);
  };
  return (
    <section className="bg-zinc-800">
      <h2 className="text-center text-5xl text-white font-bold my-8">
        New posts
      </h2>
      {posts.length === 0 ? (
        <>
          <article className="bg-red-600 w-3/5 mx-auto my-6 p-8 rounded-xl">
            <h2 className="text-white text-2xl font-bold text-center">
              No new posts at this time
            </h2>
          </article>
        </>
      ) : (
        posts.map((item) => (
          <article
            key={item._id}
            className="flex flex-col w-3/5 mx-auto bg-stone-900 my-6 p-8 rounded-xl"
          >
            <div className="flex justify-between items-center py-2">
              <h3 className="text-2xl text-white ml-2">{item.name}</h3>
              <h4 className="text-2xl text-white mr-2">
                Localization: {item.local}
              </h4>
            </div>
            <img
              src="https://picsum.photos/200/150?grayscale"
              alt="item.name"
              className="rounded-2xl border-2 border-gray-300"
            />
            <div className="flex justify-between items-center py-2">
              <h5 className="text-xl text-white py-2 ml-2">
                Autor: {item.email}
              </h5>
              <button
                onClick={() => handleDelete(item._id)}
                className="text-base py-2 px-4 bg-transparent border-2 border-red-700 hover:bg-red-800 transition-colors duration-500 ease hover:text-black rounded-lg text-white mr-2"
              >
                Delete
              </button>
              <button
                onClick={() => handleEdit(item._id)}
                className="text-base py-2 px-4 bg-transparent border-2 border-blue-700 hover:bg-blue-800 transition-colors duration-500 ease hover:text-black rounded-lg text-white mr-2"
              >
                Edit
              </button>
            </div>
          </article>
        ))
      )}
    </section>
  );
};

export default UserPost;
