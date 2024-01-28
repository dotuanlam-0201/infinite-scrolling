import { Spin } from 'antd'

const GlobalLoading = () => {
    return (
        <div style={{ minHeight: '100vh', display: 'grid', placeItems: 'center',background: '#00000024' }} >
            <Spin spinning />
        </div>
    )
}

export default GlobalLoading
