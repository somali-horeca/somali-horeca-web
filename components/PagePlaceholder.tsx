type Props = {
  eyebrow: string;
  title: string;
  description: string;
  todo: string[];
};

export default function PagePlaceholder({ eyebrow, title, description, todo }: Props) {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <div className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-red">
        {eyebrow}
      </div>
      <h1 className="font-serif text-3xl font-bold md:text-4xl">{title}</h1>
      <p className="mt-4 max-w-2xl text-ink/70">{description}</p>

      <div className="mt-10 rounded-md border border-dashed border-ink/25 bg-paper-dark p-6">
        <div className="mb-3 font-mono text-xs uppercase tracking-wider text-gold-dark">
          To build on this page
        </div>
        <ul className="list-inside list-disc space-y-2 text-sm text-ink/75">
          {todo.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
