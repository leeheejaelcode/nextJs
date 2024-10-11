export default function Cart() {
  return (
    <div className="w-full text-white">
      <h2 className="text-center font-bold text-[40px]">Cart</h2>
      <div className="p-[10px] flex justify-around border-b border-b-1 border-solid border-white">
        <p>상품명</p>
        <p>$40</p>
        <p>1개</p>
      </div>
      <div className="p-[10px] flex justify-around border-b border-solid border-white">
        <p>상품명</p>
        <p>$40</p>
        <p>1개</p>
      </div>
    </div>
  );
}
