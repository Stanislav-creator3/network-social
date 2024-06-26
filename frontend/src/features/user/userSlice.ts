import { createSlice } from "@reduxjs/toolkit"
import type { TUser } from "../../app/types"
import { userApi } from "../../app/services/userApi"
import { RootState } from "../../app/store"

interface IInitialState {
  user: TUser | null
  isAuthenticated: boolean
  users: TUser[] | null
  current: TUser | null
  token?: string
}

const initialState: IInitialState = {
  user: null,
  isAuthenticated: false,
  users: null,
  current: null,
}

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: () => initialState,
    resetUser: (state) => {
      state.user = null
    },
  },

  extraReducers: builder => {
    builder
      .addMatcher(userApi.endpoints.login.matchFulfilled, (state, action) => {
        state.token = action.payload.token
        state.isAuthenticated = true
      })
      .addMatcher(userApi.endpoints.current.matchFulfilled, (state, action) => {
        state.isAuthenticated = true
        state.current = action.payload
      })
      .addMatcher(
        userApi.endpoints.getUserById.matchFulfilled,
        (state, action) => {
          state.user = action.payload
        },
      )
  },
})


export const {logout, resetUser} = slice.actions

export default slice.reducer

export const selectIsAuthenticated = (state: RootState) => state.user.isAuthenticated
export const selectCurrent = (state: RootState) => state.user.current
export const selectUser = (state: RootState) => state.user.user
export const selectUsers = (state: RootState) => state.user.users
