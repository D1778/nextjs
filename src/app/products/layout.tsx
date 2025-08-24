export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <div>
        <h2 className="text-xl font-semibold mb-2">Product Details</h2>
      </div>
    </div>
  );
}
