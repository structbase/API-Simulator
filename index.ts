import {
    fetchProductCatalog,
    fetchProductReview,
    fetchSalesReport,
    NetworkError,
    DataError,
} from "./apiSimulator.js";

/**
 * Orchestrates flow.
 * 1. @then catalog.
 * 2. @then reviews.
 * 3. @then report.
 * 4. @then logs.
 * 5. @finally done.
 *
 * @returns {Promise<void>} after API calls.
 */
function runApp(): void {
    fetchProductCatalog()
        .then((products) => {
            console.log("Products:", products);
            return Promise.all(
                products.map((p) =>
                    fetchProductReview(p.id).catch((err) => {
                        console.error("Review Error:", err);
                        return [];
                    })
                )
            );
        })
        .then((reviews) => {
            console.log("Reviews:", reviews);
            return fetchSalesReport();
        })
        .then((report) => {
            console.log("Sales Report:", report);
        })
        .catch((error) => {
            console.error("Error:", error);
        })
        .finally(() => {
            console.log("All API calls attempted");
        });
}

runApp();
