export type TUser = {
    id: string
    email: string
    password: string
    name?: string
    avatarUrl?: string
    dateOfBirth?: Date
    createdAt: Date
    updatedAt: Date
    bio?: string
    location?: string
    posts: TPost[]
    following: TFollows[]
    followers: TFollows[]
    likes: TLike[]
    comments: Comment[]
    isFollowing?: boolean
  }
  
  export type TFollows = {
    id: string
    follower: TUser
    followerId: string
    following: TUser
    followingId: string
  }
  
  export type TPost = {
    id: string
    content: string
    author: TUser
    authorId: string
    likes: TLike[]
    comments: Comment[]
    likedByUser: boolean
    createdAt: Date
    updatedAt: Date
  }
  
  export type TLike = {
    id: string
    user: TUser
    userId: string
    post: TPost
    postId: string
  }
  
  export type TComment = {
    id: string
    content: string
    user: TUser
    userId: string
    post: TPost
    postId: string
  }