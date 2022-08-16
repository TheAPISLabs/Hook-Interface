import React from 'react'
// import ImageGallery from 'react-image-gallery'
import styled from 'styled-components/macro'

import { isMobile } from '../../GameDetails/components/until.js'
// import ImageGallery from 'react-image-gallery'
export default function Players() {
  const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ]
  const PlayerBigBox = styled.div`
    height: 774px;
    @media screen and (max-width: 1440px) {
      height: 542px;
    }
  `
  const IsMobilePlayerBigBox = styled.div`
    height: 648px;
  `
  const PlayerBox = styled.div`
    height: 720px;
    border-radius: 32px;
    background: rgba(228, 228, 228, 0.1);
    margin-top: 28px;
    @media screen and (max-width: 1440px) {
      height: 542px;
      border-radius: 24px;
      background: rgba(228, 228, 228, 0.1);
    }
  `
  const MobilePlayerBox = styled.div`
    height: 579px;
    border-radius: 32px;
    background: rgba(228, 228, 228, 0.1);
    margin-top: 30px;
  `

  const MobileTitles = styled.div`
    color: rgba(255, 255, 255, 1);
    font-size: 31px;
    font-weight: 600;
    font-family: 'Inter';
    text-align: left;
  `

  const Titles = styled.div`
    color: rgba(255, 255, 255, 1);
    font-size: 24px;
    font-weight: 500;
    font-family: 'Inter';
    text-align: left;
    @media screen and (max-width: 1440px) {
      color: rgba(255, 255, 255, 1);
      font-size: 18px;
      font-weight: 500;
      font-family: 'Inter';
      text-align: left;
    }
  `
  return (
    <>
      {isMobile() ? (
        <IsMobilePlayerBigBox>
          <MobileTitles>Featured & Recommended</MobileTitles>
          <MobilePlayerBox>
            {/* <ImageGallery
            thumbnailPosition="right"
            items={images}
            showFullscreenButton={false}
            showPlayButton={false}
            // showThumbnails={isMobile() ? false : true}
          /> */}
          </MobilePlayerBox>
        </IsMobilePlayerBigBox>
      ) : (
        <PlayerBigBox>
          <Titles>Featured & Recommended</Titles>
          <PlayerBox>
            {/* <ImageGallery
            thumbnailPosition="right"
            items={images}
            showFullscreenButton={false}
            showPlayButton={false}
            // showThumbnails={isMobile() ? false : true}
          /> */}
          </PlayerBox>
        </PlayerBigBox>
      )}
    </>
  )
  // <ImageGallery items={images} />
}
