import type { TComment } from "../types"
import { api } from "./api"

export const commentsApi = api.injectEndpoints({
    endpoints: builder => ({
      createComment: builder.mutation<TComment, Partial<TComment>>({
        query: newComment => ({
          url: "/comments",
          method: "POST",
          body: newComment,
        }),
      }),
      deleteComment: builder.mutation<void, string>({
        query: id => ({
          url: `/comments/${id}`,
          method: "DELETE",
        }),
      }),
    }),
  })
  
  export const {
     useCreateCommentMutation,
     useDeleteCommentMutation,
  } = commentsApi
  
  
  export const {
      endpoints: {deleteComment, createComment}
  } = commentsApi