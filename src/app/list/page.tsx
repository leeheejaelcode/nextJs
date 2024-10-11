export default function List(): JSX.Element {
  return (
    <div className="bg-slate-500 h-screen">
      <div className="flex justify-center items-center flex-col gap-3 h-screen">
        <h2 className="text-3xl font-bold">상품 목록</h2>
        <div className="p-8 border border-solid border-black rounded-md bg-white">
          <h4>상품1 $40</h4>
        </div>
        <div className="p-8 border border-solid border-black rounded-md bg-white">
          <h4>상품1 $40</h4>
        </div>
      </div>
    </div>
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
