import './phone.css'
import logo from './imgs/logo.png'
import Img1 from './imgs/img1.png'
import Img2 from './imgs/img2.png'
import Img3 from './imgs/img3.png'
import Img4 from './imgs/img4.png'
import Icon1 from './imgs/icon1.png'
import Icon2 from './imgs/icon2.png'
import Icon3 from './imgs/icon3.png'
import Icon4 from './imgs/icon4.png'
import TableCn from './imgs/table/cn.png'
import TableEn from './imgs/table/en.png'
import TableJp from './imgs/table/jp.png'
import TableKo from './imgs/table/ko.png'
import bottomLogo from './imgs/bottom-logo.png'
import Type2Img1 from './imgs/type2-img1.png'
import Type2Img2 from './imgs/type2-img2.png'
import MenuIcon from './imgs/menu-icon.png'
import SliderContent from './SliderContent';
import { Button, Dropdown, Flex, Image, Layout } from 'antd';
import { useTranslation } from 'react-i18next';
import language from "@/assets/language.png";
import SplitText from '../components/SplitText.jsx'
import SplashCursor from '../components/SplashCursor.jsx'
import GradientText from '../components/GradientText.jsx'
import ShinyText from '../components/ShinyText.jsx'
import List from "../data/news.js"

const items = [
    {
        label: '繁體中文',
        key: 'zh',
    },
    {
        label: 'English',
        key: 'en',
    },
    {
        label: '日本語',
        key: 'ja',
    },
    {
        label: '한국어',
        key: 'ko',
    },
];

