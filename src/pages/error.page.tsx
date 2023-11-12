export default function ErrorPage(): React.JSX.Element {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2">
      <h1 className="text-3xl font-bold">404 - Not Found</h1>
      <p>This page does not exist.</p>

      <a href="/" className="text-blue-500 hover:underline">
        Go back home
      </a>
    </div>
  )
}
