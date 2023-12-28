import React from 'react'
import Latest from './Latest'
import Popular from './Popular'
import Related from './Related'

export default function ReletedPopularLatest() {
  return (
    <>
      <div className="widget_tab md-mt-30">
                  <ul className="nav nav-tabs">
                    <li><a className="active" data-toggle="tab" href="#latest">LATEST</a>
                    </li>
                    <li><a data-toggle="tab" href="#post2">POPULAR</a>
                    </li>
                    <li><a data-toggle="tab" href="#post3">RELATED</a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <Latest />
                    <Popular />
                    <Related />
                  </div>
                </div>
    </>
  )
}
