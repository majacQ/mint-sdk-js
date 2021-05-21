/* tslint:disable */
/* eslint-disable */
/**
 * sdk_api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface InlineResponse200
 */
export interface InlineResponse200 {
    /**
     * 
     * @type {Array<Item>}
     * @memberof InlineResponse200
     */
    data: Array<Item>;
    /**
     * 
     * @type {object}
     * @memberof InlineResponse200
     */
    meta: object;
}
/**
 * 
 * @export
 * @interface InlineResponse2001
 */
export interface InlineResponse2001 {
    /**
     * 
     * @type {InlineResponse2001Data}
     * @memberof InlineResponse2001
     */
    data: InlineResponse2001Data;
    /**
     * 
     * @type {object}
     * @memberof InlineResponse2001
     */
    meta: object;
}
/**
 * 
 * @export
 * @interface InlineResponse2001Data
 */
export interface InlineResponse2001Data {
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2001Data
     */
    signedData: string;
}
/**
 * 
 * @export
 * @interface InlineResponse2002
 */
export interface InlineResponse2002 {
    /**
     * 
     * @type {ItemShippingInfo}
     * @memberof InlineResponse2002
     */
    data: ItemShippingInfo;
    /**
     * 
     * @type {object}
     * @memberof InlineResponse2002
     */
    meta: object;
}
/**
 * 
 * @export
 * @interface InlineResponse2003
 */
export interface InlineResponse2003 {
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2003
     */
    data?: string;
    /**
     * 
     * @type {object}
     * @memberof InlineResponse2003
     */
    meta?: object;
}
/**
 * 
 * @export
 * @interface Item
 */
export interface Item {
    /**
     * 
     * @type {string}
     * @memberof Item
     */
    chainType: ItemChainTypeEnum;
    /**
     * 
     * @type {ItemOpenStatus}
     * @memberof Item
     */
    openStatus: ItemOpenStatus;
    /**
     * 
     * @type {string}
     * @memberof Item
     */
    itemId: string;
    /**
     * 
     * @type {ItemType}
     * @memberof Item
     */
    type?: ItemType;
    /**
     * 
     * @type {PhysicalOrderStatus}
     * @memberof Item
     */
    physicalOrderStatus?: PhysicalOrderStatus;
    /**
     * memoがある時だけ値がある。管理者だけみれる。
     * @type {string}
     * @memberof Item
     */
    orderMemo?: string;
    /**
     * 
     * @type {TradeType}
     * @memberof Item
     */
    tradeType: TradeType;
    /**
     * 
     * @type {number}
     * @memberof Item
     */
    tokenId: number;
    /**
     * 
     * @type {string}
     * @memberof Item
     */
    collectionId: string;
    /**
     * 
     * @type {string}
     * @memberof Item
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Item
     */
    description: string;
    /**
     * NFTのMetadata（JSON）が収まっているU
     * @type {string}
     * @memberof Item
     */
    tokenURI: string;
    /**
     * tokenURIのHTTP Gateway経由のURL
     * @type {string}
     * @memberof Item
     */
    tokenURIHTTP: string;
    /**
     * 画像や動画などのデータが収まっている
     * @type {string}
     * @memberof Item
     */
    imageURI: string;
    /**
     * 
     * @type {Media}
     * @memberof Item
     */
    imageURIHTTP: Media;
    /**
     * Itemのプレビュー用URL
     * @type {Array<Media>}
     * @memberof Item
     */
    previews: Array<Media>;
    /**
     * Itemの作成者ウォレットアドレス
     * @type {string}
     * @memberof Item
     */
    authorAddress: string;
    /**
     * 
     * @type {NetworkId}
     * @memberof Item
     */
    networkId: NetworkId;
    /**
     * tradeType === fixedPriceの時に値が入る
     * @type {string}
     * @memberof Item
     */
    signatureBuyAuction?: string;
    /**
     * tradeType === auctionの時に値が入る。`/sign_bid_auction`で取得するに移行中
     * @type {string}
     * @memberof Item
     */
    signatureBidAuction?: string;
    /**
     * tradeType === auctionの時に値が入る。`/sign_buy_auction`で取得するに移行中
     * @type {string}
     * @memberof Item
     */
    signatureBuyFixedPrice?: string;
    /**
     * Itemが引き出されたり買われたりして、NFTが発行されると値が入る
     * @type {string}
     * @memberof Item
     */
    buyerAddress?: string;
    /**
     * tradeType === fixedPriceの時に値が入る。単位はETH。
     * @type {number}
     * @memberof Item
     */
    price?: number;
    /**
     * 最小入札価格。tradeType === auctionの時に値が入る。単位はETH。
     * @type {number}
     * @memberof Item
     */
    minBidPrice?: number;
    /**
     * tradeType === auctionの時に値が入る。currentPrice * minBidPercentage === minBidPrice
     * @type {number}
     * @memberof Item
     */
    minBidPercentage?: number;
    /**
     * 最高入札価格。tradeType === auctionの時に値が入る。単位はETH。
     * @type {number}
     * @memberof Item
     */
    currentPrice?: number;
    /**
     * 最高入札者。tradeType === auctionの時に値が入る。
     * @type {string}
     * @memberof Item
     */
    currentBidderAddress?: string;
    /**
     * オークション開始日時。tradeType === auction | autoExtensionAuction の時に値が入る。
     * @type {any}
     * @memberof Item
     */
    startAt?: any | null;
    /**
     * オークション終了日時。tradeType === auction | autoExtensionAuction の時に値が入る。
     * @type {any}
     * @memberof Item
     */
    endAt?: any | null;
    /**
     * オークション初期終了日時。tradeType === autoExtensionAuction の時に値が入る。
     * @type {any}
     * @memberof Item
     */
    defaultEndAt?: any | null;
    /**
     * オークション開始価格。tradeType === auctionの時に値が入る。単位はETH
     * @type {number}
     * @memberof Item
     */
    initialPrice?: number;
    /**
     * 作者名
     * @type {Array<string>}
     * @memberof Item
     */
    createdBy: Array<string>;
    /**
     * 任意のTag
     * @type {Array<string>}
     * @memberof Item
     */
    tags: Array<string>;
    /**
     * 作成年
     * @type {string}
     * @memberof Item
     */
    yearCreated: string;
    /**
     * トークンコントラクト。
     * @type {string}
     * @memberof Item
     */
    mintContractAddress: string;
    /**
     * Shopコントラクト
     * @type {string}
     * @memberof Item
     */
    mintShopContractAddress: string;
    /**
     * 手数料。MintShopコントラクトに支払われる
     * @type {number}
     * @memberof Item
     */
    feeRatePermill: number;
}

