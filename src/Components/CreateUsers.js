import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const initialForm = {
  name: "",
  local: "",
  email: "",
};

const CreateUsers = () => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name: form.name,
      local: form.local,
      email: form.email,
    };
    const getData = async () => {
      await axios
        .post("https://gentle-basin-75819.herokuapp.com/api/users", newUser)
        .then((res) => navigate("/"))
        .catch((e) => console.log(e));
    };
    getData();
    setForm(initialForm);
  };
  return (
    <div className="w-4/6 mx-auto  mt-10 bg-neutral-900 p-10">
      <form className="container flex flex-col h-4/5" onSubmit={handleSubmit}>
        <h2 className="py-2 w-2/3 mx-auto text-white text-center font-bold text-2xl ">
          Create new post!
        </h2>
        <input
          type="text"
          name="name"
          placeholder="Username"
          autoComplete="off"
          className="my-3 py-1 w-1/2 mx-auto bg-transparent border-b-2 border-white focus:outline-none placeholder:bg-transparent placeholder:text-sm placeholder:text-center text-white caret-white"
          required
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="local"
          placeholder="Where did you take this picture?"
          autoComplete="off"
          required
          value={form.local}
          onChange={handleChange}
          className="my-3 py-1 w-1/2 mx-auto bg-transparent border-b-2 border-white focus:outline-none placeholder:bg-transparent placeholder:text-sm placeholder:text-center text-white caret-white"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="off"
          required
          value={form.email}
          onChange={handleChange}
          className="my-3 py-1 w-1/2 mx-auto bg-transparent border-b-2 border-white focus:outline-none placeholder:bg-transparent placeholder:text-sm placeholder:text-center text-white caret-white "
        />
        <input
          type="submit"
          value="Create new post!"
          className=" my-6 py-1 w-2/3 mx-auto bg-transparent border-2 border-white text-white rounded-2xl hover:opacity-60 transition-opacity duration-700 ease cursor-pointer"
        />
      </form>
    </div>
  );
};

export default CreateUsers;
