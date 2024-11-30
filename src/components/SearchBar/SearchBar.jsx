import React from "react";
import toast, { Toaster } from "react-hot-toast";
import s from "./SearchBar.module.css";
import { Field, Formik, Form } from "formik";
import { IoSearch } from "react-icons/io5";

const SearchBar = ({ onSubmit }) => {
  const initialValues = {
    query: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    const trimmedQuery = values.query.trim();

    if (trimmedQuery === "") {
      toast.error("Please enter a search query!");
      return;
    }

    onSubmit(trimmedQuery);
    resetForm();
  };

  return (
    <header className={s.searchBar}>
      <Toaster position="top-right" reverseOrder={false} />
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <IoSearch className={s.icon} aria-hidden="true" />
          <Field
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            className={s.input}
          />
          <button type="submit" className={s.button}></button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
