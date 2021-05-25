import React, { Component, /* Suspense */ } from 'react'
// import { Upload } from 'antd';
// import { PlusOutlined } from '@ant-design/icons';
import Konva from '../../../../components/konva'
import { Loading } from '../../../../components'

// const Konva = React.lazy(() => import('../../../../components/konva'));

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
        canvas_width: 0,
        canvas_height: 0,
    };

    componentDidMount() {
        // debugger
        setTimeout(() => {
            const Konva_box = this.Konva_box
            const canvas_width = Konva_box.offsetWidth
            const canvas_height = Konva_box.offsetHeight
            console.log(canvas_width, canvas_height);
            this.setState({
                canvas_width, canvas_height
            })
        }, 200);
    }

    render() {

        // const { fileList } = this.state;

        // const uploadButton = (
        //     <div>
        //         <PlusOutlined />
        //         <div style={{ marginTop: 8 }}>Upload</div>
        //     </div>
        // );

        const { canvas_height, canvas_width } = this.state

        return (
            <div style={{ width: '100%', height: '100%' }} ref={(ele) => this.Konva_box = ele}>
                {/* <Upload
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={this.handlePreview}
                    onChange={this.handleChange}
                >
                    {fileList.length >= 8 ? null : uploadButton}
                </Upload> */}
                {
                    canvas_height > 0
                        ?
                        <Konva
                            height={canvas_height}
                            width={canvas_width}
                        /* style={
                            {
                                background: '#fff',
                            }
                        } */
                        />
                        :
                        <Loading />

                }
                {/* <Suspense fallback={<div>Loading...</div>}>

                </Suspense> */}
            </div>
        );
    }


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

}