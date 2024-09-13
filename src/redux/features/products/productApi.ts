import baseApi from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // load all products
    loadAllProducts: builder.query({
      query: () => ({
        url: "/products",
      }),
    }),

    // create a new product
    createProduct: builder.mutation({
      query: (newProduct) => ({
        url: "/products/create-product",
        method: "POST",
        body: newProduct,
      }),
    }),

    // load single product
    getProductById: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
      }),
    }),
  }),
});

export const {
  useLoadAllProductsQuery,
  useCreateProductMutation,
  useGetProductByIdQuery,
} = productApi;
