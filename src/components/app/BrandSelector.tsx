import { brands } from "@/data/brands";

export default function BrandSelector() {
  return (
    <select className="bg-black border p-2 rounded">
      {brands.map((brand) => (
        <option key={brand.id}>{brand.name}</option>
      ))}
    </select>
  );
}
