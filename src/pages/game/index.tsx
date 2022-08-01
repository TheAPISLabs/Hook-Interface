import './index.css'
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'

import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import { EffectCoverflow, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js'

// Import Swiper React components
import { getGameItemsDatas } from '../../hook/hook.js'
import { formatNumber } from '../../hook/untils.js'
const Box = styled.div`
  transition: transform 0.3s ease;

  position: relative;
`
const GameBox = styled.div`
  // display: flex;
  margin: 0 auto;
  min-height: 84vh;
`
const Flex = styled.div`
  display: flex;
  transition: transform 0.3s ease;

  position: relative;
`
const Image = styled.img`
  transition: transform 0.3s ease;

  position: relative;
`
const Link = styled.a`
  transition: transform 0.3s ease;

  position: relative;
`
export default function Track() {
  // Chakra Color Mode

  const [inputValue, setInputValue] = useState('')
  const history = useHistory()

  const [swiperData, setSwiperData] = useState([
    {
      gpId: '07dc32c1d5564f8cb4e59c7916ed41e0',
      name: 'Town Star',
      genres: 'Simulation',
      version: 'Beta',
      initialReleaseDate: 1582905600000,
      twitterFollower: 374067,
      gameStudio: 'Gala Games',
      gameIntroduction:
        'Farming with a Competitive Twist!\r\nTown Star is a competitive farming game from one of the co-founders of Zynga, the company behind Farmville. Each week, the top players on the leaderboard win big prizes, and every day, players complete challenges to unlock and collect TownCoin play-to-earn rewards! The goal is to grow, gather and craft your way to building the most efficient and productive town imaginable. Will you be a Town Star?\r\n\r\nThe Power of Blockchain\r\nTown Star is the flagship game of Gala Games, built on Gala’s decentralized network and utilizing the Ethereum blockchain. Player-owned NFTs offering in-game advantages can be purchased and traded on secondary markets!',
      gameUrl: 'https://townstar.com/',
      liked: 19,
      ngmi: 0,
      moon: 19,
      twtter: 'GoGalaGames',
      backPeriod: 8,
      gameUserIcon: 'https://img0.baidu.com/it/u=686928946,1069813836&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
      top: [
        {
          gpsId: '6e9cd90bf2da4733975a8d45123196ad',
          gpId: '07dc32c1d5564f8cb4e59c7916ed41e0',
          name: 'Town Star',
          volume: '277531.9600000000209547579288482666015625',
          marketValue: '408811',
          imgUrl: 'https://s2.fxhapp.xyz/logo/1/town-star.png?x-oss-process=style/coin_36_webp&v=1637048599',
          tokenHash: '0x3Dd98C8A089dBCFF7e8FC8d4f532BD493501Ab7F',
          symbol: 'TOWN',
          type: 'ERC20',
          status: '1',
          price: '0.019007',
          circulatingSupply: '21508443',
          species: 'defi',
          introductionCurrency: 'not',
          activeUsers: '14590',
        },
      ],
      nfts: [
        {
          gpsId: '462f73ebe5bf44148805e2390d76301c',
          gpId: '07dc32c1d5564f8cb4e59c7916ed41e0',
          name: 'Land',
          volume: '0',
          marketValue: '0',
          imgUrl:
            'https://lh3.googleusercontent.com/rJ7PpYHm6WMiAJIqDhbjbg_wBoNfGuKZqvOFZy2Qpsv6k917C9x2UAI1oK-T72IuMGgfBXorVRMPc8Gm0UrTtsEsw505cVA5AX6hsw=w600',
          tokenHash: '0',
          symbol: '0',
          type: 'ERC20',
          status: '2',
          price: '0',
          circulatingSupply: '0',
          species: 'nft',
          introductionCurrency: 'not',
          activeUsers: '0',
        },
        {
          gpsId: '745ca45d0cb9468c8b963a042eeaaa73',
          gpId: '07dc32c1d5564f8cb4e59c7916ed41e0',
          name: 'Tools',
          volume: '0',
          marketValue: '0',
          imgUrl:
            'https://cdn.sanity.io/images/7fxqaivg/production/1831c34de1f9b9df5745bcff00879272daf04c5e-1400x500.png?w=600',
          tokenHash: '0',
          symbol: '0',
          type: 'ERC20',
          status: '2',
          price: '0',
          circulatingSupply: '0',
          species: 'nft',
          introductionCurrency: 'not',
          activeUsers: '0',
        },
      ],
      defis: [
        {
          gpsId: '6e9cd90bf2da4733975a8d45123196ad',
          gpId: '07dc32c1d5564f8cb4e59c7916ed41e0',
          name: 'Town Star',
          volume: '277531.9600000000209547579288482666015625',
          marketValue: '408811',
          imgUrl: 'https://s2.fxhapp.xyz/logo/1/town-star.png?x-oss-process=style/coin_36_webp&v=1637048599',
          tokenHash: '0x3Dd98C8A089dBCFF7e8FC8d4f532BD493501Ab7F',
          symbol: 'TOWN',
          type: 'ERC20',
          status: '1',
          price: '0.019007',
          circulatingSupply: '21508443',
          species: 'defi',
          introductionCurrency: 'not',
          activeUsers: '14590',
        },
      ],
      videos: [
        {
          gfId: '38de21951f2549988bd88fc4d4b88d7e',
          url: 'https://www.youtube.com/embed/ewtbKY7ltqg',
          type: 1,
          name: 'Town Star',
        },
      ],
      imgs: [
        {
          gfId: '1e75292aa1f943c9983a86b72cba6bbf',
          url: 'https://storage.googleapis.com/bimboss/hook_game_img/1cd15289a27c7c4c28ff1c9c3309624.png',
          type: 2,
          name: 'Town Star',
        },
      ],
      icon: [
        {
          gfId: '18945661741446e5a7c41e9545bca434',
          url: 'https://storage.googleapis.com/bimboss/hook_game_img/bdc0cd1cb414ae99a62d4e30ae53a2c.png',
          type: 3,
          name: 'Town Star',
        },
      ],
    },
    {
      gpId: '1acf6c9c34a7427f83a84ef34a4e3c02',
      name: 'Decentral Land',
      genres: 'Sandbox',
      version: '3.10.3',
      initialReleaseDate: 1582128000000,
      twitterFollower: 633169,
      gameStudio: 'Decentraland Foundation',
      gameIntroduction:
        'Explore LANDs owned by users to experience incredible scenes and structures. From a space adventure to a medieval dungeon maze to entire villages crafted from the minds of community members.',
      gameUrl: 'https://decentraland.org/',
      liked: 8,
      ngmi: 0,
      moon: 8,
      twtter: 'decentraland',
      backPeriod: 6,
      gameUserIcon: 'https://img0.baidu.com/it/u=686928946,1069813836&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
      top: [
        {
          gpsId: '2e57d9cdef1f413d8cff5a74e63a044c',
          gpId: '1acf6c9c34a7427f83a84ef34a4e3c02',
          name: 'Decentraland',
          volume: '185146103',
          marketValue: '1516174691',
          imgUrl: 'https://s2.fxhapp.xyz/logo/1/decentraland.png?x-oss-process=style/coin_36_webp&v=1598409619',
          tokenHash: '0x0f5d2fb29fb7d3cfee444a200298f468908cc942',
          symbol: 'MANA',
          type: 'ERC20',
          status: '1',
          price: '0.8199',
          circulatingSupply: '1849219041',
          species: 'defi',
          introductionCurrency: 'not',
          activeUsers: '253135',
        },
      ],
      nfts: [
        {
          gpsId: '2060adbd154c4d42b91e8d66bae77cab',
          gpId: '1acf6c9c34a7427f83a84ef34a4e3c02',
          name: 'Wearbles',
          volume: '0',
          marketValue: '0',
          imgUrl:
            'https://lh3.googleusercontent.com/lmaWg2HflBZa0Ye_verWgU9hiZSpMGynD0CY19Vknl3FM86ILqYlDPiOsgzoCe9ak9Xralr_0OrcO9az9deLXDeI=w600',
          tokenHash: '0',
          symbol: '0',
          type: 'ERC20',
          status: '2',
          price: '0',
          circulatingSupply: '0',
          species: 'nft',
          introductionCurrency: 'not',
          activeUsers: '0',
        },
        {
          gpsId: 'c7f2aaf6a45f46518f0e91376747daed',
          gpId: '1acf6c9c34a7427f83a84ef34a4e3c02',
          name: 'Land',
          volume: '0',
          marketValue: '0',
          imgUrl: 'https://decentraland.org/blog/images/static/images/logo-b57be10317666edc399e2bdf863f26bf.svg',
          tokenHash: '0',
          symbol: '0',
          type: 'ERC20',
          status: '2',
          price: '0',
          circulatingSupply: '0',
          species: 'nft',
          introductionCurrency: 'not',
          activeUsers: '0',
        },
      ],
      defis: [
        {
          gpsId: '2e57d9cdef1f413d8cff5a74e63a044c',
          gpId: '1acf6c9c34a7427f83a84ef34a4e3c02',
          name: 'Decentraland',
          volume: '185146103',
          marketValue: '1516174691',
          imgUrl: 'https://s2.fxhapp.xyz/logo/1/decentraland.png?x-oss-process=style/coin_36_webp&v=1598409619',
          tokenHash: '0x0f5d2fb29fb7d3cfee444a200298f468908cc942',
          symbol: 'MANA',
          type: 'ERC20',
          status: '1',
          price: '0.8199',
          circulatingSupply: '1849219041',
          species: 'defi',
          introductionCurrency: 'not',
          activeUsers: '253135',
        },
      ],
      videos: [
        {
          gfId: '29534c5e582e4e8d8174b0d7b078d3ce',
          url: 'https://www.youtube.com/embed/Vut_tqyw_2U',
          type: 1,
          name: 'Decentral land',
        },
      ],
      imgs: [
        {
          gfId: '24d8ad1cc8dc433f9dd2f772ed1d8dcf',
          url: 'https://storage.googleapis.com/bimboss/hook_game_img/da9d5bedd586e47d08a7dc67e0adf04.png',
          type: 2,
          name: 'Decentral land',
        },
      ],
      icon: [
        {
          gfId: '93729aca515b4e0aa26badf66887e0f6',
          url: 'https://storage.googleapis.com/bimboss/hook_game_img/c3d204ee530429c1dfac81830ab0b1b.png',
          type: 3,
          name: 'Decentral land',
        },
      ],
    },
    {
      gpId: '6eabe3204a8b4da69bbe04eacf023309',
      name: 'Illuvium',
      genres: 'Sandbox',
      version: 'Beta',
      initialReleaseDate: 0,
      twitterFollower: 336504,
      gameStudio: 'Illuvium',
      gameIntroduction: 'Join the fight for ETH\r\nWelcome to the world of Illuvium.',
      gameUrl: 'https://www.illuvium.io/',
      liked: 3,
      ngmi: 0,
      moon: 3,
      twtter: 'illuviumio',
      backPeriod: 12,
      gameUserIcon: 'https://img0.baidu.com/it/u=686928946,1069813836&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
      top: [
        {
          gpsId: 'e8c292c601f542f69a2ee1aabc555b72',
          gpId: '6eabe3204a8b4da69bbe04eacf023309',
          name: 'Illuvium',
          volume: '9075372.40000000037252902984619140625',
          marketValue: '97967598',
          imgUrl: 'https://s2.fxhapp.xyz/logo/1/iiiuvium.png?x-oss-process=style/coin_36_webp&v=1656557433',
          tokenHash: '0x767fe9edc9e0df98e07454847909b5e959d7ca0e',
          symbol: 'ILV',
          type: 'ERC20',
          status: '1',
          price: '150.52',
          circulatingSupply: '650861',
          species: 'defi',
          introductionCurrency: 'not',
          activeUsers: '18924',
        },
      ],
      nfts: [
        {
          gpsId: '5fab2d29333d470a90ec80fc2be983a7',
          gpId: '6eabe3204a8b4da69bbe04eacf023309',
          name: 'Land',
          volume: '0',
          marketValue: '0',
          imgUrl: 'https://themediaverse.com/wp-content/uploads/2022/05/Illuvium-Zero.jpg',
          tokenHash: '0',
          symbol: '0',
          type: 'ERC20',
          status: '2',
          price: '0',
          circulatingSupply: '0',
          species: 'nft',
          introductionCurrency: 'not',
          activeUsers: '0',
        },
        {
          gpsId: '8c0cbc24b9d2465888cd801802a20205',
          gpId: '6eabe3204a8b4da69bbe04eacf023309',
          name: 'Badge',
          volume: '0',
          marketValue: '0',
          imgUrl:
            'https://lh3.googleusercontent.com/CKj5MjzygXECwYb-47pG0WXBdAYRz7FUF6R9e0i073rHbqHKcOQoqx-o3hKzOBij_qJDTlvfCy3BystLo4_c4jzmbhql60tvKhoudA=w600',
          tokenHash: '0',
          symbol: '0',
          type: 'ERC20',
          status: '2',
          price: '0',
          circulatingSupply: '0',
          species: 'nft',
          introductionCurrency: 'not',
          activeUsers: '0',
        },
      ],
      defis: [
        {
          gpsId: 'e8c292c601f542f69a2ee1aabc555b72',
          gpId: '6eabe3204a8b4da69bbe04eacf023309',
          name: 'Illuvium',
          volume: '9075372.40000000037252902984619140625',
          marketValue: '97967598',
          imgUrl: 'https://s2.fxhapp.xyz/logo/1/iiiuvium.png?x-oss-process=style/coin_36_webp&v=1656557433',
          tokenHash: '0x767fe9edc9e0df98e07454847909b5e959d7ca0e',
          symbol: 'ILV',
          type: 'ERC20',
          status: '1',
          price: '150.52',
          circulatingSupply: '650861',
          species: 'defi',
          introductionCurrency: 'not',
          activeUsers: '18924',
        },
      ],
      videos: [
        {
          gfId: '975aa07dc84245a680132af5c903b2fd',
          url: 'https://www.youtube.com/embed/mzT88eN4gts',
          type: 1,
          name: 'illuvium',
        },
      ],
      imgs: [
        {
          gfId: '8700882a27184cd289ee4c9b9c1e7a89',
          url: 'https://storage.googleapis.com/bimboss/hook_game_img/da2a785609e2af3fe3021b9f6ee8a05.png',
          type: 2,
          name: 'illuvium',
        },
      ],
      icon: [
        {
          gfId: '1fcc186139704278af270189d914dd28',
          url: 'https://storage.googleapis.com/bimboss/hook_game_img/0d62ef908167a76f2dcd3f6d2ddf150.png',
          type: 3,
          name: 'illuvium',
        },
      ],
    },
    {
      gpId: 'a623b83b72b245e7ad02ef36225a56a4',
      name: 'Axie Infinity',
      genres: 'Strategy',
      version: '1.2.3',
      initialReleaseDate: 1521475200000,
      twitterFollower: 948918,
      gameStudio: 'Sky Mavis',
      gameIntroduction:
        'Build unstoppable teams of Axies and conquer your enemies!\r\nEach Axie has unique strengths and weaknesses based on its genes. With billions of possible genetic combinations, the possibilities are truly infinite!',
      gameUrl: 'https://axieinfinity.com/ ',
      liked: 0,
      ngmi: 0,
      moon: 0,
      twtter: 'AxieInfinity',
      backPeriod: 18,
      gameUserIcon: 'https://img0.baidu.com/it/u=686928946,1069813836&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
      top: [
        {
          gpsId: '00380e5578e64f75966502897d2f8d94\r\n00380e5578e64f75966502897d2f8d',
          gpId: 'a623b83b72b245e7ad02ef36225a56a4',
          name: 'Axie Infinity',
          volume: '152819935',
          marketValue: '1105580306',
          imgUrl: 'https://s2.fxhapp.xyz/logo/1/axieinfinity.png?x-oss-process=style/coin_36_webp&v=1604541336',
          tokenHash: '0xbb0e17ef65f82ab018d8edd776e8dd940327b28b',
          symbol: 'AXS',
          type: 'ERC20',
          status: '1',
          price: '13.4633',
          circulatingSupply: '82118077',
          species: 'nft',
          introductionCurrency: 'not',
          activeUsers: '53779',
        },
      ],
      nfts: [
        {
          gpsId: '00380e5578e64f75966502897d2f8d94\r\n00380e5578e64f75966502897d2f8d',
          gpId: 'a623b83b72b245e7ad02ef36225a56a4',
          name: 'Axie Infinity',
          volume: '152819935',
          marketValue: '1105580306',
          imgUrl: 'https://s2.fxhapp.xyz/logo/1/axieinfinity.png?x-oss-process=style/coin_36_webp&v=1604541336',
          tokenHash: '0xbb0e17ef65f82ab018d8edd776e8dd940327b28b',
          symbol: 'AXS',
          type: 'ERC20',
          status: '1',
          price: '13.4633',
          circulatingSupply: '82118077',
          species: 'nft',
          introductionCurrency: 'not',
          activeUsers: '53779',
        },
        {
          gpsId: '612451e387314924a14773c126e8aeff',
          gpId: 'a623b83b72b245e7ad02ef36225a56a4',
          name: 'Land',
          volume: '0',
          marketValue: '0',
          imgUrl: 'https://wiki.rugdoc.io/assets/2021/12/img_61aa9c38a22f5.jpg',
          tokenHash: '0',
          symbol: '0',
          type: 'ERC20',
          status: '2',
          price: '0',
          circulatingSupply: '0',
          species: 'nft',
          introductionCurrency: 'not',
          activeUsers: '0',
        },
      ],
      defis: [
        {
          gpsId: '173c1642228b4e949aa4f5379f1a7fa1',
          gpId: 'a623b83b72b245e7ad02ef36225a56a4',
          name: 'SLP',
          volume: '0',
          marketValue: '0',
          imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5824.png',
          tokenHash: '0',
          symbol: '0',
          type: 'ERC20',
          status: '2',
          price: '0',
          circulatingSupply: '0',
          species: 'defi',
          introductionCurrency: 'not',
          activeUsers: '0',
        },
        {
          gpsId: 'bccb593dd12144d2a6aa715729b22a60',
          gpId: 'a623b83b72b245e7ad02ef36225a56a4',
          name: 'AXS',
          volume: '0',
          marketValue: '0',
          imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6783.png',
          tokenHash: '0',
          symbol: '0',
          type: 'ERC20',
          status: '2',
          price: '0',
          circulatingSupply: '0',
          species: 'defi',
          introductionCurrency: 'not',
          activeUsers: '0',
        },
      ],
      videos: [
        {
          gfId: '85c8fa283394406c858a870b6f23fa23',
          url: 'https://www.youtube.com/embed/X2z_YIeettE',
          type: 1,
          name: 'Axie infinity',
        },
      ],
      imgs: [
        {
          gfId: '721a8511d17044b7b7d05d22e821e5e8',
          url: 'https://storage.googleapis.com/bimboss/hook_game_img/fcbafb9fa9ff082b17bddc71ed64c02.png',
          type: 2,
          name: 'Axie infinity',
        },
      ],
      icon: [
        {
          gfId: '042ad0b923624749b29f8ed0a2d64cd2',
          url: 'https://storage.googleapis.com/bimboss/hook_game_img/9e7f4fe14ba04a13b74f4ac3230e729.png',
          type: 3,
          name: 'Axie infinity',
        },
      ],
    },
    {
      gpId: 'dlf5183b72b245e7ad02ef36225a56a4',
      name: 'Evaverse',
      genres: 'Simulation',
      version: 'Beta',
      initialReleaseDate: 1629475200000,
      twitterFollower: 32078,
      gameStudio: 'BATTLEBOUND',
      gameIntroduction:
        'The Evaverse video game is a multiplayer social platform built for the NFT Community. The game is currently available for all players on PC through the Steam store. Players can create servers, meet other collectors, and show off their Opensea NFTs while playing mini-games and hanging out with other community members in an immersive 3d environment. The long-term vision is to expand the Evaverse game alongside the NFT community. Evaverse NFT holders will propose game updates and future design mechanics as we build out the Evaverse into a massive play-to-earn world.',
      gameUrl: 'https://www.evaverse.com/',
      liked: 2,
      ngmi: 0,
      moon: 2,
      twtter: 'Evaverse_NFT',
      backPeriod: 18,
      gameUserIcon: 'https://img0.baidu.com/it/u=686928946,1069813836&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
      top: [
        {
          gpsId: 'a6532b251ec34af6b817e9af4d1cc80e',
          gpId: 'dlf5183b72b245e7ad02ef36225a56a4',
          name: 'Evaverse',
          volume: '0',
          marketValue: '0',
          imgUrl: '0',
          tokenHash: '0',
          symbol: 'Evaverse',
          type: 'ERC20',
          status: '1',
          price: '0',
          circulatingSupply: '0',
          species: 'nft',
          introductionCurrency: 'not',
          activeUsers: '0',
        },
      ],
      nfts: [
        {
          gpsId: '1d382ffece4a43258ee5e1f92d85b03f',
          gpId: 'dlf5183b72b245e7ad02ef36225a56a4',
          name: 'Hoverboards',
          volume: '0',
          marketValue: '0',
          imgUrl:
            'https://lh3.googleusercontent.com/BfEnJ499kQFsmHuEZKG-mZ8xP18IU1BFW_NPk43UcG6YZ_Euw9xdFZrVQq0VexEsAyDiuCwMplFJ8NxIZ-UdEO2UaSCl7j0MIqg7',
          tokenHash: '0',
          symbol: '0',
          type: 'ERC20',
          status: '2',
          price: '0',
          circulatingSupply: '0',
          species: 'nft',
          introductionCurrency: 'not',
          activeUsers: '0',
        },
        {
          gpsId: '9ce2fe999c9f4b7282525d75808b1b85',
          gpId: 'dlf5183b72b245e7ad02ef36225a56a4',
          name: 'Avatars',
          volume: '0',
          marketValue: '0',
          imgUrl:
            'https://lh3.googleusercontent.com/-SHDwWk2D9a-E61t1Nd51yPrhDYqY2H_O-wwHVXUeTJOuWGlO8JWhNCptwlQaSykmqL9e8I4XnHOMEdZQ3deAD0UmSD9gLnkr87G',
          tokenHash: '0',
          symbol: '0',
          type: 'ERC20',
          status: '2',
          price: '0',
          circulatingSupply: '0',
          species: 'nft',
          introductionCurrency: 'not',
          activeUsers: '0',
        },
        {
          gpsId: 'a6532b251ec34af6b817e9af4d1cc80e',
          gpId: 'dlf5183b72b245e7ad02ef36225a56a4',
          name: 'Evaverse',
          volume: '0',
          marketValue: '0',
          imgUrl: '0',
          tokenHash: '0',
          symbol: 'Evaverse',
          type: 'ERC20',
          status: '1',
          price: '0',
          circulatingSupply: '0',
          species: 'nft',
          introductionCurrency: 'not',
          activeUsers: '0',
        },
      ],
      defis: [],
      videos: [
        {
          gfId: '4f52e2432a4448cda810d9b946eaaa28',
          url: 'https://www.youtube.com/embed/l3o_aSQZ9ts',
          type: 1,
          name: 'Evaverse',
        },
      ],
      imgs: [
        {
          gfId: '5555e2432a4448cda810d9b946eaaa28',
          url: 'https://storage.googleapis.com/bimboss/hook_game_img/3c6daeddadba1910b649660bd113256.png',
          type: 2,
          name: 'Evaverse',
        },
      ],
      icon: [
        {
          gfId: '4444e2432a4448cda810d9b946eaaa28',
          url: 'https://storage.googleapis.com/bimboss/hook_game_img/dc212554bbe700708950e110f856642.png',
          type: 3,
          name: 'Evaverse',
        },
      ],
    },
  ])
  const swiper = () => {
    if (swiperData.length <= 0) {
      return
    }
    // new Swiper('.swiper-container1', {
    //   effect: 'coverflow',
    //   loop: true,

    //   grabCursor: true,
    //   centeredSlides: true,
    //   slidesPerView: 2,
    //   spaceBetween: -200,
    //   coverflowEffect: {
    //     rotate: 0,
    //     stretch: 0,
    //     depth: 500,
    //     modifier: 1,
    //     slideShadows: true,
    //   },
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   },
    //   breakpoints: {
    //     1024: {
    //       slidesPerView: 4,
    //       spaceBetween: 40,
    //     },
    //     768: {
    //       slidesPerView: 1,
    //       spaceBetween: 30,
    //     },
    //     640: {
    //       slidesPerView: 1,
    //       spaceBetween: 0,
    //     },
    //     320: {
    //       slidesPerView: 1,
    //       spaceBetween: 0,
    //     },
    //   },
    // })
  }
  const [isShowCreate, setIsShowCreate] = useState(false)

  useEffect(() => {
    swiper()
    getGameItemsDatas(1, 5).then((res) => {
      console.log(res)
      localStorage.setItem('gameListData', JSON.stringify(res.data.data))
      setSwiperData(res.data.data.records)
    })
  }, [])
  return (
    <>
      <GameBox>
        <Box
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 'auto',
            position: 'relative',
            width: '100%',
          }}
        >
          <Box className="Gaming">GAMES and Beyond</Box>
          <Box
            className="CreateBtn"
            style={{
              width: '114px',
              height: '48px',
              borderRadius: '14px',
              background: 'rgba(207,200,255,1)',
              color: 'rgba(95,117,238,1)',
              fontSize: '13px',
              textAlign: 'center',

              // marginBottom: '48px',
              position: 'absolute',
              right: '10px',
            }}
          >
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdGpIutxIjaaC3i_wnli1B3_wY5rU91o7UpNqpeISbz2AHnrg/viewform">
              Create Project
            </a>
          </Box>
        </Box>

        <Box className=" challenge">From GAME to GAMES and beyond.</Box>
        <Box className=" challengeText">Takes you on a journey to explore bigger crypto game worlds, all in one.</Box>
        <Box
          className="swiper-container1"
          style={{
            width: '900px',
            display: 'flex',
            // marginLeft: ' 212px',
            overflow: 'hidden',
            position: 'relative',
            // left: '3vw',
          }}
        >
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            {swiperData.length &&
              swiperData.map((item, index) => {
                return (
                  <SwiperSlide key={index} className="swiper-slide">
                    <Box
                      style={{
                        height: '467px',
                        width: '266px',
                        borderRadius: '26px',
                        backgroundColor: '#111C44',
                        padding: '12px',
                        boxSizing: 'border-box',
                      }}
                    >
                      <Box>
                        <Image width="249px" height="238px" src={item.icon[0].url} alt="" />
                      </Box>

                      <Box style={{ padding: '35px', boxSizing: 'border-box' }}>
                        <Box>{item.genres}</Box>
                        <Box
                          style={{
                            color: '#FFFFFF',
                            fontSize: '20px',
                            textAlign: 'left',
                            marginTop: '12px',
                          }}
                        >
                          {item.name}
                        </Box>
                        <Box
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginTop: '12px',
                          }}
                        >
                          <Box
                            style={{
                              width: '8px',
                              height: '8px',
                              background: '#5CF54F',
                              borderRadius: '50%',
                              marginRight: '8px',
                            }}
                          ></Box>
                          <Box
                            style={{
                              color: '#808191',
                              fontSize: '12px',
                            }}
                          >
                            {formatNumber(item.twitterFollower)} followers
                          </Box>
                        </Box>
                        <Box
                          onClick={() => {
                            localStorage.setItem('game', JSON.stringify(item))

                            history.push({
                              pathname: '/admin/profile/gameDetail',
                            })
                          }}
                        >
                          View
                        </Box>
                      </Box>
                    </Box>
                  </SwiperSlide>
                )
              })}
          </Swiper>
        </Box>
        <Link href="#/admin/profile/allGame">
          <Box
            className="VIewBtn"
            style={{
              width: '244px',
              height: '71.76px',
              borderRadius: '24.959999084472656px',
              background: 'rgba(117,81,255,1)',
              margin: 'auto',
              color: ' rgba(255,255,255,1)',
              fontSize: ' 21.84px',
              textAlign: 'center',
              lineHeight: '71.76px',
              marginTop: '113.24px',
            }}
            onClick={() => {
              history.push({ pathname: '/gamelist' })
            }}
          >
            Explore all games
          </Box>
        </Link>
      </GameBox>
    </>
  )
}
