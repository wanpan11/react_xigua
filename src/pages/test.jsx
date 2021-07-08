import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Upload } from 'antd'
import { PlusOutlined } from '@ant-design/icons';
import { test_2 } from '../redux/action/action'

const fileListDefalut = [
    {
        uid: '-1',
        name: 'image.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
]


function Test(props) {

    // console.log(props);
    const [fileList, setFileList] = useState(fileListDefalut)
    
    const { dispatch, test_2_count } = props

    const test_1_change = () => {
        dispatch(test_2(test_2_count + 1))
    }

    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );
    const handleChange = ({ fileList }) => {
        setFileList([...fileList])
    };

    return (
        <div>
            <div>test_2_count：{test_2_count}</div>
            <button onClick={test_1_change}>同步操作</button>

            <h1>图片上传测试</h1>
            <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                fileList={fileList}
                // onPreview={this.handlePreview}
                onChange={handleChange}
            >
                {fileList.length >= 8 ? null : uploadButton}
            </Upload>
        </div>
    )

}

export default connect(
    state => {
        return {
            test_2_count: state.test_2.count,
        }
    },
    dispatch => {
        return { dispatch }
    }
)(Test);