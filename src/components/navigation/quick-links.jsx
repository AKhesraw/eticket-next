export default function QuickLinks({ children, searchInput}) {
  return (
    <div className="w-64 shrink-0 fixed">
      <div className="pe-6">
        <h3 className="font-semibold mb-4">Quick Links</h3>
        {searchInput && (
          <div className="mb-4">
            {searchInput}
          </div>
        )}
        <div className="space-y-2 w-full">{children}</div>
      </div>
    </div>
  );
}
