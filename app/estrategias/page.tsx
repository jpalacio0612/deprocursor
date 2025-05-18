import { Card } from "@/components/Card";
import { data } from "@/lib/data";

export default function Page() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-5">
      {data.map((item) => (
        <Card key={item.title} {...item} />
      ))}
    </section>
  );
}
