import { useState, FormEvent, ChangeEvent } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../../utils/firebase";

const Page = () => {
  const [validated, setValidated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [imageLabel, setImageLabel] = useState("");
  const [imageDesc, setImageDesc] = useState("");
  const [categories, setCategories] = useState([]);

  const handleCategoryChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const newCategories = Array.from(categories);

    if (categories.includes(value)) {
      newCategories.splice(categories.indexOf(value), 1);
    } else {
      newCategories.push(value);
    }

    setCategories(newCategories);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      const file = e.target[0].files[0];
      const storageRef = ref(
        storage,
        `images/${imageLabel.toLowerCase().replaceAll(" ", "-")}`
      );
      uploadBytes(storageRef, file).then((snapshot) =>
        getDownloadURL(snapshot.ref).then((downloadURL) => {
          const dbInstance = collection(db, "images");
          addDoc(dbInstance, {
            label: imageLabel,
            desc: imageDesc,
            categories: categories,
            downloadUrl: downloadURL,
          }).then((res) => setShowAlert(true));
        })
      );
    }

    setValidated(true);
    e.preventDefault();
  };

  return (
    <main>
      <Container>
        <Alert show={showAlert} variant="success">
          <Alert.Heading>Great!</Alert.Heading>
          <hr />
          <p className="mb-0">You uploaded an image!</p>
        </Alert>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-1">
            <Form.Label>Upload Image</Form.Label>
            <Form.Control type="file" required />
          </Form.Group>
          <Form.Group className="mb-1">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="A short, punchy title."
              value={imageLabel}
              onChange={(e) => setImageLabel(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Give your image a short description."
              value={imageDesc}
              onChange={(e) => setImageDesc(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Categories</Form.Label>
            <Form.Check
              type="checkbox"
              label="Food"
              value="food"
              onChange={handleCategoryChange}
            />
            <Form.Check
              type="checkbox"
              label="Places"
              value="places"
              onChange={handleCategoryChange}
            />
            <hr className="my-3" />
            <Form.Check
              type="checkbox"
              label="Pasta"
              value="pasta"
              onChange={handleCategoryChange}
            />
            <Form.Check
              type="checkbox"
              label="Bread"
              value="bread"
              onChange={handleCategoryChange}
            />
            <Form.Check
              type="checkbox"
              label="Meat"
              value="meat"
              onChange={handleCategoryChange}
            />
            <Form.Check
              type="checkbox"
              label="Fruit"
              value="fruit"
              onChange={handleCategoryChange}
            />
          </Form.Group>
          <Button variant="light" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </main>
  );
};
export default Page;
