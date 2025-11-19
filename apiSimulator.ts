export class NetworkError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "NetworkError";
    }
}

export class DataError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "DataError";
    }
}

export const fetchProductCatalog = (): Promise<
    { id: number; name: string; price: number }[]
> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve([
                    { id: 1, name: "Laptop", price: 1200 },
                    { id: 2, name: "Headphones", price: 200 },
                ]);
            } else {
                reject(new NetworkError("Failed to fetch product catalog"));
            }
        }, 1000);
    });
};

export const fetchProductReview = (
    productId: number
): Promise<{ productId: number; rating: number; review: string }[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve([
                    { productId, rating: 5, review: "Excellent product!" },
                    { productId, rating: 4, review: "Very good value." },
                ]);
            } else {
                reject(
                    new NetworkError(
                        `Failed to fetch reviews for product ID ${productId}`
                    )
                );
            }
        }, 1500);
    });
};

export const fetchSalesReport = (): Promise<{
    totalSales: number;
    unitsSold: number;
    averagePrice: number;
}> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.75) {
                resolve({
                    totalSales: 5000,
                    unitsSold: 5000,
                    averagePrice: 99.99,
                });
            } else {
                reject(new NetworkError("Failed to fetch sales report"));
            }
        }, 1000);
    });
};
