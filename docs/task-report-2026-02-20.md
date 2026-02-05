# Task Report - February 20, 2026

**Project:** PAGCOR Casino Reviews (pagcorcasino.ph)
**Stack:** Next.js 14.1 + WordPress Headless CMS (WPGraphQL)
**Server:** AWS Lightsail (52.78.168.84)

---

## Tasks Completed

### 1. WordPress Casino Plugin - Admin Meta Boxes & New Fields

**Problem:** The casino custom post type had GraphQL fields registered but no admin UI to input the data. The affiliate URL was hardcoded as a placeholder (`https://example.com/go/filibet`).

**Solution:** Updated `functions.php` on the server to add a full "Casino Details" meta box with the following input fields:

| Field | Type | Description |
|---|---|---|
| Affiliate / Referral URL | URL | The actual affiliate/referral link for each casino |
| Overall Rating | Number (0-5) | Star rating with 0.1 step |
| Welcome Bonus | Text | e.g. "100% up to PHP 50,000" |
| Recommendation | Dropdown | Highly Recommended, Recommended, Average, Below Average, Not Recommended |
| Compatibility | Checkboxes | Desktop, Mobile, Tablet, iOS App, Android App |
| Year Established | Number | e.g. 2020 |
| License / Regulation | Text | e.g. "PAGCOR Licensed" |
| Minimum Deposit | Text | e.g. "PHP 100" |
| Payment Methods | Text | e.g. "GCash, Maya, Bank Transfer" |
| Withdrawal Time | Text | e.g. "1-3 Business Days" |
| Customer Support | Text | e.g. "24/7 Live Chat, Email" |
| Game Providers | Textarea | e.g. "Pragmatic Play, Evolution Gaming" |

**Files Modified (Server):**
- `/www/wwwroot/pagcorcasino.ph/wp-content/themes/hello-elementor/functions.php`

---

### 2. Frontend GraphQL Queries Updated

**What Changed:** Updated both `GET_ALL_CASINOS` and `GET_CASINO_BY_SLUG` queries to fetch all new casino fields (recommendation, compatibility, establishedYear, license, minDeposit, paymentMethods, withdrawalTime, customerSupport, gameProviders).

**Files Modified:**
- `lib/graphql.js`

---

### 3. Quick Info Sidebar Enhanced

**What Changed:** The review page sidebar now displays all new fields with proper styling:
- Recommendation with color-coded indicator (green for Highly Recommended, blue for Recommended, etc.)
- Compatibility shown as tags/chips
- License, Established Year, Min Deposit, Payment Methods, Withdrawal Time, and Support as labeled info rows

**Files Modified:**
- `app/reviews/[slug]/page.tsx`

---

### 4. Favicon (Dynamic from WordPress)

**What Changed:** Added a `siteIconUrl` GraphQL field on WordPress that returns the Site Icon URL via `get_site_icon_url()`. The Next.js layout dynamically fetches this and sets it as the favicon and Apple touch icon.

**How to Change:** WordPress Admin > Appearance > Customize > Site Identity > Site Icon

**Files Modified:**
- `app/layout.tsx` - Converted static metadata to `generateMetadata()` async function
- Server `functions.php` - Added `siteIconUrl` GraphQL resolver

---

### 5. Logo (Dynamic from WordPress)

**What Changed:** Added a `siteLogoUrl` GraphQL field on WordPress that returns the custom logo URL. The Header component now accepts a `logoUrl` prop and displays the WordPress logo image when set, falling back to the text "PAGCOR Casino Reviews" if no logo is configured.

**How to Change:** WordPress Admin > Appearance > Customize > Site Identity > Logo

**Files Modified:**
- `app/components/Header.tsx` - Added `logoUrl` prop, Image component for logo display
- `app/layout.tsx` - Fetches logo URL and passes to Header
- Server `functions.php` - Added `siteLogoUrl` GraphQL resolver

---

### 6. Yoast SEO Integration

**What Changed:**
- Installed **WPGraphQL Yoast SEO Addon** (add-wpgraphql-seo v5.0.2) plugin on WordPress
- Updated GraphQL queries for casinos and blog posts to fetch Yoast `seo` data (title, metaDesc, focuskw, opengraph, twitter, canonical, robots, schema)
- Casino review pages and blog post pages now use Yoast metadata when available, with automatic fallback to the existing auto-generated SEO
- Yoast's structured data (schema.org JSON-LD) overrides the custom schema when configured

**How to Use:** Edit any Casino or Blog Post in WordPress Admin > scroll to Yoast SEO box > configure SEO title, meta description, focus keyphrase, social previews, etc.

**Files Modified:**
- `lib/graphql.js` - Added `seo` field to `GET_CASINO_BY_SLUG` and `GET_POST_BY_SLUG` queries
- `app/reviews/[slug]/page.tsx` - Uses Yoast metadata in `generateMetadata()` and schema
- `app/blog/[slug]/page.tsx` - Uses Yoast metadata in `generateMetadata()` and schema

---

### 7. Affiliate URL Fix - Claim Bonus Redirect

**Problem:** All 20 casino "Claim Bonus" / "Visit Site" buttons redirected to `https://example.com/go/filibet` (placeholder URL). Also, the redirect route was cached for 60 seconds, so affiliate URL changes in WordPress didn't take effect immediately.

**Solution:**
- Updated all 20 casino affiliate URLs in the WordPress database to `http://fairplay.ph/ssvip?` as the default link
- Modified the `/go/[slug]` redirect route to use `cache: "no-store"` and `force-dynamic` so affiliate URL changes in WordPress take effect **immediately** without redeployment

**Casinos Updated (all 20):**
FiliBet, ManilaPlay, PinoyWin, Royal888, BetPH, SuperAce, GoldPH, PHDream, Nuebe Gaming, Okada Online, Pera Play, Betso88, MCW, 747Live, Peso88, Lucky Sprite, Bet88, PHLWin, Jili, Lucky Cola

**Files Modified:**
- `app/go/[slug]/route.ts` - No-cache fetch, force-dynamic export
- WordPress database - All 20 casino `affiliate_url` meta values updated

---

### 8. Infrastructure Fixes

- **SSH Host Key:** Resolved SSH host key change warning by updating known_hosts
- **WP CLI:** Installed WP CLI (v2.12.0) on the server for plugin management
- **PM2 Conflict:** Resolved port 3000 conflict between root and ubuntu PM2 instances. Cleaned up root PM2 process, restarted ubuntu PM2 correctly.

---

## Deployment Summary

- **Builds:** 4 successful Next.js production builds
- **Deployments:** 4 SCP deployments to server + PM2 restarts
- **WordPress Plugins Installed:** add-wpgraphql-seo v5.0.2
- **WordPress DB Updates:** 20 casino affiliate URLs updated
- **Server Backups:** `functions.php.bak` created before modifications

---

## Action Items for Admin

1. **Set Favicon:** WordPress Admin > Appearance > Customize > Site Identity > Site Icon
2. **Set Logo:** WordPress Admin > Appearance > Customize > Site Identity > Logo
3. **Update Affiliate URLs Per Casino:** WordPress Admin > Casinos > Edit each casino > change "Affiliate / Referral URL" to each company's specific link (currently all set to `http://fairplay.ph/ssvip?`)
4. **Fill Casino Details:** Add Recommendation, Compatibility, License, Payment Methods, etc. for each casino
5. **Configure Yoast SEO:** Edit each Casino and Blog Post > set SEO title, meta description, and focus keyphrase in the Yoast box
