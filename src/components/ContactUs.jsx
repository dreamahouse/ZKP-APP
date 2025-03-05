import { Flex, Image } from "antd"
import Twitter from "../assets/Twitter.png"
import Telegram from "../assets/Telegram.png"
import Youtube from "../assets/Youtube.png"
import Email from "../assets/Email.png"
const ContactUs = () => {
    const List = [
        {
            id: '1',
            title: 'Twitter',
            url: Twitter
        },
        {
            id: '2',
            title: 'Telegram',
            url: Telegram
        },
        {
            id: '3',
            title: 'Youtube',
            url: Youtube
        },
        {
            id: '4',
            title: 'Email',
            url: Email
        },
    ]
    return (
        <Flex gap="180px" style={{ width: '988px', height: '164px', margin: '64px auto' }}>
            {
                List.map(i => (
                    <Flex vertical key={i.id} justify="center" align="center">
                        <Image src={i.url} style={{ width: '112px', height: '112px' }} preview={false} />
                        <p style={{ fontSize: '16px', color: '#A0A0B8', marginTop: '20px' }}>{i.title}</p>
                    </Flex>
                ))
            }
        </Flex>
    )
}
export default ContactUs