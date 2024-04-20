import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core';
import Oas from 'oas';
import APICore from 'api/dist/core';
declare class SDK {
    spec: Oas;
    core: APICore;
    constructor();
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config: ConfigOptions): void;
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    auth(...values: string[] | number[]): this;
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    server(url: string, variables?: {}): void;
    /**
     * Returns true/false if the wallet address is a holder of the token, as well as token
     * count and token ids
     *
     * @summary Get is the wallet address a holder of a token?
     * @throws FetchError<401, types.GetNftDataIswalletholderoftokenResponse401> Unauthorized
     * @throws FetchError<403, types.GetNftDataIswalletholderoftokenResponse403> Forbidden
     * @throws FetchError<404, types.GetNftDataIswalletholderoftokenResponse404> Not found
     */
    getNftDataIswalletholderoftoken(metadata: types.GetNftDataIswalletholderoftokenMetadataParam): Promise<FetchResponse<200, types.GetNftDataIswalletholderoftokenResponse200>>;
    /**
     * Returns a list of all NFTs held within a particular wallet address
     *
     * @summary Get all NFTs owned by a wallet address
     * @throws FetchError<401, types.GetNftDataOwnedResponse401> Unauthorized
     * @throws FetchError<403, types.GetNftDataOwnedResponse403> Forbidden
     * @throws FetchError<404, types.GetNftDataOwnedResponse404> Not found
     */
    getNftDataOwned(metadata: types.GetNftDataOwnedMetadataParam): Promise<FetchResponse<200, types.GetNftDataOwnedResponse200>>;
    /**
     * Returns a list of all NFTs created by a particular wallet address
     *
     * @summary Get all NFTs created by a wallet address
     * @throws FetchError<401, types.GetNftDataCreatedResponse401> Unauthorized
     * @throws FetchError<403, types.GetNftDataCreatedResponse403> Forbidden
     * @throws FetchError<404, types.GetNftDataCreatedResponse404> Not found
     */
    getNftDataCreated(metadata: types.GetNftDataCreatedMetadataParam): Promise<FetchResponse<200, types.GetNftDataCreatedResponse200>>;
    /**
     * Returns a list of all transactions by a particular wallet address
     *
     * @summary Get all transactions by a wallet address
     * @throws FetchError<401, types.GetNftDataTransactionsResponse401> Unauthorized
     * @throws FetchError<403, types.GetNftDataTransactionsResponse403> Forbidden
     * @throws FetchError<404, types.GetNftDataTransactionsResponse404> Not found
     */
    getNftDataTransactions(metadata: types.GetNftDataTransactionsMetadataParam): Promise<FetchResponse<200, types.GetNftDataTransactionsResponse200>>;
    /**
     * Produce a list of all NFTs transactions for a specific NFT contract within a particular
     * wallet address
     *
     * @summary Get all NFTs Contract transactions by a wallet address
     * @throws FetchError<401, types.GetNftDataTransactionsbycontractResponse401> Unauthorized
     * @throws FetchError<403, types.GetNftDataTransactionsbycontractResponse403> Forbidden
     * @throws FetchError<404, types.GetNftDataTransactionsbycontractResponse404> Not found
     */
    getNftDataTransactionsbycontract(metadata: types.GetNftDataTransactionsbycontractMetadataParam): Promise<FetchResponse<200, types.GetNftDataTransactionsbycontractResponse200>>;
    /**
     * Returns all details for an NFT
     *
     * @summary Get details for an NFT
     * @throws FetchError<401, types.GetNftDataNftdetailsResponse401> Unauthorized
     * @throws FetchError<403, types.GetNftDataNftdetailsResponse403> Forbidden
     * @throws FetchError<404, types.GetNftDataNftdetailsResponse404> Not found
     */
    getNftDataNftdetails(metadata: types.GetNftDataNftdetailsMetadataParam): Promise<FetchResponse<200, types.GetNftDataNftdetailsResponse200>>;
    /**
     * Returns the most recent floor price for an NFT project slug
     *
     * @summary Get last floor price for slug
     * @throws FetchError<401, types.GetNftDataLastfloorpriceforslugResponse401> Unauthorized
     * @throws FetchError<403, types.GetNftDataLastfloorpriceforslugResponse403> Forbidden
     * @throws FetchError<404, types.GetNftDataLastfloorpriceforslugResponse404> Not found
     */
    getNftDataLastfloorpriceforslug(metadata: types.GetNftDataLastfloorpriceforslugMetadataParam): Promise<FetchResponse<200, types.GetNftDataLastfloorpriceforslugResponse200>>;
    /**
     * Returns the most recent floor price for an NFT
     *
     * @summary Get last floor price for contract address
     * @throws FetchError<401, types.GetNftDataLastfloorpriceforcontractaddressResponse401> Unauthorized
     * @throws FetchError<403, types.GetNftDataLastfloorpriceforcontractaddressResponse403> Forbidden
     * @throws FetchError<404, types.GetNftDataLastfloorpriceforcontractaddressResponse404> Not found
     */
    getNftDataLastfloorpriceforcontractaddress(metadata: types.GetNftDataLastfloorpriceforcontractaddressMetadataParam): Promise<FetchResponse<200, types.GetNftDataLastfloorpriceforcontractaddressResponse200>>;
    /**
     * Returns all floor price history for an NFT project slug
     *
     * @summary Get floor prices for slug
     * @throws FetchError<401, types.GetNftDataFloorpricesforslugResponse401> Unauthorized
     * @throws FetchError<403, types.GetNftDataFloorpricesforslugResponse403> Forbidden
     * @throws FetchError<404, types.GetNftDataFloorpricesforslugResponse404> Not found
     */
    getNftDataFloorpricesforslug(metadata: types.GetNftDataFloorpricesforslugMetadataParam): Promise<FetchResponse<200, types.GetNftDataFloorpricesforslugResponse200>>;
    /**
     * Returns all floor price history for an NFT project
     *
     * @summary Get floor prices for contract address
     * @throws FetchError<401, types.GetNftDataFloorpricesforcontractaddressResponse401> Unauthorized
     * @throws FetchError<403, types.GetNftDataFloorpricesforcontractaddressResponse403> Forbidden
     * @throws FetchError<404, types.GetNftDataFloorpricesforcontractaddressResponse404> Not found
     */
    getNftDataFloorpricesforcontractaddress(metadata: types.GetNftDataFloorpricesforcontractaddressMetadataParam): Promise<FetchResponse<200, types.GetNftDataFloorpricesforcontractaddressResponse200>>;
    /**
     * Returns historical statistics for an NFT project slug
     *
     * @summary Get historical stats for slug
     * @throws FetchError<401, types.GetNftDataHistoricalstatsforslugResponse401> Unauthorized
     * @throws FetchError<403, types.GetNftDataHistoricalstatsforslugResponse403> Forbidden
     * @throws FetchError<404, types.GetNftDataHistoricalstatsforslugResponse404> Not found
     */
    getNftDataHistoricalstatsforslug(metadata: types.GetNftDataHistoricalstatsforslugMetadataParam): Promise<FetchResponse<200, types.GetNftDataHistoricalstatsforslugResponse200>>;
    /**
     * Returns historical statistics for an NFT project
     *
     * @summary Get historical stats for contract address
     * @throws FetchError<401, types.GetNftDataHistoricalstatsforcontractaddressResponse401> Unauthorized
     * @throws FetchError<403, types.GetNftDataHistoricalstatsforcontractaddressResponse403> Forbidden
     * @throws FetchError<404, types.GetNftDataHistoricalstatsforcontractaddressResponse404> Not found
     */
    getNftDataHistoricalstatsforcontractaddress(metadata: types.GetNftDataHistoricalstatsforcontractaddressMetadataParam): Promise<FetchResponse<200, types.GetNftDataHistoricalstatsforcontractaddressResponse200>>;
    /**
     * Returns all sales events for a particular NFT project slug
     *
     * @summary Get sales events for slug
     * @throws FetchError<401, types.GetNftDataSaleseventsforslugResponse401> Unauthorized
     * @throws FetchError<403, types.GetNftDataSaleseventsforslugResponse403> Forbidden
     * @throws FetchError<404, types.GetNftDataSaleseventsforslugResponse404> Not found
     */
    getNftDataSaleseventsforslug(metadata: types.GetNftDataSaleseventsforslugMetadataParam): Promise<FetchResponse<200, types.GetNftDataSaleseventsforslugResponse200>>;
    /**
     * Returns all sales events for a particular NFT project slug
     *
     * @summary Get sales events for contract address
     * @throws FetchError<401, types.GetNftDataSaleseventsforcontractaddressResponse401> Unauthorized
     * @throws FetchError<403, types.GetNftDataSaleseventsforcontractaddressResponse403> Forbidden
     * @throws FetchError<404, types.GetNftDataSaleseventsforcontractaddressResponse404> Not found
     */
    getNftDataSaleseventsforcontractaddress(metadata: types.GetNftDataSaleseventsforcontractaddressMetadataParam): Promise<FetchResponse<200, types.GetNftDataSaleseventsforcontractaddressResponse200>>;
    /**
     * Returns all transfer events for a particular NFT project slug
     *
     * @summary Get transfer events for slug
     * @throws FetchError<401, types.GetNftDataTransfereventsforslugResponse401> Unauthorized
     * @throws FetchError<403, types.GetNftDataTransfereventsforslugResponse403> Forbidden
     * @throws FetchError<404, types.GetNftDataTransfereventsforslugResponse404> Not found
     */
    getNftDataTransfereventsforslug(metadata: types.GetNftDataTransfereventsforslugMetadataParam): Promise<FetchResponse<200, types.GetNftDataTransfereventsforslugResponse200>>;
    /**
     * Returns all transfer events for a particular NFT project slug
     *
     * @summary Get transfer events for contract address
     * @throws FetchError<401, types.GetNftDataTransfereventsforcontractaddressResponse401> Unauthorized
     * @throws FetchError<403, types.GetNftDataTransfereventsforcontractaddressResponse403> Forbidden
     * @throws FetchError<404, types.GetNftDataTransfereventsforcontractaddressResponse404> Not found
     */
    getNftDataTransfereventsforcontractaddress(metadata: types.GetNftDataTransfereventsforcontractaddressMetadataParam): Promise<FetchResponse<200, types.GetNftDataTransfereventsforcontractaddressResponse200>>;
    /**
     * Returns all wallets that own a particular NFT project slug
     *
     * @summary Get ownership data for slug
     * @throws FetchError<401, types.GetNftDataOwnershipforslugResponse401> Unauthorized
     * @throws FetchError<403, types.GetNftDataOwnershipforslugResponse403> Forbidden
     * @throws FetchError<404, types.GetNftDataOwnershipforslugResponse404> Not found
     */
    getNftDataOwnershipforslug(metadata: types.GetNftDataOwnershipforslugMetadataParam): Promise<FetchResponse<200, types.GetNftDataOwnershipforslugResponse200>>;
    /**
     * Returns all wallets that owna particular NFT project slug
     *
     * @summary Get ownership data for contract address
     * @throws FetchError<401, types.GetNftDataOwnershipforcontractaddressResponse401> Unauthorized
     * @throws FetchError<403, types.GetNftDataOwnershipforcontractaddressResponse403> Forbidden
     * @throws FetchError<404, types.GetNftDataOwnershipforcontractaddressResponse404> Not found
     */
    getNftDataOwnershipforcontractaddress(metadata: types.GetNftDataOwnershipforcontractaddressMetadataParam): Promise<FetchResponse<200, types.GetNftDataOwnershipforcontractaddressResponse200>>;
    /**
     * Returns all collections indexed by Verbwire
     *
     * @summary Get all indexed collections
     * @throws FetchError<401, types.GetNftDataCollectionsAllResponse401> Unauthorized
     * @throws FetchError<403, types.GetNftDataCollectionsAllResponse403> Forbidden
     * @throws FetchError<404, types.GetNftDataCollectionsAllResponse404> Not found
     */
    getNftDataCollectionsAll(metadata?: types.GetNftDataCollectionsAllMetadataParam): Promise<FetchResponse<200, types.GetNftDataCollectionsAllResponse200>>;
    /**
     * Searches all collections indexed by Verbwire for a given string
     *
     * @summary Search all indexed collections
     * @throws FetchError<401, types.GetNftDataCollectionsSearchResponse401> Unauthorized
     * @throws FetchError<403, types.GetNftDataCollectionsSearchResponse403> Forbidden
     * @throws FetchError<404, types.GetNftDataCollectionsSearchResponse404> Not found
     */
    getNftDataCollectionsSearch(metadata: types.GetNftDataCollectionsSearchMetadataParam): Promise<FetchResponse<200, types.GetNftDataCollectionsSearchResponse200>>;
    /**
     * Returns all metadata attributes for a particular NFT project slug
     *
     * @summary Get attributes for slug
     * @throws FetchError<401, types.GetNftDataAttributesforslugResponse401> Unauthorized
     * @throws FetchError<403, types.GetNftDataAttributesforslugResponse403> Forbidden
     * @throws FetchError<404, types.GetNftDataAttributesforslugResponse404> Not found
     */
    getNftDataAttributesforslug(metadata: types.GetNftDataAttributesforslugMetadataParam): Promise<FetchResponse<200, types.GetNftDataAttributesforslugResponse200>>;
    /**
     * Returns all metadata attributes for an NFT contract address
     *
     * @summary Get attributes for contract address
     * @throws FetchError<401, types.GetNftDataAttributesforcontractaddressResponse401> Unauthorized
     * @throws FetchError<403, types.GetNftDataAttributesforcontractaddressResponse403> Forbidden
     * @throws FetchError<404, types.GetNftDataAttributesforcontractaddressResponse404> Not found
     */
    getNftDataAttributesforcontractaddress(metadata: types.GetNftDataAttributesforcontractaddressMetadataParam): Promise<FetchResponse<200, types.GetNftDataAttributesforcontractaddressResponse200>>;
    /**
     * Returns all metadata attributes and corresponding token IDs for a particular NFT project
     * slug
     *
     * @summary Get attributes (with tokens) for slug
     * @throws FetchError<401, types.GetNftDataAttributeswithtokensforslugResponse401> Unauthorized
     * @throws FetchError<403, types.GetNftDataAttributeswithtokensforslugResponse403> Forbidden
     * @throws FetchError<404, types.GetNftDataAttributeswithtokensforslugResponse404> Not found
     */
    getNftDataAttributeswithtokensforslug(metadata: types.GetNftDataAttributeswithtokensforslugMetadataParam): Promise<FetchResponse<200, types.GetNftDataAttributeswithtokensforslugResponse200>>;
    /**
     * Returns all metadata attributes and corresponding token IDs for an NFT contract address
     *
     * @summary Get attributes (with tokens) for contract address
     * @throws FetchError<401, types.GetNftDataAttributeswithtokensforcontractaddressResponse401> Unauthorized
     * @throws FetchError<403, types.GetNftDataAttributeswithtokensforcontractaddressResponse403> Forbidden
     * @throws FetchError<404, types.GetNftDataAttributeswithtokensforcontractaddressResponse404> Not found
     */
    getNftDataAttributeswithtokensforcontractaddress(metadata: types.GetNftDataAttributeswithtokensforcontractaddressMetadataParam): Promise<FetchResponse<200, types.GetNftDataAttributeswithtokensforcontractaddressResponse200>>;
    /**
     * Returns all metadata attributes for a particular NFT project slug
     *
     * @summary Search attributes in slug
     * @throws FetchError<401, types.GetNftDataSearchattributesinslugResponse401> Unauthorized
     * @throws FetchError<403, types.GetNftDataSearchattributesinslugResponse403> Forbidden
     * @throws FetchError<404, types.GetNftDataSearchattributesinslugResponse404> Not found
     */
    getNftDataSearchattributesinslug(metadata: types.GetNftDataSearchattributesinslugMetadataParam): Promise<FetchResponse<200, types.GetNftDataSearchattributesinslugResponse200>>;
    /**
     * Returns all metadata attributes for an NFT contract address
     *
     * @summary Search attributes in contract address
     * @throws FetchError<401, types.GetNftDataSearchattributesincontractaddressResponse401> Unauthorized
     * @throws FetchError<403, types.GetNftDataSearchattributesincontractaddressResponse403> Forbidden
     * @throws FetchError<404, types.GetNftDataSearchattributesincontractaddressResponse404> Not found
     */
    getNftDataSearchattributesincontractaddress(metadata: types.GetNftDataSearchattributesincontractaddressMetadataParam): Promise<FetchResponse<200, types.GetNftDataSearchattributesincontractaddressResponse200>>;
    /**
     * Deploy your smart contract in seconds. Supports multiple types of contracts - (i) A
     * standard ERC721 contract (ii) An ERC1155 contract (iii) An ERC721A contract (iv) An
     * Omnichain ERC721 contract (v) An ERC20 contract (vi) A Commerce contract. A commerce
     * contract lets you receive payments seamlessly on chain. An Omni chain contract lets you
     * move your deployed NFTs across multiple blockchains seamlessly
     *
     * @summary Deploy a Smart Contract
     * @throws FetchError<400, types.PostNftDeployDeploycontractResponse400> Failed
     */
    postNftDeployDeploycontract(body: types.PostNftDeployDeploycontractBodyParam): Promise<FetchResponse<200, types.PostNftDeployDeploycontractResponse200>>;
    /**
     * Mint an Omnichain NFT directly from your specified image file in seconds
     *
     * @summary Quick mint Omnichain NFT from image
     * @throws FetchError<400, types.PostNftMintQuickmintfromfileResponse400> Failed
     */
    postNftMintQuickmintfromfile(body: types.PostNftMintQuickmintfromfileBodyParam): Promise<FetchResponse<200, types.PostNftMintQuickmintfromfileResponse200>>;
    /**
     * Mint an Omnichain NFT directly from a provided metadata file URL
     *
     * @summary Quick mint from Metadata URL
     * @throws FetchError<400, types.PostNftMintQuickmintfrommetadataurlResponse400> Failed
     */
    postNftMintQuickmintfrommetadataurl(body: types.PostNftMintQuickmintfrommetadataurlBodyParam): Promise<FetchResponse<200, types.PostNftMintQuickmintfrommetadataurlResponse200>>;
    /**
     * Mint an Omnichain NFT directly with your supplied data in seconds
     *
     * @summary Quick mint Omnichain NFT from Metadata
     * @throws FetchError<400, types.PostNftMintQuickmintfrommetadataResponse400> Failed
     */
    postNftMintQuickmintfrommetadata(body: types.PostNftMintQuickmintfrommetadataBodyParam): Promise<FetchResponse<200, types.PostNftMintQuickmintfrommetadataResponse200>>;
    /**
     * Mint an NFT directly from your specified image file in seconds, using your own contract.
     * Suppports multiple contract types.
     *
     * @summary Mint NFT from image
     * @throws FetchError<400, types.PostNftMintMintfromfileResponse400> Failed
     */
    postNftMintMintfromfile(body: types.PostNftMintMintfromfileBodyParam): Promise<FetchResponse<200, types.PostNftMintMintfromfileResponse200>>;
    /**
     * Mint an NFT directly from a provided metadata file URL, using your own contract.
     * Supports multiple contract types.
     *
     * @summary Mint NFT from Metadata URL
     * @throws FetchError<400, types.PostNftMintMintfrommetadataurlResponse400> Failed
     */
    postNftMintMintfrommetadataurl(body: types.PostNftMintMintfrommetadataurlBodyParam): Promise<FetchResponse<200, types.PostNftMintMintfrommetadataurlResponse200>>;
    /**
     * Mint an NFT directly with your supplied data in seconds, using your own contract.
     * Supports multiple contract types.
     *
     * @summary Mint NFT from metadata
     * @throws FetchError<400, types.PostNftMintMintfrommetadataResponse400> Failed
     */
    postNftMintMintfrommetadata(body: types.PostNftMintMintfrommetadataBodyParam): Promise<FetchResponse<200, types.PostNftMintMintfrommetadataResponse200>>;
    /**
     * Mint an NFT using a collection contract, to a provided wallet address. Works with only
     * collection contracts.
     *
     * @summary Collection Mint to a Wallet Address
     * @throws FetchError<400, types.PostNftMintCollectionreservemintResponse400> Failed
     */
    postNftMintCollectionreservemint(body: types.PostNftMintCollectionreservemintBodyParam): Promise<FetchResponse<200, types.PostNftMintCollectionreservemintResponse200>>;
    /**
     * Create a new ERC1155 Token and mint an initial quantity immediately.
     *
     * @summary Create Token
     * @throws FetchError<400, types.PostNftMintCreatetoken1155Response400> Failed
     */
    postNftMintCreatetoken1155(body: types.PostNftMintCreatetoken1155BodyParam): Promise<FetchResponse<200, types.PostNftMintCreatetoken1155Response200>>;
    /**
     * Uploads a local file directly to IPFS. A quick and seamless way to store a file in IPFS.
     * This does not create a metadata json file that can be used as an NFT metadata.
     *
     * @summary Upload a local file to IPFS
     * @throws FetchError<400, types.PostNftStoreFileResponse400> Failed
     */
    postNftStoreFile(body: types.PostNftStoreFileBodyParam): Promise<FetchResponse<201, types.PostNftStoreFileResponse201>>;
    /**
     * Uploads a file to IPFS from a provided url. A quick and seamless way to store a file in
     * IPFS. This does not create a metadata json file that can be used as an NFT metadata.
     *
     * @summary Upload a file via URL to IPFS
     * @throws FetchError<400, types.PostNftStoreFilefromurlResponse400> Failed
     */
    postNftStoreFilefromurl(body: types.PostNftStoreFilefromurlFormDataParam): Promise<FetchResponse<201, types.PostNftStoreFilefromurlResponse201>>;
    /**
     * Creates a metadata json file from the provided URL and uploads the metadata file direcly
     * to IPFS, all in one operation.
     *
     * @summary Upload a URL to IPFS as NFT metadata
     * @throws FetchError<400, types.PostNftStoreMetadatafromimageurlResponse400> Failed
     */
    postNftStoreMetadatafromimageurl(body: types.PostNftStoreMetadatafromimageurlFormDataParam): Promise<FetchResponse<201, types.PostNftStoreMetadatafromimageurlResponse201>>;
    /**
     * Creates a metadata json file from the provided local file, and uploads the metadata file
     * directly to IPFS, all in one operation.
     *
     * @summary Upload local file as metadata to IPFS
     * @throws FetchError<400, types.PostNftStoreMetadatafromimageResponse400> Failed
     */
    postNftStoreMetadatafromimage(body: types.PostNftStoreMetadatafromimageBodyParam): Promise<FetchResponse<201, types.PostNftStoreMetadatafromimageResponse201>>;
    /**
     * Uploads a directory of metadata json files to IPFS. Useful for creating nft collections.
     * The files in your directory should be numbered, example &#58; 1.json, 2.json, 3.json.
     * You will need to upload all the files together at once. The uploaded files to IPFS will
     * all be in the same IPFS directory. Once uploaded to IPFS the file extensions (.json)
     * will be removed. Example &#58; file "1.json" will show up as "1" in the IPFS directory
     *
     * @summary Upload a directory to IPFS
     * @throws FetchError<400, types.PostNftStoreUploaddirectoryResponse400> Failed
     */
    postNftStoreUploaddirectory(body: types.PostNftStoreUploaddirectoryBodyParam): Promise<FetchResponse<201, types.PostNftStoreUploaddirectoryResponse201>>;
    /**
     * Sends a quick-minted NFT from one block chain to another. Sending NFTs accross chains is
     * a unique feature of Omnichain NFTs
     *
     * @summary Send Quick-minted NFT across Chains
     * @throws FetchError<400, types.PostNftSendQuicksendResponse400> Failed
     */
    postNftSendQuicksend(body: types.PostNftSendQuicksendBodyParam): Promise<FetchResponse<200, types.PostNftSendQuicksendResponse200>>;
    /**
     * Turn on the ability to send your NFT (minted with your created custom contract) across
     * chains
     *
     * @summary Enable Cross-chain Sends
     * @throws FetchError<400, types.PostNftSendEnablecrosschainsendResponse400> Failed
     */
    postNftSendEnablecrosschainsend(body: types.PostNftSendEnablecrosschainsendBodyParam): Promise<FetchResponse<200, types.PostNftSendEnablecrosschainsendResponse200>>;
    /**
     * Sends an NFT (minted from your created custom contract) from one block chain to another.
     * Sending NFTs accross chains is a unique feature of Omnichain NFTs
     *
     * @summary Send your NFT across Chains
     * @throws FetchError<400, types.PostNftSendCrosschainsendResponse400> Failed
     */
    postNftSendCrosschainsend(body: types.PostNftSendCrosschainsendBodyParam): Promise<FetchResponse<200, types.PostNftSendCrosschainsendResponse200>>;
    /**
     * Transfer NFT across wallet addresses
     *
     * @summary Transfer Token
     * @throws FetchError<400, types.PostNftUpdateTransfertokenResponse400> Failed
     */
    postNftUpdateTransfertoken(body: types.PostNftUpdateTransfertokenBodyParam): Promise<FetchResponse<200, types.PostNftUpdateTransfertokenResponse200>>;
    /**
     * Update NFT Metadata
     *
     * @summary Update NFT Metadata
     * @throws FetchError<400, types.PostNftUpdateUpdatetokenmetadataResponse400> Failed
     */
    postNftUpdateUpdatetokenmetadata(body: types.PostNftUpdateUpdatetokenmetadataBodyParam): Promise<FetchResponse<200, types.PostNftUpdateUpdatetokenmetadataResponse200>>;
    /**
     * Freeze metadata on the NFT contract
     *
     * @summary Freeze NFT Metadata
     * @throws FetchError<400, types.PostNftUpdateFreezemetadataResponse400> Failed
     */
    postNftUpdateFreezemetadata(body: types.PostNftUpdateFreezemetadataBodyParam): Promise<FetchResponse<200, types.PostNftUpdateFreezemetadataResponse200>>;
    /**
     * Set the mint price for your contract
     *
     * @summary Set Mint Price
     * @throws FetchError<400, types.PostNftUpdateSetmintpriceResponse400> Failed
     */
    postNftUpdateSetmintprice(body: types.PostNftUpdateSetmintpriceBodyParam): Promise<FetchResponse<200, types.PostNftUpdateSetmintpriceResponse200>>;
    /**
     * Set the allowlist mint price for your contract
     *
     * @summary Set Allowlist Mint Price
     * @throws FetchError<400, types.PostNftUpdateSetallowlistmintpriceResponse400> Failed
     */
    postNftUpdateSetallowlistmintprice(body: types.PostNftUpdateSetallowlistmintpriceBodyParam): Promise<FetchResponse<200, types.PostNftUpdateSetallowlistmintpriceResponse200>>;
    /**
     * Burn an NFT. Contract types supported are the Collection contract and Simple Contract
     * types.
     *
     * @summary Burn NFT
     * @throws FetchError<400, types.PostNftUpdateBurnResponse400> Failed
     */
    postNftUpdateBurn(body: types.PostNftUpdateBurnBodyParam): Promise<FetchResponse<200, types.PostNftUpdateBurnResponse200>>;
    /**
     * Withdraw funds from your smart contract.
     *
     * @summary Withdraw Funds
     * @throws FetchError<401, types.PostNftUpdateWithdrawfundsResponse401> Unauthorized
     * @throws FetchError<403, types.PostNftUpdateWithdrawfundsResponse403> Forbidden
     * @throws FetchError<404, types.PostNftUpdateWithdrawfundsResponse404> Not found
     */
    postNftUpdateWithdrawfunds(body: types.PostNftUpdateWithdrawfundsFormDataParam): Promise<FetchResponse<200, types.PostNftUpdateWithdrawfundsResponse200>>;
    /**
     * Withdraw funds from your smart contract to a specified wallet.
     *
     * @summary Withdraw Funds To A Wallet
     * @throws FetchError<401, types.PostNftUpdateWithdrawfundstowalletResponse401> Unauthorized
     * @throws FetchError<403, types.PostNftUpdateWithdrawfundstowalletResponse403> Forbidden
     * @throws FetchError<404, types.PostNftUpdateWithdrawfundstowalletResponse404> Not found
     */
    postNftUpdateWithdrawfundstowallet(body: types.PostNftUpdateWithdrawfundstowalletFormDataParam): Promise<FetchResponse<200, types.PostNftUpdateWithdrawfundstowalletResponse200>>;
    /**
     * Transfer the Operator of your deployed collection contract. Works with only collection
     * contracts.
     *
     * @summary Transfer Contract Operator
     * @throws FetchError<401, types.PostNftUpdateTransferoperatorResponse401> Unauthorized
     * @throws FetchError<403, types.PostNftUpdateTransferoperatorResponse403> Forbidden
     * @throws FetchError<404, types.PostNftUpdateTransferoperatorResponse404> Not found
     */
    postNftUpdateTransferoperator(body: types.PostNftUpdateTransferoperatorFormDataParam): Promise<FetchResponse<200, types.PostNftUpdateTransferoperatorResponse200>>;
    /**
     * Add an address (or group of addresses) to the allowlist of your NFT contract.
     *
     * @summary Add addresses to Allowlist
     * @throws FetchError<401, types.PostNftUpdateAddtoallowlistResponse401> Unauthorized
     * @throws FetchError<403, types.PostNftUpdateAddtoallowlistResponse403> Forbidden
     * @throws FetchError<404, types.PostNftUpdateAddtoallowlistResponse404> Not found
     */
    postNftUpdateAddtoallowlist(body: types.PostNftUpdateAddtoallowlistFormDataParam): Promise<FetchResponse<200, types.PostNftUpdateAddtoallowlistResponse200>>;
    /**
     * Set the parameters of your deployed collection contract
     *
     * @summary Initialize your collection contract
     * @throws FetchError<400, types.PostNftUpdateInitcollectioncontractResponse400> Failed
     */
    postNftUpdateInitcollectioncontract(body: types.PostNftUpdateInitcollectioncontractBodyParam): Promise<FetchResponse<200, types.PostNftUpdateInitcollectioncontractResponse200>>;
    /**
     * Update parameters of your collection contract
     *
     * @summary Update Collection Contract
     * @throws FetchError<400, types.PostNftDeployUpdatecontractResponse400> Failed
     */
    postNftDeployUpdatecontract(body: types.PostNftDeployUpdatecontractBodyParam): Promise<FetchResponse<200, types.PostNftDeployUpdatecontractResponse200>>;
    /**
     * Set the minimum acceptable payment price for your contract. This will be the minimum
     * price payable to your smart contract. This functionality only applies to Commerce
     * Contracts. Commerce contracts can be used for receiving payments seamlessly.
     *
     * @summary Set a payment price for your Commerce Contract
     * @throws FetchError<400, types.PostNftUpdateSetpaymentpriceResponse400> Failed
     */
    postNftUpdateSetpaymentprice(body: types.PostNftUpdateSetpaymentpriceBodyParam): Promise<FetchResponse<200, types.PostNftUpdateSetpaymentpriceResponse200>>;
    /**
     * Pause/Unpause your commerce contract. Pausing your commerce contract stops it from being
     * able to continue receiving payments. You can pause/unpause your contract anytime.
     *
     * @summary Pause/Unpause a Commerce Contract
     * @throws FetchError<400, types.PostNftUpdateTogglepausedstateResponse400> Failed
     */
    postNftUpdateTogglepausedstate(body: types.PostNftUpdateTogglepausedstateBodyParam): Promise<FetchResponse<200, types.PostNftUpdateTogglepausedstateResponse200>>;
    /**
     * Pause/Unpause public minting on your NFT contract. Use this feature to
     * activate/deactivate public minting on your NFT contract. Only advanced contracts can
     * pause/unpause public minting.
     *
     * @summary Pause/Unpause public minting
     * @throws FetchError<400, types.PostNftUpdateTogglepublicmintingResponse400> Failed
     */
    postNftUpdateTogglepublicminting(body: types.PostNftUpdateTogglepublicmintingBodyParam): Promise<FetchResponse<200, types.PostNftUpdateTogglepublicmintingResponse200>>;
    /**
     * Set the max quantity that can be minted in one batch. This feature is available only to
     * advanced contracts.
     *
     * @summary Set max batch size for minting
     * @throws FetchError<400, types.PostNftUpdateSetmaxmintquantityperbatchResponse400> Failed
     */
    postNftUpdateSetmaxmintquantityperbatch(body: types.PostNftUpdateSetmaxmintquantityperbatchBodyParam): Promise<FetchResponse<200, types.PostNftUpdateSetmaxmintquantityperbatchResponse200>>;
    /**
     * Enable a wallet address to receive funds from a contract. Use payeeShares to control
     * payout ratio.
     *
     * @summary Add payee to contract
     * @throws FetchError<401, types.PostNftUpdateAddpayeeResponse401> Unauthorized
     * @throws FetchError<403, types.PostNftUpdateAddpayeeResponse403> Forbidden
     * @throws FetchError<404, types.PostNftUpdateAddpayeeResponse404> Not found
     */
    postNftUpdateAddpayee(body: types.PostNftUpdateAddpayeeFormDataParam): Promise<FetchResponse<200, types.PostNftUpdateAddpayeeResponse200>>;
    /**
     * Produce a list of all your deployed contracts
     *
     * @summary Retrieve deployed contracts
     * @throws FetchError<401, types.GetNftUseropsDeployedcontractsResponse401> Unauthorized
     * @throws FetchError<403, types.GetNftUseropsDeployedcontractsResponse403> Forbidden
     * @throws FetchError<404, types.GetNftUseropsDeployedcontractsResponse404> Not found
     */
    getNftUseropsDeployedcontracts(): Promise<FetchResponse<200, types.GetNftUseropsDeployedcontractsResponse200>>;
    /**
     * Produce a list of all your minted NFTs
     *
     * @summary Retrieve your minted NFTs
     * @throws FetchError<401, types.GetNftUseropsNftsmintedResponse401> Unauthorized
     * @throws FetchError<403, types.GetNftUseropsNftsmintedResponse403> Forbidden
     * @throws FetchError<404, types.GetNftUseropsNftsmintedResponse404> Not found
     */
    getNftUseropsNftsminted(): Promise<FetchResponse<200, types.GetNftUseropsNftsmintedResponse200>>;
    /**
     * Produce a list of all your minted NFTs
     *
     * @summary Retrieve your uploaded IPFS files
     * @throws FetchError<401, types.GetNftUseropsIpfsuploadsResponse401> Unauthorized
     * @throws FetchError<403, types.GetNftUseropsIpfsuploadsResponse403> Forbidden
     * @throws FetchError<404, types.GetNftUseropsIpfsuploadsResponse404> Not found
     */
    getNftUseropsIpfsuploads(): Promise<FetchResponse<200, types.GetNftUseropsIpfsuploadsResponse200>>;
    /**
     * Get details for a specific transaction
     *
     * @summary Retrieve specific transaction details
     * @throws FetchError<401, types.PostNftUseropsTransactiondetailsResponse401> Unauthorized
     * @throws FetchError<403, types.PostNftUseropsTransactiondetailsResponse403> Forbidden
     * @throws FetchError<404, types.PostNftUseropsTransactiondetailsResponse404> Not found
     */
    postNftUseropsTransactiondetails(body: types.PostNftUseropsTransactiondetailsFormDataParam): Promise<FetchResponse<200, types.PostNftUseropsTransactiondetailsResponse200>>;
    /**
     * Display details of Payee at a certain Index.
     *
     * @summary Get Payee
     * @throws FetchError<401, types.PostNftUseropsPayeeatindexResponse401> Unauthorized
     * @throws FetchError<403, types.PostNftUseropsPayeeatindexResponse403> Forbidden
     * @throws FetchError<404, types.PostNftUseropsPayeeatindexResponse404> Not found
     */
    postNftUseropsPayeeatindex(body: types.PostNftUseropsPayeeatindexFormDataParam): Promise<FetchResponse<200, types.PostNftUseropsPayeeatindexResponse200>>;
    /**
     * Display Allowlist shares for a specific address.
     *
     * @summary Get Allowlist Shares
     * @throws FetchError<401, types.PostNftUseropsAllowlistsharesforaddressResponse401> Unauthorized
     * @throws FetchError<403, types.PostNftUseropsAllowlistsharesforaddressResponse403> Forbidden
     * @throws FetchError<404, types.PostNftUseropsAllowlistsharesforaddressResponse404> Not found
     */
    postNftUseropsAllowlistsharesforaddress(body: types.PostNftUseropsAllowlistsharesforaddressFormDataParam): Promise<FetchResponse<200, types.PostNftUseropsAllowlistsharesforaddressResponse200>>;
    /**
     * Display payment details for a specific payee of a contract.
     *
     * @summary Get Payee Payment Details
     * @throws FetchError<401, types.PostNftUseropsContractpaymentdetailsResponse401> Unauthorized
     * @throws FetchError<403, types.PostNftUseropsContractpaymentdetailsResponse403> Forbidden
     * @throws FetchError<404, types.PostNftUseropsContractpaymentdetailsResponse404> Not found
     */
    postNftUseropsContractpaymentdetails(body: types.PostNftUseropsContractpaymentdetailsFormDataParam): Promise<FetchResponse<200, types.PostNftUseropsContractpaymentdetailsResponse200>>;
    /**
     * Displays the amount of funds left on the contract
     *
     * @summary Get contract balance
     * @throws FetchError<401, types.GetNftUseropsContractbalanceResponse401> Unauthorized
     * @throws FetchError<403, types.GetNftUseropsContractbalanceResponse403> Forbidden
     * @throws FetchError<404, types.GetNftUseropsContractbalanceResponse404> Not found
     */
    getNftUseropsContractbalance(metadata: types.GetNftUseropsContractbalanceMetadataParam): Promise<FetchResponse<200, types.GetNftUseropsContractbalanceResponse200>>;
    /**
     * Displays details of your contract
     *
     * @summary Get Contract Details
     * @throws FetchError<401, types.GetNftUseropsContractdetailsResponse401> Unauthorized
     * @throws FetchError<403, types.GetNftUseropsContractdetailsResponse403> Forbidden
     * @throws FetchError<404, types.GetNftUseropsContractdetailsResponse404> Not found
     */
    getNftUseropsContractdetails(metadata: types.GetNftUseropsContractdetailsMetadataParam): Promise<FetchResponse<200, types.GetNftUseropsContractdetailsResponse200>>;
    /**
     * Send a new digital asset to anyone via email
     *
     * @summary Email Digital Asset
     * @throws FetchError<400, types.PostTransfersUserclaimEmailAssetResponse400> Failed
     */
    postTransfersUserclaimEmailAsset(body: types.PostTransfersUserclaimEmailAssetBodyParam): Promise<FetchResponse<200, types.PostTransfersUserclaimEmailAssetResponse200>>;
}
declare const createSDK: SDK;
export = createSDK;
