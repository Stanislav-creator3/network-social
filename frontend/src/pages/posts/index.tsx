import React from "react"
import { useGetAllPostsQuery } from "../../app/services/postsApi"
import CreatePosts from "../../componets/create-post"
import Card from "../../componets/card"

const Posts = () => {
  const { data } = useGetAllPostsQuery()
  return (
    <>
      <div className="mb-10 w-full">
        <CreatePosts />
      </div>
      {data && data.length > 0
        ? data.map(
            ({
              content,
              author,
              id,
              authorId,
              comments,
              likes,
              likeByUser,
              createdAt,
            }) => (
              <Card
                key={id}
                avatarUrl={author.avatarUrl ?? ""}
                content={content}
                name={author.name ?? ""}
                likesCount={likes.length}
                commentCount={comments.length}
                authorId={authorId}
                likeByUser={likeByUser}
                createAt={createdAt}
                cardFor="post"
                id={id}
              />
            ),
          )
        : null}
    </>
  )
}

export default Posts
