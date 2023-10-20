export default function SearchLayout({
    children, 
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className="w-screen h-screen bg-gray-800 py-8">
            {children}
      </section>
    )
  }