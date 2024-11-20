import { createClient } from "microcms-js-sdk"

export const client = createClient({
    serviceDomain: "personal-blog-kento",
    apiKey: process.env.API_KEY,
});