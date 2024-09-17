import baseApi from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // ----------- get current user
    getUserProfile: builder.query({
      query: () => {
        return {
          url: "/users/getMe",
        };
      },
    }),
  }),
});

export const { useGetUserProfileQuery } = userApi;
