import { Button, Dropdown, Flex, Image, Layout } from 'antd';
import { useTranslation } from 'react-i18next';
import "./App.scss";
import bg3 from "./assets/bg3.png";
import content1 from "./assets/content1.png";
import language from "./assets/language.png";
import logo from "./assets/logo.png";
import table from "./assets/table.png"
import EN from "./assets/EN.png"
import JP from "./assets/JP.png"
import KO from "./assets/KO.png"
import ContactUs from './components/ContactUs';
import IconText from './components/IconText';
import ImageContent from './components/ImageContent';
import SliderContent from './components/SliderContent';
import PhoneIndex from "@/phone/index.jsx";
import GradientText from "@/components/GradientText.jsx";
import SplitText from "./components/SplitText";
import { useState } from 'react';
import List from "./data/news"

const { Content } = Layout

const headerStyle = {
  backgroundImage: `url(${content1})`, backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  padding: '32px 170px 0',
  minHeight: '1222px',

};
const bacc = "#010101"
const contentStyle = {
  miniHeight: 'calc(100vh - 104px )',
  backgroundColor: bacc
};
const footerStyle = {
  width: '100%',
  margin: '0 auto',
  padding: '0',
  background: 'linear-gradient(180deg, red 0%, rgba(0, 15, 38, 0) 100%)!important',
};

const layoutStyle = {
  overflow: 'hidden',
  width: '100%',
  maxWidth: '100%',
  backgroundColor: bacc
};
const h2Style = {
  fontSize: '56px',
  fontWeight: 'normal',
  color: '#fff',
  textAlign: 'center',
  backgroundColor: bacc,

}
const bg3Style = {
  width: '100%',
  height: '862px',
  position: 'relative',
  overflow: 'hidden'
}
const img3Style = {
  width: '1380px',
  height: '862px',
  position: 'absolute',
  right: '0',
  top: '0'
}
const text3Style = {
  position: 'absolute',
  top: '50%',
  left: '171px',
  height: '500px',
  marginTop: '-315px',
  zIndex: '222'
}
const h3Style = {
  fontSize: '32px',
  fontWeight: 'normal',
  color: '#f5f5f5'
}
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

