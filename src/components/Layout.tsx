
type Props = {
  children: React.ReactNode;
};

export default function Layout(props: Props) {
  const { children } = props;
  return (
    <main className="flex justify-center">
      <div className="border-2 h-screen	 border-cyan-900 max-w-5xl p-10">{children}</div>
    </main>
  );
}