const PhoneIndex = () => {
    const { t, i18n } = useTranslation();
    const getTable = () => {
        if (i18n.language === 'cn') {
            return TableCn
        } else if (i18n.language === 'en') {
            return TableEn
        } else if (i18n.language === 'ja') {
            return TableJp
        } else if (i18n.language === 'ko') {
            return TableKo
        } else {
            return TableEn
        }
    }
    const items2 = [
        {
            label: t('home.productCenter'),
            key: '1',
        },
        {
            label: t('home.discover'),
            key: '2',
        },
        {
            label: t('home.manage'),
            key: '3',
        },
        {
            label: t('home.join'),
            key: '4',
        },
    ];
    const onClick = ({ key }) => {
        console.log(key);
        // 获取当前语言
        // console.log('获取语言：', i18n.language);
        i18n.changeLanguage(key)
    };
    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };
    const onClick2 = (menu) => {
        console.log(menu);
    }
    return (<div className='phone-index-content'>
        <div className='header'>
            <Image src={logo} preview={false} />
            <div>
                <Dropdown menu={{ items, onClick }} trigger={['click']}>
                    <Image src={language} width={25} preview={false} className='language' />
                </Dropdown>
                <div style={{ marginLeft: '20px', display: 'inline-block' }}>
                    <Dropdown menu={{ items: items2, onClick: onClick2 }} trigger={['click']}>
                        <Image src={MenuIcon} width={25} preview={false} className='language' />
                    </Dropdown>
                </div>

            </div>
        </div>
        <div className='text-center title-max' style={{ marginTop: '80px', padding: '0 20%' }}>{t('home.welcome')}</div>
        <div className='title-max-des text-center'
            style={{ marginTop: '30px', padding: '0 15%' }}>
            <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={3}
                showBorder={false}
                className="custom-class"
            >
                {t('home.intro')}
            </GradientText>
        </div>
        <div className='img1-bar'><Image src={Img1} preview={false} /></div>
        <div className='bg-blue'>
            <div className='flex-center'>
                <div className='start-btn button-with-rotating-light-effect'>
                    {t('home.start')}
                    {/*<ShinyText text={t('home.start')} disabled={false} speed={3} className='custom-class'/>*/}
                </div>
            </div>
            <div style={{ marginTop: '150px', width: '100%', overflow: 'hidden' }}>
                <SliderContent />
            </div>
            <div className='big-title text-center' style={{ marginTop: '150px' }}>
                <SplitText
                    text={t('home.slogan')}
                    className="text-2xl font-semibold text-center"
                    delay={150}
                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    easing="easeOutCubic"
                    threshold={0.2}
                    rootMargin="-50px"
                    onLetterAnimationComplete={handleAnimationComplete}
                />
            </div>
            <div className='box1' style={{ marginTop: '150px' }}>

                <div className='text-center big-title2'
                    style={{ padding: '0 15%', marginTop: '50px' }}>{t('home.mission')}
                </div>
                <div className='text-center big-title2-des' style={{ marginTop: '50px' }}>{t('home.sync')}</div>
                <div className='flex-center' style={{ marginTop: '50px' }}><Image src={Img2} preview={false} /></div>
            </div>

            <div className='box1'>
                <div className='text-center big-title2' style={{ marginTop: '150px' }}>{t('home.core')}</div>
                <div className='text-center big-title2-des'
                    style={{ marginTop: '50px', padding: '0 15%' }}>{t('home.tech')}
                </div>
                <div className='flex-center' style={{ marginTop: '50px' }}><Image src={Img3} preview={false} /></div>
            </div>
            <div className='text-center big-title' style={{ marginTop: '150px' }}>
                <SplitText
                    text={t('home.products')}
                    className="text-2xl font-semibold text-center"
                    delay={150}
                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    easing="easeOutCubic"
                    threshold={0.2}
                    rootMargin="-50px"
                    onLetterAnimationComplete={handleAnimationComplete}
                />
            </div>
            <div className='flex-center' style={{ marginTop: '150px' }}><Image src={Img4} preview={false} /></div>
            <div className='flex-center' style={{ marginTop: '100px' }}><Image src={getTable()} preview={false} /></div>

            <div className='text-center big-title' style={{ marginTop: '150px' }}>
                <SplitText
                    text={t('home.newWorld')}
                    className="text-2xl font-semibold text-center"
                    delay={150}
                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    easing="easeOutCubic"
                    threshold={0.2}
                    rootMargin="-50px"
                    onLetterAnimationComplete={handleAnimationComplete}
                />
            </div>
            <div
                style={{ marginTop: '50px', padding: '0 10%' }}
                className='text-center big-title2-des'>{t('home.ecosystem')}
            </div>
            {/*<SplashCursor/>*/}
            <div className='flex-center' style={{ marginTop: '120px' }}><Image src={Type2Img1} preview={false} /></div>
            <div className='text-center big-title2'>{t('home.cost')}</div>
            <div className='text-center big-title2-des'
                style={{ marginTop: '50px' }}>{t('home.speed')}
            </div>

            <div className='flex-center' style={{ marginTop: '120px' }}><Image src={Type2Img2} preview={false} /></div>
            <div className='text-center big-title2'>{t('home.decentralize')}</div>
            <div className='text-center big-title2-des' style={{ marginTop: '50px' }}>{t('home.vote')}
            </div>

            <div className='flex-center' style={{ marginTop: '120px' }}><Image src={Type2Img2} preview={false} /></div>
            <div className='text-center big-title2'>{t('home.reward')}</div>
            <div className='text-center big-title2-des'
                style={{ marginTop: '50px' }}>{t('home.stake')}
            </div>

            <div className='big-title text-center' style={{ marginTop: '150px' }}>
                <SplitText
                    text={t('home.community')}
                    className="text-2xl font-semibold text-center"
                    delay={150}
                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    easing="easeOutCubic"
                    threshold={0.2}
                    rootMargin="-50px"
                    onLetterAnimationComplete={handleAnimationComplete}
                />
            </div>

            <div className='justify-content-between flex' style={{ padding: '0 22%', marginTop: '120px' }}>
                <div className='icon-box-item' onClick={() => window.open('https://x.com/zkpwhale')}>
                    <Image src={Icon1} preview={false} />
                    <div className='icon-text' style={{ marginTop: '20px', cursor: 'pointer' }}>Twitter</div>
                </div>
                <div className='icon-box-item' onClick={() => window.open('https://t.me/SDAOZK')}>
                    <Image src={Icon2} preview={false} />
                    <div className='icon-text' style={{ marginTop: '20px', cursor: 'pointer' }}>Telegram</div>
                </div>
            </div>
            <div className='justify-content-between flex' style={{ padding: '0 22%', marginTop: '120px' }}>
                <div className='icon-box-item' onClick={() => window.open('https://youtube.com/@sdaozk')}>
                    <Image src={Icon3} preview={false} />
                    <div className='icon-text' style={{ marginTop: '20px', cursor: 'pointer' }}>Youtube</div>
                </div>
                <div className='icon-box-item' onClick={() => window.open('mailto:ZKPwhaleSDAO@gmail.com')}>
                    <Image src={Icon4} preview={false} />
                    <div className='icon-text' style={{ marginTop: '20px', cursor: 'pointer' }}>Email</div>
                </div>
            </div>
            <div className='text-center big-title' style={{ marginTop: '150px' }}>
                <SplitText
                    text={t('home.news')}
                    className="text-2xl font-semibold text-center"
                    delay={150}
                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    easing="easeOutCubic"
                    threshold={0.2}
                    rootMargin="-50px"
                    onLetterAnimationComplete={handleAnimationComplete}
                />
            </div>
            <div className='news-wrap' style={{ marginTop: '120px' }}>
                <Flex gap='20px' className='newsContainer'>
                    {List.map((i) => (
                        <Flex vertical justify='space-between' flex='none' key={i.id} style={{
                            padding: '34px 24px',
                            backgroundColor: '#0E0F1A',
                            color: '#fff',
                            borderRadius: '16px',
                            border: '1px solid #222438',
                            width: '340px',
                            height: '340px'
                        }}>
                            <a href={i.url} target='_blank'>
                                <p style={{
                                    fontSize: '15px',
                                    color: '#F9FCFF',
                                    fontWeight: '500',
                                    lineHeight: '22px'
                                }}>
                                    {i.content}
                                </p>
                                <Flex justify='space-between'>
                                    <p style={{
                                        fontSize: '16px',
                                        color: '#fff',
                                        fontWeight: 'normal',
                                        lineHeight: '24px'
                                    }}>{i.author}</p>
                                    <Image src={i.avatar} width={40}
                                        preview={false} />
                                </Flex>
                            </a>
                        </Flex>
                    ))}

                </Flex>
            </div>
            <div className='flex-center' style={{ marginTop: '150px' }}><Image src={bottomLogo} preview={false} /></div>
            <div className='flex justify-content-between' style={{ padding: '0 22%' }}>
                <div style={{ marginTop: '120px', textAlign: 'left' }}>
                    <div className='link-title'>{t('home.productCenter')}</div>
                    <div className='link-item'>{t('home.vision')}</div>
                    <div className='link-item'>{t('home.whitepaper')}</div>
                    <div className='link-item'>{t('home.solution')}</div>
                </div>
                <div style={{ marginTop: '120px', textAlign: 'left' }}>
                    <div className='link-title'>{t('home.explore')}</div>
                    <div className='link-item'>{t('home.eco')}</div>
                    <div className='link-item'>{t('home.blog')}</div>
                    <div className='link-item'>{t('home.info')}</div>
                </div>
            </div>

            <div className='flex justify-content-between' style={{ padding: '0 22%' }}>
                <div style={{ marginTop: '120px', textAlign: 'left' }}>
                    <div className='link-title'>{t('home.govern')}</div>
                    <div className='link-item'>{t('home.about')}</div>
                    <div className='link-item'>{t('home.jobs')}</div>
                    <div className='link-item'>{t('home.privacy')}</div>
                </div>
                <div style={{ marginTop: '120px', textAlign: 'left' }}>
                    <div className='link-title'>{t('home.joinUs')}</div>
                    <div className='link-item' onClick={() => window.open('https://x.com/zkpwhale')} style={{ cursor: 'pointer' }}>{t('home.twitter')}</div>
                    <div className='link-item' onClick={() => window.open('https://t.me/SDAOZK')} style={{ cursor: 'pointer' }}>{t('home.telegram')}</div>
                    <div className='link-item' onClick={() => window.open('mailto:ZKPwhaleSDAO@gmail.com')} style={{ cursor: 'pointer' }}>{t('home.email')}</div>
                </div>
            </div>
            <div className='copy-right-box' style={{ marginTop: '150px', marginBottom: '20px' }}>
                <div className='text-center copy-right'>© 2025 Zero-Knowledge-Network. Reserve all rights</div>
            </div>
        </div>
    </div>)
}

export default PhoneIndex
