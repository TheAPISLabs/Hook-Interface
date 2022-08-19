/* eslint-disable react/display-name */
import React, { useEffect, useState } from 'react'
import ImageGallery from 'react-image-gallery'

// import { isMobile } from '../../gameDetail/compoments/until.js'
import { isMobile } from '../../GameDetails/components/until.js'
import SwiperItem from './SwiperItem'
export default function GameSwipper() {
  const [images, setImages] = useState([
    {
      thumbnail: `https://picsum.photos/id/1019/1000/600/`,
      original: `https://picsum.photos/id/1019/1000/600/`,
      embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
      originalClass: 'featured-slide',
      thumbnailClass: 'featured-thumb',
      renderItem: () => <SwiperItem></SwiperItem>,
    },
    {
      original: `https://picsum.photos/id/1019/1000/600/`,
      thumbnail: `https://picsum.photos/id/1019/1000/600/`,
      originalClass: 'featured-slide',
      thumbnailClass: 'featured-thumb',

      renderItem: () => <SwiperItem></SwiperItem>,
    },
    {
      original: `https://picsum.photos/id/1019/1000/600/`,
      thumbnail: `https://picsum.photos/id/1019/1000/600/`,
      originalClass: 'featured-slide',
      thumbnailClass: 'featured-thumb',
      renderItem: () => <SwiperItem></SwiperItem>,
    },
    {
      original: `https://picsum.photos/id/1019/1000/600/`,
      thumbnail: `https://picsum.photos/id/1019/1000/600/`,
      originalClass: 'featured-slide',
      thumbnailClass: 'featured-thumb',
      renderItem: () => <SwiperItem></SwiperItem>,
    },
    {
      original: `https://picsum.photos/id/1019/1000/600/`,
      thumbnail: `https://picsum.photos/id/1019/1000/600/`,
      originalClass: 'featured-slide',
      thumbnailClass: 'featured-thumb',
      renderItem: () => <SwiperItem></SwiperItem>,
    },
    {
      original: `https://picsum.photos/id/1019/1000/600/`,
      thumbnail: `https://picsum.photos/id/1019/1000/600/`,
      originalClass: 'featured-slide',
      thumbnailClass: 'featured-thumb',
      renderItem: () => <SwiperItem></SwiperItem>,
    },
    {
      original: `https://picsum.photos/id/1019/1000/600/`,
      thumbnail: `https://picsum.photos/id/1019/1000/600/`,
      originalClass: 'featured-slide',
      thumbnailClass: 'featured-thumb',
      renderItem: () => <SwiperItem></SwiperItem>,
    },
  ])
  useEffect(() => {
    const gameListData = localStorage.getItem('gameListData')
    // console.log(JSON.parse(gameListData))
    const a = JSON.parse(gameListData).records.map((res) => {
      return {
        thumbnail: res.imgs[0].url,
        original: res.imgs[0].url,
        // embedUrl: res.videos[0].url,
        embedUrl: 'https://www.youtube.com/embed/Vut_tqyw_2U',
        originalClass: 'featured-slide',
        thumbnailClass: 'featured-thumb',
        renderItem: () => (
          <SwiperItem
            src={res.videos[0].url}
            gameStudio={res.gameStudio}
            gameUserIcon={res.gameUserIcon}
            genres={res.genres}
            name={res.name}
            game={res}
          ></SwiperItem>
        ),
      }
    })
    if (a.length > 1) {
      console.log(a)
      setImages(a)
    }
    // setImages(a)
    // setImages(gameListData.records)
  }, [])

  return (
    <div marginTop={{ sm: '72px', md: '74px' }}>
      <div
        style={{
          color: ' rgba(255,255,255,1)',
          // fontSize: '24px',
          fontWeight: ' 500',
          spanAlign: 'left',
          lineHeight: '32px',
          fontSize: '7.2w',
          marginBottom: '30px',
          // marginBottom: '26px',
        }}
        className="font-Inter-SemiBold"
      >
        <span
          style={{
            fontSize: '16px',
            display: 'none',
          }}
        >
          Game
        </span>
        Featured & Recommended
      </div>
      <div
        style={{
          width: '100%',
          height: '34vw',
          borderRadius: '22px',
          background: 'rgba(228,228,228,0.1)',
          overflow: 'hidden',
        }}
      >
        <ImageGallery
          thumbnailPosition="right"
          items={images}
          showFullscreenButton={false}
          showNav={isMobile() ? true : true}
          showPlayButton={false}
          showThumbnails={isMobile() ? false : false}
        />
      </div>
    </div>
  )
}
