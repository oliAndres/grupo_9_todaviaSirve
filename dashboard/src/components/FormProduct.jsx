import { Button, Form } from "react-bootstrap";
import { UseFetch } from "../hooks/UseFetch";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { createProduct, updateProduct } from "../services/product.services";

export const FormProduct = ({
  products,
  setProducts,
  formValues,
  setFormValues,
}) => {
  const [categories, setCategories] = useState([]);

  const getData = async () => {
    const categories = await UseFetch("categories");

    setCategories([...categories.data]);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    if (
      [
        formValues.title,
        formValues.price,
        formValues.categoryId,
        formValues.description,
      ].includes("")
    ) {
      alert("upsss... no envíe vacío el formulario!!!");
      return;
    }

    if (formValues.id) {
      const { data } = await updateProduct(formValues)

      const productsUpdated = products.map((product) => {
        if (product.id === data.id) {
          product = data;
        }
        return product;
      });

      setProducts([...productsUpdated]);
    } else {
      const { data } = await createProduct(formValues)
      setProducts([...products, data]);
    }

    setFormValues({
      id: null,
      title: "",
      price: "",
      discount: "",
      categoryId: "",
      sectionId: "",
      description: "",
    });
  };

  return (
    <Form className="row" onSubmit={handleSubmitForm}>
      <Form.Group className="mb-3 col-12">
        <Form.Label>Titulo</Form.Label>
        <Form.Control
          type="text"
          placeholder="Título del producto..."
          name="title"
          onChange={handleInputChange}
          value={formValues.title}
        />
      </Form.Group>
      <Form.Group className="mb-3 col-12 col-md-6">
        <Form.Label>Precio</Form.Label>
        <Form.Control
          name="price"
          type="number"
          onChange={handleInputChange}
          value={formValues.price}
        />
      </Form.Group>
      <Form.Group className="mb-3 col-12 col-md-6">
        <Form.Label>Descuento</Form.Label>
        <Form.Control
          type="number"
          name="discount"
          onChange={handleInputChange}
          value={formValues.discount}
        />
      </Form.Group>

      <Form.Group className="mb-3 col-12 col-md-6">
        <Form.Label>Sección</Form.Label>
        <Form.Select
          className="form-control"
          name="sectionId"
          onChange={handleInputChange}
        >
          <option hidden defaultValue>
            Selecciona...
          </option>
          {sections.map((section, index) =>
            section.id == formValues.sectionId ? (
              <option key={index + section.name} selected value={section.id}>
                {section.name}
              </option>
            ) : (
              <option key={index + section.name} value={section.id}>
                {section.name}
              </option>
            )
          )}
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3 col-12 col-md-6">
        <Form.Label>Categoría</Form.Label>
        <Form.Select
          className="form-control"
          name="categoryId"
          onChange={handleInputChange}
        >
          <option defaultValue hidden>
            Selecciona...
          </option>
          {categories.map((category, index) =>
            category.id == formValues.categoryId ? (
              <option selected key={index + category.name} value={category.id}>
                {category.name}
              </option>
            ) : (
              <option key={index + category.name} value={category.id}>
                {category.name}
              </option>
            )
          )}
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3 col-12 ">
        <Form.Label>Descripción</Form.Label>
        <Form.Control
          as="textarea"
          type="text"
          name="description"
          onChange={handleInputChange}
          value={formValues.description}
        />
      </Form.Group>
      <Form.Group className="mb-3 col-12">
        <div className="d-flex justify-content-around">
          <Button variant="outline-secondary">Cancelar</Button>
          <Button type="submit" variant="outline-primary">
            Guardar
          </Button>
        </div>
      </Form.Group>
    </Form>
  );
};

FormProduct.propTypes = {
  products: PropTypes.array,
  setProducts: PropTypes.func,
  formValues: PropTypes.object,
  setFormValues: PropTypes.func,
};
