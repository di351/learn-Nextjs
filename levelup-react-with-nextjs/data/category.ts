// import { notFound } from "next/navigation";

export type Category = {
    name: string;
    slug: string;
    count: number;
    parent: string | null;
};

export const categories: { items: Category[] }[] = [
    {
        items: [
            { name: "전자제품", slug: "electronics", count: 11, parent: null },
            { name: "의류", slug: "clothing", count: 12, parent: null },
            { name: "서적", slug: "books", count: 10, parent: null },
            { name: "모바일", slug: "phones", count: 4, parent: "electronics" },
            { name: "태블릿", slug: "tablets", count: 5, parent: "electronics" },
            { name: "노트북", slug: "laptops", count: 2, parent: "electronics" },
            { name: "상의", slug: "tops", count: 3, parent: "clothing" },
            { name: "바지", slug: "shorts", count: 4, parent: "clothing" },
            { name: "신발", slug: "shoes", count: 5, parent: "clothing" },
            { name: "소설", slug: "fiction", count: 5, parent: "books" },
            { name: "인물", slug: "biography", count: 2, parent: "books" },
            { name: "교육", slug: "education", count: 3, parent: "books" },
        ],
    },
];

export function getTopCategories(): Category[] {
    return categories.flatMap((categoryGroup) =>
        categoryGroup.items.filter((item) => item.parent === null)
    );
}

export function getCategories(parent: string): Category[] {
    return categories.flatMap((categoryGroup) =>
        categoryGroup.items.filter((item) => item.parent === parent)
    );
}

// export function getCategory(slug: string): Category {
//   for (const categoryGroup of categories) {
//     const foundCategory = categoryGroup.items.find(
//       (item) => item.slug === slug
//     );
//     if (foundCategory) {
//       return foundCategory;
//     }
//   }
//   return { name: "", slug: "", count: 0, parent: null };
// }
export function getCategory(slug: string): Category {
    // 모든 카테고리 그룹의 아이템을 평평하게 만든 후, slug가 일치하는 카테고리를 찾습니다.
    const foundCategory = categories
        .flatMap((categoryGroup) => categoryGroup.items)
        .find((item) => item.slug === slug);

    // 찾은 카테고리가 있으면 반환하고, 없으면 기본값을 반환합니다.
    return foundCategory || { name: "", slug: "", count: 0, parent: null };
}
