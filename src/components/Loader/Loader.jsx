import { Triangle } from 'react-loader-spinner';
const Loader = () => {
    return (
        < div style={{ textAlign: 'center', marginTop: '20px' }}>
            <Triangle
                visible={true}
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    )
}
export default Loader