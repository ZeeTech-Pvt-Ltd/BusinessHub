export default function Section({
  id,
  children,
  className = '',
  alt = false,
}) {
  return (
    <section
      id={id}
      className={`section ${alt ? 'section--alt' : ''} ${className}`}
    >
      <div className="container">{children}</div>
    </section>
  );
}