/**
    * @export
    * @enum {string}
    */
export enum ItemChainTypeEnum {
    Ethereum = 'ethereum'
}

/**
 * 
 * @export
 * @enum {string}
 */
export enum ItemOpenStatus {
    Open = 'open',
    Close = 'close',
    Withdrawal = 'withdrawal'
}

/**
 * 
 * @export
 * @interface ItemShippingInfo
 */
export interface ItemShippingInfo {
    /**
     * 
     * @type {string}
     * @memberof ItemShippingInfo
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ItemShippingInfo
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof ItemShippingInfo
     */
    postalCode: string;
    /**
     * 
     * @type {string}
     * @memberof ItemShippingInfo
     */
    prefecture: string;
    /**
     * 
     * @type {string}
     * @memberof ItemShippingInfo
     */
    city: string;
    /**
     * 
     * @type {string}
     * @memberof ItemShippingInfo
     */
    address1: string;
    /**
     * 
     * @type {string}
     * @memberof ItemShippingInfo
     */
    address2: string;
    /**
     * 
     * @type {string}
     * @memberof ItemShippingInfo
     */
    tel: string;
    /**
     * 
     * @type {string}
     * @memberof ItemShippingInfo
     */
    memo: string;
}
/**
 * typeがないものは、ノーマルなnft
 * @export
 * @enum {string}
 */
export enum ItemType {
    Nft = 'nft',
    NftWithPhysicalProduct = 'nftWithPhysicalProduct'
}

/**
 * 
 * @export
 * @interface Media
 */
export interface Media {
    /**
     * 
     * @type {string}
     * @memberof Media
     */
    url: string;
    /**
     * 
     * @type {string}
     * @memberof Media
     */
    mimeType: string;
}
/**
 * 
 * @export
 * @enum {string}
 */
export enum NetworkId {
    NUMBER_1 = 1,
    NUMBER_4 = 4,
    NUMBER_80001 = 80001,
    NUMBER_137 = 137,
    NUMBER_31337 = 31337
}

