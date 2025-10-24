import Header from "../Header";

export default function HeaderExample() {
  return (
    <div className="space-y-4">
      <Header />
      <Header showBackButton backTo="/" title="Quiz in Progress" />
    </div>
  );
}
