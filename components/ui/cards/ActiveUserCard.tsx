export default function ActiveUserCard() {
  return (
    <article className="flex w-full space-x-2">
      <div className="h-9 w-9 rounded-full bg-gray-500"></div>
      <section className="flex flex-col">
        <h3 className="text-sm font-medium text-black">Jacob Jones</h3>
        <p className="text-xs text-green-600">Online</p>
      </section>
    </article>
  );
}
