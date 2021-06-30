import { Item } from '@kyuzan/mint-sdk-js'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getSdk } from '../../sdk'

export type ItemDetail = Item | null
export type ItemState = {
  data: ItemDetail
  meta: {
    waitingItemAction: boolean
    initialized: boolean
    error: string | null
  }
}

export const initialItemState: ItemState = {
  data: null,
  meta: {
    waitingItemAction: false,
    error: null,
    initialized: false,
  },
}

// AsyncAction
export const initialItemActionCreator = createAsyncThunk(
  'app/item/init',
  async (itemId: string) => {
    const item = await getSdk().getItemById(itemId)
    return item
  }
)

export const getItemActionCreator = createAsyncThunk<
  ItemDetail,
  string,
  {
    rejectValue: string
  }
>('app/item/get', async (itemId, thunkApi) => {
  try {
    const item = await getSdk().getItemById(itemId)
    return item
  } catch (err) {
    return thunkApi.rejectWithValue(
      `ItemId:${itemId}のItemを取得できませんでした`
    )
  }
})

// slice

export const itemSlice = createSlice({
  name: 'item',
  initialState: initialItemState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      initialItemActionCreator.fulfilled,
      (state, { payload }) => {
        state.data = payload
      }
    )
    builder.addCase(getItemActionCreator.pending, (state) => {
      state.meta.waitingItemAction = true
    })
    builder.addCase(getItemActionCreator.fulfilled, (state, { payload }) => {
      state.data = payload
      state.meta.waitingItemAction = false
    })
    builder.addCase(getItemActionCreator.rejected, (state, { payload }) => {
      state.meta.error = payload ?? null
      state.meta.waitingItemAction = false
    })
  },
})