function App() {
  const { t, i18n } = useTranslation();
  const [tableImg, setTableImg] = useState(table)
  const onClick = ({ key }) => {
    console.log(key);
    // 获取当前语言
    // console.log('获取语言：', i18n.language);
    i18n.changeLanguage(key)
    if (i18n.language === "zh") {
      setTableImg(table)
    } else if (i18n.language === "en") {
      setTableImg(EN)
    } else if (i18n.language === "jp") {
      setTableImg(JP)
    } else {
      setTableImg(KO)
    }
  };

  return (
    <div>
      <Flex>
        <Layout className='page-index' style={layoutStyle}>
          <header className='header' style={headerStyle}>
            <Flex justify="space-between" align='center'
              style={{ height: '64px', lineHeight: '64px' }}>
              <div>
                <Image src={logo} width={200} preview={false} />
              </div>
              <div>
                <Button type='text'>{t('home.productCenter')}</Button>
                <Button type='text'>{t('home.discover')}</Button>
                <Button type='text'>{t('home.manage')}</Button>
                <Button type='text'>{t('home.net')}</Button>
                <Button type='text'>{t('home.join')}</Button>
                <Dropdown menu={{ items, onClick }} trigger={['click']}>
                  <Image src={language} width={20} preview={false} className='language' />
                </Dropdown>
              </div>
            </Flex>
            <div>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                width: '500px',
                minHeight: '300px',
                marginTop: '234px',
                justifyContent: 'space-around'
              }}>
                <h2 style={{ textAlign: "left", fontSize: '80px', color: 'white' }}>{t('home.welcome1')}<br />{t('home.welcome2')}</h2>
                <h3 style={{
                  textAlign: "left",
                  fontSize: '32px',
                  color: 'white'
                }}>

                  <GradientText
                    colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                    animationSpeed={3}
                    showBorder={false}
                    className="pc-GradientText-intro"
                  >
                    {t('home.intro')}
                  </GradientText>
                </h3>
                <Button className='button-with-rotating-light-effect' style={{
                  width: '364px',
                  height: '80px',
                  background: 'linear-gradient( 114deg, #728DD0 0%, #052C8F 100%)',
                  boxShadow: '0px 0px 0px 3px rgba(255,255,255,0.06)',
                  borderRadius: '16px 16px 16px 16px',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: 'white'

                }}>{t('home.start')}</Button>
              </div>
            </div>
          </header>
          <Content style={contentStyle}>
            <SliderContent />
            <div style={{ padding: '0 170px' }}>
              <h2 style={{
                ...h2Style, marginBottom: '124px', paddingTop: '280px'
              }}><SplitText
                  text={t('home.slogan')}
                  className="text-2xl font-semibold text-center"
                  delay={150}
                  animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                  animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                  easing="easeOutCubic"
                  threshold={0.2}
                  rootMargin="-50px"
                /></h2>
              <ImageContent type="left" />
              <ImageContent type="right" />
            </div>
            <div>
              <h2 style={{ ...h2Style, marginBottom: '124px', paddingTop: '280px' }}>
                <SplitText
                  text={t('home.products')}
                  className="text-2xl font-semibold text-center"
                  delay={150}
                  animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                  animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                  easing="easeOutCubic"
                  threshold={0.2}
                  rootMargin="-50px"
                />
              </h2>
              <div style={bg3Style}>
                <div style={text3Style}>
                  <h3 style={h3Style}>{t('home.server')}</h3>
                  <div style={{ width: '620px', marginTop: '130PX' }}>
                    <Image src={tableImg} preview={false} />
                  </div>
                </div>
                <div style={img3Style}>
                  <Image src={bg3} preview={false} />
                </div>
              </div>
            </div>
            <div style={{ marginTop: '340px', marginBottom: '200px' }}>
              <h2 style={h2Style}><SplitText
                text={t('home.newWorld')}
                className="text-2xl font-semibold text-center"
                delay={150}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                easing="easeOutCubic"
                threshold={0.2}
                rootMargin="-50px"
              /></h2>
              <h3 style={{
                fontSize: '24px',
                fontWeight: 'normal',
                color: '#97959E',
                marginTop: '32px',
                textAlign: 'center',
                padding: '0 5%'
              }}>{t('home.ecosystem')}</h3>
              <IconText />
            </div>
            <div>
              <h2 style={h2Style}><SplitText
                text={t('home.community')}
                className="text-2xl font-semibold text-center"
                delay={150}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                easing="easeOutCubic"
                threshold={0.2}
                rootMargin="-50px"
              /></h2>
              <ContactUs />
            </div>
            <div>
              <h2 style={{ ...h2Style, marginTop: '164px', marginBottom: '48px' }}><SplitText
                text={t('home.news')}
                className="text-2xl font-semibold text-center"
                delay={150}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                easing="easeOutCubic"
                threshold={0.2}
                rootMargin="-50px"
              /></h2>
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

          </Content>

          <footer style={footerStyle}>
            <div>
              <div style={{ textAlign: 'center', paddingTop: '340px' }}>
                <Image src={logo} width="256px" preview={false} />
              </div>
              <table>
                <thead>
                  <tr>
                    <th>{t('home.productCenter')}</th>
                    <th>{t('home.explore')}</th>
                    <th>{t('home.govern')}</th>
                    <th>{t('home.joinUs')}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><a href=''>{t('home.vision')}</a></td>
                    <td><a href=''>{t('home.eco')}</a></td>
                    <td><a href=''>{t('home.about')}</a></td>
                    <td><a href='https://x.com/zkpwhale' target='_blank'>{t('home.twitter')}</a></td>
                  </tr>
                  <tr>
                    <td><a href=''>{t('home.whitepaper')}</a></td>
                    <td><a href=''>{t('home.blog')}</a></td>
                    <td><a href=''>{t('home.jobs')}</a></td>
                    <td><a href='https://t.me/SDAOZK' target='_blank'>{t('home.telegram')}</a></td>
                  </tr>
                  <tr>
                    <td><a href=''>{t('home.solution')}</a></td>
                    <td><a href=''>{t('home.info')}</a></td>
                    <td><a href=''>{t('home.privacy')}</a></td>
                    <td><a href='mailto:ZKPwhaleSDAO@gmail.com'>{t('home.email')}</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div style={{
              backgroundColor: 'rgba(255,255,255,0.12)',
              width: '1578px',
              height: '1px',
              margin: '0 auto',
              marginTop: '124px'
            }} />
            <p style={{
              textAlign: 'center',
              marginTop: '124px',
              color: '#A0A0B8',
              height: '40px',
              lineHeight: '40px',
              margin: '0',
              fontSize: '12px',
              fontWeight: '500'
            }}>© 2025 Zero-Knowledge-Network. Reserve all rights</p>
          </footer>
        </Layout>
      </Flex>
      <PhoneIndex className='phoneIndex' />
    </div>
  )
}

export default App
