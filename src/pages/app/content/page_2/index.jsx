import React, { Component, Suspense } from 'react'
// import { Upload } from 'antd';
// import { PlusOutlined } from '@ant-design/icons';

const Konva = React.lazy(() => import('../../../../components/konva'));

function getBase64(file) {
    return new Promise((resolve, reject) => {
        debugger
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

export default class page_2 extends Component {

    state = {
        fileList: [

        ],
    };

    handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        this.setState({
            previewImage: file.url || file.preview,
            previewVisible: true,
            previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
        });
    };

    handleChange = ({ fileList }) => {
        this.setState({ fileList })
    };

    render() {

        // const { fileList } = this.state;

        // const uploadButton = (
        //     <div>
        //         <PlusOutlined />
        //         <div style={{ marginTop: 8 }}>Upload</div>
        //     </div>
        // );

        return (
            <>
                {/* <Upload
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={this.handlePreview}
                    onChange={this.handleChange}
                >
                    {fileList.length >= 8 ? null : uploadButton}
                </Upload> */}
                <Suspense fallback={<div>Loading...</div>}>
                    <Konva
                        height={500}
                        width={500}
                        style={
                            {
                                background: '#fff',
                            }
                        }
                    />
                </Suspense>
            </>
        );
    }

}