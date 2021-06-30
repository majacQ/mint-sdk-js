import { MintSDK, CurrencyUnit, NetworkId } from '@kyuzan/mint-sdk-js'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getSdk } from '../../sdk'

// State

type FormattedWalletInfo = {
  currencyUnit: CurrencyUnit
  balance: string
  address: string
}

export type WalletState = {
  data: {
    walletInfo: FormattedWalletInfo | null
    connectedNetwork: NetworkId
  }
  meta: {
    waitingWalletAction: boolean
    initialized: boolean
    error: string | null
  }
}

export const initialState: WalletState = {
  data: {
    walletInfo: null,
    connectedNetwork: 4,
  },
  meta: {
    waitingWalletAction: false,
    error: null,
    initialized: false,
  },
}

// AsyncAction

export const initialWalletActionCreator = createAsyncThunk(
  'app/wallet/init',
  async () => {
    if (await getSdk().isWalletConnect()) {
      const walletInfo = await getSdk().getWalletInfo()
      const connectingNetworkId = await getSdk().getConnectedNetworkId()
      return {
        balance: MintSDK.formatEther(walletInfo.balance),
        currencyUnit: walletInfo.unit,
        address: walletInfo.address,
        connectingNetworkId,
      }
    } else {
      return null
    }
  }
)

export const connectWalletActionCreator = createAsyncThunk<
  FormattedWalletInfo,
  void,
  {
    rejectValue: string
  }
>('app/wallet/connect', async (_, thunkApi) => {
  try {
    await getSdk().connectWallet()
    const walletInfo = await getSdk().getWalletInfo()
    return {
      balance: MintSDK.formatEther(walletInfo.balance),
      currencyUnit: walletInfo.unit,
      address: walletInfo.address,
    }
  } catch (err) {
    return thunkApi.rejectWithValue('ウォレットの接続に失敗しました')
  }
})

// slice

export const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    updateWalletInfo: (
      state,
      { payload }: PayloadAction<FormattedWalletInfo | undefined>
    ) => {
      if (typeof payload === 'undefined') {
        state.data.walletInfo = null
      } else {
        state.data.walletInfo = {
          balance: payload.balance,
          currencyUnit: payload.currencyUnit,
          address: payload.address,
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      initialWalletActionCreator.fulfilled,
      (state, { payload }) => {
        state.meta.initialized = true
        if (payload === null) {
          state.data.walletInfo = null
        } else {
          state.data.walletInfo = {
            balance: payload.balance,
            currencyUnit: payload.currencyUnit,
            address: payload.address,
          }
          state.data.connectedNetwork = payload.connectingNetworkId as NetworkId
        }
      }
    )
    builder.addCase(connectWalletActionCreator.pending, (state) => {
      state.meta.waitingWalletAction = true
    })
    builder.addCase(
      connectWalletActionCreator.fulfilled,
      (state, { payload }) => {
        state.data.walletInfo = {
          balance: payload.balance,
          currencyUnit: payload.currencyUnit,
          address: payload.address,
        }
        state.meta.waitingWalletAction = false
      }
    )
    builder.addCase(
      connectWalletActionCreator.rejected,
      (state, { payload }) => {
        state.meta.error = payload ?? null
        state.meta.waitingWalletAction = false
      }
    )
  },
})
