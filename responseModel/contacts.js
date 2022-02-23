const contactBody = {
  firstName: {
    type: "string",
  },
  lastName: {
    type: "string",
  },
  email: {
    type: "string",
  },
  phone: {
    type: "string",
  },
  note: {
    type: "string",
  },
  gender: {
    type: "string",
  },
  city: {
    type: "string",
  },
  street: { type: "string" },
  houseNumber: { type: "string" },
  zipCode: { type: "number" },
  birthDate: {
    type: "string",
  },
};

module.exports = {
  getContact: {
    200: {
      message: {
        type: "string",
      },
      body: {
        type: "object",
        properties: contactBody,
      },
    },
    500: {
      internal: {
        type: "string",
      },
    },
    404: {
      message: {
        type: "string",
      },
    },
    400: {
      message: {
        type: "string",
      },
    },
  },
  postContact: {
    200: {
      message: {
        type: "string",
      },
      body: {
        type: "object",
        properties: contactBody,
      },
    },
    500: {
      internal: {
        type: "string",
      },
    },
    400: {
      message: {
        type: "string",
      },
    },
  },

  getContacts: {
    200: {
      message: {
        type: "string",
      },
      body: {
        type: "array",
        items: {
          type: "object",
          properties: contactBody,
        },
      },
    },
    500: {
      internal: {
        type: "string",
      },
    },
    400: {
      message: {
        type: "string",
      },
    },
  },
  createContact: {
    200: {
      message: {
        type: "string",
      },
      body: {
        type: "object",
        properties: contactBody,
      },
    },
    500: {
      internal: {
        type: "string",
      },
    },
    400: {
      message: {
        type: "string",
      },
    },
  },
  deleteContact: {
    200: {
      message: {
        type: "string",
      },
    },
    500: {
      internal: {
        type: "string",
      },
    },
    400: {
      message: {
        type: "string",
      },
    },
  },

  patchContact: {
    200: {
      message: {
        type: "string",
      },
      body: {
        type: "object",
        properties: contactBody,
      },
    },
    500: {
      internal: {
        type: "string",
      },
    },
    400: {
      message: {
        type: "string",
      },
    },
  },
  putContact: {
    200: {
      message: {
        type: "string",
      },
      body: {
        type: "object",
        properties: contactBody,
      },
    },
    500: {
      internal: {
        type: "string",
      },
    },
    400: {
      message: {
        type: "string",
      },
    },
  },
};
