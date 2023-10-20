export default function AuthLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className="w-screen h-screen">
        <div className="max-w-7xl w-full mx-auto h-full">
            {children}
        </div>
        {/* Include shared UI here e.g. a header or sidebar */}
      </section>
    )
  }