import React, { memo, useRef, useEffect, useCallback } from 'react';
import { useImmer } from 'use-immer';
import styled from 'styled-components';

const ImageDiv = styled.div`
  position: relative;
  z-index: 999;
  width: 20%;
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

const codeData = {
  width: 88,
  height: 88,
};

const imgUrl =
  'https://img01.yzcdn.cn/upload_files/2021/09/07/Fs2C1KiP4caA0jSRyVYlfCArmWr8.png';

/* 图片拽拽定位 */
const DragImage = () => {
  //
  const codeEle = useRef(null);
  const box = useRef(null);

  // #region state
  /* 图片尺寸 */
  const [codeSize, setCodeSize] = useImmer({
    width: 0,
    height: 0,
  });

  /* 二维码尺寸 */
  const [boxSize, setBoxSize] = useImmer({
    width: 0,
    height: 0,
  });

  /* 安全边距 */
  const [safeData, setSafeData] = useImmer({
    left: 0,
    top: 0,
  });

  /* 二维码定位 */
  const [codePos, setCodePos] = useImmer({
    left: 10,
    top: 10,
  });

  /* 参照点 */
  const [mouseDownData, setMouseDownData] = useImmer({
    clientX: 0,
    clientY: 0,
  });

  /* 安全边距 */
  const [move, setMove] = useImmer(false);

  /* 图片加载 */
  const [imageLoad, setLoad] = useImmer(false);
  // #endregion

  const onMouseDown = useCallback(
    ({ clientX, clientY }) => {
      setMove(true);
      setMouseDownData((data) => {
        data.clientX = clientX;
        data.clientY = clientY;
      });
    },
    [setMouseDownData, setMove],
  );

  const onMouseMove = useCallback(
    ({ clientX, clientY }) => {
      if (!move) return;

      const left = clientX - mouseDownData.clientX + codePos.left;
      const top = clientY - mouseDownData.clientY + codePos.top;

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
    },
    [safeData, move, mouseDownData, codePos],
  );

  const moveDone = useCallback(() => {
    setMove(false);

    const top = Number(
      codeEle.current.style.top.slice(0, codeEle.current.style.top.length - 2),
    );
    const left = Number(
      codeEle.current.style.left.slice(
        0,
        codeEle.current.style.left.length - 2,
      ),
    );

    setCodePos((data) => {
      data.top = top;
      data.left = left;
    });
  }, [setCodePos, setMove]);

  /* 获取图片、二维码尺寸 */
  useEffect(() => {
    if (imageLoad) {
      setCodeSize((data) => {
        data.width = codeData.width;
        data.height = codeData.height;
      });
      setBoxSize((data) => {
        data.width = box.current.clientWidth;
        data.height = box.current.clientHeight;
      });
      setSafeData((data) => {
        data.left = boxSize.width - codeSize.width;
        data.top = boxSize.height - codeSize.height;
      });
      codeEle.current.style.width = codeSize.width + 'px';
      codeEle.current.style.height = codeSize.height + 'px';
    }
  }, [setCodeSize, setBoxSize, setSafeData, imageLoad, codeSize, boxSize]);

  return (
    <ImageDiv ref={box}>
      <img
        src={imgUrl}
        alt=''
        onLoad={() => {
          setLoad(true);
        }}
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

export default memo(DragImage);
