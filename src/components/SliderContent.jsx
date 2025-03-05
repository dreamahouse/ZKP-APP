import { Flex, Image } from 'antd';
import slide1 from "../assets/slide1.png"
import i3 from "../assets/i3.png"
import i4 from "../assets/icon4.png"
import i5 from "../assets/icon5.png"
import i6 from "../assets/icon6.png"
import i7 from "../assets/icon7.png"
import i8 from "../assets/icon8.png"
import i9 from "../assets/icon9.png"
import i10 from "../assets/icon10.png"

const list = [
    { url: slide1 },
    { url: i3 },
    { url: i4 },
    { url: i5 },
    { url: i6 },
    { url: i7 },
    { url: i8 },
    { url: i9 },
    { url: i10 }
]

const SliderContent = () => {
    return (
        <Flex gap="46px" className='sliderContainer' flex='none' align='center'>
            {list.map((i, index) => (
                <Image key={index} src={i.url} preview={false} />
            ))}
        </Flex>
    )
}
export default SliderContent