import baseApi from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // ---------- create a product into db
    createProduct: builder.mutation({
      query: (newProduct) => {
        return {
          url: `/products/create-product`,
          method: "POST",
          body: newProduct,
        };
      },
      invalidatesTags: ["products"],
    }),
    // --------- load all products
    loadAllProducts: builder.query({
      query: ({
        searchTerm,
        priceRange,
        selectedCategories,
        sort,
        limit,
        page,
        ...others
      }) => {
        const params = new URLSearchParams();
        // Search term
        if (searchTerm) {
          params.append("searchTerm", searchTerm);
        }
        // Price range
        if (priceRange) {
          params.append("minPrice", priceRange[0].toString());
          params.append("maxPrice", priceRange[1].toString());
        }
        // Categories
        if (selectedCategories?.length > 0) {
          selectedCategories?.forEach((category: string) =>
            params.append("category", encodeURIComponent(category))
          );
        }
        // Sorting
        if (sort) {
          params.append("sort", sort);
        }
        // Pagination
        if (limit) {
          params.append("limit", limit.toString());
        }
        if (page) {
          params.append("page", page.toString());
        }

        // Handle dynamic properties in "others"
        Object.keys(others).forEach((key) => {
          if (others[key]) {
            params.append(key, others[key].toString());
          }
        });

        return { url: `/products?${params.toString()}` };
      },
      providesTags: ["products"],
    }),

    // ---------- load single product
    getProductById: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
      }),
      providesTags: (result, error, arg) => [{ type: "product", id: arg.id }],
    }),

    // ---------- delete single product
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "product", id: arg.id },
      ],
    }),

    // ---------- update single product
    updateProduct: builder.mutation({
      query: ({ product, productId }) => {
        return {
          url: `/products/${productId}`,
          method: "PATCH",
          body: product,
        };
      },
      invalidatesTags: ["products"],
    }),
  }),
});

export const {
  useCreateProductMutation,
  useLoadAllProductsQuery,
  useGetProductByIdQuery,
  useDeleteProductMutation,
  useUpdateProductMutation,
} = productApi;
