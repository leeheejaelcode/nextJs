export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <div>
      <p>현대카드 무이자이벤트중</p>
      {children}
    </div>
  );
}
