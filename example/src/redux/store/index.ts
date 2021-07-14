import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type StoreState = {
  data: {
    setting: {
      sdkAccessToken: string
      siteName: string
      siteDescription: string
      gaTagId: string
      contactUrl: string
      logoUrl: string
      ogpUrl: string
      faviconUrl: string
      primaryColorRGB: string
      secondaryColorRGB: string
      fortmaticAccessKey: string
      //   termsOfUseUrl: string
      //   privacyPolicyUrl: string
      //   tokuteiUrl: string
    }
    isTestNetEnv: boolean
  }
  meta: {
    loading: boolean
    initialized: boolean
    error: string | null
  }
}

export const initialStoreState: StoreState = {
  data: {
    setting: {
      sdkAccessToken: '',
      siteName: '',
      siteDescription: '',
      gaTagId: '',
      contactUrl: '',
      logoUrl: '',
      ogpUrl: '',
      faviconUrl: '',
      primaryColorRGB: '',
      secondaryColorRGB: '',
      fortmaticAccessKey: '',
    },
    isTestNetEnv: false,
  },
  meta: {
    error: null,
    loading: false,
    initialized: false,
  },
}

// AsyncAction

// Slice
export const storeSlice = createSlice({
  name: 'store',
  initialState: initialStoreState,
  reducers: {
    initStore: (state, { payload }: PayloadAction<StoreState['data']>) => {
      state.data = payload
    },
  },
})
