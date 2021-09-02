import React, { memo, useRef, useEffect } from 'react';
import styled from 'styled-components';

const ImageDiv = styled.div`
  position: relative;
  z-index: 999;
  width: 40%;
  margin: 0 auto;

  > img {
    width: 100%;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10+ and Edge */
    user-select: none; /* Standard syntax */
    -webkit-user-drag: none;
  }

  > div {
    position: absolute;
    z-index: 1000;
    top: 10px;
    left: 10px;
    width: 128px;
    height: 128px;
    background-color: red;
    border-radius: 8px;
    cursor: pointer;
    user-select: none;
  }
`;

//#region 拖拽参数
/* 拖拽开始尺寸 */
const mouseDownData = {
  clientX_root: 0,
  clientY_root: 0,
};

/* 初始定位参数  */
const codePos = {
  top: 20,
  left: 20,
};

/* 拖拽锁 */
let _move = false;

/* 图片尺寸 */
const boxDate = {
  width: 0,
  height: 0,
};

/* 二维码尺寸 */
const codeBox = {
  width: 0,
  height: 0,
};

/* 安全边距 */
const safeData = {
  left: 0,
  top: 0,
};
//#endregion

const Image = ({ componentData }) => {
  //
  const codeEle = useRef(null);
  const box = useRef(null);

  const onMouseDown = ({ clientX, clientY }) => {
    _move = true;
    // console.log('#1 onMouseDown', _move);
    mouseDownData.clientX_root = clientX;
    mouseDownData.clientY_root = clientY;
  };

  const onMouseMove = ({ clientX, clientY }) => {
    if (!_move) return;
    // console.log('#2 onMouseMove');

    const left = clientX - mouseDownData.clientX_root + codePos.left;
    const top = clientY - mouseDownData.clientY_root + codePos.top;

    if (left < safeData.left && left >= 0 && top < safeData.top && top >= 0) {
      codeEle.current.style.left = left + 'px';
      codeEle.current.style.top = top + 'px';
    } else {
      if (left < safeData.left && left >= 0) {
        codeEle.current.style.left = left + 'px';
      }

      if (top < safeData.top && top >= 0) {
        codeEle.current.style.top = top + 'px';
      }
    }
  };

  const moveDone = (e) => {
    _move = false;
    // eslint-disable-next-line no-console

    const top = Number(
      codeEle.current.style.top.slice(0, codeEle.current.style.top.length - 2),
    );
    const left = Number(
      codeEle.current.style.left.slice(
        0,
        codeEle.current.style.left.length - 2,
      ),
    );

    codePos.top = top;
    codePos.left = left;
  };

  useEffect(() => {
    boxDate.width = box.current.clientWidth;
    boxDate.height = box.current.clientHeight;

    codeBox.width = codeEle.current.clientWidth;
    codeBox.height = codeEle.current.clientHeight;

    safeData.left = boxDate.width - codeBox.width;
    safeData.top = boxDate.height - codeBox.height;
  }, []);

  return (
    <ImageDiv ref={box}>
      <img
        src='https://img01.yzcdn.cn/upload_files/2021/09/02/FrexC1yD0qk277KVd-EvdDYWKYgY.png'
        alt=''
      />
      <div
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={moveDone}
        onMouseOut={moveDone}
        ref={codeEle}
      >
        二维码
      </div>
    </ImageDiv>
  );
};

export default memo(Image);
