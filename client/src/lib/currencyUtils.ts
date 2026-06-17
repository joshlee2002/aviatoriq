/**
 * Utilities for parsing GBP price strings from the database
 * and re-formatting them in the user's active currency.
 *
 * Handles formats like:
 *   "£100,000–£130,000"
 *   "£99,950"
 *   "£5,000–£15,000 (ground school only)"
 */

/**
 * Extract all numeric GBP values from a price string.
 * Returns an array of numbers (in GBP).
 */
export function parseGBPValues(priceStr: string): number[] {
  // Match patterns like £100,000 or £99950
  const matches = priceStr.match(/£([\d,]+)/g);
  if (!matches) return [];
  return matches
    .map(m => parseInt(m.replace(/[£,]/g, ""), 10))
    .filter(n => !isNaN(n));
}

/**
 * Convert a GBP price string to the target currency using the provided formatPrice function.
 * Preserves any trailing text (e.g. "(ground school only)").
 *
 * Examples:
 *   "£100,000–£130,000" → "$127,000–$165,100"
 *   "£99,950"           → "$126,940"
 *   "£5,000–£15,000 (ground school only)" → "$6,350–$19,050 (ground school only)"
 */
export function convertPriceString(
  priceStr: string,
  formatPrice: (gbp: number) => string
): string {
  // Extract trailing non-price text (e.g. " (ground school only)")
  const trailingMatch = priceStr.match(/(\s*\([^)]+\)\s*)$/);
  const trailing = trailingMatch ? trailingMatch[1] : "";
  const core = trailing
    ? priceStr.slice(0, priceStr.length - trailing.length)
    : priceStr;

  // Replace each £X,XXX occurrence with the converted value
  const converted = core.replace(/£([\d,]+)/g, (_, digits) => {
    const gbp = parseInt(digits.replace(/,/g, ""), 10);
    return isNaN(gbp) ? `£${digits}` : formatPrice(gbp);
  });

  return converted + trailing;
}
