declare const GetNftDataAttributesforcontractaddress: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly contractAddress: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "NFT contract address";
                };
                readonly chain: {
                    readonly type: "string";
                    readonly enum: readonly ["ethereum"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Blockchain to search";
                };
                readonly limit: {
                    readonly type: "number";
                    readonly minimum: 0;
                    readonly maximum: 1000;
                    readonly default: 25;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of results to return";
                };
                readonly page: {
                    readonly type: "number";
                    readonly minimum: 1;
                    readonly default: 1;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Used to return the next set of items";
                };
                readonly sortField: {
                    readonly type: "string";
                    readonly enum: readonly ["key", "value", "count"];
                    readonly default: "key";
                    readonly description: "Default: key";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly sortDirection: {
                    readonly type: "string";
                    readonly enum: readonly ["DESC", "ASC"];
                    readonly default: "DESC";
                    readonly description: "Timestamp sort direction for the return results";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["contractAddress"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly attributes: {
                    readonly type: "object";
                    readonly properties: {
                        readonly results: {
                            readonly type: "array";
                            readonly items: {
                                readonly oneOf: readonly [{
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly contractId: {
                                            readonly type: "string";
                                            readonly examples: readonly ["0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"];
                                        };
                                        readonly slug: {
                                            readonly type: "string";
                                            readonly examples: readonly ["boredapeyachtclub"];
                                        };
                                        readonly key: {
                                            readonly type: "string";
                                            readonly examples: readonly ["Background"];
                                        };
                                        readonly value: {
                                            readonly type: "string";
                                            readonly examples: readonly ["Orange"];
                                        };
                                        readonly count: {
                                            readonly type: "number";
                                            readonly examples: readonly [1273];
                                        };
                                        readonly id: {
                                            readonly type: "string";
                                            readonly examples: readonly ["0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d:ethereum:Background->Orange"];
                                        };
                                    };
                                }];
                            };
                        };
                        readonly page: {
                            readonly type: "integer";
                            readonly examples: readonly [1];
                        };
                        readonly limit: {
                            readonly type: "integer";
                            readonly examples: readonly [500];
                        };
                        readonly totalPages: {
                            readonly type: "integer";
                            readonly examples: readonly [1];
                        };
                        readonly totalResults: {
                            readonly type: "integer";
                            readonly examples: readonly [168];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetNftDataAttributesforslug: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly slug: {
                    readonly type: "string";
                    readonly examples: readonly ["boredapeyachtclub"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "NFT project slug";
                };
                readonly chain: {
                    readonly type: "string";
                    readonly enum: readonly ["ethereum"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Blockchain to search";
                };
                readonly limit: {
                    readonly type: "number";
                    readonly minimum: 0;
                    readonly maximum: 1000;
                    readonly default: 25;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of results to return";
                };
                readonly page: {
                    readonly type: "number";
                    readonly minimum: 1;
                    readonly default: 1;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Used to return the next set of items";
                };
                readonly sortField: {
                    readonly type: "string";
                    readonly enum: readonly ["key", "value", "count"];
                    readonly default: "key";
                    readonly description: "Default: key";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly sortDirection: {
                    readonly type: "string";
                    readonly enum: readonly ["DESC", "ASC"];
                    readonly default: "DESC";
                    readonly description: "Timestamp sort direction for the return results";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["slug"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly attributes: {
                    readonly type: "object";
                    readonly properties: {
                        readonly results: {
                            readonly type: "array";
                            readonly items: {
                                readonly oneOf: readonly [{
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly contractId: {
                                            readonly type: "string";
                                            readonly examples: readonly ["0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"];
                                        };
                                        readonly slug: {
                                            readonly type: "string";
                                            readonly examples: readonly ["boredapeyachtclub"];
                                        };
                                        readonly key: {
                                            readonly type: "string";
                                            readonly examples: readonly ["Background"];
                                        };
                                        readonly value: {
                                            readonly type: "string";
                                            readonly examples: readonly ["Orange"];
                                        };
                                        readonly count: {
                                            readonly type: "number";
                                            readonly examples: readonly [1273];
                                        };
                                        readonly id: {
                                            readonly type: "string";
                                            readonly examples: readonly ["0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d:ethereum:Background->Orange"];
                                        };
                                    };
                                }];
                            };
                        };
                        readonly page: {
                            readonly type: "integer";
                            readonly examples: readonly [1];
                        };
                        readonly limit: {
                            readonly type: "integer";
                            readonly examples: readonly [500];
                        };
                        readonly totalPages: {
                            readonly type: "integer";
                            readonly examples: readonly [1];
                        };
                        readonly totalResults: {
                            readonly type: "integer";
                            readonly examples: readonly [168];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetNftDataAttributeswithtokensforcontractaddress: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly contractAddress: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "NFT contract address";
                };
                readonly chain: {
                    readonly type: "string";
                    readonly enum: readonly ["ethereum"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Blockchain to search";
                };
                readonly limit: {
                    readonly type: "number";
                    readonly minimum: 0;
                    readonly maximum: 1000;
                    readonly default: 25;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of results to return";
                };
                readonly page: {
                    readonly type: "number";
                    readonly minimum: 1;
                    readonly default: 1;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Used to return the next set of items";
                };
                readonly sortField: {
                    readonly type: "string";
                    readonly enum: readonly ["key", "value", "count"];
                    readonly default: "key";
                    readonly description: "Default: key";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly sortDirection: {
                    readonly type: "string";
                    readonly enum: readonly ["DESC", "ASC"];
                    readonly default: "DESC";
                    readonly description: "Timestamp sort direction for the return results";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["contractAddress"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly attributes: {
                    readonly type: "object";
                    readonly properties: {
                        readonly results: {
                            readonly type: "array";
                            readonly items: {
                                readonly oneOf: readonly [{
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly contractId: {
                                            readonly type: "string";
                                            readonly examples: readonly ["0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"];
                                        };
                                        readonly slug: {
                                            readonly type: "string";
                                            readonly examples: readonly ["boredapeyachtclub"];
                                        };
                                        readonly key: {
                                            readonly type: "string";
                                            readonly examples: readonly ["Mouth"];
                                        };
                                        readonly value: {
                                            readonly type: "string";
                                            readonly examples: readonly ["Bored Unshaven Pizza"];
                                        };
                                        readonly count: {
                                            readonly type: "number";
                                            readonly examples: readonly [1273];
                                        };
                                        readonly id: {
                                            readonly type: "string";
                                            readonly examples: readonly ["0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d:ethereum:Background->Orange"];
                                        };
                                        readonly tokens: {
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "string";
                                                readonly examples: readonly ["208"];
                                            };
                                        };
                                    };
                                }];
                            };
                        };
                        readonly page: {
                            readonly type: "integer";
                            readonly examples: readonly [1];
                        };
                        readonly limit: {
                            readonly type: "integer";
                            readonly examples: readonly [500];
                        };
                        readonly totalPages: {
                            readonly type: "integer";
                            readonly examples: readonly [1];
                        };
                        readonly totalResults: {
                            readonly type: "integer";
                            readonly examples: readonly [168];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetNftDataAttributeswithtokensforslug: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly slug: {
                    readonly type: "string";
                    readonly examples: readonly ["boredapeyachtclub"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "NFT project slug";
                };
                readonly chain: {
                    readonly type: "string";
                    readonly enum: readonly ["ethereum"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Blockchain to search";
                };
                readonly limit: {
                    readonly type: "number";
                    readonly minimum: 0;
                    readonly maximum: 1000;
                    readonly default: 25;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of results to return";
                };
                readonly page: {
                    readonly type: "number";
                    readonly minimum: 1;
                    readonly default: 1;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Used to return the next set of items";
                };
                readonly sortField: {
                    readonly type: "string";
                    readonly enum: readonly ["key", "value", "count"];
                    readonly default: "key";
                    readonly description: "Default: key";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly sortDirection: {
                    readonly type: "string";
                    readonly enum: readonly ["DESC", "ASC"];
                    readonly default: "DESC";
                    readonly description: "Timestamp sort direction for the return results";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["slug"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly attributes: {
                    readonly type: "object";
                    readonly properties: {
                        readonly results: {
                            readonly type: "array";
                            readonly items: {
                                readonly oneOf: readonly [{
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly contractId: {
                                            readonly type: "string";
                                            readonly examples: readonly ["0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"];
                                        };
                                        readonly slug: {
                                            readonly type: "string";
                                            readonly examples: readonly ["boredapeyachtclub"];
                                        };
                                        readonly key: {
                                            readonly type: "string";
                                            readonly examples: readonly ["Mouth"];
                                        };
                                        readonly value: {
                                            readonly type: "string";
                                            readonly examples: readonly ["Bored Unshaven Pizza"];
                                        };
                                        readonly count: {
                                            readonly type: "number";
                                            readonly examples: readonly [1273];
                                        };
                                        readonly id: {
                                            readonly type: "string";
                                            readonly examples: readonly ["0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d:ethereum:Background->Orange"];
                                        };
                                        readonly tokens: {
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "string";
                                                readonly examples: readonly ["208"];
                                            };
                                        };
                                    };
                                }];
                            };
                        };
                        readonly page: {
                            readonly type: "integer";
                            readonly examples: readonly [1];
                        };
                        readonly limit: {
                            readonly type: "integer";
                            readonly examples: readonly [500];
                        };
                        readonly totalPages: {
                            readonly type: "integer";
                            readonly examples: readonly [1];
                        };
                        readonly totalResults: {
                            readonly type: "integer";
                            readonly examples: readonly [168];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetNftDataCollectionsAll: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly chain: {
                    readonly type: "string";
                    readonly enum: readonly ["ethereum"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Blockchain to search";
                };
                readonly limit: {
                    readonly type: "number";
                    readonly minimum: 0;
                    readonly maximum: 1000;
                    readonly default: 25;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of results to return";
                };
                readonly page: {
                    readonly type: "number";
                    readonly minimum: 1;
                    readonly default: 1;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Used to return the next set of items";
                };
                readonly sortField: {
                    readonly type: "string";
                    readonly enum: readonly ["rank", "volume"];
                    readonly default: "rank";
                    readonly description: "Field to sort by";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly sortInterval: {
                    readonly type: "string";
                    readonly enum: readonly ["1day", "7day", "30day", "allTime"];
                    readonly default: "allTime";
                    readonly description: "Interval to sort by";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly sortDirection: {
                    readonly type: "string";
                    readonly enum: readonly ["DESC", "ASC"];
                    readonly default: "ASC";
                    readonly description: "Timestamp sort direction for the return results";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly collections: {
                    readonly type: "object";
                    readonly properties: {
                        readonly results: {
                            readonly type: "array";
                            readonly items: {
                                readonly oneOf: readonly [{
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly chain: {
                                            readonly type: "string";
                                            readonly examples: readonly ["ethereum"];
                                        };
                                        readonly description: {
                                            readonly type: "string";
                                            readonly examples: readonly ["ethereum"];
                                        };
                                        readonly discordUrl: {
                                            readonly type: "string";
                                            readonly examples: readonly ["https://discord.gg/3P5K3dzgdB"];
                                        };
                                        readonly externalUrl: {
                                            readonly type: "string";
                                            readonly examples: readonly ["http://www.boredapeyachtclub.com/"];
                                        };
                                        readonly floorSale: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly "1day": {
                                                    readonly type: "number";
                                                    readonly examples: readonly [65];
                                                };
                                                readonly "7day": {
                                                    readonly type: "number";
                                                    readonly examples: readonly [67.69];
                                                };
                                                readonly "30day": {
                                                    readonly type: "number";
                                                    readonly examples: readonly [68.681];
                                                };
                                            };
                                        };
                                        readonly image: {
                                            readonly type: "string";
                                            readonly examples: readonly ["https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?w=500&auto=format"];
                                        };
                                        readonly onSaleCount: {
                                            readonly type: "integer";
                                            readonly examples: readonly [764];
                                        };
                                        readonly primaryContract: {
                                            readonly type: "string";
                                            readonly examples: readonly ["0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"];
                                        };
                                        readonly rank: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly "1day": {
                                                    readonly type: "integer";
                                                    readonly examples: readonly [2];
                                                };
                                                readonly "7day": {
                                                    readonly type: "integer";
                                                    readonly examples: readonly [2];
                                                };
                                                readonly "30day": {
                                                    readonly type: "integer";
                                                    readonly examples: readonly [1];
                                                };
                                                readonly allTime: {
                                                    readonly type: "integer";
                                                    readonly examples: readonly [3];
                                                };
                                            };
                                        };
                                        readonly royalties: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly bps: {
                                                    readonly type: "number";
                                                    readonly examples: readonly [250];
                                                };
                                                readonly recipient: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["0xa858ddc0445d8131dac4d1de01f834ffcba52ef1"];
                                                };
                                            };
                                        };
                                        readonly slug: {
                                            readonly type: "string";
                                            readonly examples: readonly ["boredapeyachtclub"];
                                        };
                                        readonly tokenCount: {
                                            readonly type: "integer";
                                            readonly examples: readonly [10000];
                                        };
                                        readonly twitterUsername: {
                                            readonly type: "string";
                                            readonly examples: readonly ["BoredApeYC"];
                                        };
                                        readonly volume: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly "1day": {
                                                    readonly type: "number";
                                                    readonly examples: readonly [723.17];
                                                };
                                                readonly "7day": {
                                                    readonly type: "number";
                                                    readonly examples: readonly [3657.87519];
                                                };
                                                readonly "30day": {
                                                    readonly type: "number";
                                                    readonly examples: readonly [23609.35266];
                                                };
                                                readonly allTime: {
                                                    readonly type: "number";
                                                    readonly examples: readonly [793507.11896];
                                                };
                                            };
                                        };
                                        readonly id: {
                                            readonly type: "string";
                                            readonly examples: readonly ["0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"];
                                        };
                                    };
                                }];
                            };
                        };
                        readonly page: {
                            readonly type: "integer";
                            readonly examples: readonly [1];
                        };
                        readonly limit: {
                            readonly type: "integer";
                            readonly examples: readonly [50];
                        };
                        readonly totalPages: {
                            readonly type: "integer";
                            readonly examples: readonly [1];
                        };
                        readonly totalResults: {
                            readonly type: "integer";
                            readonly examples: readonly [31];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetNftDataCollectionsSearch: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly searchString: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Search value";
                };
                readonly chain: {
                    readonly type: "string";
                    readonly enum: readonly ["ethereum"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Blockchain to search";
                };
                readonly limit: {
                    readonly type: "number";
                    readonly minimum: 0;
                    readonly maximum: 1000;
                    readonly default: 25;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of results to return";
                };
                readonly page: {
                    readonly type: "number";
                    readonly minimum: 1;
                    readonly default: 1;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Used to return the next set of items";
                };
                readonly sortField: {
                    readonly type: "string";
                    readonly enum: readonly ["rank", "volume"];
                    readonly default: "rank";
                    readonly description: "Field to sort by";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly sortInterval: {
                    readonly type: "string";
                    readonly enum: readonly ["1day", "7day", "30day", "allTime"];
                    readonly default: "allTime";
                    readonly description: "Interval to sort by";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly sortDirection: {
                    readonly type: "string";
                    readonly enum: readonly ["DESC", "ASC"];
                    readonly default: "ASC";
                    readonly description: "Timestamp sort direction for the return results";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["searchString"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly collections: {
                    readonly type: "object";
                    readonly properties: {
                        readonly results: {
                            readonly type: "array";
                            readonly items: {
                                readonly oneOf: readonly [{
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly chain: {
                                            readonly type: "string";
                                            readonly examples: readonly ["ethereum"];
                                        };
                                        readonly description: {
                                            readonly type: "string";
                                            readonly examples: readonly ["ethereum"];
                                        };
                                        readonly discordUrl: {
                                            readonly type: "string";
                                            readonly examples: readonly ["https://discord.gg/3P5K3dzgdB"];
                                        };
                                        readonly externalUrl: {
                                            readonly type: "string";
                                            readonly examples: readonly ["http://www.boredapeyachtclub.com/"];
                                        };
                                        readonly floorSale: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly "1day": {
                                                    readonly type: "number";
                                                    readonly examples: readonly [65];
                                                };
                                                readonly "7day": {
                                                    readonly type: "number";
                                                    readonly examples: readonly [67.69];
                                                };
                                                readonly "30day": {
                                                    readonly type: "number";
                                                    readonly examples: readonly [68.681];
                                                };
                                            };
                                        };
                                        readonly image: {
                                            readonly type: "string";
                                            readonly examples: readonly ["https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?w=500&auto=format"];
                                        };
                                        readonly onSaleCount: {
                                            readonly type: "integer";
                                            readonly examples: readonly [764];
                                        };
                                        readonly primaryContract: {
                                            readonly type: "string";
                                            readonly examples: readonly ["0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"];
                                        };
                                        readonly rank: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly "1day": {
                                                    readonly type: "integer";
                                                    readonly examples: readonly [2];
                                                };
                                                readonly "7day": {
                                                    readonly type: "integer";
                                                    readonly examples: readonly [2];
                                                };
                                                readonly "30day": {
                                                    readonly type: "integer";
                                                    readonly examples: readonly [1];
                                                };
                                                readonly allTime: {
                                                    readonly type: "integer";
                                                    readonly examples: readonly [3];
                                                };
                                            };
                                        };
                                        readonly royalties: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly bps: {
                                                    readonly type: "number";
                                                    readonly examples: readonly [250];
                                                };
                                                readonly recipient: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["0xa858ddc0445d8131dac4d1de01f834ffcba52ef1"];
                                                };
                                            };
                                        };
                                        readonly slug: {
                                            readonly type: "string";
                                            readonly examples: readonly ["boredapeyachtclub"];
                                        };
                                        readonly tokenCount: {
                                            readonly type: "integer";
                                            readonly examples: readonly [10000];
                                        };
                                        readonly twitterUsername: {
                                            readonly type: "string";
                                            readonly examples: readonly ["BoredApeYC"];
                                        };
                                        readonly volume: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly "1day": {
                                                    readonly type: "number";
                                                    readonly examples: readonly [723.17];
                                                };
                                                readonly "7day": {
                                                    readonly type: "number";
                                                    readonly examples: readonly [3657.87519];
                                                };
                                                readonly "30day": {
                                                    readonly type: "number";
                                                    readonly examples: readonly [23609.35266];
                                                };
                                                readonly allTime: {
                                                    readonly type: "number";
                                                    readonly examples: readonly [793507.11896];
                                                };
                                            };
                                        };
                                        readonly id: {
                                            readonly type: "string";
                                            readonly examples: readonly ["0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"];
                                        };
                                    };
                                }];
                            };
                        };
                        readonly page: {
                            readonly type: "integer";
                            readonly examples: readonly [1];
                        };
                        readonly limit: {
                            readonly type: "integer";
                            readonly examples: readonly [50];
                        };
                        readonly totalPages: {
                            readonly type: "integer";
                            readonly examples: readonly [1];
                        };
                        readonly totalResults: {
                            readonly type: "integer";
                            readonly examples: readonly [31];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetNftDataCreated: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly walletAddress: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Wallet address to query";
                };
                readonly chain: {
                    readonly type: "string";
                    readonly enum: readonly ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "ethereum", "polygon", "avalanche", "optimism", "arbitrum", "base", "fantom", "bsc", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"];
                    readonly default: "ethereum";
                    readonly description: "Blockchain to search";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly sortDirection: {
                    readonly type: "string";
                    readonly enum: readonly ["DESC", "ASC"];
                    readonly default: "ASC";
                    readonly description: "Timestamp sort direction for the return results";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly limit: {
                    readonly type: "number";
                    readonly default: 1000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Maximum number of results to return";
                };
                readonly page: {
                    readonly type: "number";
                    readonly default: 1;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Page number of the results to return (used to calculate offset)";
                };
            };
            readonly required: readonly ["walletAddress"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly nfts: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly contractAddress: {
                                readonly type: "string";
                            };
                            readonly tokenID: {
                                readonly type: "string";
                            };
                            readonly tokenName: {
                                readonly type: "string";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetNftDataFloorpricesforcontractaddress: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly contractAddress: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "NFT contract address";
                };
                readonly chain: {
                    readonly type: "string";
                    readonly enum: readonly ["ethereum"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Blockchain to search";
                };
                readonly limit: {
                    readonly type: "number";
                    readonly minimum: 0;
                    readonly maximum: 1000;
                    readonly default: 25;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of results to return";
                };
                readonly offset: {
                    readonly type: "number";
                    readonly minimum: 0;
                    readonly default: 0;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Used to return the next set of items";
                };
                readonly sortDirection: {
                    readonly type: "string";
                    readonly enum: readonly ["DESC", "ASC"];
                    readonly default: "DESC";
                    readonly description: "Timestamp sort direction for the return results";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly startDate: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Starting timestamp for results";
                };
                readonly endDate: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Ending timestamp for results";
                };
            };
            readonly required: readonly ["contractAddress"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly floorPrices: {
                    readonly type: "array";
                    readonly items: {
                        readonly oneOf: readonly [{
                            readonly type: "object";
                            readonly properties: {
                                readonly source: {
                                    readonly type: "string";
                                    readonly examples: readonly ["X2Y2"];
                                };
                                readonly eventType: {
                                    readonly type: "string";
                                    readonly examples: readonly ["floorPriceChangeEvent"];
                                };
                                readonly kind: {
                                    readonly type: "string";
                                    readonly examples: readonly ["cancel"];
                                };
                                readonly slug: {
                                    readonly type: "string";
                                    readonly examples: readonly ["boredapeyachtclub"];
                                };
                                readonly chain: {
                                    readonly type: "string";
                                    readonly examples: readonly ["ethereum"];
                                };
                                readonly floorAsk: {
                                    readonly type: "number";
                                    readonly examples: readonly [79];
                                };
                                readonly previousFloorAsk: {
                                    readonly type: "number";
                                    readonly examples: readonly [78.8];
                                };
                                readonly contractId: {
                                    readonly type: "string";
                                    readonly examples: readonly ["0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"];
                                };
                                readonly timestamp: {
                                    readonly type: "string";
                                    readonly examples: readonly ["2022-09-26T07:33:26.000Z"];
                                };
                            };
                        }];
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetNftDataFloorpricesforslug: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly slug: {
                    readonly type: "string";
                    readonly examples: readonly ["boredapeyachtclub"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "NFT project slug";
                };
                readonly chain: {
                    readonly type: "string";
                    readonly enum: readonly ["ethereum"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Blockchain to search";
                };
                readonly limit: {
                    readonly type: "number";
                    readonly minimum: 0;
                    readonly maximum: 1000;
                    readonly default: 25;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of results to return";
                };
                readonly offset: {
                    readonly type: "number";
                    readonly minimum: 0;
                    readonly default: 0;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Used to return the next set of items";
                };
                readonly sortDirection: {
                    readonly type: "string";
                    readonly enum: readonly ["DESC", "ASC"];
                    readonly default: "DESC";
                    readonly description: "Timestamp sort direction for the return results";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly startDate: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Starting timestamp for results";
                };
                readonly endDate: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Ending timestamp for results";
                };
            };
            readonly required: readonly ["slug"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly floorPrices: {
                    readonly type: "array";
                    readonly items: {
                        readonly oneOf: readonly [{
                            readonly type: "object";
                            readonly properties: {
                                readonly source: {
                                    readonly type: "string";
                                    readonly examples: readonly ["X2Y2"];
                                };
                                readonly eventType: {
                                    readonly type: "string";
                                    readonly examples: readonly ["floorPriceChangeEvent"];
                                };
                                readonly kind: {
                                    readonly type: "string";
                                    readonly examples: readonly ["cancel"];
                                };
                                readonly slug: {
                                    readonly type: "string";
                                    readonly examples: readonly ["boredapeyachtclub"];
                                };
                                readonly chain: {
                                    readonly type: "string";
                                    readonly examples: readonly ["ethereum"];
                                };
                                readonly floorAsk: {
                                    readonly type: "number";
                                    readonly examples: readonly [79];
                                };
                                readonly previousFloorAsk: {
                                    readonly type: "number";
                                    readonly examples: readonly [78.8];
                                };
                                readonly contractId: {
                                    readonly type: "string";
                                    readonly examples: readonly ["0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"];
                                };
                                readonly timestamp: {
                                    readonly type: "string";
                                    readonly examples: readonly ["2022-09-26T07:33:26.000Z"];
                                };
                            };
                        }];
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetNftDataHistoricalstatsforcontractaddress: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly contractAddress: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "NFT contract address";
                };
                readonly chain: {
                    readonly type: "string";
                    readonly enum: readonly ["ethereum"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Blockchain to search";
                };
                readonly limit: {
                    readonly type: "number";
                    readonly minimum: 0;
                    readonly maximum: 1000;
                    readonly default: 25;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of results to return";
                };
                readonly offset: {
                    readonly type: "number";
                    readonly minimum: 0;
                    readonly default: 0;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Used to return the next set of items";
                };
                readonly sortDirection: {
                    readonly type: "string";
                    readonly enum: readonly ["DESC", "ASC"];
                    readonly default: "DESC";
                    readonly description: "Timestamp sort direction for the return results";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly startDate: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Starting timestamp for results";
                };
                readonly endDate: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Ending timestamp for results";
                };
            };
            readonly required: readonly ["contractAddress"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly historicalStats: {
                    readonly type: "array";
                    readonly items: {
                        readonly oneOf: readonly [{
                            readonly type: "object";
                            readonly properties: {
                                readonly eventType: {
                                    readonly type: "string";
                                    readonly examples: readonly ["dailyHistoryEvent"];
                                };
                                readonly slug: {
                                    readonly type: "string";
                                    readonly examples: readonly ["boredapeyachtclub"];
                                };
                                readonly contractId: {
                                    readonly type: "string";
                                    readonly examples: readonly ["0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"];
                                };
                                readonly chain: {
                                    readonly type: "string";
                                    readonly examples: readonly ["ethereum"];
                                };
                                readonly floorSale: {
                                    readonly type: "number";
                                    readonly examples: readonly [71];
                                };
                                readonly salesCount: {
                                    readonly type: "integer";
                                    readonly examples: readonly [7];
                                };
                                readonly rank: {
                                    readonly type: "integer";
                                    readonly examples: readonly [7];
                                };
                                readonly volume: {
                                    readonly type: "number";
                                    readonly examples: readonly [575.1];
                                };
                                readonly timestamp: {
                                    readonly type: "string";
                                    readonly examples: readonly ["2022-08-01T04:00:00.000Z"];
                                };
                            };
                        }];
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetNftDataHistoricalstatsforslug: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly slug: {
                    readonly type: "string";
                    readonly examples: readonly ["azuki"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "NFT project slug";
                };
                readonly chain: {
                    readonly type: "string";
                    readonly enum: readonly ["ethereum"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Blockchain to search";
                };
                readonly limit: {
                    readonly type: "number";
                    readonly minimum: 0;
                    readonly maximum: 1000;
                    readonly default: 25;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of results to return";
                };
                readonly offset: {
                    readonly type: "number";
                    readonly minimum: 0;
                    readonly default: 0;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Used to return the next set of items";
                };
                readonly sortDirection: {
                    readonly type: "string";
                    readonly enum: readonly ["DESC", "ASC"];
                    readonly default: "DESC";
                    readonly description: "Timestamp sort direction for the return results";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly startDate: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Starting timestamp for results";
                };
                readonly endDate: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Ending timestamp for results";
                };
            };
            readonly required: readonly ["slug"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly historicalStats: {
                    readonly type: "array";
                    readonly items: {
                        readonly oneOf: readonly [{
                            readonly type: "object";
                            readonly properties: {
                                readonly eventType: {
                                    readonly type: "string";
                                    readonly examples: readonly ["dailyHistoryEvent"];
                                };
                                readonly slug: {
                                    readonly type: "string";
                                    readonly examples: readonly ["boredapeyachtclub"];
                                };
                                readonly contractId: {
                                    readonly type: "string";
                                    readonly examples: readonly ["0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"];
                                };
                                readonly chain: {
                                    readonly type: "string";
                                    readonly examples: readonly ["ethereum"];
                                };
                                readonly floorSale: {
                                    readonly type: "number";
                                    readonly examples: readonly [71];
                                };
                                readonly salesCount: {
                                    readonly type: "integer";
                                    readonly examples: readonly [7];
                                };
                                readonly rank: {
                                    readonly type: "integer";
                                    readonly examples: readonly [7];
                                };
                                readonly volume: {
                                    readonly type: "number";
                                    readonly examples: readonly [575.1];
                                };
                                readonly timestamp: {
                                    readonly type: "string";
                                    readonly examples: readonly ["2022-08-01T04:00:00.000Z"];
                                };
                            };
                        }];
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetNftDataIswalletholderoftoken: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly walletAddress: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Wallet address to query";
                };
                readonly contractAddress: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Contract address to query against";
                };
                readonly chain: {
                    readonly type: "string";
                    readonly enum: readonly ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "ethereum", "polygon", "avalanche", "optimism", "arbitrum", "base", "fantom", "bsc", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"];
                    readonly default: "ethereum";
                    readonly description: "Blockchain to search";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["walletAddress", "contractAddress"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly isWalletHolderOfToken: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly holdingsCount: {
                    readonly type: "integer";
                    readonly examples: readonly [1];
                };
                readonly holdings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly contractAddress: {
                                readonly type: "string";
                                readonly examples: readonly ["0xed5af388653567af2f388e6224dc7c4b3241c544"];
                            };
                            readonly tokenID: {
                                readonly type: "string";
                                readonly examples: readonly [40];
                            };
                            readonly tokenName: {
                                readonly type: "string";
                                readonly examples: readonly ["Azuki"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetNftDataLastfloorpriceforcontractaddress: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly contractAddress: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "NFT contract address";
                };
                readonly chain: {
                    readonly type: "string";
                    readonly enum: readonly ["ethereum"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Blockchain to search";
                };
            };
            readonly required: readonly ["contractAddress"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly floorPrices: {
                    readonly type: "object";
                    readonly properties: {
                        readonly source: {
                            readonly type: "string";
                            readonly examples: readonly ["X2Y2"];
                        };
                        readonly eventType: {
                            readonly type: "string";
                            readonly examples: readonly ["floorPriceChangeEvent"];
                        };
                        readonly kind: {
                            readonly type: "string";
                            readonly examples: readonly ["cancel"];
                        };
                        readonly slug: {
                            readonly type: "string";
                            readonly examples: readonly ["boredapeyachtclub"];
                        };
                        readonly chain: {
                            readonly type: "string";
                            readonly examples: readonly ["ethereum"];
                        };
                        readonly floorAsk: {
                            readonly type: "number";
                            readonly examples: readonly [79];
                        };
                        readonly previousFloorAsk: {
                            readonly type: "number";
                            readonly examples: readonly [78.8];
                        };
                        readonly contractId: {
                            readonly type: "string";
                            readonly examples: readonly ["0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"];
                        };
                        readonly timestamp: {
                            readonly type: "string";
                            readonly examples: readonly ["2022-09-26T07:33:26.000Z"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetNftDataLastfloorpriceforslug: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly slug: {
                    readonly type: "string";
                    readonly examples: readonly ["boredapeyachtclub"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "NFT project slug";
                };
                readonly chain: {
                    readonly type: "string";
                    readonly enum: readonly ["ethereum"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Blockchain to search";
                };
            };
            readonly required: readonly ["slug"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly floorPrices: {
                    readonly type: "object";
                    readonly properties: {
                        readonly source: {
                            readonly type: "string";
                            readonly examples: readonly ["X2Y2"];
                        };
                        readonly eventType: {
                            readonly type: "string";
                            readonly examples: readonly ["floorPriceChangeEvent"];
                        };
                        readonly kind: {
                            readonly type: "string";
                            readonly examples: readonly ["cancel"];
                        };
                        readonly slug: {
                            readonly type: "string";
                            readonly examples: readonly ["boredapeyachtclub"];
                        };
                        readonly chain: {
                            readonly type: "string";
                            readonly examples: readonly ["ethereum"];
                        };
                        readonly floorAsk: {
                            readonly type: "number";
                            readonly examples: readonly [79];
                        };
                        readonly previousFloorAsk: {
                            readonly type: "number";
                            readonly examples: readonly [78.8];
                        };
                        readonly contractId: {
                            readonly type: "string";
                            readonly examples: readonly ["0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"];
                        };
                        readonly timestamp: {
                            readonly type: "string";
                            readonly examples: readonly ["2022-09-26T07:33:26.000Z"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetNftDataNftdetails: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly contractAddress: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "NFT contract address";
                };
                readonly tokenId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "NFT Token ID";
                };
                readonly chain: {
                    readonly type: "string";
                    readonly enum: readonly ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "ethereum", "polygon", "avalanche", "optimism", "arbitrum", "base", "fantom", "bsc", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"];
                    readonly default: "ethereum";
                    readonly description: "Blockchain to search";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly populateMetadata: {
                    readonly type: "boolean";
                    readonly default: false;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Fetches metadata for the NFT via the TokenURI";
                };
            };
            readonly required: readonly ["contractAddress", "tokenId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly nft_details: {
                    readonly type: "object";
                    readonly properties: {
                        readonly name: {
                            readonly type: "string";
                            readonly examples: readonly ["Azuki"];
                        };
                        readonly symbol: {
                            readonly type: "string";
                            readonly examples: readonly ["AZUKI"];
                        };
                        readonly tokenId: {
                            readonly type: "string";
                            readonly examples: readonly [40];
                        };
                        readonly owner: {
                            readonly type: "string";
                            readonly examples: readonly ["0x333e58f8d77a8add1032CfdD781383E934f92d6F"];
                        };
                        readonly tokenURI: {
                            readonly type: "string";
                            readonly examples: readonly ["https://ikzttp.mypinata.cloud/ipfs/QmQFkLSQysj94s5GvTHPyzTxrawwtjgiiYS2TBLgrvw8CW/40"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetNftDataOwned: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly walletAddress: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Wallet address to query";
                };
                readonly chain: {
                    readonly type: "string";
                    readonly enum: readonly ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "ethereum", "polygon", "avalanche", "optimism", "arbitrum", "base", "fantom", "bsc", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"];
                    readonly default: "ethereum";
                    readonly description: "Blockchain to search";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly tokenType: {
                    readonly type: "string";
                    readonly enum: readonly ["nft721", "nft1155", "erc20"];
                    readonly default: "nft721";
                    readonly description: "Define what type of asset you want returned (ERC721, ERC1155, or ERC20 tokens)";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly sortDirection: {
                    readonly type: "string";
                    readonly enum: readonly ["DESC", "ASC"];
                    readonly default: "ASC";
                    readonly description: "Timestamp sort direction for the return results";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly limit: {
                    readonly type: "number";
                    readonly default: 1000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Maximum number of results to return";
                };
                readonly page: {
                    readonly type: "number";
                    readonly default: 1;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Page number of the results to return (used to calculate offset)";
                };
            };
            readonly required: readonly ["walletAddress"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly nfts: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly contractAddress: {
                                readonly type: "string";
                            };
                            readonly tokenID: {
                                readonly type: "string";
                            };
                            readonly tokenName: {
                                readonly type: "string";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetNftDataOwnershipforcontractaddress: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly contractAddress: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "NFT contract address";
                };
                readonly chain: {
                    readonly type: "string";
                    readonly enum: readonly ["ethereum"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Blockchain to search";
                };
                readonly limit: {
                    readonly type: "number";
                    readonly minimum: 0;
                    readonly maximum: 1000;
                    readonly default: 25;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of results to return";
                };
                readonly page: {
                    readonly type: "number";
                    readonly minimum: 1;
                    readonly default: 1;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Used to return the next set of items";
                };
                readonly sortDirection: {
                    readonly type: "string";
                    readonly enum: readonly ["DESC", "ASC"];
                    readonly default: "DESC";
                    readonly description: "Timestamp sort direction for the return results";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["contractAddress"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly transfers: {
                    readonly type: "object";
                    readonly properties: {
                        readonly results: {
                            readonly type: "array";
                            readonly items: {
                                readonly oneOf: readonly [{
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly address: {
                                            readonly type: "string";
                                            readonly examples: readonly ["0xdbfd76af2157dc15ee4e57f3f942bb45ba84af24"];
                                        };
                                        readonly chain: {
                                            readonly type: "string";
                                            readonly examples: readonly ["ethereum"];
                                        };
                                        readonly contractId: {
                                            readonly type: "string";
                                            readonly examples: readonly ["0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"];
                                        };
                                        readonly slug: {
                                            readonly type: "string";
                                            readonly examples: readonly ["boredapeyachtclub"];
                                        };
                                        readonly tokenCount: {
                                            readonly type: "integer";
                                            readonly examples: readonly [280];
                                        };
                                        readonly floorAskPrice: {
                                            readonly type: "number";
                                        };
                                        readonly onSaleCount: {
                                            readonly type: "integer";
                                        };
                                        readonly topBidValue: {
                                            readonly type: "number";
                                            readonly examples: readonly [1.146];
                                        };
                                        readonly totalBidValue: {
                                            readonly type: "number";
                                            readonly examples: readonly [320.88];
                                        };
                                        readonly id: {
                                            readonly type: "string";
                                            readonly examples: readonly ["dc2224522229e2ffcbece02e9b9d0470afa7a7c0b9c81923ff"];
                                        };
                                        readonly lastUpdated: {
                                            readonly type: "string";
                                            readonly examples: readonly ["2022-09-27T19:08:11.675Z"];
                                        };
                                    };
                                }];
                            };
                        };
                        readonly page: {
                            readonly type: "integer";
                            readonly examples: readonly [1];
                        };
                        readonly limit: {
                            readonly type: "integer";
                            readonly examples: readonly [50];
                        };
                        readonly totalPages: {
                            readonly type: "integer";
                            readonly examples: readonly [1];
                        };
                        readonly totalResults: {
                            readonly type: "integer";
                            readonly examples: readonly [31];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetNftDataOwnershipforslug: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly slug: {
                    readonly type: "string";
                    readonly examples: readonly ["boredapeyachtclub"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "NFT project slug";
                };
                readonly chain: {
                    readonly type: "string";
                    readonly enum: readonly ["ethereum"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Blockchain to search";
                };
                readonly limit: {
                    readonly type: "number";
                    readonly minimum: 0;
                    readonly maximum: 1000;
                    readonly default: 25;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of results to return";
                };
                readonly page: {
                    readonly type: "number";
                    readonly minimum: 1;
                    readonly default: 1;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Used to return the next set of items";
                };
                readonly sortDirection: {
                    readonly type: "string";
                    readonly enum: readonly ["DESC", "ASC"];
                    readonly default: "DESC";
                    readonly description: "Timestamp sort direction for the return results";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["slug"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly transfers: {
                    readonly type: "object";
                    readonly properties: {
                        readonly results: {
                            readonly type: "array";
                            readonly items: {
                                readonly oneOf: readonly [{
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly address: {
                                            readonly type: "string";
                                            readonly examples: readonly ["0xdbfd76af2157dc15ee4e57f3f942bb45ba84af24"];
                                        };
                                        readonly chain: {
                                            readonly type: "string";
                                            readonly examples: readonly ["ethereum"];
                                        };
                                        readonly contractId: {
                                            readonly type: "string";
                                            readonly examples: readonly ["0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"];
                                        };
                                        readonly slug: {
                                            readonly type: "string";
                                            readonly examples: readonly ["boredapeyachtclub"];
                                        };
                                        readonly tokenCount: {
                                            readonly type: "integer";
                                            readonly examples: readonly [280];
                                        };
                                        readonly floorAskPrice: {
                                            readonly type: "number";
                                        };
                                        readonly onSaleCount: {
                                            readonly type: "integer";
                                        };
                                        readonly topBidValue: {
                                            readonly type: "number";
                                            readonly examples: readonly [1.146];
                                        };
                                        readonly totalBidValue: {
                                            readonly type: "number";
                                            readonly examples: readonly [320.88];
                                        };
                                        readonly id: {
                                            readonly type: "string";
                                            readonly examples: readonly ["dc2224522229e2ffcbece02e9b9d0470afa7a7c0b9c81923ff"];
                                        };
                                        readonly lastUpdated: {
                                            readonly type: "string";
                                            readonly examples: readonly ["2022-09-27T19:08:11.675Z"];
                                        };
                                    };
                                }];
                            };
                        };
                        readonly page: {
                            readonly type: "integer";
                            readonly examples: readonly [1];
                        };
                        readonly limit: {
                            readonly type: "integer";
                            readonly examples: readonly [50];
                        };
                        readonly totalPages: {
                            readonly type: "integer";
                            readonly examples: readonly [1];
                        };
                        readonly totalResults: {
                            readonly type: "integer";
                            readonly examples: readonly [31];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetNftDataSaleseventsforcontractaddress: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly contractAddress: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "NFT contract address";
                };
                readonly chain: {
                    readonly type: "string";
                    readonly enum: readonly ["ethereum"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Blockchain to search";
                };
                readonly limit: {
                    readonly type: "number";
                    readonly minimum: 0;
                    readonly maximum: 1000;
                    readonly default: 25;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of results to return";
                };
                readonly offset: {
                    readonly type: "number";
                    readonly minimum: 0;
                    readonly default: 0;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Used to return the next set of items";
                };
                readonly sortDirection: {
                    readonly type: "string";
                    readonly enum: readonly ["DESC", "ASC"];
                    readonly default: "DESC";
                    readonly description: "Timestamp sort direction for the return results";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly startDate: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Starting timestamp for results";
                };
                readonly endDate: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Ending timestamp for results";
                };
            };
            readonly required: readonly ["contractAddress"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly sales: {
                    readonly type: "array";
                    readonly items: {
                        readonly oneOf: readonly [{
                            readonly type: "object";
                            readonly properties: {
                                readonly source: {
                                    readonly type: "string";
                                    readonly examples: readonly ["opensea.io"];
                                };
                                readonly eventType: {
                                    readonly type: "string";
                                    readonly examples: readonly ["salesEvent"];
                                };
                                readonly orderSide: {
                                    readonly type: "string";
                                    readonly examples: readonly ["ask"];
                                };
                                readonly slug: {
                                    readonly type: "string";
                                    readonly examples: readonly ["boredapeyachtclub"];
                                };
                                readonly chain: {
                                    readonly type: "string";
                                    readonly examples: readonly ["ethereum"];
                                };
                                readonly sale: {
                                    readonly type: "number";
                                    readonly examples: readonly [769.9];
                                };
                                readonly saleUsd: {
                                    readonly type: "number";
                                    readonly examples: readonly [1174405.54931];
                                };
                                readonly contractId: {
                                    readonly type: "string";
                                    readonly examples: readonly ["0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"];
                                };
                                readonly tokenId: {
                                    readonly type: "string";
                                    readonly examples: readonly ["6588"];
                                };
                                readonly from: {
                                    readonly type: "string";
                                    readonly examples: readonly ["0x29e2ffcbece02e9b9d0470afa7a7c0b9c81923ff"];
                                };
                                readonly to: {
                                    readonly type: "string";
                                    readonly examples: readonly ["0xec7e5a49ee8e95a89a1a881bbf1aae2ec854d790"];
                                };
                                readonly block: {
                                    readonly type: "string";
                                    readonly examples: readonly ["15448013"];
                                };
                                readonly txHash: {
                                    readonly type: "string";
                                    readonly examples: readonly ["0xb2b2276d9073807bf64527200a74aa49581394b4f9cdb99d403578167d8fb559"];
                                };
                                readonly timestamp: {
                                    readonly type: "string";
                                    readonly examples: readonly ["2022-08-31T21:41:52.000Z"];
                                };
                            };
                        }];
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetNftDataSaleseventsforslug: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly slug: {
                    readonly type: "string";
                    readonly examples: readonly ["boredapeyachtclub"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "NFT project slug";
                };
                readonly chain: {
                    readonly type: "string";
                    readonly enum: readonly ["ethereum"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Blockchain to search";
                };
                readonly limit: {
                    readonly type: "number";
                    readonly minimum: 0;
                    readonly maximum: 1000;
                    readonly default: 25;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of results to return";
                };
                readonly offset: {
                    readonly type: "number";
                    readonly minimum: 0;
                    readonly default: 0;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Used to return the next set of items";
                };
                readonly sortDirection: {
                    readonly type: "string";
                    readonly enum: readonly ["DESC", "ASC"];
                    readonly default: "DESC";
                    readonly description: "Timestamp sort direction for the return results";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly startDate: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Starting timestamp for results";
                };
                readonly endDate: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Ending timestamp for results";
                };
            };
            readonly required: readonly ["slug"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly sales: {
                    readonly type: "array";
                    readonly items: {
                        readonly oneOf: readonly [{
                            readonly type: "object";
                            readonly properties: {
                                readonly source: {
                                    readonly type: "string";
                                    readonly examples: readonly ["opensea.io"];
                                };
                                readonly eventType: {
                                    readonly type: "string";
                                    readonly examples: readonly ["salesEvent"];
                                };
                                readonly orderSide: {
                                    readonly type: "string";
                                    readonly examples: readonly ["ask"];
                                };
                                readonly slug: {
                                    readonly type: "string";
                                    readonly examples: readonly ["boredapeyachtclub"];
                                };
                                readonly chain: {
                                    readonly type: "string";
                                    readonly examples: readonly ["ethereum"];
                                };
                                readonly sale: {
                                    readonly type: "number";
                                    readonly examples: readonly [769.9];
                                };
                                readonly saleUsd: {
                                    readonly type: "number";
                                    readonly examples: readonly [1174405.54931];
                                };
                                readonly contractId: {
                                    readonly type: "string";
                                    readonly examples: readonly ["0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"];
                                };
                                readonly tokenId: {
                                    readonly type: "string";
                                    readonly examples: readonly ["6588"];
                                };
                                readonly from: {
                                    readonly type: "string";
                                    readonly examples: readonly ["0x29e2ffcbece02e9b9d0470afa7a7c0b9c81923ff"];
                                };
                                readonly to: {
                                    readonly type: "string";
                                    readonly examples: readonly ["0xec7e5a49ee8e95a89a1a881bbf1aae2ec854d790"];
                                };
                                readonly block: {
                                    readonly type: "string";
                                    readonly examples: readonly ["15448013"];
                                };
                                readonly txHash: {
                                    readonly type: "string";
                                    readonly examples: readonly ["0xb2b2276d9073807bf64527200a74aa49581394b4f9cdb99d403578167d8fb559"];
                                };
                                readonly timestamp: {
                                    readonly type: "string";
                                    readonly examples: readonly ["2022-08-31T21:41:52.000Z"];
                                };
                            };
                        }];
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetNftDataSearchattributesincontractaddress: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly searchString: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Expression to search in NFT attributes";
                };
                readonly contractAddress: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "NFT contract address";
                };
                readonly chain: {
                    readonly type: "string";
                    readonly enum: readonly ["ethereum"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Blockchain to search";
                };
                readonly limit: {
                    readonly type: "number";
                    readonly minimum: 0;
                    readonly maximum: 1000;
                    readonly default: 25;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of results to return";
                };
                readonly page: {
                    readonly type: "number";
                    readonly minimum: 1;
                    readonly default: 1;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Used to return the next set of items";
                };
                readonly sortField: {
                    readonly type: "string";
                    readonly enum: readonly ["key", "value", "count"];
                    readonly default: "key";
                    readonly description: "Default: key";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly sortDirection: {
                    readonly type: "string";
                    readonly enum: readonly ["DESC", "ASC"];
                    readonly default: "DESC";
                    readonly description: "Timestamp sort direction for the return results";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly includeTokens: {
                    readonly type: "boolean";
                    readonly default: false;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Include the corresponding token IDs in search results";
                };
            };
            readonly required: readonly ["searchString", "contractAddress"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly attributes: {
                    readonly type: "object";
                    readonly properties: {
                        readonly results: {
                            readonly type: "array";
                            readonly items: {
                                readonly oneOf: readonly [{
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly contractId: {
                                            readonly type: "string";
                                            readonly examples: readonly ["0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"];
                                        };
                                        readonly slug: {
                                            readonly type: "string";
                                            readonly examples: readonly ["boredapeyachtclub"];
                                        };
                                        readonly key: {
                                            readonly type: "string";
                                            readonly examples: readonly ["Background"];
                                        };
                                        readonly value: {
                                            readonly type: "string";
                                            readonly examples: readonly ["Orange"];
                                        };
                                        readonly count: {
                                            readonly type: "number";
                                            readonly examples: readonly [1273];
                                        };
                                        readonly id: {
                                            readonly type: "string";
                                            readonly examples: readonly ["0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d:ethereum:Background->Orange"];
                                        };
                                    };
                                }];
                            };
                        };
                        readonly page: {
                            readonly type: "integer";
                            readonly examples: readonly [1];
                        };
                        readonly limit: {
                            readonly type: "integer";
                            readonly examples: readonly [500];
                        };
                        readonly totalPages: {
                            readonly type: "integer";
                            readonly examples: readonly [1];
                        };
                        readonly totalResults: {
                            readonly type: "integer";
                            readonly examples: readonly [168];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetNftDataSearchattributesinslug: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly searchString: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Expression to search in NFT attributes";
                };
                readonly slug: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "NFT project slug";
                };
                readonly chain: {
                    readonly type: "string";
                    readonly enum: readonly ["ethereum"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Blockchain to search";
                };
                readonly limit: {
                    readonly type: "number";
                    readonly minimum: 0;
                    readonly maximum: 1000;
                    readonly default: 25;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of results to return";
                };
                readonly page: {
                    readonly type: "number";
                    readonly minimum: 1;
                    readonly default: 1;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Used to return the next set of items";
                };
                readonly sortField: {
                    readonly type: "string";
                    readonly enum: readonly ["key", "value", "count"];
                    readonly default: "key";
                    readonly description: "Default: key";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly sortDirection: {
                    readonly type: "string";
                    readonly enum: readonly ["DESC", "ASC"];
                    readonly default: "DESC";
                    readonly description: "Timestamp sort direction for the return results";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly includeTokens: {
                    readonly type: "boolean";
                    readonly default: false;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Include the corresponding token IDs in search results";
                };
            };
            readonly required: readonly ["searchString", "slug"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly attributes: {
                    readonly type: "object";
                    readonly properties: {
                        readonly results: {
                            readonly type: "array";
                            readonly items: {
                                readonly oneOf: readonly [{
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly contractId: {
                                            readonly type: "string";
                                            readonly examples: readonly ["0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"];
                                        };
                                        readonly slug: {
                                            readonly type: "string";
                                            readonly examples: readonly ["boredapeyachtclub"];
                                        };
                                        readonly key: {
                                            readonly type: "string";
                                            readonly examples: readonly ["Background"];
                                        };
                                        readonly value: {
                                            readonly type: "string";
                                            readonly examples: readonly ["Orange"];
                                        };
                                        readonly count: {
                                            readonly type: "number";
                                            readonly examples: readonly [1273];
                                        };
                                        readonly id: {
                                            readonly type: "string";
                                            readonly examples: readonly ["0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d:ethereum:Background->Orange"];
                                        };
                                    };
                                }];
                            };
                        };
                        readonly page: {
                            readonly type: "integer";
                            readonly examples: readonly [1];
                        };
                        readonly limit: {
                            readonly type: "integer";
                            readonly examples: readonly [500];
                        };
                        readonly totalPages: {
                            readonly type: "integer";
                            readonly examples: readonly [1];
                        };
                        readonly totalResults: {
                            readonly type: "integer";
                            readonly examples: readonly [168];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetNftDataTransactions: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly walletAddress: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Wallet address to query";
                };
                readonly chain: {
                    readonly type: "string";
                    readonly enum: readonly ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "ethereum", "polygon", "avalanche", "optimism", "arbitrum", "base", "fantom", "bsc", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"];
                    readonly default: "ethereum";
                    readonly description: "Blockchain to search";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly sortDirection: {
                    readonly type: "string";
                    readonly enum: readonly ["DESC", "ASC"];
                    readonly default: "ASC";
                    readonly description: "Timestamp sort direction for the return results";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly limit: {
                    readonly type: "number";
                    readonly default: 1000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Maximum number of results to return";
                };
                readonly page: {
                    readonly type: "number";
                    readonly default: 1;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Page number of the results to return (used to calculate offset)";
                };
            };
            readonly required: readonly ["walletAddress"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly nft_transactions: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly blockNumber: {
                                readonly type: "string";
                            };
                            readonly timeStamp: {
                                readonly type: "string";
                            };
                            readonly hash: {
                                readonly type: "string";
                            };
                            readonly nonce: {
                                readonly type: "string";
                            };
                            readonly blockHash: {
                                readonly type: "string";
                            };
                            readonly from: {
                                readonly type: "string";
                            };
                            readonly contractAddress: {
                                readonly type: "string";
                            };
                            readonly to: {
                                readonly type: "string";
                            };
                            readonly tokenID: {
                                readonly type: "string";
                            };
                            readonly tokenName: {
                                readonly type: "string";
                            };
                            readonly tokenSymbol: {
                                readonly type: "string";
                            };
                            readonly tokenDecimal: {
                                readonly type: "string";
                            };
                            readonly transactionIndex: {
                                readonly type: "string";
                            };
                            readonly gas: {
                                readonly type: "string";
                            };
                            readonly gasPrice: {
                                readonly type: "string";
                            };
                            readonly gasUsed: {
                                readonly type: "string";
                            };
                            readonly cumulativeGasUsed: {
                                readonly type: "string";
                            };
                            readonly input: {
                                readonly type: "string";
                            };
                            readonly confirmations: {
                                readonly type: "string";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetNftDataTransactionsbycontract: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly contractAddress: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "NFT contract address";
                };
                readonly walletAddress: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Wallet address to query";
                };
                readonly chain: {
                    readonly type: "string";
                    readonly enum: readonly ["ethereum"];
                    readonly default: "ethereum";
                    readonly description: "Blockchain to search";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["contractAddress", "walletAddress"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly contract_transactions: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly blockNumber: {
                                readonly type: "string";
                            };
                            readonly timeStamp: {
                                readonly type: "string";
                            };
                            readonly hash: {
                                readonly type: "string";
                            };
                            readonly nonce: {
                                readonly type: "string";
                            };
                            readonly blockHash: {
                                readonly type: "string";
                            };
                            readonly from: {
                                readonly type: "string";
                            };
                            readonly contractAddress: {
                                readonly type: "string";
                            };
                            readonly to: {
                                readonly type: "string";
                            };
                            readonly tokenID: {
                                readonly type: "string";
                            };
                            readonly tokenName: {
                                readonly type: "string";
                            };
                            readonly tokenSymbol: {
                                readonly type: "string";
                            };
                            readonly tokenDecimal: {
                                readonly type: "string";
                            };
                            readonly transactionIndex: {
                                readonly type: "string";
                            };
                            readonly gas: {
                                readonly type: "string";
                            };
                            readonly gasPrice: {
                                readonly type: "string";
                            };
                            readonly gasUsed: {
                                readonly type: "string";
                            };
                            readonly cumulativeGasUsed: {
                                readonly type: "string";
                            };
                            readonly input: {
                                readonly type: "string";
                            };
                            readonly confirmations: {
                                readonly type: "string";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetNftDataTransfereventsforcontractaddress: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly contractAddress: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "NFT contract address";
                };
                readonly chain: {
                    readonly type: "string";
                    readonly enum: readonly ["ethereum"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Blockchain to search";
                };
                readonly limit: {
                    readonly type: "number";
                    readonly minimum: 0;
                    readonly maximum: 1000;
                    readonly default: 25;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of results to return";
                };
                readonly page: {
                    readonly type: "number";
                    readonly minimum: 1;
                    readonly default: 1;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Used to return the next set of items";
                };
                readonly sortDirection: {
                    readonly type: "string";
                    readonly enum: readonly ["DESC", "ASC"];
                    readonly default: "DESC";
                    readonly description: "Timestamp sort direction for the return results";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly startDate: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Starting timestamp for results";
                };
                readonly endDate: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Ending timestamp for results";
                };
            };
            readonly required: readonly ["contractAddress"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly transfers: {
                    readonly type: "object";
                    readonly properties: {
                        readonly results: {
                            readonly type: "array";
                            readonly items: {
                                readonly oneOf: readonly [{
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly amount: {
                                            readonly type: "integer";
                                            readonly examples: readonly [1];
                                        };
                                        readonly block: {
                                            readonly type: "string";
                                            readonly examples: readonly ["15451208"];
                                        };
                                        readonly chain: {
                                            readonly type: "string";
                                            readonly examples: readonly ["ethereum"];
                                        };
                                        readonly contractId: {
                                            readonly type: "string";
                                            readonly examples: readonly ["0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"];
                                        };
                                        readonly slug: {
                                            readonly type: "string";
                                            readonly examples: readonly ["boredapeyachtclub"];
                                        };
                                        readonly from: {
                                            readonly type: "string";
                                            readonly examples: readonly ["0x3b968d2d299b895a5fcf3bba7a64ad0f566e6f88"];
                                        };
                                        readonly to: {
                                            readonly type: "string";
                                            readonly examples: readonly ["0x70b97a0da65c15dfb0ffa02aee6fa36e507c2762"];
                                        };
                                        readonly tokenId: {
                                            readonly type: "string";
                                            readonly examples: readonly ["7397"];
                                        };
                                        readonly txHash: {
                                            readonly type: "string";
                                            readonly examples: readonly ["0xf41bcba23e8f6421ccae857be1cc96b06c6ab2fdb10dd4e07ab72882078345ec"];
                                        };
                                        readonly id: {
                                            readonly type: "string";
                                            readonly examples: readonly ["dc2224522229e2ffcbece02e9b9d0470afa7a7c0b9c81923ff"];
                                        };
                                        readonly timestamp: {
                                            readonly type: "string";
                                            readonly examples: readonly ["2022-09-01T06:05:10.000Z"];
                                        };
                                    };
                                }];
                            };
                        };
                        readonly page: {
                            readonly type: "integer";
                            readonly examples: readonly [1];
                        };
                        readonly limit: {
                            readonly type: "integer";
                            readonly examples: readonly [50];
                        };
                        readonly totalPages: {
                            readonly type: "integer";
                            readonly examples: readonly [1];
                        };
                        readonly totalResults: {
                            readonly type: "integer";
                            readonly examples: readonly [31];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetNftDataTransfereventsforslug: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly slug: {
                    readonly type: "string";
                    readonly examples: readonly ["boredapeyachtclub"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "NFT project slug";
                };
                readonly chain: {
                    readonly type: "string";
                    readonly enum: readonly ["ethereum"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Blockchain to search";
                };
                readonly limit: {
                    readonly type: "number";
                    readonly minimum: 0;
                    readonly maximum: 1000;
                    readonly default: 25;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of results to return";
                };
                readonly page: {
                    readonly type: "number";
                    readonly minimum: 1;
                    readonly default: 1;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Used to return the next set of items";
                };
                readonly sortDirection: {
                    readonly type: "string";
                    readonly enum: readonly ["DESC", "ASC"];
                    readonly default: "DESC";
                    readonly description: "Timestamp sort direction for the return results";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly startDate: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Starting timestamp for results";
                };
                readonly endDate: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Ending timestamp for results";
                };
            };
            readonly required: readonly ["slug"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly transfers: {
                    readonly type: "object";
                    readonly properties: {
                        readonly results: {
                            readonly type: "array";
                            readonly items: {
                                readonly oneOf: readonly [{
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly amount: {
                                            readonly type: "integer";
                                            readonly examples: readonly [1];
                                        };
                                        readonly block: {
                                            readonly type: "string";
                                            readonly examples: readonly ["15451208"];
                                        };
                                        readonly chain: {
                                            readonly type: "string";
                                            readonly examples: readonly ["ethereum"];
                                        };
                                        readonly contractId: {
                                            readonly type: "string";
                                            readonly examples: readonly ["0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"];
                                        };
                                        readonly slug: {
                                            readonly type: "string";
                                            readonly examples: readonly ["boredapeyachtclub"];
                                        };
                                        readonly from: {
                                            readonly type: "string";
                                            readonly examples: readonly ["0x3b968d2d299b895a5fcf3bba7a64ad0f566e6f88"];
                                        };
                                        readonly to: {
                                            readonly type: "string";
                                            readonly examples: readonly ["0x70b97a0da65c15dfb0ffa02aee6fa36e507c2762"];
                                        };
                                        readonly tokenId: {
                                            readonly type: "string";
                                            readonly examples: readonly ["7397"];
                                        };
                                        readonly txHash: {
                                            readonly type: "string";
                                            readonly examples: readonly ["0xf41bcba23e8f6421ccae857be1cc96b06c6ab2fdb10dd4e07ab72882078345ec"];
                                        };
                                        readonly id: {
                                            readonly type: "string";
                                            readonly examples: readonly ["dc2224522229e2ffcbece02e9b9d0470afa7a7c0b9c81923ff"];
                                        };
                                        readonly timestamp: {
                                            readonly type: "string";
                                            readonly examples: readonly ["2022-09-01T06:05:10.000Z"];
                                        };
                                    };
                                }];
                            };
                        };
                        readonly page: {
                            readonly type: "number";
                            readonly examples: readonly [1];
                        };
                        readonly limit: {
                            readonly type: "integer";
                            readonly examples: readonly [50];
                        };
                        readonly totalPages: {
                            readonly type: "integer";
                            readonly examples: readonly [1];
                        };
                        readonly totalResults: {
                            readonly type: "integer";
                            readonly examples: readonly [31];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetNftUseropsContractbalance: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly contractAddress: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Contract address";
                };
                readonly chain: {
                    readonly type: "string";
                    readonly enum: readonly ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "ethereum", "polygon", "avalanche", "optimism", "arbitrum", "base", "fantom", "bsc", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"];
                    readonly default: "ethereum";
                    readonly description: "Blockchain";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["contractAddress"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly nft_details: {
                    readonly type: "object";
                    readonly properties: {
                        readonly name: {
                            readonly type: "string";
                            readonly examples: readonly ["Azuki"];
                        };
                        readonly symbol: {
                            readonly type: "string";
                            readonly examples: readonly ["AZUKI"];
                        };
                        readonly tokenId: {
                            readonly type: "string";
                            readonly examples: readonly [40];
                        };
                        readonly owner: {
                            readonly type: "string";
                            readonly examples: readonly ["0x333e58f8d77a8add1032CfdD781383E934f92d6F"];
                        };
                        readonly tokenURI: {
                            readonly type: "string";
                            readonly examples: readonly ["https://ikzttp.mypinata.cloud/ipfs/QmQFkLSQysj94s5GvTHPyzTxrawwtjgiiYS2TBLgrvw8CW/40"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetNftUseropsContractdetails: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly contractAddress: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Contract address";
                };
                readonly chain: {
                    readonly type: "string";
                    readonly enum: readonly ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "ethereum", "polygon", "avalanche", "optimism", "arbitrum", "base", "fantom", "bsc", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"];
                    readonly default: "ethereum";
                    readonly description: "Blockchain";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["contractAddress"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly nft_details: {
                    readonly type: "object";
                    readonly properties: {
                        readonly name: {
                            readonly type: "string";
                            readonly examples: readonly ["Azuki"];
                        };
                        readonly symbol: {
                            readonly type: "string";
                            readonly examples: readonly ["AZUKI"];
                        };
                        readonly tokenId: {
                            readonly type: "string";
                            readonly examples: readonly [40];
                        };
                        readonly owner: {
                            readonly type: "string";
                            readonly examples: readonly ["0x333e58f8d77a8add1032CfdD781383E934f92d6F"];
                        };
                        readonly tokenURI: {
                            readonly type: "string";
                            readonly examples: readonly ["https://ikzttp.mypinata.cloud/ipfs/QmQFkLSQysj94s5GvTHPyzTxrawwtjgiiYS2TBLgrvw8CW/40"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetNftUseropsDeployedcontracts: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly Transaction: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly blockNumber: {
                                readonly type: "string";
                            };
                            readonly timeStamp: {
                                readonly type: "string";
                            };
                            readonly hash: {
                                readonly type: "string";
                            };
                            readonly nonce: {
                                readonly type: "string";
                            };
                            readonly blockHash: {
                                readonly type: "string";
                            };
                            readonly from: {
                                readonly type: "string";
                            };
                            readonly contractAddress: {
                                readonly type: "string";
                            };
                            readonly to: {
                                readonly type: "string";
                            };
                            readonly tokenID: {
                                readonly type: "string";
                            };
                            readonly tokenName: {
                                readonly type: "string";
                            };
                            readonly tokenSymbol: {
                                readonly type: "string";
                            };
                            readonly tokenDecimal: {
                                readonly type: "string";
                            };
                            readonly transactionIndex: {
                                readonly type: "string";
                            };
                            readonly gas: {
                                readonly type: "string";
                            };
                            readonly gasPrice: {
                                readonly type: "string";
                            };
                            readonly gasUsed: {
                                readonly type: "string";
                            };
                            readonly cumulativeGasUsed: {
                                readonly type: "string";
                            };
                            readonly input: {
                                readonly type: "string";
                            };
                            readonly confirmations: {
                                readonly type: "string";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetNftUseropsIpfsuploads: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly Transaction: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly blockNumber: {
                                readonly type: "string";
                            };
                            readonly timeStamp: {
                                readonly type: "string";
                            };
                            readonly hash: {
                                readonly type: "string";
                            };
                            readonly nonce: {
                                readonly type: "string";
                            };
                            readonly blockHash: {
                                readonly type: "string";
                            };
                            readonly from: {
                                readonly type: "string";
                            };
                            readonly contractAddress: {
                                readonly type: "string";
                            };
                            readonly to: {
                                readonly type: "string";
                            };
                            readonly tokenID: {
                                readonly type: "string";
                            };
                            readonly tokenName: {
                                readonly type: "string";
                            };
                            readonly tokenSymbol: {
                                readonly type: "string";
                            };
                            readonly tokenDecimal: {
                                readonly type: "string";
                            };
                            readonly transactionIndex: {
                                readonly type: "string";
                            };
                            readonly gas: {
                                readonly type: "string";
                            };
                            readonly gasPrice: {
                                readonly type: "string";
                            };
                            readonly gasUsed: {
                                readonly type: "string";
                            };
                            readonly cumulativeGasUsed: {
                                readonly type: "string";
                            };
                            readonly input: {
                                readonly type: "string";
                            };
                            readonly confirmations: {
                                readonly type: "string";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetNftUseropsNftsminted: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly Transaction: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly blockNumber: {
                                readonly type: "string";
                            };
                            readonly timeStamp: {
                                readonly type: "string";
                            };
                            readonly hash: {
                                readonly type: "string";
                            };
                            readonly nonce: {
                                readonly type: "string";
                            };
                            readonly blockHash: {
                                readonly type: "string";
                            };
                            readonly from: {
                                readonly type: "string";
                            };
                            readonly contractAddress: {
                                readonly type: "string";
                            };
                            readonly to: {
                                readonly type: "string";
                            };
                            readonly tokenID: {
                                readonly type: "string";
                            };
                            readonly tokenName: {
                                readonly type: "string";
                            };
                            readonly tokenSymbol: {
                                readonly type: "string";
                            };
                            readonly tokenDecimal: {
                                readonly type: "string";
                            };
                            readonly transactionIndex: {
                                readonly type: "string";
                            };
                            readonly gas: {
                                readonly type: "string";
                            };
                            readonly gasPrice: {
                                readonly type: "string";
                            };
                            readonly gasUsed: {
                                readonly type: "string";
                            };
                            readonly cumulativeGasUsed: {
                                readonly type: "string";
                            };
                            readonly input: {
                                readonly type: "string";
                            };
                            readonly confirmations: {
                                readonly type: "string";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostNftDeployDeploycontract: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["chain"];
        readonly properties: {
            readonly contractName: {
                readonly type: "string";
                readonly description: "Name of your contract";
                readonly examples: readonly ["TestContractName"];
            };
            readonly contractSymbol: {
                readonly type: "string";
                readonly description: "Your contract symbol";
                readonly examples: readonly ["TestSymbol"];
            };
            readonly recipientAddress: {
                readonly type: "string";
                readonly description: "Wallet address of contract owner - optional";
                readonly examples: readonly ["0x33145a6258e89b6E0796d237A3048A3852cCaeQ7"];
            };
            readonly chain: {
                readonly type: "string";
                readonly enum: readonly ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "ethereum", "polygon", "avalanche", "optimism", "arbitrum", "base", "fantom", "bsc", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"];
                readonly description: "Blockchain on which NFT contract will be deployed";
                readonly default: "sepolia";
            };
            readonly contractType: {
                readonly type: "string";
                readonly enum: readonly ["nft721", "nft1155", "onft721", "nft721A", "erc20", "commerce"];
                readonly description: "Type of contract - optional";
                readonly default: "nft721";
            };
            readonly contractCategory: {
                readonly type: "string";
                readonly enum: readonly ["simple", "advanced"];
                readonly description: "Your contract category. Defaults to simple";
                readonly default: "simple";
            };
            readonly isCollectionContract: {
                readonly type: "string";
                readonly enum: readonly [false, true];
                readonly description: "True/False";
                readonly default: false;
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly transaction_details: {
                    readonly type: "object";
                    readonly properties: {
                        readonly transactionHash: {
                            readonly type: "string";
                            readonly examples: readonly ["0x37f21bbb309ae9d5d9104af6c9f9a4f0d4beaee7563f49436ffda22800fa2c7c"];
                        };
                        readonly blockExplorer: {
                            readonly type: "string";
                            readonly examples: readonly ["https://goerli.etherscan.io/tx/0x37f21bbb309ae9d5d9104af6c9f9a4f0d4beaee7563f49436ffda22800fa2c7c"];
                        };
                        readonly transactionID: {
                            readonly type: "string";
                            readonly examples: readonly ["6327921e418fb0564c4d063b"];
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly examples: readonly ["Sent"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                    readonly examples: readonly [400];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Cannot read property filePath of null"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostNftDeployUpdatecontract: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["contractAddress", "chain"];
        readonly properties: {
            readonly contractAddress: {
                readonly type: "string";
                readonly description: "Address of NFT contract";
            };
            readonly chain: {
                readonly type: "string";
                readonly enum: readonly ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "ethereum", "polygon", "avalanche", "optimism", "arbitrum", "base", "fantom", "bsc", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"];
                readonly description: "Blockchain on which contract was deployed";
                readonly default: "sepolia";
            };
            readonly tokenURIPrereveal: {
                readonly type: "string";
                readonly description: "URI of your pre-reveal image, if applicable";
            };
            readonly allowListMintStartTime: {
                readonly type: "string";
                readonly description: "StartTime of allowlist Minting. Time should be in epoch format. See [here](https://www.epochconverter.com/) epoch time conversion.";
            };
            readonly publicSaleStartTime: {
                readonly type: "string";
                readonly description: "StartTime of public Minting. Time should be in epoch format. See [here](https://www.epochconverter.com/) epoch time conversion.";
            };
            readonly allowlistMintPriceInWei: {
                readonly type: "string";
                readonly description: "Mint price for allowlist minting. Input price in Wei.";
            };
            readonly publicPriceInWei: {
                readonly type: "string";
                readonly description: "Mint price for public minting, i.e not on allow-list and not reserved. Input price in Wei.";
            };
            readonly metadataFrozen: {
                readonly type: "string";
                readonly description: "Once set to true you can no longer change the NFT metadata";
            };
            readonly baseTokenURI: {
                readonly type: "string";
                readonly description: "Base token URI. This gets concatenated with your tokenID to return a tokenURI";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly transaction_details: {
                    readonly type: "object";
                    readonly properties: {
                        readonly transactionHash: {
                            readonly type: "string";
                            readonly examples: readonly ["0x37f21bbb309ae9d5d9104af6c9f9a4f0d4beaee7563f49436ffda22800fa2c7c"];
                        };
                        readonly blockExplorer: {
                            readonly type: "string";
                            readonly examples: readonly ["https://goerli.etherscan.io/tx/0x37f21bbb309ae9d5d9104af6c9f9a4f0d4beaee7563f49436ffda22800fa2c7c"];
                        };
                        readonly transactionID: {
                            readonly type: "string";
                            readonly examples: readonly ["6327921e418fb0564c4d063b"];
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly examples: readonly ["Sent"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                    readonly examples: readonly [400];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Cannot read property filePath of null"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostNftMintCollectionreservemint: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["mintQty", "contractAddress", "recipientAddress", "chain"];
        readonly properties: {
            readonly mintQty: {
                readonly type: "string";
                readonly description: "Quantity to be minted";
            };
            readonly contractAddress: {
                readonly type: "string";
                readonly description: "Address of NFT Contract";
            };
            readonly recipientAddress: {
                readonly type: "string";
                readonly description: "Wallet addres that NFT will be minted to";
                readonly examples: readonly ["0x33145a6258e89b6E0796d237A3048A3852cCaeQ7"];
            };
            readonly chain: {
                readonly type: "string";
                readonly enum: readonly ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "ethereum", "polygon", "avalanche", "optimism", "arbitrum", "base", "fantom", "bsc", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"];
                readonly description: "Blockchain on which NFT will be minted";
                readonly default: "sepolia";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly transaction_details: {
                    readonly type: "object";
                    readonly properties: {
                        readonly transactionHash: {
                            readonly type: "string";
                            readonly examples: readonly ["0x37f21bbb309ae9d5d9104af6c9f9a4f0d4beaee7563f49436ffda22800fa2c7c"];
                        };
                        readonly blockExplorer: {
                            readonly type: "string";
                            readonly examples: readonly ["https://goerli.etherscan.io/tx/0x37f21bbb309ae9d5d9104af6c9f9a4f0d4beaee7563f49436ffda22800fa2c7c"];
                        };
                        readonly transactionID: {
                            readonly type: "string";
                            readonly examples: readonly ["6327921e418fb0564c4d063b"];
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly examples: readonly ["Sent"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                    readonly examples: readonly [400];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Cannot read property filePath of null"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostNftMintCreatetoken1155: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["chain", "contractAddress", "tokenInitialSupply"];
        readonly properties: {
            readonly metadataUrl: {
                readonly type: "string";
                readonly description: "Url of your metadata";
                readonly examples: readonly ["https://ipfs.io/ipfs/bafyreibhwq2msjtoushpb5mwq5oknwavs7bq2vl6nmxc6mripufjy7uyhi/metadata.json"];
            };
            readonly tokenInitialSupply: {
                readonly type: "string";
                readonly description: "Initial quantity of NFTs to be minted with token creation";
            };
            readonly contractAddress: {
                readonly type: "string";
                readonly description: "Address of NFT contract";
            };
            readonly recipientAddress: {
                readonly type: "string";
                readonly description: "Wallet addres that NFT will be minted to - optional. If empty, the NFT will be in the default Verbwire wallet.";
                readonly examples: readonly ["0x33145a6258e89b6E0796d237A3048A3852cCaeQ7"];
            };
            readonly allowPlatformToOperateToken: {
                readonly type: "string";
                readonly enum: readonly [true, false];
                readonly default: true;
            };
            readonly chain: {
                readonly type: "string";
                readonly enum: readonly ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "ethereum", "polygon", "avalanche", "optimism", "arbitrum", "base", "fantom", "bsc", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"];
                readonly description: "Blockchain on which NFT will be minted";
                readonly default: "sepolia";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly transaction_details: {
                    readonly type: "object";
                    readonly properties: {
                        readonly transactionHash: {
                            readonly type: "string";
                            readonly examples: readonly ["0x37f21bbb309ae9d5d9104af6c9f9a4f0d4beaee7563f49436ffda22800fa2c7c"];
                        };
                        readonly blockExplorer: {
                            readonly type: "string";
                            readonly examples: readonly ["https://goerli.etherscan.io/tx/0x37f21bbb309ae9d5d9104af6c9f9a4f0d4beaee7563f49436ffda22800fa2c7c"];
                        };
                        readonly transactionID: {
                            readonly type: "string";
                            readonly examples: readonly ["6327921e418fb0564c4d063b"];
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly examples: readonly ["Sent"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                    readonly examples: readonly [400];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Cannot read property filePath of null"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostNftMintMintfromfile: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["filePath", "name", "description", "chain", "contractAddress"];
        readonly properties: {
            readonly filePath: {
                readonly type: "string";
                readonly format: "binary";
                readonly description: "Input file for your NFT mint. It could be an image file, or any file.";
            };
            readonly name: {
                readonly type: "string";
                readonly description: "Name of your NFT";
                readonly examples: readonly ["SampleNFTName"];
            };
            readonly description: {
                readonly type: "string";
                readonly description: "Description of your NFT";
                readonly examples: readonly ["Sample Description"];
            };
            readonly contractAddress: {
                readonly type: "string";
                readonly description: "Address of NFT contract";
            };
            readonly recipientAddress: {
                readonly type: "string";
                readonly description: "Wallet address of NFT owner - optional. If left empty the default Verbwire wallet will be used.";
            };
            readonly allowPlatformToOperateToken: {
                readonly type: "string";
                readonly enum: readonly [true, false];
                readonly default: true;
            };
            readonly data: {
                readonly type: "string";
                readonly description: "Data to be minted in your NFT. If you want attributes viewable on Opensea please see opensea standards [here](https://docs.opensea.io/docs/metadata-standards).";
            };
            readonly quantity: {
                readonly type: "string";
                readonly description: "Quantity of tokens to be minted - optional";
                readonly default: 1;
            };
            readonly tokenId: {
                readonly type: "string";
                readonly description: "Token ID of NFTs minted. Applicable to ERC1155 tokens only.";
            };
            readonly chain: {
                readonly type: "string";
                readonly enum: readonly ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "ethereum", "polygon", "avalanche", "optimism", "arbitrum", "base", "fantom", "bsc", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"];
                readonly description: "Blockchain on which NFT will be minted";
                readonly default: "sepolia";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly transaction_details: {
                    readonly type: "object";
                    readonly properties: {
                        readonly transactionHash: {
                            readonly type: "string";
                            readonly examples: readonly ["0x37f21bbb309ae9d5d9104af6c9f9a4f0d4beaee7563f49436ffda22800fa2c7c"];
                        };
                        readonly blockExplorer: {
                            readonly type: "string";
                            readonly examples: readonly ["https://goerli.etherscan.io/tx/0x37f21bbb309ae9d5d9104af6c9f9a4f0d4beaee7563f49436ffda22800fa2c7c"];
                        };
                        readonly transactionID: {
                            readonly type: "string";
                            readonly examples: readonly ["6327921e418fb0564c4d063b"];
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly examples: readonly ["Sent"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                    readonly examples: readonly [400];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Cannot read property filePath of null"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostNftMintMintfrommetadata: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["data", "contractAddress", "chain"];
        readonly properties: {
            readonly imageUrl: {
                readonly type: "string";
                readonly description: "imageUrl of image to be attached to your NFT - optional. If left empty the default Verbwire image will be used.";
            };
            readonly name: {
                readonly type: "string";
                readonly description: "Name of your NFT - optional";
                readonly examples: readonly ["SampleNFTName"];
            };
            readonly description: {
                readonly type: "string";
                readonly description: "Description of your NFT - optional";
                readonly examples: readonly ["Sample Description"];
            };
            readonly contractAddress: {
                readonly type: "string";
                readonly description: "Address of NFT contract";
            };
            readonly recipientAddress: {
                readonly type: "string";
                readonly description: "Wallet addres that NFT will be minted to - optional. If empty, the NFT will be in the default Verbwire wallet.";
            };
            readonly data: {
                readonly type: "string";
                readonly description: "Data to be minted in your NFT. If you want attributes viewable on Opensea please see opensea standards [here](https://docs.opensea.io/docs/metadata-standards).";
            };
            readonly quantity: {
                readonly type: "string";
                readonly description: "Quantity of tokens to be minted - optional";
                readonly default: 1;
            };
            readonly tokenId: {
                readonly type: "string";
                readonly description: "Token ID of NFTs minted. Applicable to ERC1155 tokens only.";
            };
            readonly chain: {
                readonly type: "string";
                readonly enum: readonly ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "ethereum", "polygon", "avalanche", "optimism", "arbitrum", "base", "fantom", "bsc", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"];
                readonly description: "Blockchain on which NFT will be minted";
                readonly default: "sepolia";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly transaction_details: {
                    readonly type: "object";
                    readonly properties: {
                        readonly transactionHash: {
                            readonly type: "string";
                            readonly examples: readonly ["0x37f21bbb309ae9d5d9104af6c9f9a4f0d4beaee7563f49436ffda22800fa2c7c"];
                        };
                        readonly blockExplorer: {
                            readonly type: "string";
                            readonly examples: readonly ["https://goerli.etherscan.io/tx/0x37f21bbb309ae9d5d9104af6c9f9a4f0d4beaee7563f49436ffda22800fa2c7c"];
                        };
                        readonly transactionID: {
                            readonly type: "string";
                            readonly examples: readonly ["6327921e418fb0564c4d063b"];
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly examples: readonly ["Sent"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                    readonly examples: readonly [400];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Cannot read property filePath of null"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostNftMintMintfrommetadataurl: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["metadataUrl", "chain", "contractAddress"];
        readonly properties: {
            readonly metadataUrl: {
                readonly type: "string";
                readonly description: "Url of your metadata";
                readonly examples: readonly ["https://ipfs.io/ipfs/bafkreigjkcafrutdcbicyr3new6aoowgbscf6wgqyty45ckd3xur7ymldm"];
            };
            readonly contractAddress: {
                readonly type: "string";
                readonly description: "Address of NFT contract";
            };
            readonly recipientAddress: {
                readonly type: "string";
                readonly description: "Wallet addres that NFT will be minted to - optional. If empty, the NFT will be in the default Verbwire wallet.";
                readonly examples: readonly ["0x33145a6258e89b6E0796d237A3048A3852cCaeQ7"];
            };
            readonly quantity: {
                readonly type: "string";
                readonly description: "Quantity of tokens to be minted - optional";
                readonly default: 1;
            };
            readonly tokenId: {
                readonly type: "string";
                readonly description: "Token ID of NFTs minted. Applicable to ERC1155 tokens only.";
            };
            readonly chain: {
                readonly type: "string";
                readonly enum: readonly ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "ethereum", "polygon", "avalanche", "optimism", "arbitrum", "base", "fantom", "bsc", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"];
                readonly description: "Blockchain on which NFT will be minted";
                readonly default: "sepolia";
            };
            readonly allowPlatformToOperateToken: {
                readonly type: "string";
                readonly enum: readonly [true, false];
                readonly default: true;
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly transaction_details: {
                    readonly type: "object";
                    readonly properties: {
                        readonly transactionHash: {
                            readonly type: "string";
                            readonly examples: readonly ["0x37f21bbb309ae9d5d9104af6c9f9a4f0d4beaee7563f49436ffda22800fa2c7c"];
                        };
                        readonly blockExplorer: {
                            readonly type: "string";
                            readonly examples: readonly ["https://goerli.etherscan.io/tx/0x37f21bbb309ae9d5d9104af6c9f9a4f0d4beaee7563f49436ffda22800fa2c7c"];
                        };
                        readonly transactionID: {
                            readonly type: "string";
                            readonly examples: readonly ["6327921e418fb0564c4d063b"];
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly examples: readonly ["Sent"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                    readonly examples: readonly [400];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Cannot read property filePath of null"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostNftMintQuickmintfromfile: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["filePath", "name", "description", "chain"];
        readonly properties: {
            readonly filePath: {
                readonly type: "string";
                readonly format: "binary";
                readonly description: "Input file for your NFT mint. It could be an image file, or any file.";
            };
            readonly name: {
                readonly type: "string";
                readonly description: "Name of your NFT";
                readonly examples: readonly ["SampleNFTName"];
            };
            readonly description: {
                readonly type: "string";
                readonly description: "Description of your NFT";
                readonly examples: readonly ["Sample Description"];
            };
            readonly recipientAddress: {
                readonly type: "string";
                readonly description: "Wallet addres that NFT will be minted to - optional. If empty, the NFT will be in the default Verbwire wallet.";
            };
            readonly allowPlatformToOperateToken: {
                readonly type: "string";
                readonly enum: readonly [true, false];
                readonly default: true;
            };
            readonly data: {
                readonly type: "string";
                readonly description: "Data to be minted in your NFT. If you want attributes viewable on Opensea please see opensea standards [here](https://docs.opensea.io/docs/metadata-standards).";
            };
            readonly chain: {
                readonly type: "string";
                readonly enum: readonly ["ethereum", "sepolia", "polygon", "mumbai", "avalanche", "fuji", "optimism", "optimism-sepolia", "arbitrum", "arbitrum-sepolia", "base", "base-sepolia", "fantom", "fantom-testnet", "bsc", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"];
                readonly description: "Blockchain on which NFT will be minted";
                readonly default: "sepolia";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly transaction_details: {
                    readonly type: "object";
                    readonly properties: {
                        readonly transactionHash: {
                            readonly type: "string";
                            readonly examples: readonly ["0x37f21bbb309ae9d5d9104af6c9f9a4f0d4beaee7563f49436ffda22800fa2c7c"];
                        };
                        readonly blockExplorer: {
                            readonly type: "string";
                            readonly examples: readonly ["https://goerli.etherscan.io/tx/0x37f21bbb309ae9d5d9104af6c9f9a4f0d4beaee7563f49436ffda22800fa2c7c"];
                        };
                        readonly transactionID: {
                            readonly type: "string";
                            readonly examples: readonly ["6327921e418fb0564c4d063b"];
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly examples: readonly ["Sent"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                    readonly examples: readonly [400];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Cannot read property filePath of null"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostNftMintQuickmintfrommetadata: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["data"];
        readonly properties: {
            readonly imageUrl: {
                readonly type: "string";
                readonly description: "imageUrl of image to be attached to your NFT - optional. If left empty the default Verbwire image will be used.";
            };
            readonly name: {
                readonly type: "string";
                readonly description: "Name of your NFT - optional";
                readonly examples: readonly ["SampleNFTName"];
            };
            readonly description: {
                readonly type: "string";
                readonly description: "Description of your NFT - optional";
                readonly examples: readonly ["Sample Description"];
            };
            readonly recipientAddress: {
                readonly type: "string";
                readonly description: "Wallet address of NFT owner - optional. If left empty the default Verbwire wallet will be used.";
            };
            readonly data: {
                readonly type: "string";
                readonly description: "Data to be minted in your NFT. If you want attributes viewable on Opensea please see opensea standards [here](https://docs.opensea.io/docs/metadata-standards).";
            };
            readonly chain: {
                readonly type: "string";
                readonly enum: readonly ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "ethereum", "polygon", "avalanche", "optimism", "arbitrum", "base", "fantom", "bsc", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"];
                readonly description: "Blockchain on which NFT will be minted";
                readonly default: "sepolia";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly transaction_details: {
                    readonly type: "object";
                    readonly properties: {
                        readonly transactionHash: {
                            readonly type: "string";
                            readonly examples: readonly ["0x37f21bbb309ae9d5d9104af6c9f9a4f0d4beaee7563f49436ffda22800fa2c7c"];
                        };
                        readonly blockExplorer: {
                            readonly type: "string";
                            readonly examples: readonly ["https://goerli.etherscan.io/tx/0x37f21bbb309ae9d5d9104af6c9f9a4f0d4beaee7563f49436ffda22800fa2c7c"];
                        };
                        readonly transactionID: {
                            readonly type: "string";
                            readonly examples: readonly ["6327921e418fb0564c4d063b"];
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly examples: readonly ["Sent"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                    readonly examples: readonly [400];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Cannot read property filePath of null"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostNftMintQuickmintfrommetadataurl: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["metadataUrl", "chain"];
        readonly properties: {
            readonly metadataUrl: {
                readonly type: "string";
                readonly description: "Url of your metadata.";
                readonly examples: readonly ["https://ipfs.io/ipfs/bafkreigjkcafrutdcbicyr3new6aoowgbscf6wgqyty45ckd3xur7ymldm"];
            };
            readonly recipientAddress: {
                readonly type: "string";
                readonly description: "Wallet addres that NFT will be minted to - optional. If empty, the NFT will be in the default Verbwire wallet.";
                readonly examples: readonly ["0x33145a6258e89b6E0796d237A3048A3852cCaeQ7"];
            };
            readonly allowPlatformToOperateToken: {
                readonly type: "string";
                readonly enum: readonly [true, false];
                readonly default: true;
            };
            readonly chain: {
                readonly type: "string";
                readonly enum: readonly ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "ethereum", "polygon", "avalanche", "optimism", "arbitrum", "base", "fantom", "bsc", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"];
                readonly description: "Blockchain on which NFT will be minted";
                readonly default: "sepolia";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly transaction_details: {
                    readonly type: "object";
                    readonly properties: {
                        readonly transactionHash: {
                            readonly type: "string";
                            readonly examples: readonly ["0x37f21bbb309ae9d5d9104af6c9f9a4f0d4beaee7563f49436ffda22800fa2c7c"];
                        };
                        readonly blockExplorer: {
                            readonly type: "string";
                            readonly examples: readonly ["https://goerli.etherscan.io/tx/0x37f21bbb309ae9d5d9104af6c9f9a4f0d4beaee7563f49436ffda22800fa2c7c"];
                        };
                        readonly transactionID: {
                            readonly type: "string";
                            readonly examples: readonly ["6327921e418fb0564c4d063b"];
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly examples: readonly ["Sent"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                    readonly examples: readonly [400];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Cannot read property filePath of null"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostNftSendCrosschainsend: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["sourceChain", "destChain", "tokenId", "sourceWalletAddress", "recipientWalletAddress", "sourceContractAddress"];
        readonly properties: {
            readonly sourceChain: {
                readonly type: "string";
                readonly enum: readonly ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "ethereum", "polygon", "avalanche", "optimism", "arbitrum", "base", "fantom", "bsc", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"];
                readonly description: "Source (originating) blockchain of your NFT";
            };
            readonly destChain: {
                readonly type: "string";
                readonly enum: readonly ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "ethereum", "polygon", "avalanche", "optimism", "arbitrum", "base", "fantom", "bsc", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"];
                readonly description: "Destination blockchain of your NFT";
            };
            readonly tokenId: {
                readonly type: "string";
                readonly description: "NFT token ID";
                readonly examples: readonly [18];
            };
            readonly sourceWalletAddress: {
                readonly type: "string";
                readonly description: "Source (originating) wallet address";
                readonly examples: readonly ["0x8ij87u78okkkjc7shc0987s6cdc"];
            };
            readonly recipientWalletAddress: {
                readonly type: "string";
                readonly description: "Destination wallet address. Note this could be the same as your source contract address.";
            };
            readonly sourceContractAddress: {
                readonly type: "string";
                readonly description: "Source contract address";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly transaction_details: {
                    readonly type: "object";
                    readonly properties: {
                        readonly transactionHash: {
                            readonly type: "string";
                            readonly examples: readonly ["0x37f21bbb309ae9d5d9104af6c9f9a4f0d4beaee7563f49436ffda22800fa2c7c"];
                        };
                        readonly blockExplorer: {
                            readonly type: "string";
                            readonly examples: readonly ["https://goerli.etherscan.io/tx/0x37f21bbb309ae9d5d9104af6c9f9a4f0d4beaee7563f49436ffda22800fa2c7c"];
                        };
                        readonly transactionID: {
                            readonly type: "string";
                            readonly examples: readonly ["6327921e418fb0564c4d063b"];
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly examples: readonly ["Sent"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                    readonly examples: readonly [400];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Cannot read property filePath of null"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostNftSendEnablecrosschainsend: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["sourceChain", "destChain", "sourceContractAddress", "destContractAddress"];
        readonly properties: {
            readonly sourceChain: {
                readonly type: "string";
                readonly enum: readonly ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "ethereum", "polygon", "avalanche", "optimism", "arbitrum", "base", "fantom", "bsc", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"];
                readonly description: "Source chain from which your NFT will be moved";
            };
            readonly destChain: {
                readonly type: "string";
                readonly enum: readonly ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "ethereum", "polygon", "avalanche", "optimism", "arbitrum", "base", "fantom", "bsc", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"];
                readonly description: "The destination chain, where your NFT will be sent to";
            };
            readonly sourceContractAddress: {
                readonly type: "string";
                readonly description: "Source contract address";
                readonly examples: readonly ["0x8ij87u78okkkjc7shc0987s6cdc"];
            };
            readonly destContractAddress: {
                readonly type: "string";
                readonly description: "Destination contract address";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly transaction_details: {
                    readonly type: "object";
                    readonly properties: {
                        readonly transactionHash: {
                            readonly type: "string";
                            readonly examples: readonly ["0x37f21bbb309ae9d5d9104af6c9f9a4f0d4beaee7563f49436ffda22800fa2c7c"];
                        };
                        readonly blockExplorer: {
                            readonly type: "string";
                            readonly examples: readonly ["https://goerli.etherscan.io/tx/0x37f21bbb309ae9d5d9104af6c9f9a4f0d4beaee7563f49436ffda22800fa2c7c"];
                        };
                        readonly transactionID: {
                            readonly type: "string";
                            readonly examples: readonly ["6327921e418fb0564c4d063b"];
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly examples: readonly ["Sent"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                    readonly examples: readonly [400];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Cannot read property filePath of null"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostNftSendQuicksend: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["sourceChain", "destChain", "tokenId", "sourceWalletAddress", "recipientWalletAddress"];
        readonly properties: {
            readonly sourceChain: {
                readonly type: "string";
                readonly enum: readonly ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "ethereum", "polygon", "avalanche", "optimism", "arbitrum", "base", "fantom", "bsc", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"];
                readonly description: "Blockchain on which your NFT currently is";
            };
            readonly destChain: {
                readonly type: "string";
                readonly enum: readonly ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "ethereum", "polygon", "avalanche", "optimism", "arbitrum", "base", "fantom", "bsc", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"];
                readonly description: "Destination chain. This is the blockchain where you will be sending your NFT to.";
            };
            readonly tokenId: {
                readonly type: "string";
                readonly description: "NFT token ID";
                readonly examples: readonly [18];
            };
            readonly sourceWalletAddress: {
                readonly type: "string";
                readonly description: "Wallet address where you NFT currently is";
                readonly examples: readonly ["0x8ij87u78okkkjc7shc0987s6cdc"];
            };
            readonly recipientWalletAddress: {
                readonly type: "string";
                readonly description: "Wallet address to which you will be sending your NFT";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly transaction_details: {
                    readonly type: "object";
                    readonly properties: {
                        readonly transactionHash: {
                            readonly type: "string";
                            readonly examples: readonly ["0x37f21bbb309ae9d5d9104af6c9f9a4f0d4beaee7563f49436ffda22800fa2c7c"];
                        };
                        readonly blockExplorer: {
                            readonly type: "string";
                            readonly examples: readonly ["https://goerli.etherscan.io/tx/0x37f21bbb309ae9d5d9104af6c9f9a4f0d4beaee7563f49436ffda22800fa2c7c"];
                        };
                        readonly transactionID: {
                            readonly type: "string";
                            readonly examples: readonly ["6327921e418fb0564c4d063b"];
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly examples: readonly ["Sent"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                    readonly examples: readonly [400];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Cannot read property filePath of null"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostNftStoreFile: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["filePath"];
        readonly properties: {
            readonly filePath: {
                readonly type: "string";
                readonly format: "binary";
                readonly description: "Local file to be uploaded";
                readonly examples: readonly ["Your file path"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "201": {
            readonly type: "object";
            readonly properties: {
                readonly ipfs_url: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                    readonly examples: readonly [400];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Cannot read property filePath of null"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostNftStoreFilefromurl: {
    readonly formData: {
        readonly type: "object";
        readonly required: readonly ["fileUrl"];
        readonly properties: {
            readonly fileUrl: {
                readonly type: "string";
                readonly description: "Url of file to be uploaded";
                readonly examples: readonly ["https://ipfs.io/ipfs/bafkreigjkcafrutdcbicyr3new6aoowgbscf6wgqyty45ckd3xur7ymldm"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "201": {
            readonly type: "object";
            readonly properties: {
                readonly ipfs_url: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                    readonly examples: readonly [400];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Cannot read property fileUrl of null"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostNftStoreMetadatafromimage: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["filePath", "name", "description"];
        readonly properties: {
            readonly filePath: {
                readonly type: "string";
                readonly format: "binary";
                readonly description: "Your local file to be uploaded";
            };
            readonly name: {
                readonly type: "string";
                readonly description: "Name of your metadata";
                readonly examples: readonly ["TestImageName123"];
            };
            readonly description: {
                readonly type: "string";
                readonly description: "Description of your metadata";
                readonly examples: readonly ["Test Description"];
            };
            readonly data: {
                readonly type: "string";
                readonly description: "Data to be saved. If you want attributes viewable on Opensea please see opensea standards [here](https://docs.opensea.io/docs/metadata-standards).";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "201": {
            readonly type: "object";
            readonly properties: {
                readonly name: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly metadata_url: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                    readonly examples: readonly [400];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Cannot read property filePath of null"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostNftStoreMetadatafromimageurl: {
    readonly formData: {
        readonly type: "object";
        readonly required: readonly ["fileUrl", "name", "description"];
        readonly properties: {
            readonly fileUrl: {
                readonly type: "string";
                readonly description: "Url of data to be uploaded";
                readonly examples: readonly ["https://ipfs.io/ipfs/bafkreigjkcafrutdcbicyr3new6aoowgbscf6wgqyty45ckd3xur7ymldm"];
            };
            readonly name: {
                readonly type: "string";
                readonly description: "Name of your metadata";
                readonly examples: readonly ["TestImageName123"];
            };
            readonly description: {
                readonly type: "string";
                readonly description: "Description of your metadata";
                readonly examples: readonly ["Test Description"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "201": {
            readonly type: "object";
            readonly properties: {
                readonly name: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly metadata_url: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                    readonly examples: readonly [400];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Cannot read property filePath of null"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostNftStoreUploaddirectory: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["filePath"];
        readonly properties: {
            readonly filePath: {
                readonly type: "string";
                readonly format: "binary";
                readonly description: "The directory to be uploaded";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "201": {
            readonly type: "object";
            readonly properties: {
                readonly name: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly metadata_url: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                    readonly examples: readonly [400];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Cannot read property filePath of null"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostNftUpdateAddpayee: {
    readonly formData: {
        readonly type: "object";
        readonly required: readonly ["chain", "contractAddress", "payeeAddress", "payeeShares"];
        readonly properties: {
            readonly contractAddress: {
                readonly type: "string";
            };
            readonly payeeAddress: {
                readonly type: "string";
                readonly description: "The wallet address that will receive funds";
                readonly examples: readonly ["0x33145a8499e89b6E0839d237A3056A3735cCaeD5"];
            };
            readonly payeeShares: {
                readonly type: "string";
                readonly description: "Payout ratio. If you have just one payee this number doesn't matter. Example, for two payees with payee shares of 80 and 20 it means they split revenues with a 80%/20% ratio.";
                readonly examples: readonly ["100"];
            };
            readonly chain: {
                readonly type: "string";
                readonly enum: readonly ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "ethereum", "polygon", "avalanche", "optimism", "arbitrum", "base", "fantom", "bsc", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"];
                readonly default: "sepolia";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly Transaction: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly blockNumber: {
                                readonly type: "string";
                            };
                            readonly timeStamp: {
                                readonly type: "string";
                            };
                            readonly hash: {
                                readonly type: "string";
                            };
                            readonly nonce: {
                                readonly type: "string";
                            };
                            readonly blockHash: {
                                readonly type: "string";
                            };
                            readonly from: {
                                readonly type: "string";
                            };
                            readonly contractAddress: {
                                readonly type: "string";
                            };
                            readonly to: {
                                readonly type: "string";
                            };
                            readonly tokenID: {
                                readonly type: "string";
                            };
                            readonly tokenName: {
                                readonly type: "string";
                            };
                            readonly tokenSymbol: {
                                readonly type: "string";
                            };
                            readonly tokenDecimal: {
                                readonly type: "string";
                            };
                            readonly transactionIndex: {
                                readonly type: "string";
                            };
                            readonly gas: {
                                readonly type: "string";
                            };
                            readonly gasPrice: {
                                readonly type: "string";
                            };
                            readonly gasUsed: {
                                readonly type: "string";
                            };
                            readonly cumulativeGasUsed: {
                                readonly type: "string";
                            };
                            readonly input: {
                                readonly type: "string";
                            };
                            readonly confirmations: {
                                readonly type: "string";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostNftUpdateAddtoallowlist: {
    readonly formData: {
        readonly type: "object";
        readonly required: readonly ["chain", "contractAddress", "addresses", "mintSlots"];
        readonly properties: {
            readonly contractAddress: {
                readonly type: "string";
            };
            readonly addresses: {
                readonly type: "string";
                readonly examples: readonly ["0x33145a8499e89b6E0839d237A3056A3735cCaeD5,0x54D404D5870Bdf67B2CFcE5f800D253E9A8B686e,0x3B834EDe1a8c1f130c056a92eb5f1483cF4e8517,0x36D549D8450Bdf67B2CFcE5f800D296E9A8B639f"];
            };
            readonly mintSlots: {
                readonly type: "string";
                readonly examples: readonly ["11,13,7,88"];
            };
            readonly chain: {
                readonly type: "string";
                readonly enum: readonly ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "ethereum", "polygon", "avalanche", "optimism", "arbitrum", "base", "fantom", "bsc", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"];
                readonly default: "sepolia";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly Transaction: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly blockNumber: {
                                readonly type: "string";
                            };
                            readonly timeStamp: {
                                readonly type: "string";
                            };
                            readonly hash: {
                                readonly type: "string";
                            };
                            readonly nonce: {
                                readonly type: "string";
                            };
                            readonly blockHash: {
                                readonly type: "string";
                            };
                            readonly from: {
                                readonly type: "string";
                            };
                            readonly contractAddress: {
                                readonly type: "string";
                            };
                            readonly to: {
                                readonly type: "string";
                            };
                            readonly tokenID: {
                                readonly type: "string";
                            };
                            readonly tokenName: {
                                readonly type: "string";
                            };
                            readonly tokenSymbol: {
                                readonly type: "string";
                            };
                            readonly tokenDecimal: {
                                readonly type: "string";
                            };
                            readonly transactionIndex: {
                                readonly type: "string";
                            };
                            readonly gas: {
                                readonly type: "string";
                            };
                            readonly gasPrice: {
                                readonly type: "string";
                            };
                            readonly gasUsed: {
                                readonly type: "string";
                            };
                            readonly cumulativeGasUsed: {
                                readonly type: "string";
                            };
                            readonly input: {
                                readonly type: "string";
                            };
                            readonly confirmations: {
                                readonly type: "string";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostNftUpdateBurn: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["contractAddress", "tokenId", "chain"];
        readonly properties: {
            readonly contractAddress: {
                readonly type: "string";
                readonly description: "Address of NFT contract";
            };
            readonly tokenId: {
                readonly type: "string";
                readonly description: "token ID of NFT";
            };
            readonly fromAddress: {
                readonly type: "string";
                readonly description: "For ERC1155 Only. Address from which tokens will be burned";
            };
            readonly quantity: {
                readonly type: "string";
                readonly description: "For ERC1155 Only. Quantity to be burned";
            };
            readonly contractType: {
                readonly type: "string";
                readonly enum: readonly ["nft721", "nft1155", "nft721A", "onft721"];
                readonly description: "Type of contract - optional";
            };
            readonly chain: {
                readonly type: "string";
                readonly enum: readonly ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "ethereum", "polygon", "avalanche", "optimism", "arbitrum", "base", "fantom", "bsc", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"];
                readonly description: "Blockchain on which contract was deployed";
                readonly default: "sepolia";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly transaction_details: {
                    readonly type: "object";
                    readonly properties: {
                        readonly transactionHash: {
                            readonly type: "string";
                            readonly examples: readonly ["0x37f21bbb309ae9d5d9104af6c9f9a4f0d4beaee7563f49436ffda22800fa2c7c"];
                        };
                        readonly blockExplorer: {
                            readonly type: "string";
                            readonly examples: readonly ["https://goerli.etherscan.io/tx/0x37f21bbb309ae9d5d9104af6c9f9a4f0d4beaee7563f49436ffda22800fa2c7c"];
                        };
                        readonly transactionID: {
                            readonly type: "string";
                            readonly examples: readonly ["6327921e418fb0564c4d063b"];
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly examples: readonly ["Sent"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                    readonly examples: readonly [400];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Cannot read property filePath of null"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostNftUpdateFreezemetadata: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["contractAddress", "chain"];
        readonly properties: {
            readonly contractAddress: {
                readonly type: "string";
                readonly description: "Address of NFT contract";
            };
            readonly chain: {
                readonly type: "string";
                readonly enum: readonly ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "ethereum", "polygon", "avalanche", "optimism", "arbitrum", "base", "fantom", "bsc", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"];
                readonly description: "Blockchain on which contract was deployed";
                readonly default: "sepolia";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly transaction_details: {
                    readonly type: "object";
                    readonly properties: {
                        readonly transactionHash: {
                            readonly type: "string";
                            readonly examples: readonly ["0x37f21bbb309ae9d5d9104af6c9f9a4f0d4beaee7563f49436ffda22800fa2c7c"];
                        };
                        readonly blockExplorer: {
                            readonly type: "string";
                            readonly examples: readonly ["https://goerli.etherscan.io/tx/0x37f21bbb309ae9d5d9104af6c9f9a4f0d4beaee7563f49436ffda22800fa2c7c"];
                        };
                        readonly transactionID: {
                            readonly type: "string";
                            readonly examples: readonly ["6327921e418fb0564c4d063b"];
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly examples: readonly ["Sent"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                    readonly examples: readonly [400];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Cannot read property filePath of null"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostNftUpdateInitcollectioncontract: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["contractAddress", "maxMintPerAddress", "totalReserveQty", "totalAllowlistQty", "maxSupply", "maxMintableBatchSize", "royaltiesInBps", "royaltiesAddress", "ownerAddress", "baseTokenURI", "allowListMintStartTime", "publicSaleStartTime", "allowlistMintPriceInWei", "publicPriceInWei", "metadataFrozen", "chain"];
        readonly properties: {
            readonly contractAddress: {
                readonly type: "string";
                readonly description: "Address of NFT contract";
                readonly examples: readonly [1.0480895442482707e+48];
            };
            readonly maxMintPerAddress: {
                readonly type: "string";
                readonly description: "Maximum number of NFTs that can be minted per wallet address";
                readonly examples: readonly [5];
            };
            readonly totalReserveQty: {
                readonly type: "string";
                readonly description: "Total number of NFTs to be reserved";
                readonly examples: readonly [500];
            };
            readonly totalAllowlistQty: {
                readonly type: "string";
                readonly description: "Total number of NFTs planned for your allowlist";
                readonly examples: readonly [100];
            };
            readonly maxSupply: {
                readonly type: "string";
                readonly description: "Maximum number of NFTs to be minted on this contract";
                readonly examples: readonly [1000];
            };
            readonly maxMintableBatchSize: {
                readonly type: "string";
                readonly description: "Maximum number of NFTs that can be minted in one transaction";
                readonly examples: readonly [5];
            };
            readonly royaltiesInBps: {
                readonly type: "string";
                readonly description: "Royalties, in basis points. Note, 100 basis points is 1 percent";
                readonly examples: readonly [100];
            };
            readonly royaltiesAddress: {
                readonly type: "string";
                readonly description: "Wallet address for your sales royalties";
                readonly examples: readonly [1.048089544248271e+48];
            };
            readonly ownerAddress: {
                readonly type: "string";
                readonly description: "Wallet address of contract owner";
                readonly examples: readonly [1.048089544248271e+48];
            };
            readonly tokenURIPrereveal: {
                readonly type: "string";
                readonly description: "URI of your pre-reveal image, if applicable";
            };
            readonly baseTokenURI: {
                readonly type: "string";
                readonly description: "Base token URI. This gets concatenated with your tokenID to return a tokenURI";
            };
            readonly allowListMintStartTime: {
                readonly type: "string";
                readonly description: "StartTime of allowlist Minting. Time should be in epoch format. See [here](https://www.epochconverter.com/) epoch time conversion.";
                readonly examples: readonly [1658167690];
            };
            readonly publicSaleStartTime: {
                readonly type: "string";
                readonly description: "StartTime of public Minting. Time should be in epoch format. See [here](https://www.epochconverter.com/) epoch time conversion.";
                readonly examples: readonly [1658167690];
            };
            readonly allowlistMintPriceInWei: {
                readonly type: "string";
                readonly description: "Mint price for your allow list members. Input price in Wei.";
            };
            readonly publicPriceInWei: {
                readonly type: "string";
                readonly description: "Mint price for public minting, i.e not on allow-list and not reserved. Input price in Wei.";
                readonly examples: readonly [1];
            };
            readonly metadataFrozen: {
                readonly type: "string";
                readonly enum: readonly [false, true];
                readonly description: "Once set to true you can no longer change the NFT metadata";
                readonly default: false;
            };
            readonly chain: {
                readonly type: "string";
                readonly enum: readonly ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "ethereum", "polygon", "avalanche", "optimism", "arbitrum", "base", "fantom", "bsc", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"];
                readonly description: "Blockchain on which NFT contract will be deployed";
                readonly default: "sepolia";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly transaction_details: {
                    readonly type: "object";
                    readonly properties: {
                        readonly transactionHash: {
                            readonly type: "string";
                            readonly examples: readonly ["0x37f21bbb309ae9d5d9104af6c9f9a4f0d4beaee7563f49436ffda22800fa2c7c"];
                        };
                        readonly blockExplorer: {
                            readonly type: "string";
                            readonly examples: readonly ["https://goerli.etherscan.io/tx/0x37f21bbb309ae9d5d9104af6c9f9a4f0d4beaee7563f49436ffda22800fa2c7c"];
                        };
                        readonly transactionID: {
                            readonly type: "string";
                            readonly examples: readonly ["6327921e418fb0564c4d063b"];
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly examples: readonly ["Sent"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                    readonly examples: readonly [400];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Cannot read property filePath of null"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostNftUpdateSetallowlistmintprice: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["contractAddress", "allowListMintPriceInWei", "chain"];
        readonly properties: {
            readonly contractAddress: {
                readonly type: "string";
                readonly description: "Address of NFT contract";
            };
            readonly allowListMintPriceInWei: {
                readonly type: "string";
                readonly description: "Allowlist mint price of NFT";
            };
            readonly chain: {
                readonly type: "string";
                readonly enum: readonly ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "ethereum", "polygon", "avalanche", "optimism", "arbitrum", "base", "fantom", "bsc", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"];
                readonly description: "Blockchain on which contract was deployed";
                readonly default: "sepolia";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly transaction_details: {
                    readonly type: "object";
                    readonly properties: {
                        readonly transactionHash: {
                            readonly type: "string";
                            readonly examples: readonly ["0x37f21bbb309ae9d5d9104af6c9f9a4f0d4beaee7563f49436ffda22800fa2c7c"];
                        };
                        readonly blockExplorer: {
                            readonly type: "string";
                            readonly examples: readonly ["https://goerli.etherscan.io/tx/0x37f21bbb309ae9d5d9104af6c9f9a4f0d4beaee7563f49436ffda22800fa2c7c"];
                        };
                        readonly transactionID: {
                            readonly type: "string";
                            readonly examples: readonly ["6327921e418fb0564c4d063b"];
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly examples: readonly ["Sent"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                    readonly examples: readonly [400];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Cannot read property filePath of null"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostNftUpdateSetmaxmintquantityperbatch: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["contractAddress", "chain", "quantity"];
        readonly properties: {
            readonly contractAddress: {
                readonly type: "string";
                readonly description: "Address of NFT contract";
            };
            readonly chain: {
                readonly type: "string";
                readonly enum: readonly ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "ethereum", "polygon", "avalanche", "optimism", "arbitrum", "base", "fantom", "bsc", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"];
                readonly description: "Blockchain on which contract was deployed";
                readonly default: "sepolia";
            };
            readonly quantity: {
                readonly type: "string";
                readonly description: "Max size that can be minted in one batch";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly transaction_details: {
                    readonly type: "object";
                    readonly properties: {
                        readonly transactionHash: {
                            readonly type: "string";
                            readonly examples: readonly ["0x37f21bbb309ae9d5d9104af6c9f9a4f0d4beaee7563f49436ffda22800fa2c7c"];
                        };
                        readonly blockExplorer: {
                            readonly type: "string";
                            readonly examples: readonly ["https://goerli.etherscan.io/tx/0x37f21bbb309ae9d5d9104af6c9f9a4f0d4beaee7563f49436ffda22800fa2c7c"];
                        };
                        readonly transactionID: {
                            readonly type: "string";
                            readonly examples: readonly ["6327921e418fb0564c4d063b"];
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly examples: readonly ["Sent"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                    readonly examples: readonly [400];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Cannot read property filePath of null"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostNftUpdateSetmintprice: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["contractAddress", "mintPriceInWei", "chain"];
        readonly properties: {
            readonly contractAddress: {
                readonly type: "string";
                readonly description: "Address of NFT contract";
            };
            readonly mintPriceInWei: {
                readonly type: "string";
                readonly description: "Mint price of NFT";
            };
            readonly chain: {
                readonly type: "string";
                readonly enum: readonly ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "ethereum", "polygon", "avalanche", "optimism", "arbitrum", "base", "fantom", "bsc", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"];
                readonly description: "Blockchain on which contract was deployed";
                readonly default: "sepolia";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly transaction_details: {
                    readonly type: "object";
                    readonly properties: {
                        readonly transactionHash: {
                            readonly type: "string";
                            readonly examples: readonly ["0x37f21bbb309ae9d5d9104af6c9f9a4f0d4beaee7563f49436ffda22800fa2c7c"];
                        };
                        readonly blockExplorer: {
                            readonly type: "string";
                            readonly examples: readonly ["https://goerli.etherscan.io/tx/0x37f21bbb309ae9d5d9104af6c9f9a4f0d4beaee7563f49436ffda22800fa2c7c"];
                        };
                        readonly transactionID: {
                            readonly type: "string";
                            readonly examples: readonly ["6327921e418fb0564c4d063b"];
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly examples: readonly ["Sent"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                    readonly examples: readonly [400];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Cannot read property filePath of null"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostNftUpdateSetpaymentprice: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["contractAddress", "newPaymentPriceInWei", "chain"];
        readonly properties: {
            readonly contractAddress: {
                readonly type: "string";
                readonly description: "Address of NFT contract";
            };
            readonly newPaymentPriceInWei: {
                readonly type: "string";
                readonly description: "Payment price. Minimum price payable to your contract.";
            };
            readonly chain: {
                readonly type: "string";
                readonly enum: readonly ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "ethereum", "polygon", "avalanche", "optimism", "arbitrum", "base", "fantom", "bsc", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"];
                readonly description: "Blockchain on which contract was deployed";
                readonly default: "sepolia";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly transaction_details: {
                    readonly type: "object";
                    readonly properties: {
                        readonly transactionHash: {
                            readonly type: "string";
                            readonly examples: readonly ["0x37f21bbb309ae9d5d9104af6c9f9a4f0d4beaee7563f49436ffda22800fa2c7c"];
                        };
                        readonly blockExplorer: {
                            readonly type: "string";
                            readonly examples: readonly ["https://goerli.etherscan.io/tx/0x37f21bbb309ae9d5d9104af6c9f9a4f0d4beaee7563f49436ffda22800fa2c7c"];
                        };
                        readonly transactionID: {
                            readonly type: "string";
                            readonly examples: readonly ["6327921e418fb0564c4d063b"];
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly examples: readonly ["Sent"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                    readonly examples: readonly [400];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Cannot read property filePath of null"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostNftUpdateTogglepausedstate: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["contractAddress", "chain"];
        readonly properties: {
            readonly contractAddress: {
                readonly type: "string";
                readonly description: "Address of NFT contract";
            };
            readonly chain: {
                readonly type: "string";
                readonly enum: readonly ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "ethereum", "polygon", "avalanche", "optimism", "arbitrum", "base", "fantom", "bsc", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"];
                readonly description: "Blockchain on which contract was deployed";
                readonly default: "sepolia";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly transaction_details: {
                    readonly type: "object";
                    readonly properties: {
                        readonly transactionHash: {
                            readonly type: "string";
                            readonly examples: readonly ["0x37f21bbb309ae9d5d9104af6c9f9a4f0d4beaee7563f49436ffda22800fa2c7c"];
                        };
                        readonly blockExplorer: {
                            readonly type: "string";
                            readonly examples: readonly ["https://goerli.etherscan.io/tx/0x37f21bbb309ae9d5d9104af6c9f9a4f0d4beaee7563f49436ffda22800fa2c7c"];
                        };
                        readonly transactionID: {
                            readonly type: "string";
                            readonly examples: readonly ["6327921e418fb0564c4d063b"];
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly examples: readonly ["Sent"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                    readonly examples: readonly [400];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Cannot read property filePath of null"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostNftUpdateTogglepublicminting: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["contractAddress", "chain"];
        readonly properties: {
            readonly contractAddress: {
                readonly type: "string";
                readonly description: "Address of NFT contract";
            };
            readonly chain: {
                readonly type: "string";
                readonly enum: readonly ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "ethereum", "polygon", "avalanche", "optimism", "arbitrum", "base", "fantom", "bsc", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"];
                readonly description: "Blockchain on which contract was deployed";
                readonly default: "sepolia";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly transaction_details: {
                    readonly type: "object";
                    readonly properties: {
                        readonly transactionHash: {
                            readonly type: "string";
                            readonly examples: readonly ["0x37f21bbb309ae9d5d9104af6c9f9a4f0d4beaee7563f49436ffda22800fa2c7c"];
                        };
                        readonly blockExplorer: {
                            readonly type: "string";
                            readonly examples: readonly ["https://goerli.etherscan.io/tx/0x37f21bbb309ae9d5d9104af6c9f9a4f0d4beaee7563f49436ffda22800fa2c7c"];
                        };
                        readonly transactionID: {
                            readonly type: "string";
                            readonly examples: readonly ["6327921e418fb0564c4d063b"];
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly examples: readonly ["Sent"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                    readonly examples: readonly [400];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Cannot read property filePath of null"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostNftUpdateTransferoperator: {
    readonly formData: {
        readonly type: "object";
        readonly required: readonly ["chain", "contractAddress", "newOperatorAddress"];
        readonly properties: {
            readonly contractAddress: {
                readonly type: "string";
            };
            readonly newOperatorAddress: {
                readonly type: "string";
            };
            readonly chain: {
                readonly type: "string";
                readonly enum: readonly ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "ethereum", "polygon", "avalanche", "optimism", "arbitrum", "base", "fantom", "bsc", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"];
                readonly default: "sepolia";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly Transaction: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly blockNumber: {
                                readonly type: "string";
                            };
                            readonly timeStamp: {
                                readonly type: "string";
                            };
                            readonly hash: {
                                readonly type: "string";
                            };
                            readonly nonce: {
                                readonly type: "string";
                            };
                            readonly blockHash: {
                                readonly type: "string";
                            };
                            readonly from: {
                                readonly type: "string";
                            };
                            readonly contractAddress: {
                                readonly type: "string";
                            };
                            readonly to: {
                                readonly type: "string";
                            };
                            readonly tokenID: {
                                readonly type: "string";
                            };
                            readonly tokenName: {
                                readonly type: "string";
                            };
                            readonly tokenSymbol: {
                                readonly type: "string";
                            };
                            readonly tokenDecimal: {
                                readonly type: "string";
                            };
                            readonly transactionIndex: {
                                readonly type: "string";
                            };
                            readonly gas: {
                                readonly type: "string";
                            };
                            readonly gasPrice: {
                                readonly type: "string";
                            };
                            readonly gasUsed: {
                                readonly type: "string";
                            };
                            readonly cumulativeGasUsed: {
                                readonly type: "string";
                            };
                            readonly input: {
                                readonly type: "string";
                            };
                            readonly confirmations: {
                                readonly type: "string";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostNftUpdateTransfertoken: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["contractAddress", "fromAddress", "toAddress", "tokenId", "chain"];
        readonly properties: {
            readonly contractAddress: {
                readonly type: "string";
                readonly description: "Address of NFT contract";
            };
            readonly fromAddress: {
                readonly type: "string";
                readonly description: "Wallet Address of Sender";
            };
            readonly toAddress: {
                readonly type: "string";
                readonly description: "Wallet Address of Recipient";
            };
            readonly tokenId: {
                readonly type: "string";
                readonly description: "Token ID of NFT to be transferred";
            };
            readonly chain: {
                readonly type: "string";
                readonly enum: readonly ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "ethereum", "polygon", "avalanche", "optimism", "arbitrum", "base", "fantom", "bsc", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"];
                readonly description: "Blockchain on which contract was deployed";
                readonly default: "sepolia";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly transaction_details: {
                    readonly type: "object";
                    readonly properties: {
                        readonly transactionHash: {
                            readonly type: "string";
                            readonly examples: readonly ["0x37f21bbb309ae9d5d9104af6c9f9a4f0d4beaee7563f49436ffda22800fa2c7c"];
                        };
                        readonly blockExplorer: {
                            readonly type: "string";
                            readonly examples: readonly ["https://goerli.etherscan.io/tx/0x37f21bbb309ae9d5d9104af6c9f9a4f0d4beaee7563f49436ffda22800fa2c7c"];
                        };
                        readonly transactionID: {
                            readonly type: "string";
                            readonly examples: readonly ["6327921e418fb0564c4d063b"];
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly examples: readonly ["Sent"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                    readonly examples: readonly [400];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Cannot read property filePath of null"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostNftUpdateUpdatetokenmetadata: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["contractAddress", "chain", "newTokenURI", "tokenId"];
        readonly properties: {
            readonly contractAddress: {
                readonly type: "string";
                readonly description: "Address of NFT contract";
            };
            readonly newTokenURI: {
                readonly type: "string";
                readonly description: "New URI for NFT metadata";
            };
            readonly tokenId: {
                readonly type: "string";
                readonly description: "TokenID for NFT";
            };
            readonly chain: {
                readonly type: "string";
                readonly enum: readonly ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "ethereum", "polygon", "avalanche", "optimism", "arbitrum", "base", "fantom", "bsc", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"];
                readonly description: "Blockchain on which contract was deployed";
                readonly default: "sepolia";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly transaction_details: {
                    readonly type: "object";
                    readonly properties: {
                        readonly transactionHash: {
                            readonly type: "string";
                            readonly examples: readonly ["0x37f21bbb309ae9d5d9104af6c9f9a4f0d4beaee7563f49436ffda22800fa2c7c"];
                        };
                        readonly blockExplorer: {
                            readonly type: "string";
                            readonly examples: readonly ["https://goerli.etherscan.io/tx/0x37f21bbb309ae9d5d9104af6c9f9a4f0d4beaee7563f49436ffda22800fa2c7c"];
                        };
                        readonly transactionID: {
                            readonly type: "string";
                            readonly examples: readonly ["6327921e418fb0564c4d063b"];
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly examples: readonly ["Sent"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                    readonly examples: readonly [400];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Cannot read property filePath of null"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostNftUpdateWithdrawfunds: {
    readonly formData: {
        readonly type: "object";
        readonly required: readonly ["chain", "contractAddress"];
        readonly properties: {
            readonly contractAddress: {
                readonly type: "string";
                readonly description: "Address of contract";
                readonly examples: readonly [2.916124294435724e+47];
            };
            readonly chain: {
                readonly type: "string";
                readonly enum: readonly ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "ethereum", "polygon", "avalanche", "optimism", "arbitrum", "base", "fantom", "bsc", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"];
                readonly description: "Blockchain on which contract was deployed";
                readonly default: "sepolia";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly transaction_details: {
                    readonly type: "object";
                    readonly properties: {
                        readonly transactionHash: {
                            readonly type: "string";
                            readonly examples: readonly ["0x37f21bbb309ae9d5d9104af6c9f9a4f0d4beaee7563f49436ffda22800fa2c7c"];
                        };
                        readonly blockExplorer: {
                            readonly type: "string";
                            readonly examples: readonly ["https://goerli.etherscan.io/tx/0x37f21bbb309ae9d5d9104af6c9f9a4f0d4beaee7563f49436ffda22800fa2c7c"];
                        };
                        readonly transactionID: {
                            readonly type: "string";
                            readonly examples: readonly ["6327921e418fb0564c4d063b"];
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly examples: readonly ["Sent"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostNftUpdateWithdrawfundstowallet: {
    readonly formData: {
        readonly type: "object";
        readonly required: readonly ["chain", "contractAddress", "withdrawAddress"];
        readonly properties: {
            readonly contractAddress: {
                readonly type: "string";
                readonly description: "Address of contract";
                readonly examples: readonly [2.916124294435724e+47];
            };
            readonly withdrawAddress: {
                readonly type: "string";
                readonly description: "Address of wallet to which funds with be withdrawn";
            };
            readonly chain: {
                readonly type: "string";
                readonly enum: readonly ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "ethereum", "polygon", "avalanche", "optimism", "arbitrum", "base", "fantom", "bsc", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"];
                readonly description: "Blockchain on which contract was deployed";
                readonly default: "sepolia";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly transaction_details: {
                    readonly type: "object";
                    readonly properties: {
                        readonly transactionHash: {
                            readonly type: "string";
                            readonly examples: readonly ["0x37f21bbb309ae9d5d9104af6c9f9a4f0d4beaee7563f49436ffda22800fa2c7c"];
                        };
                        readonly blockExplorer: {
                            readonly type: "string";
                            readonly examples: readonly ["https://goerli.etherscan.io/tx/0x37f21bbb309ae9d5d9104af6c9f9a4f0d4beaee7563f49436ffda22800fa2c7c"];
                        };
                        readonly transactionID: {
                            readonly type: "string";
                            readonly examples: readonly ["6327921e418fb0564c4d063b"];
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly examples: readonly ["Sent"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostNftUseropsAllowlistsharesforaddress: {
    readonly formData: {
        readonly type: "object";
        readonly required: readonly ["chain", "contractAddress", "allowListAddress"];
        readonly properties: {
            readonly contractAddress: {
                readonly type: "string";
                readonly examples: readonly ["0x33145a6258e89b6E0796d237A3048A3852cCaeQ7"];
            };
            readonly allowListAddress: {
                readonly type: "string";
            };
            readonly chain: {
                readonly type: "string";
                readonly enum: readonly ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "ethereum", "polygon", "avalanche", "optimism", "arbitrum", "base", "fantom", "bsc", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"];
                readonly default: "sepolia";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly Transaction: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly blockNumber: {
                                readonly type: "string";
                            };
                            readonly timeStamp: {
                                readonly type: "string";
                            };
                            readonly hash: {
                                readonly type: "string";
                            };
                            readonly nonce: {
                                readonly type: "string";
                            };
                            readonly blockHash: {
                                readonly type: "string";
                            };
                            readonly from: {
                                readonly type: "string";
                            };
                            readonly contractAddress: {
                                readonly type: "string";
                            };
                            readonly to: {
                                readonly type: "string";
                            };
                            readonly tokenID: {
                                readonly type: "string";
                            };
                            readonly tokenName: {
                                readonly type: "string";
                            };
                            readonly tokenSymbol: {
                                readonly type: "string";
                            };
                            readonly tokenDecimal: {
                                readonly type: "string";
                            };
                            readonly transactionIndex: {
                                readonly type: "string";
                            };
                            readonly gas: {
                                readonly type: "string";
                            };
                            readonly gasPrice: {
                                readonly type: "string";
                            };
                            readonly gasUsed: {
                                readonly type: "string";
                            };
                            readonly cumulativeGasUsed: {
                                readonly type: "string";
                            };
                            readonly input: {
                                readonly type: "string";
                            };
                            readonly confirmations: {
                                readonly type: "string";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostNftUseropsContractpaymentdetails: {
    readonly formData: {
        readonly type: "object";
        readonly required: readonly ["chain", "contractAddress", "payeeAddress"];
        readonly properties: {
            readonly contractAddress: {
                readonly type: "string";
                readonly examples: readonly ["0x33145a6258e89b6E0796d237A3048A3852cCaeQ7"];
            };
            readonly payeeAddress: {
                readonly type: "string";
            };
            readonly chain: {
                readonly type: "string";
                readonly enum: readonly ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "ethereum", "polygon", "avalanche", "optimism", "arbitrum", "base", "fantom", "bsc", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"];
                readonly default: "sepolia";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly Transaction: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly blockNumber: {
                                readonly type: "string";
                            };
                            readonly timeStamp: {
                                readonly type: "string";
                            };
                            readonly hash: {
                                readonly type: "string";
                            };
                            readonly nonce: {
                                readonly type: "string";
                            };
                            readonly blockHash: {
                                readonly type: "string";
                            };
                            readonly from: {
                                readonly type: "string";
                            };
                            readonly contractAddress: {
                                readonly type: "string";
                            };
                            readonly to: {
                                readonly type: "string";
                            };
                            readonly tokenID: {
                                readonly type: "string";
                            };
                            readonly tokenName: {
                                readonly type: "string";
                            };
                            readonly tokenSymbol: {
                                readonly type: "string";
                            };
                            readonly tokenDecimal: {
                                readonly type: "string";
                            };
                            readonly transactionIndex: {
                                readonly type: "string";
                            };
                            readonly gas: {
                                readonly type: "string";
                            };
                            readonly gasPrice: {
                                readonly type: "string";
                            };
                            readonly gasUsed: {
                                readonly type: "string";
                            };
                            readonly cumulativeGasUsed: {
                                readonly type: "string";
                            };
                            readonly input: {
                                readonly type: "string";
                            };
                            readonly confirmations: {
                                readonly type: "string";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostNftUseropsPayeeatindex: {
    readonly formData: {
        readonly type: "object";
        readonly required: readonly ["chain", "contractAddress", "index"];
        readonly properties: {
            readonly contractAddress: {
                readonly type: "string";
                readonly examples: readonly ["0x33145a6258e89b6E0796d237A3048A3852cCaeQ7"];
            };
            readonly index: {
                readonly type: "string";
            };
            readonly chain: {
                readonly type: "string";
                readonly enum: readonly ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "ethereum", "polygon", "avalanche", "optimism", "arbitrum", "base", "fantom", "bsc", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"];
                readonly default: "sepolia";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly Transaction: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly blockNumber: {
                                readonly type: "string";
                            };
                            readonly timeStamp: {
                                readonly type: "string";
                            };
                            readonly hash: {
                                readonly type: "string";
                            };
                            readonly nonce: {
                                readonly type: "string";
                            };
                            readonly blockHash: {
                                readonly type: "string";
                            };
                            readonly from: {
                                readonly type: "string";
                            };
                            readonly contractAddress: {
                                readonly type: "string";
                            };
                            readonly to: {
                                readonly type: "string";
                            };
                            readonly tokenID: {
                                readonly type: "string";
                            };
                            readonly tokenName: {
                                readonly type: "string";
                            };
                            readonly tokenSymbol: {
                                readonly type: "string";
                            };
                            readonly tokenDecimal: {
                                readonly type: "string";
                            };
                            readonly transactionIndex: {
                                readonly type: "string";
                            };
                            readonly gas: {
                                readonly type: "string";
                            };
                            readonly gasPrice: {
                                readonly type: "string";
                            };
                            readonly gasUsed: {
                                readonly type: "string";
                            };
                            readonly cumulativeGasUsed: {
                                readonly type: "string";
                            };
                            readonly input: {
                                readonly type: "string";
                            };
                            readonly confirmations: {
                                readonly type: "string";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostNftUseropsTransactiondetails: {
    readonly formData: {
        readonly type: "object";
        readonly required: readonly ["transactionId"];
        readonly properties: {
            readonly transactionId: {
                readonly type: "string";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly Transaction: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly blockNumber: {
                                readonly type: "string";
                            };
                            readonly timeStamp: {
                                readonly type: "string";
                            };
                            readonly hash: {
                                readonly type: "string";
                            };
                            readonly nonce: {
                                readonly type: "string";
                            };
                            readonly blockHash: {
                                readonly type: "string";
                            };
                            readonly from: {
                                readonly type: "string";
                            };
                            readonly contractAddress: {
                                readonly type: "string";
                            };
                            readonly to: {
                                readonly type: "string";
                            };
                            readonly tokenID: {
                                readonly type: "string";
                            };
                            readonly tokenName: {
                                readonly type: "string";
                            };
                            readonly tokenSymbol: {
                                readonly type: "string";
                            };
                            readonly tokenDecimal: {
                                readonly type: "string";
                            };
                            readonly transactionIndex: {
                                readonly type: "string";
                            };
                            readonly gas: {
                                readonly type: "string";
                            };
                            readonly gasPrice: {
                                readonly type: "string";
                            };
                            readonly gasUsed: {
                                readonly type: "string";
                            };
                            readonly cumulativeGasUsed: {
                                readonly type: "string";
                            };
                            readonly input: {
                                readonly type: "string";
                            };
                            readonly confirmations: {
                                readonly type: "string";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostTransfersUserclaimEmailAsset: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["destinationEmail", "contractAddress", "chain"];
        readonly properties: {
            readonly destinationEmail: {
                readonly type: "string";
                readonly description: "Email of recipient of your digital asset";
            };
            readonly contractAddress: {
                readonly type: "string";
                readonly description: "Contract address";
            };
            readonly chain: {
                readonly type: "string";
                readonly enum: readonly ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "ethereum", "polygon", "avalanche", "optimism", "arbitrum", "base", "fantom", "bsc", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"];
                readonly description: "Blockchain on which NFT will be minted";
                readonly default: "sepolia";
            };
            readonly metadataUrl: {
                readonly type: "string";
                readonly description: "Url of your metadata. If left blank a default test metadata url will be used.";
            };
            readonly claimType: {
                readonly type: "string";
                readonly enum: readonly ["SINGLE_GASLESS_MINT", "GASLESS_MINT_FROM_TEMPLATE"];
                readonly description: "Your claim type - Defaults to SINGLE_GASLESS_MINT";
                readonly default: "SINGLE_GASLESS_MINT";
            };
            readonly note: {
                readonly type: "string";
                readonly description: "Note to be emailed to recipient of digital asset - Optional";
                readonly examples: readonly ["Enjoy your digital asset"];
            };
            readonly tokenId: {
                readonly type: "string";
                readonly description: "Token ID of asset to be minted. Applicable to ERC1155 tokens only.";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly transaction_details: {
                    readonly type: "object";
                    readonly properties: {
                        readonly transactionHash: {
                            readonly type: "string";
                            readonly examples: readonly ["0x37f21bbb309ae9d5d9104af6c9f9a4f0d4beaee7563f49436ffda22800fa2c7c"];
                        };
                        readonly blockExplorer: {
                            readonly type: "string";
                            readonly examples: readonly ["https://goerli.etherscan.io/tx/0x37f21bbb309ae9d5d9104af6c9f9a4f0d4beaee7563f49436ffda22800fa2c7c"];
                        };
                        readonly transactionID: {
                            readonly type: "string";
                            readonly examples: readonly ["6327921e418fb0564c4d063b"];
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly examples: readonly ["Sent"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "number";
                    readonly examples: readonly [400];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Cannot read property filePath of null"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
export { GetNftDataAttributesforcontractaddress, GetNftDataAttributesforslug, GetNftDataAttributeswithtokensforcontractaddress, GetNftDataAttributeswithtokensforslug, GetNftDataCollectionsAll, GetNftDataCollectionsSearch, GetNftDataCreated, GetNftDataFloorpricesforcontractaddress, GetNftDataFloorpricesforslug, GetNftDataHistoricalstatsforcontractaddress, GetNftDataHistoricalstatsforslug, GetNftDataIswalletholderoftoken, GetNftDataLastfloorpriceforcontractaddress, GetNftDataLastfloorpriceforslug, GetNftDataNftdetails, GetNftDataOwned, GetNftDataOwnershipforcontractaddress, GetNftDataOwnershipforslug, GetNftDataSaleseventsforcontractaddress, GetNftDataSaleseventsforslug, GetNftDataSearchattributesincontractaddress, GetNftDataSearchattributesinslug, GetNftDataTransactions, GetNftDataTransactionsbycontract, GetNftDataTransfereventsforcontractaddress, GetNftDataTransfereventsforslug, GetNftUseropsContractbalance, GetNftUseropsContractdetails, GetNftUseropsDeployedcontracts, GetNftUseropsIpfsuploads, GetNftUseropsNftsminted, PostNftDeployDeploycontract, PostNftDeployUpdatecontract, PostNftMintCollectionreservemint, PostNftMintCreatetoken1155, PostNftMintMintfromfile, PostNftMintMintfrommetadata, PostNftMintMintfrommetadataurl, PostNftMintQuickmintfromfile, PostNftMintQuickmintfrommetadata, PostNftMintQuickmintfrommetadataurl, PostNftSendCrosschainsend, PostNftSendEnablecrosschainsend, PostNftSendQuicksend, PostNftStoreFile, PostNftStoreFilefromurl, PostNftStoreMetadatafromimage, PostNftStoreMetadatafromimageurl, PostNftStoreUploaddirectory, PostNftUpdateAddpayee, PostNftUpdateAddtoallowlist, PostNftUpdateBurn, PostNftUpdateFreezemetadata, PostNftUpdateInitcollectioncontract, PostNftUpdateSetallowlistmintprice, PostNftUpdateSetmaxmintquantityperbatch, PostNftUpdateSetmintprice, PostNftUpdateSetpaymentprice, PostNftUpdateTogglepausedstate, PostNftUpdateTogglepublicminting, PostNftUpdateTransferoperator, PostNftUpdateTransfertoken, PostNftUpdateUpdatetokenmetadata, PostNftUpdateWithdrawfunds, PostNftUpdateWithdrawfundstowallet, PostNftUseropsAllowlistsharesforaddress, PostNftUseropsContractpaymentdetails, PostNftUseropsPayeeatindex, PostNftUseropsTransactiondetails, PostTransfersUserclaimEmailAsset };
