
// src/services/devtoService.js

/**
 * Fetch DEV.to articles with optional filters.
 * @param {Object} params
 * @param {string} [params.username]      - DEV username (e.g., "chhavikohli")
 * @param {number} [params.collectionId]  - Series/collection id (e.g., 35227)
 * @param {string} [params.tag]           - Filter by tag (e.g., "react")
 * @param {number} [params.perPage=30]    - Page size (1..1000)
 * @param {AbortSignal} [params.signal]   - AbortController.signal for cancellation
 * @returns {Promise<Array>}              - Array of article objects
 */
export async function fetchDevtoArticles({
  collectionId,
  signal
} = {}) {
        const username = "chhavikohli";
  let url = new URL("https://dev.to/api/articles");
 
  if (collectionId) url.searchParams.set("collection_id", String(collectionId));
  else if (username) url.searchParams.set("username", username);

  const res = await fetch(url.toString(), {
    headers: {
      // Forem recommends sending a User-Agent for public read endpoints
      "User-Agent": "YourName-Portfolio/1.0"
    },
    signal
  });

  if (!res.ok) {
    // surface useful error info
    const text = await res.text().catch(() => "");
    throw new Error(`DEV.to fetch failed: ${res.status} ${res.statusText} ${text}`);
  }
  return res.json();
}
