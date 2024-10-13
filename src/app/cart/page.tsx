import Hello from "./Hello";

export default function Cart() {
  return (
    <div className="w-full text-white">
      <h2 className="text-center font-bold text-[40px]">Cart</h2>
      <CartItem />
      <CartItem />
      <Hello />
    </div>
  );
}

function CartItem() {
  return (
    <div className="p-[10px] flex justify-around border-b border-b-1 border-solid border-white">
      <p>상품명</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                      server component vs client component                  */
/* -------------------------------------------------------------------------- */

// 아무데나 대충 만든건 자동으로 server component가 됩니다.
// 반면에 파일 맨 위에 'use client' 넣고 만드는건
// client component가 됩니다.

// server component
// - html에 자바스크립트 기능 넣기 불가능
// - useState, useEffect등 사용 불가능
// - 자바스크립트 기능이 없기 때문에 로딩속도가 빠릅니다
// - 검색엔진 유리

// client component
// - html에 자바스크립트 기능넣기 가능
// - useState, useEffect등 사용 가능
// - 자바스크립트 기능이 많이 필요하기 때문에 로딩속도가 느립니다
// - hydration과정이 필요하기 때문에 로딩 속도가 느립니다. (hydration: html 유저에게 보낸 후에 자바스크립트로 html 다시 읽고 분석하는 일)

// 큰페이지는 server component 추천
// JS기능 필요한 곳은 client component 추천
