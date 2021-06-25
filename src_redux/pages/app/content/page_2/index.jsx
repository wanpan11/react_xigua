import React, { Component, /* Suspense */ } from 'react'
import Konva from '../../../../components/konva'
import { Loading } from '../../../../components'

// const Konva = React.lazy(() => import('../../../../components/konva'));


export default class page_2 extends Component {

    state = {
        canvas_width: 0,
        canvas_height: 0,
    };

    componentDidMount() {
        setTimeout(() => {
            const Konva_box = this.Konva_box
            const canvas_width = Konva_box.offsetWidth
            const canvas_height = Konva_box.offsetHeight
            console.log(canvas_width, canvas_height);
            this.setState({
                canvas_width, canvas_height
            })
        }, 1000);
    }

    render() {

        const { canvas_height, canvas_width } = this.state

        return (
            <div style={{ width: '100%', height: '100%' }} ref={(ele) => this.Konva_box = ele}>
                {
                    canvas_height > 0
                        ?
                        <Konva
                            height={canvas_height}
                            width={canvas_width}
                        style={
                            {
                                background: '#fff',
                            }
                        }
                        />
                        :
                        <Loading>画板加载中</Loading>

                }
                {/* <Suspense fallback={<div>Loading...</div>}>

                </Suspense> */}
            </div>
        );
    }

}