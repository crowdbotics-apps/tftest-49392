import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_kvcdfh_list = createAsyncThunk(
  "kvcdfhs/api_v1_kvcdfh_list",
  async payload => {
    const response = await apiService.api_v1_kvcdfh_list(payload)
    return response.data
  }
)
export const api_v1_kvcdfh_create = createAsyncThunk(
  "kvcdfhs/api_v1_kvcdfh_create",
  async payload => {
    const response = await apiService.api_v1_kvcdfh_create(payload)
    return response.data
  }
)
export const api_v1_kvcdfh_retrieve = createAsyncThunk(
  "kvcdfhs/api_v1_kvcdfh_retrieve",
  async payload => {
    const response = await apiService.api_v1_kvcdfh_retrieve(payload)
    return response.data
  }
)
export const api_v1_kvcdfh_update = createAsyncThunk(
  "kvcdfhs/api_v1_kvcdfh_update",
  async payload => {
    const response = await apiService.api_v1_kvcdfh_update(payload)
    return response.data
  }
)
export const api_v1_kvcdfh_partial_update = createAsyncThunk(
  "kvcdfhs/api_v1_kvcdfh_partial_update",
  async payload => {
    const response = await apiService.api_v1_kvcdfh_partial_update(payload)
    return response.data
  }
)
export const api_v1_kvcdfh_destroy = createAsyncThunk(
  "kvcdfhs/api_v1_kvcdfh_destroy",
  async payload => {
    const response = await apiService.api_v1_kvcdfh_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const kvcdfhsSlice = createSlice({
  name: "kvcdfhs",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_kvcdfh_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_kvcdfh_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_kvcdfh_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_kvcdfh_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_kvcdfh_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_kvcdfh_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_kvcdfh_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_kvcdfh_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_kvcdfh_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_kvcdfh_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_kvcdfh_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_kvcdfh_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_kvcdfh_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_kvcdfh_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_kvcdfh_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_kvcdfh_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_kvcdfh_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_kvcdfh_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_kvcdfh_list,
  api_v1_kvcdfh_create,
  api_v1_kvcdfh_retrieve,
  api_v1_kvcdfh_update,
  api_v1_kvcdfh_partial_update,
  api_v1_kvcdfh_destroy,
  slice: kvcdfhsSlice
}
