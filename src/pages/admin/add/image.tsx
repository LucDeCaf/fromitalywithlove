import Layout from "../../../layout/Layout";
import { NextPage } from "next";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { useState } from "react";

interface formInputData {
  label: string;
  id: string;
  required: boolean;
  placeholder?: string;
  type?: string;
}

interface formCheckboxData {
  label: string;
  id: string;
  required: boolean;
}

interface formCheckboxesData extends Array<formCheckboxData> {}

const Page: NextPage = () => {
  const { register, handleSubmit } = useForm();
  const [alertData, setAlertData] = useState({
    show: false,
    status: "loading",
  });

  function onSubmit(data: any) {
    const formattedData = formatData(data);
    fetch("http://localhost:3000/api/images/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formattedData),
    })
      .then((res) => res.json())
      .then((data) =>
        setAlertData((prevData) => ({
          ...prevData,
          show: true,
          status: data.success ? "success" : "failure",
        }))
      );
  }

  function formatData(data: any) {
    const newCategories: string[] = [data.mainCategory];
    if (data.pasta) newCategories.push("pasta");
    if (data.meat) newCategories.push("meat");
    if (data.bread) newCategories.push("bread");
    if (data.fruit) newCategories.push("fruit");

    const newData = {
      label: data.label,
      src: data.src,
      desc: data.desc,
      categories: newCategories,
      links: [],
    };

    return newData;
  }

  // Edit this to add new form inputs
  const formInputData: formInputData[] = [
    {
      label: "Title",
      id: "title",
      placeholder: "A short, punchy title",
      required: true,
    },
    {
      label: "Link",
      id: "src",
      placeholder: "Put in the image's Imgbb link",
      required: true,
      type: "url",
    },
    {
      label: "Description",
      id: "desc",
      placeholder: "Give it a short description",
      required: false,
      type: "textarea",
    },
  ];

  // Edit this to add more categories
  const formCheckboxesData: formCheckboxesData[] = [
    [
      {
        label: "Pasta",
        id: "pasta",
        required: false,
      },
      {
        label: "Meat",
        id: "meat",
        required: false,
      },
      {
        label: "Fruit",
        id: "fruit",
        required: false,
      },
      {
        label: "Bread",
        id: "bread",
        required: false,
      },
    ],
  ];

  // Generate form inputs / textareas
  const formInputs = formInputData.map((data) => (
    <div className="form-group mb-3" key={nanoid()}>
      <label htmlFor={data.id}>{data.label}</label>
      {data.type === "textarea" ? (
        <textarea
          placeholder={data.placeholder}
          id={data.id}
          className="form-control"
          {...register(data.id, { required: data.required })}
        />
      ) : (
        <input
          placeholder={data.placeholder}
          id={data.id}
          className="form-control"
          type={data.type ? data.type : "text"}
          {...register(data.id, { required: data.required })}
        />
      )}
    </div>
  ));

  // Generate checkboxes
  const formCheckboxes = formCheckboxesData.map((group) => (
    <div className="form-group mb-3" key={nanoid()}>
      {group.map((data) => (
        <div className="form-check" key={nanoid()}>
          <label htmlFor={data.id}>{data.label}</label>
          <input
            id={data.id}
            className="form-check-input"
            type="checkbox"
            {...register(data.id, { required: data.required })}
          />
        </div>
      ))}
    </div>
  ));

  return (
    <Layout admin={true}>
      <div className="container mb-3">
        <div
          style={{ display: alertData.show ? "block" : "none" }}
          className={
            "alert alert-dismissible show alert-success " +
            (alertData.status === "loading"
              ? "alert-warning"
              : alertData.status === "success"
              ? "alert-success"
              : "alert-danger")
          }
          role="alert"
        >
          <h4>
            {alertData.status === "loading"
              ? "Loading..."
              : alertData.status === "success"
              ? "You uploaded an image!"
              : "Oh no, something went wrong... try again?"}
          </h4>
        </div>
        <h1 className="text-decoration-underline">Add an image</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          {formInputs}

          <div className="form-group mb-3">
            <label htmlFor="mainCategory">Select a category</label>
            <select
              id="mainCategory"
              className="form-select"
              {...register("mainCategory", { required: true })}
            >
              <option value="food">Food</option>
              <option value="places">Places</option>
            </select>
          </div>

          {formCheckboxes}
          <button className="btn btn-dark">Submit</button>
        </form>
      </div>
    </Layout>
  );
};

export default Page;
