export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 text-center text-sm text-gray-600">
      <div className="mx-auto max-w-6xl px-4">
        <p>© {new Date().getFullYear()} Gator Cricket Club — University of Florida</p>
      </div>
    </footer>
  );
}
