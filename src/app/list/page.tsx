// next.js로 이미지 최적화 하는 방법
import Image from "next/image";
import 돈까스 from "/public/돈까스.jpg";
import 햄버거 from "/public/햄버거.jpg";
import 제육 from "/public/제육.jpg";
import 쌈밥 from "/public/쌈밥.jpeg";

// Image 컴포넌트 사용하기

export default function List(): JSX.Element {
  const product = [
    {
      name: "돈까스",
      price: 13000,
      img: 돈까스,
    },
    {
      name: "햄버거",
      price: 8000,
      img: 햄버거,
    },
    {
      name: "제육",
      price: 8000,
      img: 제육,
    },
    {
      name: "쌈밥",
      price: 10000,
      img: 쌈밥,
    },
  ];

  return (
    <>
      <h2 className="text-3xl font-bold">상품 목록</h2>
      <div className="flex justify-center items-center gap-3 ">
        {product.map(({ name, price, img }, i) => {
          return (
            <div
              className="p-8 border border-solid border-black rounded-md bg-white min-w-[200px]"
              key={i}>
              <div>
                <h4>{name}</h4>
                <p>{price.toLocaleString("ko-KR")}원</p>
              </div>
              <div>
                <Image
                  src={img}
                  alt=""
                  width={100}
                  height={100}
                  className="max-h-[100px] min-h-[100px]"
                />
                {/* 외부이미지는 width,height 속성을 필수로 필요합니다. */}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

// app 폴더에서 페이지는 page.tsx 파일로 정의되며, 폴더 구조에 따라 URL이 생성됩니다.

// /app
//   ├── page.tsx        // 루트 경로 (/)
//   ├── cart
//   │   └── page.tsx    // /contact 경로
//   └── list
//       └── page.tsx    // /list 경로

// app/list/page.tsx
// export default function List(): JSX.Element {
//   return (
//     <div className="bg-slate-500 h-screen">
//       <div className="flex justify-center items-center flex-col gap-3 h-screen">
//         <h2 className="text-3xl font-bold">상품 목록</h2>
//         <div className="p-8 border border-solid border-black rounded-md bg-white">
//           <h4>상품1 $40</h4>
//         </div>
//         <div className="p-8 border border-solid border-black rounded-md bg-white">
//           <h4>상품1 $40</h4>
//         </div>
//       </div>
//     </div>
//   );
// }
