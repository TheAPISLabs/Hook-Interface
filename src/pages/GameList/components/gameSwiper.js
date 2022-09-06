/* eslint-disable react/display-name */
import { Carousel } from '@douyinfe/semi-ui'
import React, { useEffect, useState } from 'react'
import ImageGallery from 'react-image-gallery'

import SwiperItem from './SwiperItem.js'

export default function GameSwipper ({ }) {
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
          textAlign: 'left',
          lineHeight: '32px',
          // marginBottom: '26px',
        }}
        fontSize={{ sm: '7.2vw', md: '24px' }}
        marginBottom={{ sm: '30px', md: '26px' }}
        className="font-Inter-SemiBold"
      >
        <span fontSize="16px" display={{ md: 'none' }}>
          Game
        </span>
        Featured & Recommended
      </div>
      <div
        width="100%"
        height={{ sm: '140vw', md: '34vw' }}
        borderRadius="22px"
        background="rgba(228,228,228,0.1)"
        overflow="hidden"
      >
        <Carousel></Carousel>
        <ImageGallery
          thumbnailPosition="right"
          items={images}
          showFullscreenButton={false}
          showNav={false}
          showPlayButton={false}
          showThumbnails={true}
        />
      </div>
    </div>
  )
}
