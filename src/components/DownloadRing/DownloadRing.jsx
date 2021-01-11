import style from './DownloadRing.module.css';

const DownloadRing = () => {
    return (
        <div className={style.container}>
            <div className={style.roller}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default DownloadRing;