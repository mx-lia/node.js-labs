let openapi = {
  openapi: "3.0.1",
  info: {
    version: "1.0.0",
    title: "Records",
    description: "Phone dictionary API",
    termsOfService: "http://api_url/terms",
    contact: {
      name: "MYS",
      email: "m.yuliyas.00@gmail.com",
      url: "http://api_url/contact",
    },
    license: {
      name: "Apache 2.0",
      url: "https://www.apache.org/licenses/LICENSE-2.0.html",
    },
  },
  servers: [
    {
      url: "http://localhost:{port}",
      description: "Development server",
      variables: { port: { default: 3000 } },
    },
    {
      url: "http://api/testing:{port}",
      description: "Staging server",
      variables: { port: { enum: [448, 8443], default: 8443 } },
    },
    { url: "http://api/records.by", description: "Production server" },
  ],
  paths: {
    "/TS": {
      get: {
        tags: ["CRUD operations"],
        description: "Get records",
        operationId: "GetRecords",
        responses: {
          "200": {
            description: "Records list",
            content: {
              "application/json": {
                schema: { type: "array", items: { type: "object" } },
                example: [
                  { RecordID: 2, name: "Lia", phone: "+375447774455" },
                  { RecordID: 3, name: "George", phone: "+375254445566" },
                ],
              },
            },
          },
        },
      },
      post: {
        tags: ["CRUD operations"],
        description: "Add record",
        operationId: "AddRecord",
        requestBody: {
          content: {
            "application/json": {
              name: "Record info",
              schema: { type: "object" },
              required: true,
              description: "New record info",
              example: { RecordID: 2, name: "Yuliya", phone: "+375447675981" },
            },
          },
        },
      },
      put: {
        tags: ["CRUD operations"],
        description: "Update record",
        operationId: "UpdateRecord",
        parameters: [
          {
            name: "id",
            in: "header",
            required: true,
            description: "Record ID",
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              name: "Record info",
              schema: { type: "object" },
              required: true,
              description: "Modified record info",
              example: { name: "Yuliya", phone: "+375447675981" },
            },
          },
        },
      },
      delete: {
        tags: ["CRUD operations"],
        description: "Delete record",
        operationId: "DeleteRecord",
        parameters: [
          {
            name: "id",
            in: "header",
            required: true,
            description: "Record ID",
          },
        ],
      },
    },
  },
};

module.exports = openapi;