# Blog Posts Publishing Guide - 5 Daily Posts (March 3-7, 2026)

## Quick Overview

| Day | Date | Title | Slug | Category | Target Keyword |
|-----|------|-------|------|----------|----------------|
| 1 | Mar 3 | Top 10 PAGCOR Licensed Online Casinos (March 2026) | `top-pagcor-licensed-online-casinos-philippines-2026` | Casino Rankings | PAGCOR licensed online casinos |
| 2 | Mar 4 | GCash Casino Deposits: Complete Guide | `gcash-casino-deposits-guide-philippines` | Guides | GCash casino deposit |
| 3 | Mar 5 | Best Casino Welcome Bonuses - March 2026 | `best-online-casino-welcome-bonuses-philippines-march-2026` | Bonuses & Promotions | best online casino bonuses Philippines |
| 4 | Mar 6 | How to Verify PAGCOR License / Avoid Scams | `how-to-verify-pagcor-licensed-casino-avoid-scams` | Guides | verify PAGCOR license |
| 5 | Mar 7 | Responsible Gambling Tips Philippines | `responsible-gambling-tips-philippines-guide` | Responsible Gambling | responsible gambling Philippines |

---

## How to Publish

### Option 1: WP-CLI Script (Recommended)

SSH into the server and run the publish script:

```bash
ssh ubuntu@52.78.168.84 'bash -s' < docs/blog-posts/publish-posts.sh
```

Or copy the script to the server first:

```bash
scp docs/blog-posts/publish-posts.sh ubuntu@52.78.168.84:~/
ssh ubuntu@52.78.168.84 'bash ~/publish-posts.sh'
```

### Option 2: Manual WordPress Admin

1. Go to WordPress Admin > Posts > Add New
2. Copy the title from the HTML file
3. Copy the HTML body content (everything between the comment block and the end)
4. Set the slug, category, and excerpt
5. Configure Yoast SEO (title, meta description, focus keyphrase) from the HTML comment
6. Upload and set featured image
7. Set the publish date
8. Click Publish

---

## Featured Images Guide

Each post needs a featured image. Recommended specs:
- **Size:** 1200x630px (optimal for Open Graph / social sharing)
- **Format:** WebP or JPG (compressed, under 200KB)
- **Alt text:** Included in each post's HTML comment block

### Image Descriptions for Creation (use Canva, Adobe Express, or AI image tools):

**Post 1 - Top 10 PAGCOR Casinos:**
- Professional banner with Philippine flag colors (blue, red, white, yellow)
- Casino elements: chips, cards, roulette
- Text: "Top 10 PAGCOR Licensed Casinos 2026"
- Dark premium background with gold accents

**Post 2 - GCash Casino Deposits:**
- Smartphone displaying GCash app interface
- Casino chips and Philippine peso symbols
- Text: "GCash Casino Deposit Guide"
- Clean, modern blue/green gradient background

**Post 3 - Best Casino Bonuses:**
- Colorful promotional style banner
- Bonus percentages (200%, 150%, 100%) as bold text
- Gift boxes, coins, sparkle effects
- Text: "Best Casino Bonuses March 2026"
- Vibrant gradient background (gold/orange)

**Post 4 - Verify PAGCOR License:**
- PAGCOR license certificate mockup with green checkmark
- Red X on a fake license next to it
- Magnifying glass examining documents
- Text: "How to Verify PAGCOR License"
- Professional blue/white background

**Post 5 - Responsible Gambling:**
- Shield/safety icon, balance scale
- Supportive imagery (helping hands)
- Calming blue and green tones
- Text: "Responsible Gambling Guide"
- Professional, empathetic design

---

## After Publishing

1. **Upload featured images** in WordPress Admin > Media > Add New
2. **Assign featured images** to each post via Edit Post > Featured Image
3. **Rebuild the Next.js frontend:**
   ```bash
   ssh ubuntu@52.78.168.84
   cd /www/wwwroot/nextjs-app
   npm run build
   pm2 restart all
   ```
4. **Verify** each post loads correctly at:
   - `/blog/top-pagcor-licensed-online-casinos-philippines-2026`
   - `/blog/gcash-casino-deposits-guide-philippines`
   - `/blog/best-online-casino-welcome-bonuses-philippines-march-2026`
   - `/blog/how-to-verify-pagcor-licensed-casino-avoid-scams`
   - `/blog/responsible-gambling-tips-philippines-guide`

---

## SEO Checklist Per Post

- [x] SEO title (under 60 chars)
- [x] Meta description (under 160 chars)
- [x] Focus keyphrase set
- [x] H1 tag (post title)
- [x] H2 and H3 subheadings with keywords
- [x] Internal links to casino reviews (/reviews/[slug])
- [x] Internal links to other blog posts (cross-linking)
- [x] Internal links to site pages (/how-we-rate, /responsible-gambling)
- [x] Affiliate links via /go/[slug] routes
- [x] Tables for comparison data (rich snippets potential)
- [x] FAQ sections (FAQ schema potential)
- [x] Proper alt text for images
- [x] Call-to-action links
- [x] "Last updated" timestamp
- [x] Responsible gambling disclaimer
