type PageProps = {
  params: Promise<{
    slug: string[];
  }>;
};

export default async function BillPage({ params }: PageProps) {
  const { slug } = await params;
  const [adminId, tableId, tableName] = slug;

  return (
    <div>
      <h1>Bill Page</h1>
      <p>Admin ID: {adminId}</p>
      <p>Table ID: {tableId}</p>
      <p>Table Name: {tableName}</p>
    </div>
  );
}
