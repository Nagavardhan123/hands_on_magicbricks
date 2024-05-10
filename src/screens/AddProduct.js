import React, { useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams
import "./AddProduct.css";
import upload_area from "./Assets/upload_area.svg";
import AdminNavbar from "../components/adminNavbar";
import AdminSidebar from "../components/adminddSidebar";
import axios from "axios"; // Import Axios for making HTTP requests
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from "react-bootstrap";

const AddProduct = () => {
  const { category} = useParams(); // Initialize useParams
  const [imagePreview, setImagePreview] = useState({
    img1: null,
    img2: null,
    img3: null,
    img4: null,
  });
  const [productDetails, setProductDetails] = useState({
    title: "",
    img1: "",
    img2: "",
    img3: "",
    img4: "",
    category: category,
    place: "",
    carpet_area: "",
    developers: "",
    project: "",
    floor: "",
    transaction_type: "",
    status: "",
    facing: "",
    lift: "",
    furnished: "",
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleImageChange = (e, fieldName) => {
    const file = e.target.files[0];
    setProductDetails({ ...productDetails, [fieldName]: file }); 
    const reader = new FileReader();
    reader.onload = () => {
        setImagePreview(prevState => ({ ...prevState, [fieldName]: reader.result }));
    };
    if (file) {
        reader.readAsDataURL(file);
    }
  };

// const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setProductDetails({ ...productDetails, img1: file });
//     const reader = new FileReader();
//     reader.onload = () => {
//       setImagePreview(reader.result);
//     };
//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };

  const handleCategoryChange = (e) => {
    setProductDetails({ ...productDetails, category: e.target.value });
  };

  const handleAddProduct = () => {
    const formData = new FormData();
    formData.append("title", productDetails.title);
    formData.append("img1", productDetails.img1);
    formData.append("img2", productDetails.img2);
    formData.append("img3", productDetails.img3);
    formData.append("img4", productDetails.img4);
    formData.append("category", productDetails.category);
    formData.append("place", productDetails.place);
    formData.append("carpet_area", productDetails.carpet_area);
    formData.append("developers", productDetails.developers);
    formData.append("project", productDetails.project);
    formData.append("floor", productDetails.floor);
    formData.append("transaction_type", productDetails.transaction_type);
    formData.append("status", productDetails.status);
    formData.append("facing", productDetails.facing);
    formData.append("lift", productDetails.lift);
    formData.append("furnished", productDetails.furnished);

    axios.post("http://localhost:5001/products", formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
    .then(response => {
        console.log("Response from backend:", response.data); // Log response from backend
        console.log("Product added successfully:", response.data);

        setShowAlert(true);
        // Optionally, you can redirect the user or show a success message
    })
    .catch(error => {
        console.error("Error adding product:", error);
        // Handle error, show error message to the user, etc.
    });
};

  return (
    <div>
      <AdminNavbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <AdminSidebar />
          </div>
          <div className="col-md-9">
            <div className="addproduct">
              <div className="addproduct-itemfield">
                <p>Title</p>
                <input type="text" name="title" placeholder="Type here" onChange={(e) => setProductDetails({ ...productDetails, title: e.target.value })} />
              </div>
              <div className="container">
                <div className="addproduct-itemfield row">
                  <p>Place</p>
                  <input type="text" name="new_price" placeholder="Type here" onChange={(e) => setProductDetails({ ...productDetails, old_price: e.target.value })} />
                </div>
                <div className="addproduct-itemfield row">
                  <p>Carpet Area</p>
                  <input type="text" name="carpet_area" placeholder="Type here" onChange={(e) => setProductDetails({ ...productDetails, carpet_area: e.target.value })} />
                </div>
                <div className="addproduct-itemfield row">
                  <p>Developers</p>
                  <input type="text" name="developers" placeholder="Type here" onChange={(e) => setProductDetails({ ...productDetails, developers: e.target.value })} />
                </div>
                <div className="addproduct-itemfield row">
                  <p>Project</p>
                  <input type="text" name="project" placeholder="Type here" onChange={(e) => setProductDetails({ ...productDetails, project: e.target.value })} />
                </div>
                <div className="addproduct-itemfield row">
                  <p>Floor</p>
                  <input type="text" name="floor" placeholder="Type here" onChange={(e) => setProductDetails({ ...productDetails, floor: e.target.value })} />
                </div>
                <div className="addproduct-itemfield row">
                  <p>Transaction Type</p>
                  <input type="text" name="transaction_type" placeholder="Type here" onChange={(e) => setProductDetails({ ...productDetails, transaction_type: e.target.value })} />
                </div>
                <div className="addproduct-itemfield row">
                  <p>Status</p>
                  <input type="text" name="status" placeholder="Type here" onChange={(e) => setProductDetails({ ...productDetails, status: e.target.value })} />
                </div>
                <div className="addproduct-itemfield row">
                  <p>Facing</p>
                  <input type="text" name="facing" placeholder="Type here" onChange={(e) => setProductDetails({ ...productDetails, facing: e.target.value })} />
                </div>
                <div className="addproduct-itemfield row">
                  <p>Lift</p>
                  <input type="text" name="lift" placeholder="Type here" onChange={(e) => setProductDetails({ ...productDetails, lift: e.target.value })} />
                </div>
                <div className="addproduct-itemfield row">
                  <p>Furnished</p>
                  <input type="text" name="furnished" placeholder="Type here" onChange={(e) => setProductDetails({ ...productDetails, furnished: e.target.value })} />
                </div>
              </div>
              <div className="addproduct-itemfield">
                <p>Category</p>
                <select name="category" className="add-product-selector" onChange={(e) => setProductDetails({ ...productDetails, category: e.target.value })}>
                  <option>Select</option>
                  <option value="slider1_1">Slider1_1</option>
                  <option value="slider1_2">Slider1_2</option>
                  <option value="slider1_3">Slider1_3</option>
                  <option value="slider1_4">Slider1_4</option>
                  <option value="slider1_5">Slider1_5</option>
                  <option value="slider1_6">Slider1_6</option>
                  <option value="slider1_7">Slider1_7</option>
                  <option value="slider1_8">Slider1_8</option>
                  <option value="slider2_1">Slider2_1</option>
                  <option value="slider2_2">Slider2_2</option>
                  <option value="slider2_3">Slider2_3</option>
                  <option value="slider2_4">Slider2_4</option>
                  <option value="slider2_5">Slider2_5</option>
                  <option value="slider2_6">Slider2_6</option>
                  <option value="slider2_7">Slider2_7</option>
                  <option value="slider2_8">Slider2_8</option>
                </select>
              </div>
              <div className="addproduct-itemfield">
                <p>Item Image</p>
                <input
                    type="file"
                    name="img1"
                    id="file-input-1" // Unique id
                    hidden
                    onChange={(e) => handleImageChange(e, 'img1')} 
                    />
                    <label htmlFor="file-input-1">
                    <img
                        className="addproduct-thumbnail-img"
                        src={imagePreview.img1 || upload_area}
                        alt=""
                    />
                    </label>
                    <input
                    type="file"
                    name="img2"
                    id="file-input-2" // Unique id
                    hidden
                    onChange={(e) => handleImageChange(e, 'img2')} 
                    />
                    <label htmlFor="file-input-2">
                    <img
                        className="addproduct-thumbnail-img"
                        src={imagePreview.img2 || upload_area}
                        alt=""
                    />
                    </label>
                    <input
                        type="file"
                        name="img3"
                        id="file-input-3" // Unique id
                        hidden
                        onChange={(e) => handleImageChange(e, 'img3')} 
                        />
                        <label htmlFor="file-input-3">
                        <img
                            className="addproduct-thumbnail-img"
                            src={imagePreview.img3 || upload_area}
                            alt=""
                        />
                        </label>
                        <input
                        type="file"
                        name="img4"
                        id="file-input-4" // Unique id
                        hidden
                        onChange={(e) => handleImageChange(e, 'img4')} 
                        />
                        <label htmlFor="file-input-4">
                        <img
                            className="addproduct-thumbnail-img"
                            src={imagePreview.img4 || upload_area}
                            alt=""
                        />
                        </label>
              </div>
              <Button variant="primary" onClick={handleAddProduct}>ADD</Button>
            </div>
          </div>
        </div>
      </div>

       {/* Bootstrap Modal for displaying success message */}
      <Modal show={showAlert} onHide={() => setShowAlert(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>Product added successfully!</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShowAlert(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddProduct;
