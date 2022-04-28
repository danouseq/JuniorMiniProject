const Joi = require("@hapi/joi");

const contactBody = {
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().required(),
  gender: Joi.string(),
  phone: Joi.string(),
  note: Joi.string(),
  city: Joi.string(),
  street: Joi.string(),
  houseNumber: Joi.string(),
  zipCode: Joi.number(),
  birthDate: Joi.date(),
};

module.exports = {
  // Here 0 is the order of api in route file.
  0: {
    query: {},
    path: {}, // Define for api path param here.
    header: {}, // Define if header required.
    group: "Contacts",
    model: "getContacts",
    description: "Get All Contacts",
  },
  1: {
    body: contactBody,
    model: "postContact", // Name of the model
    group: "Contacts", // Swagger tag for apis.
    description: "Create contact and save in database",
  },
  2: {
    query: {},
    path: {
      contact_id: Joi.string().required(),
    }, // Define for api path param here.
    header: {}, // Define if header required.
    model: "getContact",
    group: "Contact",
    description: "Get one contact from database based on contact_id",
  },
  3: {
    query: {},
    path: {
      contact_id: Joi.string().required(),
    }, // Define for api path param here.
    body: contactBody,
    header: {}, // Define if header required.
    model: "patchContact",
    group: "Contact",
    description: "Update contact by id",
  },
  4: {
    query: {},
    path: {
      contact_id: Joi.string().required(),
    }, // Define for api path param here.
    body: contactBody,
    header: {}, // Define if header required.
    model: "putContact",
    group: "Contact",
    description: "Update contact by id",
  },
  5: {
    query: {},
    path: {
      contact_id: Joi.string().required(),
    }, // Define for api path param here.
    header: {}, // Define if header required.
    group: "Contact",
    model: "deleteContact",
    description: "Delete contact by id",
  },

  6: {
    excludeFromSwagger: false, // Make it true if need to exclude apis from swagger.
  },
};
