import { baseApi } from "./baseApi";

<<<<<<< HEAD
=======

>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59
const useApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    loginAdmin: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/login",
          method: "POST",
          body: data,
        };
      },
    }),
<<<<<<< HEAD

    getProfile: builder.query({
      query: () => {
        return {
          url: "/user/user-profile",
=======
    
    getProfile: builder.query({
      query: () => {
        return {
          url: "/admin/profile",
>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),
<<<<<<< HEAD

    getAllUser: builder.query({
      query: ({ searchTerm, page, limit, status }) => ({
        url: `/customer/get-all`,
        method: "GET",
        params: {
          page,
          limit,
          searchTerm: searchTerm || undefined,
          status: status || undefined, // 🔥 key part
        },
      }),
      providesTags: ["updateProfile"],
    }),
    getSingleUser: builder.query({
      query: ({ id }) => {
        return {
          url: `/customer/get-single/${id}`,
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),


 getAllBartender: builder.query({
      query: ({ searchTerm, page, limit, status }) => ({
        url: `/bartender/get-all`,
        method: "GET",
        params: {
          page,
          limit,
          searchTerm: searchTerm || undefined,
          status: status || undefined, // 🔥 key part
        },
      }),
      providesTags: ["updateProfile"],
    }),
    getSingleBartender: builder.query({
      query: ({ id }) => {
        return {
          url: `/bartender/get-single/${id}`,
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),






     getAllVenueOwner: builder.query({
      query: ({ searchTerm, page, limit, status }) => ({
        url: `/venue-owner/get-all`,
        method: "GET",
        params: {
          page,
          limit,
          searchTerm: searchTerm || undefined,
          status: status || undefined, // 🔥 key part
        },
      }),
      providesTags: ["updateProfile"],
    }),
    getSingleVenueOwner: builder.query({
      query: ({ id }) => {
        return {
          url: `/venue-owner/get-single/${id}`,
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),





    userBlockUnblock: builder.mutation({
      query: (id) => {
        return {
          url: `/user/block-unblock/${id}`,
          method: "PATCH",
        };
      },
      invalidatesTags: ["updateProfile"],
    }),

=======
>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59
    forgotPassword: builder.mutation({
      query: (email) => {
        return {
          url: "/auth/forgot-password",
          method: "POST",
          body: email,
        };
      },
    }),
    verifyOtp: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/recovery-verification",
          method: "POST",
          body: data,
        };
      },
    }),
    resetPassword: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/reset-password",
          method: "PUT",
          body: data,
        };
      },
    }),
    updateProfile: builder.mutation({
<<<<<<< HEAD
      query: ({ data }) => {
        return {
          url: "/user/update-profile",
=======
      query: (data) => {
        return {
          url: "/admin/edit-profile",
>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59
          method: "PATCH",
          body: data,
        };
      },
<<<<<<< HEAD
=======
      invalidatesTags: ["updateProfile"],
>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59
    }),
    changePassword: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/change-password",
          method: "PUT",
          body: data,
        };
      },
    }),
    getHostUser: builder.query({
      query: ({ user, page, search }) => {
        return {
          url: `/dashboard/get-all-user?role=${user}&page=${page}&searchTerm=${search}`,
          method: "GET",
        };
<<<<<<< HEAD
=======

>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59
      },
      providesTags: ["host"],
    }),

    blockUserHost: builder.mutation({
      query: (data) => ({
        url: `/dashboard/block-unblock-user`,
        method: "PATCH",
        body: data,
      }),
<<<<<<< HEAD
      invalidatesTags: ["host"],
=======
      invalidatesTags: ["host"], 
>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59
    }),
  }),
});

export const {
  useLoginAdminMutation,
  useGetProfileQuery,
  useForgotPasswordMutation,
  useVerifyOtpMutation,
  useResetPasswordMutation,
  useUpdateProfileMutation,
  useChangePasswordMutation,
  useGetHostUserQuery,
  useBlockUserHostMutation,
<<<<<<< HEAD
  useGetAllUserQuery,
  useGetSingleUserQuery,
  useUserBlockUnblockMutation,
  useGetAllBartenderQuery,
  useGetSingleBartenderQuery,
  useGetSingleVenueOwnerQuery,
  useGetAllVenueOwnerQuery
=======
>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59
} = useApi;
