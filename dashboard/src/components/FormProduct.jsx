import { Button, Form } from "react-bootstrap";
import { useEffect} from "react";
import PropTypes from "prop-types";

export const FormProduct = ({
  formValues,
  setFormValues,
}) => {

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
        formValues.name,
        formValues.price,
        formValues.categoryId,
        formValues.description,
      ].includes("")
    ) {
      alert("upsss... no envíe vacío el formulario!!!");
      return;
    }

    setFormValues({
      id: null,
      name: "",
      price: "",
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
          name="name"
          onChange={handleInputChange}
          value={formValues.name}
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