/**
 * 
 * @export
 * @enum {string}
 */
export enum PhysicalOrderStatus {
    ShippingInfoIsBlank = 'shippingInfoIsBlank',
    Wip = 'wip',
    Shipped = 'shipped'
}

/**
 * 
 * @export
 * @interface RegisterItemShippingInfoRequestBody
 */
export interface RegisterItemShippingInfoRequestBody {
    /**
     * 以下の項目データにSignしたもの
     * @type {string}
     * @memberof RegisterItemShippingInfoRequestBody
     */
    signedData: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterItemShippingInfoRequestBody
     */
    chainType: RegisterItemShippingInfoRequestBodyChainTypeEnum;
    /**
     * 
     * @type {NetworkId}
     * @memberof RegisterItemShippingInfoRequestBody
     */
    networkId: NetworkId;
    /**
     * 
     * @type {string}
     * @memberof RegisterItemShippingInfoRequestBody
     */
    contractAddress: string;
    /**
     * 
     * @type {number}
     * @memberof RegisterItemShippingInfoRequestBody
     */
    tokenId: number;
    /**
     * 
     * @type {string}
     * @memberof RegisterItemShippingInfoRequestBody
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterItemShippingInfoRequestBody
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterItemShippingInfoRequestBody
     */
    postalCode: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterItemShippingInfoRequestBody
     */
    prefecture: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterItemShippingInfoRequestBody
     */
    city: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterItemShippingInfoRequestBody
     */
    address1: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterItemShippingInfoRequestBody
     */
    address2: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterItemShippingInfoRequestBody
     */
    tel: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterItemShippingInfoRequestBody
     */
    memo: string;
}

/**
    * @export
    * @enum {string}
    */
export enum RegisterItemShippingInfoRequestBodyChainTypeEnum {
    Ethereum = 'ethereum'
}

/**
 * 
 * @export
 * @enum {string}
 */
export enum TradeType {
    FixedPrice = 'fixedPrice',
    Auction = 'auction',
    AutoExtensionAuction = 'autoExtensionAuction'
}


