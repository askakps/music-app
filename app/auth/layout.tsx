export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className="w-screen h-screen">
        <div className="max-w-7xl w-full mx-auto h-full">
            {children}
        </div>
      </section>
    )
  }