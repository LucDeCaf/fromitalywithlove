import { useState, FormEvent, ChangeEventHandler } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { db, storage } from "../../../utils/firebase";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
import { doc, setDoc, getDoc } from "firebase/firestore";

const Page = () => {
  const [validated, setValidated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [status, setStatus] = useState("loading");

  const [imageLabel, setImageLabel] = useState("");
  const [imageDesc, setImageDesc] = useState("");
  const [categories, setCategories] = useState([]);

  const handleCategoryChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value;
    const newCategories = Array.from(categories);

    if (categories.includes(value)) {
      newCategories.splice(categories.indexOf(value), 1);
    } else {
      newCategories.push(value);
    }

    setCategories(newCategories);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setShowAlert(true);

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      try {
        const file = e.target[0].files[0];
        const imageId = imageLabel.toLowerCase().replaceAll(" ", "-");

        const docRef = doc(db, "images", imageId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setStatus("exists");
          e.stopPropagation();
        } else {
          const imageRef = ref(storage, `images/${imageId}`);
          const imageSnap = await uploadBytes(imageRef, file);
          const downloadUrl = await getDownloadURL(imageSnap.ref);

          await setDoc(docRef, {
            label: imageLabel,
            desc: imageDesc,
            categories: categories,
            downloadUrl: downloadUrl,
          });

          setStatus("success");
          console.log(`Document saved at "${docRef.path}"`);
        }
      } catch (err) {
        setStatus("fail");
        console.error(err.message);
      }
    }

    setValidated(true);
  };

  return (
    <main>
      <Container>
        <Alert
          show={showAlert}
          variant={
            status === "success"
              ? "success"
              : status === "fail"
              ? "danger"
              : "warning"
          }
        >
          <Alert.Heading className={status === "loading" ? "mb-0" : ""}>
            {status === "success"
              ? "Great!"
              : status === "fail"
              ? "Oh no..."
              : status === "loading"
              ? "Loading..."
              : status === "exists"
              ? "Oops!"
              : "Hmm..."}
          </Alert.Heading>
          {status !== "loading" && (
            <>
              <hr />
              <p className="mb-0">
                {status === "success"
                  ? "You uploaded an image!"
                  : status === "fail"
                  ? "Something went wrong. Please make sure you are connected to the internet."
                  : status === "exists"
                  ? "It appears an image with that name already exists. Please check that you aren't re-uploading the same image twice!"
                  : "Something weird happened. We'll get back to you"}
              </p>
            </>
          )}
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
            <hr className="my-2" />
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
            <hr className="my-2" />
            <Form.Check
              type="checkbox"
              label="Carousel"
              value="carousel"
              onChange={handleCategoryChange}
            />
          </Form.Group>
          <Button variant="light" type="submit" className="mb-3">
            Submit
          </Button>
        </Form>
      </Container>
    </main>
  );
};
export default Page;
