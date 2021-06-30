import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type DialogState = {
  data: {
    content: null | {
      confirmText?: string
      title: string
      content: React.ReactNode
    }
  }
  //   meta: {}
}

export const initialDialogState: DialogState = {
  data: {
    content: null,
  },
}

// AsyncAction

// Slice
export const dialogSlice = createSlice({
  name: 'dialog',
  initialState: initialDialogState,
  reducers: {
    showDialog: (
      state,
      { payload }: PayloadAction<DialogState['data']['content']>
    ) => {
      state.data.content = payload
    },
    hideDialog: (state) => {
      state.data.content = null
    },
  },
})
