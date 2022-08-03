import './player.css'

import React from 'react'
export default function Players({ src, ht, wd, divht }: any) {
  return (
    <div className="videobox" style={{ width: '100%' }}>
      <iframe
        width={wd}
        height={ht}
        src={src}
        title="Hook"
        frameBorder="0"
        // bordeRadius="32px"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="PlayersVideobox"
      ></iframe>
    </div>
  )
}
