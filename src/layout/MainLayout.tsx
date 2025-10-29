type MainLayoutProps = React.PropsWithChildren

function Header() {
  return (
    <div className="bg-white border border-border text-center">
      <h1>React Commerce</h1>
    </div>
  )
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="bg-white border border-border w-screen h-screen">
      <Header />

      <div className="p-4">
        {children}
      </div>
    </div>
  )
}
