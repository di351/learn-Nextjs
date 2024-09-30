import { getCategories, getCategory } from "@/data/category";
import { ClickCounter } from "@/ui/click-counter";
import { TabGroup } from "@/ui/tab-group";
import React from "react";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { categorySlug: string };
}) {
  const category = getCategory(params.categorySlug);
  const items = getCategories(params.categorySlug);

  return (
    <div className="space-y-9">
      <div>
        <div className="flex justify-between">
          <TabGroup
            path={`/not-found/${category.slug}`}
            items={[
              {
                text: "전체",
              },
              ...items.map((x) => ({
                text: x.name,
                slug: x.slug,
              })),
              {
                text: "❗미존재 하위항목❗",
                slug: "does-not-exist",
              },
            ]}
          />

          <div className="self-start">
            <ClickCounter />
          </div>
        </div>
      </div>

      <div>{children}</div>
    </div>
  );
}
