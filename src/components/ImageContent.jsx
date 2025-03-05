import { Image } from "antd"
import bg1 from "../assets/bg1.png"
import bg2 from "../assets/bg2.png"
import { useTranslation } from 'react-i18next';

const ImageContent = ({ type }) => {
    const { t } = useTranslation();
    const divStyle = {
        width: '100%',
        // height: '724px',
        position: 'relative',
        borderRadius: '28px',
        border: '2px solid #1E1F30'
    }

    const textStyle = {
        textAlign: 'left',
        color: 'white',
        width: '520px',
        height: '145px',
        position: 'absolute',
        top: '50%',
        marginTop: '-73px',
    }
    const h2Style = {
        fontSize: '40px',
        fontWeight: 'normal',
        color: 'white'
    }
    const h3Style = {
        fontSize: '24px',
        fontWeight: 'normal',
        color: '#95979E'
    }
    return (
        <div>

            {
                type === 'left' ? (
                    <div style={divStyle}>
                        <Image src={bg1} width="100%" style={{ borderRadius: "28px" }} preview={false} />
                        <div style={{ ...textStyle, left: '50px' }}>
                            <h2 style={h2Style}>{t('home.mission')}</h2>
                            <h3 style={h3Style}>{t('home.sync')}</h3>
                        </div></div>
                ) : (
                    <div style={{ ...divStyle, marginTop: '32px' }}>
                        <Image src={bg2} width="100%" style={{ borderRadius: "28px" }} preview={false} />
                        <div style={{ ...textStyle, right: '50px' }}>
                            <h2 style={h2Style}>{t('home.core')}</h2>
                            <h3 style={h3Style}>{t('home.tech')}</h3>
                        </div>
                    </div>
                )
            }

        </div>
    )
}
export default ImageContent