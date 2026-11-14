export const CATEGORY_IDS = ['dokumentter', 'uy-bulo', 'pensiya-jolokpul', 'biznes', 'mulk', 'den-sooluk'] as const;
export type CategoryId = (typeof CATEGORY_IDS)[number];

export interface Category {
  id: CategoryId;
  title: string;
  description: string;
  /** SVG path (24×24, stroke) */
  icon: string;
}

export const CATEGORIES: Category[] = [
  {
    id: 'dokumentter',
    title: 'Жеке документтер',
    description: 'Паспорт, прописка, айдоочулук күбөлүк',
    icon: 'M4 5h16v14H4zM8 10a2 2 0 1 0 4 0a2 2 0 1 0-4 0M6.5 16c.6-1.5 1.9-2.3 3.5-2.3s2.9.8 3.5 2.3M15 9h3M15 12h3',
  },
  {
    id: 'uy-bulo',
    title: 'Үй-бүлө',
    description: 'Нике, балалуу болуу, ажырашуу',
    icon: 'M3 11l9-7 9 7M5 10v10h14V10M10 20v-5h4v5',
  },
  {
    id: 'pensiya-jolokpul',
    title: 'Пенсия жана жөлөкпул',
    description: 'Пенсияга чыгуу, социалдык жардам',
    icon: 'M12 3v18M7 7.5C7 5.6 9.2 4.5 12 4.5s5 1.1 5 3-2.2 3-5 3.5-5 1.6-5 3.5 2.2 3 5 3 5-1.1 5-3',
  },
  {
    id: 'biznes',
    title: 'Иш жана бизнес',
    description: 'Жеке ишкер, патент, салык',
    icon: 'M3 8h18v12H3zM8 8V5h8v3M3 13h18',
  },
  {
    id: 'mulk',
    title: 'Мүлк жана мурас',
    description: 'Мурас, үй жана жер',
    icon: 'M4 20V9l8-5 8 5v11M9 20v-6h6v6M2 20h20',
  },
  {
    id: 'den-sooluk',
    title: 'Ден соолук',
    description: 'Медициналык полис, жеңилдиктер',
    icon: 'M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10zM9 11h6M12 8v6',
  },
];

export const categoryById = (id: string) => CATEGORIES.find((c) => c.id === id)!;
