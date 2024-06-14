import type { TLike } from "../types"
import { api } from "./api"

export const likeApi = api.injectEndpoints({
  endpoints: builder => ({
    likePost: builder.mutation<TLike, { postId: string }>({
      query: body => ({
        url: "/likes",
        method: "POST",
        body,
      }),
    }),
    unLikePost: builder.mutation<void, string>({
      query: postId => ({
        url: `/likes/${postId}`,
        method: "DELETE",
      }),
    }),
  }),
})

export const { useLikePostMutation, useUnLikePostMutation } = likeApi

export const {
  endpoints: { likePost, unLikePost },
} = likeApi
