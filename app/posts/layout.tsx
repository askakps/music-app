export default function PostsLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <nav>This is  posts layout</nav>
   
        {children}
      </section>
    )
  }