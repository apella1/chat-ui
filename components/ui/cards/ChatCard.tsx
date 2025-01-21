export default function ChatCard() {
  return (
    <article className="flex w-full space-x-2">
      <div className="h-9 w-9 rounded-full bg-gray-500"></div>
      <section className="flex flex-col space-y-1 flex-grow">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-black">Jacob Jones</h3>
          <p className="text-xs text-gray-500">10:35</p>
        </div>
        <p className="text-xs text-gray-500">
          Wow, your latest design is great!
        </p>
      </section>
    </article>
  );
}
