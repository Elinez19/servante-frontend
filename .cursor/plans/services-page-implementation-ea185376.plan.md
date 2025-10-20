<!-- ea185376-7619-4894-8981-b4fe5c359c05 49776830-5838-4bfa-bf94-0fd7c6cfb54d -->
# Shadcn UI Component Refactor

## Overview

Replace custom-built components in the Services page with shadcn/ui components, maintaining the premium black/white aesthetic with brand colors.

## Brand Colors

- **Primary Blue**: `#1e3a8a` (for buttons, active states)
- **Accent Orange**: `#f97316` (for highlights, CTAs)
- **Base**: Black/white premium theme

## Components to Refactor

### 1. **Pagination Component**

**Current**: `src/components/Pagination.tsx` (custom)
**Replace with**: shadcn `Pagination` components
**Changes**:

- Use `Pagination`, `PaginationContent`, `PaginationItem`, `PaginationLink`
- Style active state with brand blue
- Keep ellipsis logic for many pages
- Maintain same API for parent components

### 2. **ServiceSearch Component**  

**Current**: `src/components/ServiceSearch.tsx` (custom input)
**Replace with**: shadcn `Input` with icons
**Changes**:

- Use shadcn Input component
- Keep debounce logic (300ms)
- Add Search icon from lucide
- Add clear button (X icon)
- Style with brand colors

### 3. **ServiceSort Component**

**Current**: `src/components/ServiceSort.tsx` (native select)
**Replace with**: shadcn `Select` component
**Changes**:

- Use `Select`, `SelectTrigger`, `SelectContent`, `SelectItem`
- Keep same sort options
- Better mobile UX with shadcn
- Brand color styling

### 4. **ServiceFilters Component**

**Current**: Mix of custom buttons and radio inputs
**Replace with**: shadcn `Tabs` for categories + `RadioGroup` for filters
**Changes**:

- Use Tabs for category switching (cleaner than pills)
- Use RadioGroup for rating/price filters
- Better responsive behavior
- Card wrapper for sidebar filters
- Brand styling throughout

### 5. **ServiceCard Enhancements**

**Current**: Custom card component
**Enhance with**: shadcn `Card`, `Badge`, `Button`
**Changes**:

- Wrap in shadcn Card for consistency
- Use Badge for category tags
- Use Button component for "Book Now"
- Keep existing layout, improve styling

### 6. **Breadcrumb Navigation**

**Current**: Custom breadcrumb in category pages
**Replace with**: shadcn `Breadcrumb` component
**Changes**:

- Use `Breadcrumb`, `BreadcrumbList`, `BreadcrumbItem`, etc.
- Maintain same navigation structure
- Better accessibility

## Files to Modify

1. **`src/components/Pagination.tsx`** - Replace with shadcn wrapper
2. **`src/components/ServiceSearch.tsx`** - Use shadcn Input
3. **`src/components/ServiceSort.tsx`** - Use shadcn Select
4. **`src/components/ServiceFilters.tsx`** - Use Tabs + RadioGroup
5. **`src/components/ServiceCard.tsx`** - Enhance with Card/Badge/Button
6. **`src/app/services/page.tsx`** - Update to use new components
7. **`src/app/services/[category]/page.tsx`** - Add Breadcrumb, update components

## Implementation Order

1. Update Pagination (low-risk, easy win)
2. Update ServiceSort (straightforward replacement)
3. Update ServiceSearch (add Input styling)
4. Update ServiceCard (enhance existing)
5. Update ServiceFilters (more complex, Tabs integration)
6. Add Breadcrumb to category pages
7. Final polish and color consistency check

## Benefits

- **Consistency**: Same UI patterns across entire app
- **Accessibility**: Shadcn components have built-in a11y
- **Maintenance**: Less custom code to maintain
- **Quality**: Professional, polished components
- **Responsive**: Better mobile behavior out of the box
- **Dark mode ready**: If needed in future

## Testing Checklist

- [ ] Pagination works on all pages
- [ ] Search debouncing still works
- [ ] Sort dropdown functions correctly
- [ ] Category tabs switch properly
- [ ] Filters update URL params
- [ ] Mobile responsive on all breakpoints
- [ ] Brand colors consistent throughout
- [ ] Accessibility (keyboard nav, screen readers)

### To-dos

- [ ] Replace custom Pagination with shadcn Pagination components
- [ ] Replace ServiceSort with shadcn Select component
- [ ] Replace ServiceSearch with shadcn Input component
- [ ] Enhance ServiceCard with shadcn Card, Badge, and Button
- [ ] Replace ServiceFilters with shadcn Tabs and RadioGroup
- [ ] Add shadcn Breadcrumb to category pages
- [ ] Final color consistency check and polish across all pages