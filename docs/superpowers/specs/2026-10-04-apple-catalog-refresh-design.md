# Apple catalog refresh + presentability pass

## Goal
Make millier-store demo-ready with current Apple catalog imagery and fix broken UI flows.

## Decisions
- Product images: download from Apple into `/public/assets/products/...` (local serving)
- Scope: catalog refresh + broader smoke-fix of drawers, cart/checkout, carousels, forms
- No MillierBE changes; mocks only

## Catalog
### iPhone
- iPhone 17 Pro Max
- iPhone 17 Pro
- iPhone Air
- iPhone 17

### Mac (M5)
- MacBook Air 13-inch M5
- MacBook Air 15-inch M5
- MacBook Pro 14-inch M5
- MacBook Pro 14-inch M5 Pro
- Mac mini M5 Pro

### Accessories (AirPods only)
- AirPods 5
- AirPods 5 with ANC (if distinct SKU)
- AirPods Pro 3
- AirPods Max 2

## Implementation notes
- Update `mocks/data/products.ts`, `productDetails.ts`, `categories.ts`, `orders.ts`
- Update homepage hero IDs/copy/images to flagship iPhone 17 Pro Max + second hero product
- Point all product `image` fields at `/assets/products/...`
- Smoke-fix and fix: home, shop, category pages, product detail, drawers, cart/checkout
- Keep existing antd/Tailwind style fixes

## Out of scope
- Live Apple API / pricing sync
- Full visual redesign
- Backend changes
