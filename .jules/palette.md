## 2025-05-18 - Accessibility for UI Toggle Button Groups
**Learning:** Toggle controls like theme switchers and language selector buttons without `aria-pressed` or dynamic `aria-label` leave assistive technology users uninformed about current active selection states.
**Action:** Always maintain `aria-pressed="true|false"` and localized dynamic `aria-label` attributes on interactive toggle buttons when updating visual active classes (`.ativa`, `.active`).
