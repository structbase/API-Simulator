export declare class NetworkError extends Error {
    constructor(message: string);
}
export declare class DataError extends Error {
    constructor(message: string);
}
/**
 * Fetches the product catalog.
 * • 80 % of the time the promise resolves with an array of product objects.
 * • 20 % of the time it rejects with a {@link NetworkError}.
 * @returns {Promise<{ id: number; name: string; price: number }[]>}
 *          Promise that resolves to the catalog or rejects on failure.
 */
export declare const fetchProductCatalog: () => Promise<{
    id: number;
    name: string;
    price: number;
}[]>;
/**
 * Fetches the product review.
 * • 80 % of the time the promise resolves with an array of product objects.
 * • 20 % of the time it rejects with a {@link NetworkError}.
 * @returns {Promise<{ productId: number; rating: number; review: string }[]>}
 *          Promise that resolves to the product review or rejects on failure.
 */
export declare const fetchProductReview: (productId: number) => Promise<{
    productId: number;
    rating: number;
    review: string;
}[]>;
/**
 * Fetches the product review.
 * • 75 % of the time the promise resolves with an array of product objects.
 * • 25 % of the time it rejects with a {@link NetworkError}.
 * @returns {Promise<{totalSales: number;unitsSold: number; averagePrice: number;}>}
 *          Promise that resolves to the sales report or rejects on failure.
 */
export declare const fetchSalesReport: () => Promise<{
    totalSales: number;
    unitsSold: number;
    averagePrice: number;
}>;
//# sourceMappingURL=apiSimulator.d.ts.map