/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary アイテムを返す
         * @param {string} annapurnaAccessToken 
         * @param {Array<string> | string} networkIds 
         * @param {ItemType} [itemType] 
         * @param {TradeType} [tradeType] 
         * @param {'true' | 'false'} [onSale] 
         * @param {string} [perPage] 
         * @param {string} [page] 
         * @param {'endAt' | 'startAt' | 'price' | 'tokenId'} [sortBy] 
         * @param {'asc' | 'desc'} [order] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getItemList: async (annapurnaAccessToken: string, networkIds: Array<string> | string, itemType?: ItemType, tradeType?: TradeType, onSale?: 'true' | 'false', perPage?: string, page?: string, sortBy?: 'endAt' | 'startAt' | 'price' | 'tokenId', order?: 'asc' | 'desc', options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'annapurnaAccessToken' is not null or undefined
            assertParamExists('getItemList', 'annapurnaAccessToken', annapurnaAccessToken)
            // verify required parameter 'networkIds' is not null or undefined
            assertParamExists('getItemList', 'networkIds', networkIds)
            const localVarPath = `/v3_items`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (networkIds !== undefined) {
                localVarQueryParameter['networkIds'] = networkIds;
            }

            if (itemType !== undefined) {
                localVarQueryParameter['itemType'] = itemType;
            }

            if (tradeType !== undefined) {
                localVarQueryParameter['tradeType'] = tradeType;
            }

            if (onSale !== undefined) {
                localVarQueryParameter['onSale'] = onSale;
            }

            if (perPage !== undefined) {
                localVarQueryParameter['perPage'] = perPage;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (sortBy !== undefined) {
                localVarQueryParameter['sortBy'] = sortBy;
            }

            if (order !== undefined) {
                localVarQueryParameter['order'] = order;
            }

            if (annapurnaAccessToken !== undefined && annapurnaAccessToken !== null) {
                localVarHeaderParameter['annapurna-access-token'] = String(annapurnaAccessToken);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 登録されているフィジカルアイテム付きItemに配送先住所を取得。（個人情報なので、WalletのSignが必要）
         * @param {string} annapurnaAccessToken 
         * @param {string} itemId 
         * @param {string} walletAddress 
         * @param {string} signedData Walletアドレスの文字列にSignしたもの
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getItemShippingInfo: async (annapurnaAccessToken: string, itemId: string, walletAddress: string, signedData: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'annapurnaAccessToken' is not null or undefined
            assertParamExists('getItemShippingInfo', 'annapurnaAccessToken', annapurnaAccessToken)
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('getItemShippingInfo', 'itemId', itemId)
            // verify required parameter 'walletAddress' is not null or undefined
            assertParamExists('getItemShippingInfo', 'walletAddress', walletAddress)
            // verify required parameter 'signedData' is not null or undefined
            assertParamExists('getItemShippingInfo', 'signedData', signedData)
            const localVarPath = `/v3_items/{itemId}/shipping_info`
                .replace(`{${"itemId"}}`, encodeURIComponent(String(itemId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (walletAddress !== undefined) {
                localVarQueryParameter['walletAddress'] = walletAddress;
            }

            if (signedData !== undefined) {
                localVarQueryParameter['signedData'] = signedData;
            }

            if (annapurnaAccessToken !== undefined && annapurnaAccessToken !== null) {
                localVarHeaderParameter['annapurna-access-token'] = String(annapurnaAccessToken);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary アイテムのBidAuction用のSignを取得。自動延長の場合は、バリデーションあり。終了後5minで引き出せる。
         * @param {string} annapurnaAccessToken 
         * @param {string} itemId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getItemSignedDataBidAuction: async (annapurnaAccessToken: string, itemId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'annapurnaAccessToken' is not null or undefined
            assertParamExists('getItemSignedDataBidAuction', 'annapurnaAccessToken', annapurnaAccessToken)
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('getItemSignedDataBidAuction', 'itemId', itemId)
            const localVarPath = `/v3_items/{itemId}/sign_bid_auction`
                .replace(`{${"itemId"}}`, encodeURIComponent(String(itemId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (annapurnaAccessToken !== undefined && annapurnaAccessToken !== null) {
                localVarHeaderParameter['annapurna-access-token'] = String(annapurnaAccessToken);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary アイテムのBuyAuction用のSignを取得。自動延長の場合は、バリデーションあり。引き出しには終了時刻から5minいじようあ
         * @param {string} annapurnaAccessToken 
         * @param {string} itemId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getItemSignedDataBuyAuction: async (annapurnaAccessToken: string, itemId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'annapurnaAccessToken' is not null or undefined
            assertParamExists('getItemSignedDataBuyAuction', 'annapurnaAccessToken', annapurnaAccessToken)
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('getItemSignedDataBuyAuction', 'itemId', itemId)
            const localVarPath = `/v3_items/{itemId}/sign_buy_auction`
                .replace(`{${"itemId"}}`, encodeURIComponent(String(itemId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (annapurnaAccessToken !== undefined && annapurnaAccessToken !== null) {
                localVarHeaderParameter['annapurna-access-token'] = String(annapurnaAccessToken);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary フィジカルアイテム付きItemに配送先住所を登録する
         * @param {string} annapurnaAccessToken 
         * @param {string} itemId 
         * @param {RegisterItemShippingInfoRequestBody} [registerItemShippingInfoRequestBody] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        registerItemShippingInfo: async (annapurnaAccessToken: string, itemId: string, registerItemShippingInfoRequestBody?: RegisterItemShippingInfoRequestBody, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'annapurnaAccessToken' is not null or undefined
            assertParamExists('registerItemShippingInfo', 'annapurnaAccessToken', annapurnaAccessToken)
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('registerItemShippingInfo', 'itemId', itemId)
            const localVarPath = `/v3_items/{itemId}/shipping_info`
                .replace(`{${"itemId"}}`, encodeURIComponent(String(itemId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (annapurnaAccessToken !== undefined && annapurnaAccessToken !== null) {
                localVarHeaderParameter['annapurna-access-token'] = String(annapurnaAccessToken);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(registerItemShippingInfoRequestBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary アイテムを返す
         * @param {string} annapurnaAccessToken 
         * @param {Array<string> | string} networkIds 
         * @param {ItemType} [itemType] 
         * @param {TradeType} [tradeType] 
         * @param {'true' | 'false'} [onSale] 
         * @param {string} [perPage] 
         * @param {string} [page] 
         * @param {'endAt' | 'startAt' | 'price' | 'tokenId'} [sortBy] 
         * @param {'asc' | 'desc'} [order] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getItemList(annapurnaAccessToken: string, networkIds: Array<string> | string, itemType?: ItemType, tradeType?: TradeType, onSale?: 'true' | 'false', perPage?: string, page?: string, sortBy?: 'endAt' | 'startAt' | 'price' | 'tokenId', order?: 'asc' | 'desc', options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse200>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getItemList(annapurnaAccessToken, networkIds, itemType, tradeType, onSale, perPage, page, sortBy, order, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary 登録されているフィジカルアイテム付きItemに配送先住所を取得。（個人情報なので、WalletのSignが必要）
         * @param {string} annapurnaAccessToken 
         * @param {string} itemId 
         * @param {string} walletAddress 
         * @param {string} signedData Walletアドレスの文字列にSignしたもの
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getItemShippingInfo(annapurnaAccessToken: string, itemId: string, walletAddress: string, signedData: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse2002>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getItemShippingInfo(annapurnaAccessToken, itemId, walletAddress, signedData, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary アイテムのBidAuction用のSignを取得。自動延長の場合は、バリデーションあり。終了後5minで引き出せる。
         * @param {string} annapurnaAccessToken 
         * @param {string} itemId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getItemSignedDataBidAuction(annapurnaAccessToken: string, itemId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse2001>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getItemSignedDataBidAuction(annapurnaAccessToken, itemId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary アイテムのBuyAuction用のSignを取得。自動延長の場合は、バリデーションあり。引き出しには終了時刻から5minいじようあ
         * @param {string} annapurnaAccessToken 
         * @param {string} itemId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getItemSignedDataBuyAuction(annapurnaAccessToken: string, itemId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse2001>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getItemSignedDataBuyAuction(annapurnaAccessToken, itemId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary フィジカルアイテム付きItemに配送先住所を登録する
         * @param {string} annapurnaAccessToken 
         * @param {string} itemId 
         * @param {RegisterItemShippingInfoRequestBody} [registerItemShippingInfoRequestBody] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async registerItemShippingInfo(annapurnaAccessToken: string, itemId: string, registerItemShippingInfoRequestBody?: RegisterItemShippingInfoRequestBody, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse2003>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.registerItemShippingInfo(annapurnaAccessToken, itemId, registerItemShippingInfoRequestBody, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DefaultApiFp(configuration)
    return {
        /**
         * 
         * @summary アイテムを返す
         * @param {string} annapurnaAccessToken 
         * @param {Array<string> | string} networkIds 
         * @param {ItemType} [itemType] 
         * @param {TradeType} [tradeType] 
         * @param {'true' | 'false'} [onSale] 
         * @param {string} [perPage] 
         * @param {string} [page] 
         * @param {'endAt' | 'startAt' | 'price' | 'tokenId'} [sortBy] 
         * @param {'asc' | 'desc'} [order] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getItemList(annapurnaAccessToken: string, networkIds: Array<string> | string, itemType?: ItemType, tradeType?: TradeType, onSale?: 'true' | 'false', perPage?: string, page?: string, sortBy?: 'endAt' | 'startAt' | 'price' | 'tokenId', order?: 'asc' | 'desc', options?: any): AxiosPromise<InlineResponse200> {
            return localVarFp.getItemList(annapurnaAccessToken, networkIds, itemType, tradeType, onSale, perPage, page, sortBy, order, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 登録されているフィジカルアイテム付きItemに配送先住所を取得。（個人情報なので、WalletのSignが必要）
         * @param {string} annapurnaAccessToken 
         * @param {string} itemId 
         * @param {string} walletAddress 
         * @param {string} signedData Walletアドレスの文字列にSignしたもの
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getItemShippingInfo(annapurnaAccessToken: string, itemId: string, walletAddress: string, signedData: string, options?: any): AxiosPromise<InlineResponse2002> {
            return localVarFp.getItemShippingInfo(annapurnaAccessToken, itemId, walletAddress, signedData, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary アイテムのBidAuction用のSignを取得。自動延長の場合は、バリデーションあり。終了後5minで引き出せる。
         * @param {string} annapurnaAccessToken 
         * @param {string} itemId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getItemSignedDataBidAuction(annapurnaAccessToken: string, itemId: string, options?: any): AxiosPromise<InlineResponse2001> {
            return localVarFp.getItemSignedDataBidAuction(annapurnaAccessToken, itemId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary アイテムのBuyAuction用のSignを取得。自動延長の場合は、バリデーションあり。引き出しには終了時刻から5minいじようあ
         * @param {string} annapurnaAccessToken 
         * @param {string} itemId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getItemSignedDataBuyAuction(annapurnaAccessToken: string, itemId: string, options?: any): AxiosPromise<InlineResponse2001> {
            return localVarFp.getItemSignedDataBuyAuction(annapurnaAccessToken, itemId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary フィジカルアイテム付きItemに配送先住所を登録する
         * @param {string} annapurnaAccessToken 
         * @param {string} itemId 
         * @param {RegisterItemShippingInfoRequestBody} [registerItemShippingInfoRequestBody] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        registerItemShippingInfo(annapurnaAccessToken: string, itemId: string, registerItemShippingInfoRequestBody?: RegisterItemShippingInfoRequestBody, options?: any): AxiosPromise<InlineResponse2003> {
            return localVarFp.registerItemShippingInfo(annapurnaAccessToken, itemId, registerItemShippingInfoRequestBody, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * 
     * @summary アイテムを返す
     * @param {string} annapurnaAccessToken 
     * @param {Array<string> | string} networkIds 
     * @param {ItemType} [itemType] 
     * @param {TradeType} [tradeType] 
     * @param {'true' | 'false'} [onSale] 
     * @param {string} [perPage] 
     * @param {string} [page] 
     * @param {'endAt' | 'startAt' | 'price' | 'tokenId'} [sortBy] 
     * @param {'asc' | 'desc'} [order] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getItemList(annapurnaAccessToken: string, networkIds: Array<string> | string, itemType?: ItemType, tradeType?: TradeType, onSale?: 'true' | 'false', perPage?: string, page?: string, sortBy?: 'endAt' | 'startAt' | 'price' | 'tokenId', order?: 'asc' | 'desc', options?: any) {
        return DefaultApiFp(this.configuration).getItemList(annapurnaAccessToken, networkIds, itemType, tradeType, onSale, perPage, page, sortBy, order, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary 登録されているフィジカルアイテム付きItemに配送先住所を取得。（個人情報なので、WalletのSignが必要）
     * @param {string} annapurnaAccessToken 
     * @param {string} itemId 
     * @param {string} walletAddress 
     * @param {string} signedData Walletアドレスの文字列にSignしたもの
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getItemShippingInfo(annapurnaAccessToken: string, itemId: string, walletAddress: string, signedData: string, options?: any) {
        return DefaultApiFp(this.configuration).getItemShippingInfo(annapurnaAccessToken, itemId, walletAddress, signedData, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary アイテムのBidAuction用のSignを取得。自動延長の場合は、バリデーションあり。終了後5minで引き出せる。
     * @param {string} annapurnaAccessToken 
     * @param {string} itemId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getItemSignedDataBidAuction(annapurnaAccessToken: string, itemId: string, options?: any) {
        return DefaultApiFp(this.configuration).getItemSignedDataBidAuction(annapurnaAccessToken, itemId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary アイテムのBuyAuction用のSignを取得。自動延長の場合は、バリデーションあり。引き出しには終了時刻から5minいじようあ
     * @param {string} annapurnaAccessToken 
     * @param {string} itemId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getItemSignedDataBuyAuction(annapurnaAccessToken: string, itemId: string, options?: any) {
        return DefaultApiFp(this.configuration).getItemSignedDataBuyAuction(annapurnaAccessToken, itemId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary フィジカルアイテム付きItemに配送先住所を登録する
     * @param {string} annapurnaAccessToken 
     * @param {string} itemId 
     * @param {RegisterItemShippingInfoRequestBody} [registerItemShippingInfoRequestBody] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public registerItemShippingInfo(annapurnaAccessToken: string, itemId: string, registerItemShippingInfoRequestBody?: RegisterItemShippingInfoRequestBody, options?: any) {
        return DefaultApiFp(this.configuration).registerItemShippingInfo(annapurnaAccessToken, itemId, registerItemShippingInfoRequestBody, options).then((request) => request(this.axios, this.basePath));
    }
}


