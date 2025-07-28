import Menu from "@/components/cashier/menu";
import Bill from "@/components/cashier/bill";

type PageProps = {
  params: Promise<{
    slug: string[];
  }>;
};

export default async function BillPage({ params }: PageProps) {
  const { slug } = await params;
  const [adminId, tableId, tableName] = slug;
  console.log(adminId,tableId,tableName)

  return (
    <div className="flex h-full">
      {/* Menu with 1.5x width */}
      <div className="flex-[1.5] border-r">
        <Menu />
      </div>

      {/* Bill with normal width */}
      <div className="flex-[1]">
        <Bill />
      </div>
    </div>
  );
}
