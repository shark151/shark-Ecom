// 'use client'

// import { useState } from 'react'
// import Image from 'next/image'
// import Zoom from 'react-medium-image-zoom'
// import 'react-medium-image-zoom/dist/styles.css'
// import { Img } from '@react-email/components'
// export default function ProductGallery({ images }: { images: string[] }) {
//   const [selectedImage, setSelectedImage] = useState(0)
//   return (
//     <div className='flex gap-2'>
//       <div className='flex flex-col gap-2 mt-8'>
//         {images.map((image, index) => (
//           <button
//             key={index}
//             onClick={() => {
//               setSelectedImage(index)
//             }}
//             onMouseOver={() => {
//               setSelectedImage(index)
//             }}
//             className={`bg-white rounded-lg overflow-hidden ${
//               selectedImage === index
//                 ? 'ring-2 ring-blue-500'
//                 : 'ring-1 ring-gray-300'
//             }`}
//           >
//             <Image src={image} alt='thumbnail' className='object-cover' width={48} height={50} />
//           </button>
//         ))}
//       </div>

//       <div className='w-full'>
//         <Zoom>         
//             <Img
//               src={images[selectedImage]}
//               alt='product image'
//               className='object-contain w-full h-[500px]'
//             />
          
//         </Zoom>
//       </div>
//     </div>
//   )
// }
//===========================================

// 'use client'

// import { useState, useRef } from 'react'
// import Image from 'next/image'

// export default function ProductGallery({ images }: { images: string[] }) {
//   const [selectedImage, setSelectedImage] = useState(0)
//   const lensRef = useRef<HTMLDivElement>(null)
//   const imgContainerRef = useRef<HTMLDivElement>(null)

//   const handleMouseMove = (e: React.MouseEvent) => {
//     const lens = lensRef.current
//     const container = imgContainerRef.current
//     if (!lens || !container) return

//     const rect = container.getBoundingClientRect()
//     let x = e.clientX - rect.left
//     let y = e.clientY - rect.top

//     lens.style.left = x - 75 + 'px'
//     lens.style.top = y - 75 + 'px'
//     lens.style.backgroundPosition = `-${x * 2}px -${y * 2}px`
//   }

//   return (
//     <div className='flex gap-2'>
//       {/* Thumbnails */}
//       <div className='flex flex-col gap-2 mt-8'>
//         {images.map((image, index) => (
//           <button
//             key={index}
//             onClick={() => setSelectedImage(index)}
//             onMouseOver={() => setSelectedImage(index)}
//             className={`bg-white rounded-lg overflow-hidden ${
//               selectedImage === index
//                 ? 'ring-2 ring-blue-500'
//                 : 'ring-1 ring-gray-300'
//             }`}
//           >
//             <Image
//               src={image}
//               alt='thumbnail'
//               width={48}
//               height={48}
//               className='object-cover'
//             />
//           </button>
//         ))}
//       </div>

//       {/* Main Image with Hover Zoom Lens */}
//       <div
//         className='relative w-full h-[500px] overflow-hidden cursor-crosshair'
//         onMouseMove={handleMouseMove}
//         onMouseEnter={() => lensRef.current!.style.display = 'block'}
//         onMouseLeave={() => lensRef.current!.style.display = 'none'}
//         ref={imgContainerRef}
//       >
//         <img
//           src={images[selectedImage]}
//           alt='product'
//           className='object-contain w-full h-full'
//         />

//         {/* Zoom Lens */}
//         <div
//           ref={lensRef}
//           className='absolute w-[170px] h-[170px] rounded-full border-2 border-gray-300 shadow-lg hidden'
//           style={{
//             backgroundImage: `url(${images[selectedImage]})`,
//             backgroundRepeat: 'no-repeat',
//             backgroundSize: '900%',
//             display: 'none',
//           }}
//         />
//       </div>
//     </div>
//   )
// }


//=======================================================

'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'

export default function ProductGallery({ images }: { images: string[] }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [showZoom, setShowZoom] = useState(false)

  const imgRef = useRef<HTMLImageElement>(null)
  const zoomRef = useRef<HTMLDivElement>(null)
  const lensRef = useRef<HTMLDivElement>(null)

  const zoomLevel = 3 // مستوى التكبير ×3 — يمكنك تغييره إلى 4 أو 5

  const handleMouseMove = (e: React.MouseEvent) => {
    const img = imgRef.current
    const lens = lensRef.current
    const zoom = zoomRef.current
    if (!img || !lens || !zoom) return

    const rect = img.getBoundingClientRect()

    // موقع الماوس داخل الصورة
    let x = e.clientX - rect.left
    let y = e.clientY - rect.top

    if (x < 0 || y < 0 || x > rect.width || y > rect.height) return

    // حجم العدسة
    const lensSize = 150

    // تحريك العدسة
    lens.style.left = x - lensSize / 4 + '1px'
    lens.style.top = y - lensSize / 4 + '1px'

    // حساب الخلفية المكبرة
    zoom.style.backgroundPosition = `-${x * zoomLevel}px -${y * zoomLevel}px`
  }

  return (
    <div className="flex gap-4">
      {/* الصور الصغيرة */}
      <div className="flex flex-col gap-2 mt-8">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            onMouseOver={() => setSelectedImage(index)}
            className={`bg-white rounded-lg overflow-hidden ${
              selectedImage === index
                ? 'ring-2 ring-blue-500'
                : 'ring-1 ring-gray-300'
            }`}
          >
            <Image
              src={image}
              alt="thumbnail"
              width={48}
              height={48}
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* الصورة الرئيسية + العدسة */}
      <div
        className="relative w-[500px] h-[500px] border overflow-hidden"
        onMouseEnter={() => setShowZoom(true)}
        onMouseLeave={() => setShowZoom(false)}
        onMouseMove={handleMouseMove}
      >
        <img
          ref={imgRef}
          src={images[selectedImage]}
          alt="product"
          className="w-full h-full object-contain"
        />

        {/* العدسة */}
        <div
          ref={lensRef}
          className="absolute border border-gray-400"
          style={{
            width: '200px',
            height: '200px',
            display: showZoom ? 'block' : 'none',
            backgroundColor: 'rgba(233, 225, 225, 0.21)',
            backdropFilter: 'blur(px)',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* نافذة الزووم على اليمين */}
      <div
        ref={zoomRef}
        className="w-[400px] h-[500px] border bg-white"
        style={{
          backgroundImage: `url(${images[selectedImage]})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: `${zoomLevel * 100}%`,
          display: showZoom ? 'block' : 'none',
        }}
      />
    </div>
  )
}