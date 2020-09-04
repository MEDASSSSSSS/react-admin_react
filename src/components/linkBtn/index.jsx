import React from 'react'
import './index.less'
/**
 * 外形像链接的按钮
 */
export default function LinkBtn(props) {
  return (
    <button props={{...props}} className="link-btn">
      {props.children}
    </button>
  )
}
