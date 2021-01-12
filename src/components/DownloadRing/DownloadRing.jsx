import style from './DownloadRing.module.scss';

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