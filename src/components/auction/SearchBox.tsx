import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import itemCategories from "@/assets/auction/itemCategories.json";

export default function SearchBox({ inputText, setInputText, category, setCategory }) {
  const detailCategoryName = itemCategories
    .find(item => item.category_name === category.category)
    ?.detail_category.find(item => item.detail_category_id === category.detailCategory)?.detail_category_name;

  return (
    <section className="grid grid-rows-2 gap-2 pb-2">
      <div className="grid grid-cols-[auto_120px] gap-2">
        <Input
          type="text"
          placeholder="아이템 이름을 입력하세요."
          value={inputText}
          onChange={e => setInputText(e.target.value)}
        />
        <Button type="button" className="w-28">
          찾기
        </Button>
      </div>

      <div className="grid grid-cols-[auto_120px] gap-2 items-center">
        <div>
          {category.category} {">"} {detailCategoryName}
        </div>
        <Button
          type="button"
          className="w-28"
          onClick={() => {
            setInputText("");
            setCategory({ category: null, detailCategory: null });
          }}>
          검색 초기화
        </Button>
      </div>
    </section>
  );
}
