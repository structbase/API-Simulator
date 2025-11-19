import {
    fetchProductCatalog,
    fetchProductReview,
    fetchSalesReport,
} from "./apiSimulator";

function runApp() {
    fetchProductCatalog()
        .then((products) => {
            console.log("Products:", products);
            // Map each product to a review Promise
            return Promise.all(
                products.map((p) => fetchProductReview(p.id).catch((err) => []))
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


runApp ()