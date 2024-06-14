import { api } from "./api"
import type { TUser } from "../types"

export const userApi = api.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<
      {
        token: string
      },
      { email: string; password: string }
    >({
      query: userData => ({
        url: `/login`,
        method: "POST",
        body: userData,
      }),
    }),
    register: builder.mutation<
      { email: string; password: string; name: string },
      { email: string; password: string; name: string }
    >({
      query: userData => ({
        url: "/register",
        method: "POST",
        body: userData,
      }),
    }),
    current: builder.query<TUser, void>({
      query: () => ({
        url: "/current",
        method: "GET",
      }),
    }),
    getUserById: builder.query<TUser, string>({
      query: id => ({
        url: `/users/${id}`,
        method: "GET",
      }),
    }),
    updateUser: builder.mutation<TUser, { userData: FormData; id: string }>({
      query: ({ userData, id }) => ({
        url: `/users/${id}`,
        method: "PUT",
        body: userData,
      }),
    }),
  }),
})

export const {
  useRegisterMutation,
  useLoginMutation,
  useCurrentQuery,
  useGetUserByIdQuery,
  useUpdateUserMutation,
  useLazyCurrentQuery,
  useLazyGetUserByIdQuery,
} = userApi

export const {
  endpoints: { login, register, updateUser, getUserById, current },
} = userApi
